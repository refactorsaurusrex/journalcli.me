const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'journal-cli',
  tagline: 'A command line tool, for journaling.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/notebook-16.png',
  organizationName: 'refactorsaurusrex', // Usually your GitHub org/user name.
  projectName: 'journal-cli', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'journal-cli',
      logo: {
        alt: 'journal-cli Logo',
        src: 'img/notebook.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/refactorsaurusrex/journal-cli',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
            {
              label: 'Recipes',
              to: '/docs/recipes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/refactorsaurusrex/journal-cli/discussions',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
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
              label: 'Project Roadmap',
              href: 'https://github.com/refactorsaurusrex/journal-cli/projects/1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nick Spreitzer. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/refactorsaurusrex/journal-cli/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/refactorsaurusrex/journal-cli/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
