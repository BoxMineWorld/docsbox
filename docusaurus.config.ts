import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Hedystia",
  tagline: "Documentation of Hedystia packages, applications and others",
  url: "https://docs.hedystia.com",
  favicon: "img/favicon.ico",
  baseUrl: '/',
  organizationName: "Hedystia",
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
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/blog/",
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
      title: "Hedystia",
      logo: {
        alt: "Hedystia Icon",
        src: "img/icon.webp",
      },
      items: [
        {
          href: "https://hedystia.com",
          label: "Website",
          position: "left",
        },
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://github.com/Zastinian",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/aXvuUpvRQs",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Useful Links",
          items: [
            {
              href: "https://hedystia.com",
              label: "Website",
            },
            {
              label: "Documentation",
              to: "docs/welcome",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/aXvuUpvRQs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Zastinian",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hedystia.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
