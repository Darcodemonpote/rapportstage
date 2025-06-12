// docusaurus.config.js

module.exports = {
  title: 'Rapport de stage',
  tagline: 'BUT Info 2A – MAAF Covéa',
  url: 'https://darcodemonpote.github.io',  // Ton URL GitHub Pages (pseudo.github.io)
  baseUrl: '/rapportstage/',                 // Le nom du repo avec un slash final
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Darcodemonpote',        // Ton pseudo GitHub
  projectName: 'rapportstage',                // Nom exact du repo GitHub

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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Rapport de stage',
        },
        {
          href: 'https://github.com/Darcodemonpote/rapportstage',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sommaire',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Compétences', to: '/competences' },
          ],
        },
        {
          title: 'Communauté',
          items: [
            { label: 'Docusaurus', href: 'https://docusaurus.io' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
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
