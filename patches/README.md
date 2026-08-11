# patches/

Parches locales aplicados a `node_modules` por [patch-package](https://github.com/ds300/patch-package)
desde el script `postinstall`. Si añades o modificas un parche, ejecuta
`npx patch-package <paquete>` para regenerarlo.

## image-size+2.0.2.patch

Corrige dos avisos de denegación de servicio (bucle infinito) reportados por GitHub
en `image-size <= 2.0.2`, que entra en el árbol de forma transitiva vía
`@docusaurus/core` → `@docusaurus/mdx-loader` → `image-size`.

**No hay versión parcheada upstream**: 2.0.2 es la última publicada en npm y el
aviso indica "Patched version: None", así que no se puede resolver subiendo la
dependencia ni con un `override`.

Tres parsers avanzan el offset de su bucle sumando un campo de longitud/tamaño
leído directamente del archivo. Una imagen manipulada con ese campo a `0` deja el
offset clavado y el `while` gira para siempre, bloqueando el event loop de Node:

| Parser | Campo a 0 | Línea afectada |
| --- | --- | --- |
| ICNS | longitud de entrada | `imageOffset += imageHeader[1]` |
| HEIF | tamaño de caja `ispe` | `currentOffset = ispeBox.offset + ispeBox.size` |
| JXL | tamaño de caja `jxlp` | `offset = jxlpBox.offset + jxlpBox.size` |

El parche añade una comprobación de progreso en cada bucle: si el offset no
avanza, se corta el bucle en vez de girar indefinidamente. El comportamiento con
imágenes válidas no cambia, porque en ellas el offset siempre avanza.

Se aplica a los 16 archivos de `dist/` porque el bundler duplica el código de los
parsers en cada entrypoint (`index`, `detector`, `lookup`, `fromFile` y los
módulos sueltos de `types/`).

Verificación: `npm run verify:patches` ejecuta los tres PoC del aviso. Sin el
parche cada uno cuelga indefinidamente; con él, los tres terminan al instante.

### Cuándo quitar este parche

Si `image-size` publica una versión con el arreglo, `patch-package` fallará en el
`postinstall` avisando de que el parche es para 2.0.2. En ese momento: borra este
parche, borra `scripts/verify-image-size-patch.mjs` y el script `verify:patches`,
y quita `patch-package` junto con `postinstall` si no queda ningún otro parche.

### Nota sobre la alerta de GitHub

La alerta seguirá apareciendo porque la versión instalada sigue siendo 2.0.2;
`patch-package` arregla el código, no el número de versión. Se puede descartar en
GitHub como *fix started / risk mitigated* enlazando a este parche.
