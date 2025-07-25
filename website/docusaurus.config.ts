import simplePlantUML from '@akebifiky/remark-simple-plantuml'
import type * as Presets from '@docusaurus/preset-classic'
// eslint-disable-next-line import/default
import npm2yarnPlugin from '@docusaurus/remark-plugin-npm2yarn'
import type { Config } from '@docusaurus/types'
import tabBlocksPlugin from 'docusaurus-remark-plugin-tab-blocks'
import { themes } from 'prism-react-renderer'

const config: Config = {
  title: 'ts-jest',
  tagline: 'A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.',
  url: 'https://kulshekhar.github.io',
  baseUrl: process.env.BASE_URL || '/ts-jest/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'kulshekhar',
  projectName: 'ts-jest',
  trailingSlash: false,
  future: {
    experimental_faster: true,
    v4: true,
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo.svg',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kulshekhar/ts-jest/edit/main/website',
          remarkPlugins: [simplePlantUML, [npm2yarnPlugin, { sync: true }], tabBlocksPlugin],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Presets.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like ts-jest, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kulshekhar/ts-jest">GitHub</a>! ⭐️',
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    navbar: {
      hideOnScroll: true,
      title: 'ts-jest',
      logo: {
        alt: 'ts-jest logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // right
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/kulshekhar/ts-jest',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'Migration from <=23.10',
              to: 'docs/migration',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Jest',
              href: 'https://stackoverflow.com/questions/tagged/jest',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/j6FKKQQrW9',
            },
            {
              label: 'GitHub Discussion',
              href: 'https://github.com/kulshekhar/ts-jest/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kulshekhar/ts-jest/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ts-jest. Built with Docusaurus.`,
    },
  },
}

export default config
