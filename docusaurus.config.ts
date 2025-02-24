import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Equipe DEV N2',
  tagline: 'Documentação',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vmdsx.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vmdsx', // Usually your GitHub org/user name.
  projectName: 'Documentação DEV N2', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vmdsx/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vmdsx/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Início',
      logo: {
        alt: 'Logotipo de início',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'automacoesSidebar',
          position: 'left',
          label: 'Automações',
        },
        {
          type: 'docSidebar',
          sidebarId: 'coletasSidebar',
          position: 'left',
          label: 'Coletas',
        },
        {
          type: 'docSidebar',
          sidebarId: 'djangoSidebar',
          position: 'left',
          label: 'Django',
        },
        {
          type: 'docSidebar',
          sidebarId: 'powerBiSidebar',
          position: 'left',
          label: 'Power BI',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sqlSidebar',
          position: 'left',
          label: 'SQL',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/vmdsx/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Código',
          items: [
            {
              label: 'Automações',
              to: '/docs/Automacoes',
            },
            {
              label: 'Coletas',
              to: '/docs/Coletas',
            },
            {
              label: 'Django',
              to: '/docs/Django',
            },
          ],
        },
        {
          title: 'Dados',
          items: [
            {
              label: 'Power BI',
              to: '/docs/Power BI',
            },
            {
              label: 'SQL',
              to: '/docs/SQL',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Ajuda',
          items: [
            {
              label: 'Documentação do Docusaurus',
              href: 'https://docusaurus.io/docs',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Telefonica Brasil S/A. Construído com <a href='https://docusaurus.io/' target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
