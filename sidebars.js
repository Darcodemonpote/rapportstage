/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduction', // Correspond à docs/introduction.md
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'entreprise',
      label: 'La MAAF et le contexte de stage',
    },
    {
      type: 'doc',
      id: 'outils',
      label: 'Outils et environnements',
    },
    {
      type: 'category',
      label: 'Sujets traités',
      items: [
        'sujet1-talend-dates',
        'sujet2-resynchro-rgpd',
        'sujet3-tpo2mrh',
      ],
    },
    {
      type: 'doc',
      id: 'competences',
      label: 'Compétences mobilisées',
    },
    {
      type: 'doc',
      id: 'conclusion',
      label: 'Conclusion',
    },
  ],
};

module.exports = sidebars;
