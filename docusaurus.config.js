// docusaurus.config.js

module.exports = {
  title: 'Rapport de stage',
  tagline: 'BUT Info 2A – MAAF Covéa',
  url: 'https://votre-domaine.com', // Remplace par ton domaine si tu héberges en ligne
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'votreOrg', // Nom GitHub ou organisation
  projectName: 'rapportstage',  // Nom du repo

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // ✅ Affiche les docs à la racine
          editUrl: 'https://github.com/votreOrg/rapportstage/edit/main/',
        },
        blog: false, // ❌ Désactive le blog
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
          href: 'https://github.com/votreOrg/rapportstage',
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
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Compétences',
              to: '/competences',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Code source',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/votreOrg/rapportstage',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Rapport de stage – BUT Info`,
    },
  },
};
