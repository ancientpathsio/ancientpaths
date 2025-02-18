// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AncientPaths',
  tagline: 'Purity, Integrity, Honor',
  url: 'https://ancientpaths.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ancientpaths', // Usually your GitHub org/user name.
  projectName: 'ancientpaths', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'og:image', content: '/img/social-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/img/social-preview.png' },
      { name: 'og:title', content: 'AncientPaths' },
      { name: 'og:description', content: 'Purity, Integrity, Honor' }
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'AncientPaths',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'guidebook',  // Pointing to docs/guidebook.md
          position: 'left',
          label: 'Guidebook',  // Updated label to "Guidebook"
        },
        { to: 'https://ancientpaths.notion.site/Dev_-1993437bf52480e18a28e241fbfd9c0a?pvs=4', label: 'Dev_', position: 'left' },
        {
          label: 'Donate',
          href: '/give',
          position: 'right',
          className: 'navbar__item--donate',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guidebook',  // Updated label to "Guidebook"
              to: '/docs/guidebook',  // Pointing to docs/guidebook.md
            },
            {
              label: 'Dev_',  // Updated label to "Guidebook"
              to: 'https://ancientpaths.notion.site/Dev_-1993437bf52480e18a28e241fbfd9c0a?pvs=4',  // Pointing to docs/guidebook.md
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xk6qxyZSkx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Donate',
              to: '/give/',
            },
            {
              label: 'Contact',
              href: 'mailto:ancientpaths.io@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} | AncientPaths.io`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
