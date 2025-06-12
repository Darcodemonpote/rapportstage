// docusaurus.config.js

module.exports = {
  title: 'Rapport de stage',
  tagline: 'BUT Info 2A – MAAF Covéa',
    url: 'https://rapportstageclementb.github.io',  // Ton URL GitHub Pages (pseudo.github.io)
  baseUrl: '/rapportstage/',                 // Le nom du repo avec un slash final
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
    favicon: 'img/lr.ico',
    organizationName: 'clementbreau',
    projectName: 'rapportstage',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Docs à la racine du site
          editUrl: 'https://github.com/Darcodemonpote/rapportstage/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Rapport de stage',
      logo: {
        alt: 'Logo',
          src: 'img/lr.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Rapport de stage',
          },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sommaire',
          items: [
              {label: 'Page d\'accueil', to: '/'},
              {label: 'Introduction', to: '/rapportstage/introduction'},
          ],
        },
        {
          title: 'Code source',
          items: [
            { label: 'GitHub', href: 'https://github.com/Darcodemonpote/rapportstage' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Rapport de stage – BUT Info`,
    },
  },
};
