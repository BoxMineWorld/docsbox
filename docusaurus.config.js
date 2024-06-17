module.exports = {
  title: "BoxMine Docs",
  tagline: "Documentacion de BoxMine World",
  url: "https://docs.boxmineworld.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Boxmine World",
  projectName: "docs",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "BoxMine Docs",
      logo: {
        alt: "BoxMine Logo",
        src: "img/icon.webp",
      },
      items: [
        {
          href: "https://boxmineworld.com",
          label: "Web",
          position: "left",
        },
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Documentacion",
          position: "left",
        },
        {
          href: "https://github.com/Boxmine-World",
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
          title: "Useful Links",
          items: [
            {
              href: "https://boxmineworld.com",
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
              href: "https://discord.com/servers/boxmine-world-host-bot-651776838976143392",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Boxmine-World",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hedystia. All rights reserved.`,
    },
    prism: {
      darkTheme: require("prism-react-renderer").themes.oceanicNext,
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
