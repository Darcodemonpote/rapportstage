// docusaurus.config.js
module.exports = {
    noIndex: true,
    title: 'Rapport de stage',
    tagline: 'BUT Info 2A – MAAF Covéa',
    url: 'https://rapportstageclementb.github.io',
    baseUrl: '/rapportstage/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/lr.ico',
    organizationName: 'Darcodemonpote',
    projectName: 'rapportstage',
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',             // docs à la racine du site
                    sidebarPath: require.resolve('./sidebars.js'),
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
            logo: {alt: 'Logo', src: 'img/lr.png'},
            items: [
                {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Sommaire'},
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Sommaire',
                    items: [
                        {label: 'Accueil', to: '/'},
                        {label: 'Introduction', to: '/introduction'},
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Rapport de stage`,
        },
    },
};