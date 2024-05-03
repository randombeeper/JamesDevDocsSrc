// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
// comment

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // this is the title on the front page too
  title: 'Getting Started with Algolia DocSearch',
  // this is just under the title on the front page
  tagline: 'Using Docusaurus, Github Pages, and DocSearch',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://randombeeper.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/JamesDevDocsSrc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'randombeeper', // Usually your GitHub org/user name.
  projectName: 'JamesDevDocsSrc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  // added via the Algolia DocSearch config below?
  // add the docsearch css
  //stylesheets: [
  //  'https://cdn.jsdelivr.net/npm/@docsearch/css@3'
  //],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/randombeeper/JamesDevDocsSrc',
          versions: {
            current: {
              label: 'current'
            }
          },
          lastVersion: 'current',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // just a comment to force rebuild/redeploy after changing a node module's code
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/algoliadocusearch-social-card.jpeg',
      
      algolia: {
        appId: 'DMIMK1IC3E',
        apiKey: 'c16bd53fae140b4371c00f4dc0aa2c3e',
        indexName: 'jamesdevsrcindex',
        contextualSearch: true,
        insights: true,
      },

      navbar: {
        title: '+ Algolia DocSearch 2',
        logo: {
          alt: 'Docusaurus + Algolia DocSearch',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/randombeeper/JamesDevDocsSrc',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tutorials',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/3C4aftKH',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/algolia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/randombeeper/JamesDevDocsSrc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus, GitHub, GitHub Pages, and Algolia DocSearch.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
