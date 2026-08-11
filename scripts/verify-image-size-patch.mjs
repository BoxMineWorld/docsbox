// Reproduces the three GHSA PoCs against the patched image-size.
// Each buffer sets a length/size field to 0 in a way that used to pin the
// parser's offset in place and spin the event loop forever.
import { imageSize } from 'image-size'

const u32 = (buf, off, val) => buf.writeUInt32BE(val, off)
const str = (buf, off, s) => buf.write(s, off, 'latin1')

// --- ICNS: entry length field = 0 -------------------------------------------
const icns = Buffer.alloc(64)
str(icns, 0, 'icns')
u32(icns, 4, 64) // file length
str(icns, 8, 'ic09') // first entry type
u32(icns, 12, 0) // first entry length -> offset never advances

// --- HEIF: ispe box with size = 0 -------------------------------------------
const heif = Buffer.alloc(80)
u32(heif, 0, 16)
str(heif, 4, 'ftyp')
str(heif, 8, 'mif1') // brand
u32(heif, 16, 64)
str(heif, 20, 'meta')
u32(heif, 28, 24)
str(heif, 32, 'iprp')
u32(heif, 36, 24)
str(heif, 40, 'ipco')
u32(heif, 44, 0) // ispe size -> offset never advances
str(heif, 48, 'ispe')

// --- JXL: jxlp box with size = 0 --------------------------------------------
const jxl = Buffer.alloc(40)
u32(jxl, 0, 12)
str(jxl, 4, 'JXL ')
u32(jxl, 8, 0x0d0a870a)
u32(jxl, 12, 20)
str(jxl, 16, 'ftyp')
str(jxl, 20, 'jxl ') // brand
u32(jxl, 32, 0) // jxlp size -> offset never advances
str(jxl, 36, 'jxlp')

let failed = false
for (const [name, buf] of [
  ['ICNS', icns],
  ['HEIF', heif],
  ['JXL', jxl],
]) {
  const start = Date.now()
  let outcome
  try {
    outcome = `returned ${JSON.stringify(imageSize(buf))}`
  } catch (err) {
    outcome = `threw ${err.constructor.name}: ${err.message}`
  }
  const ms = Date.now() - start
  if (ms > 1000) failed = true
  console.log(`${name}: ${outcome} (${ms}ms)`)
}

console.log(failed ? '\nFAIL: a parser still hangs' : '\nOK: all parsers terminate')
process.exit(failed ? 1 : 0)
