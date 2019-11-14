/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'journal-cli', // Title for your website.
  tagline: 'Index Your Markdown-Based Journal With Yaml Front Matter!',
  url: 'https://journalcli.me', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'journalcli.me',
  organizationName: 'refactorsaurusrex',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started', label: 'Docs'},
    {href: 'https://github.com/refactorsaurusrex/journal-cli', label: 'GitHub'},
    {href: 'https://refactorsaurusrex.com', label: 'Blog'},
    {href: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fjournalcli.me&text=Check%20out%20this%20neat%20command%20line%20journaling%20tool%20I%20found!', label: 'Tweet'},
    {href: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjournalcli.me', label: 'Facebook Post'},
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/notebook-32.png',
  footerIcon: 'img/notebook-32.png',
  favicon: 'img/notebook-16.png',

  /* Colors for website */
  colors: {
    primaryColor: '#28242c',
    secondaryColor: '#0084ff',
  },
  editUrl: 'https://github.com/refactorsaurusrex/journalcli.me/edit/master/docs/',
  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Nick Spreitzer`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/notebook.svg',
  twitterImage: 'img/notebook.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/refactorsaurusrex/journal-cli',
};

module.exports = siteConfig;
