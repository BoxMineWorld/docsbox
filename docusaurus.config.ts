import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "BoxMine Docs",
  tagline: "Documentación de BoxMine World",
  url: "https://docs.boxmineworld.com",
  baseUrl: "/",
  favicon: "img/logo.ico",
  organizationName: "Boxmine World",
  projectName: "docs",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: "https://github.com/BoxMineWorld/docsbox/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/BoxMineWorld/docsbox/edit/main/blog/",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Boxmine Docs",
      logo: {
        alt: "Boxmine Logo",
        src: "img/logo.ico",
      },
      items: [
        {
          href: "https://boxmineworld.com",
          label: "Página web",
          position: "left",
        },
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Documentación",
          position: "left",
        },
        {
          href: "https://github.com/BoxMineWorld",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.com/servers/boxmine-world-host-bot-651776838976143392",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Enlaces útiles",
          items: [
            {
              href: "https://boxmineworld.com",
              label: "Página web",
            },
            {
              label: "Documentación",
              to: "docs/welcome",
            },
          ],
        },
        {
          title: "Soporte",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/servers/boxmine-world-host-bot-651776838976143392",
            },
          ],
        },
        {
          title: "Más",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/BoxMineWorld",
            },
          ],
        },
      ],
      copyright: `Copyright © 2023 - ${new Date().getFullYear()} BoxMine World. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
