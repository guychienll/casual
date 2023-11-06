const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const config = {
    title: 'guychienll.dev',
    tagline: 'guychienll.dev',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://www.guychienll.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'guychienll', // Usually your GitHub org/user name.
    projectName: 'casual', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hant',
        locales: ['zh-Hant'],
    },
    plugins: [
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-TJNZ4NMPP4',
                anonymizeIP: false,
            },
        ],
    ],

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/guychienll/casual/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/guychienll/casual/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        ({
            // Replace with your project's social card
            // image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'guychienll.dev',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/courage-the-coward-dog.webp',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'NoteSidebar',
                        position: 'left',
                        label: '筆記',
                    },
                    { to: '/blog', label: '部落格', position: 'left' },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: '網站導覽',
                        items: [
                            {
                                label: '筆記',
                                to: 'docs/',
                            },
                            {
                                label: '部落格',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: '社群',
                        items: [
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/guychienll/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/guychienll',
                            },
                        ],
                    },
                ],
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'CUZCKEPH19',

                // Public API key: it is safe to commit it
                apiKey: 'a9fff860df08df32765ad96857da5203',

                indexName: 'prod_casual',

                insights: true,

                // Optional: see doc section below
                contextualSearch: true,

                // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                // replaceSearchResultPathname: {
                //   from: '/docs/', // or as RegExp: /\/docs\//
                //   to: '/',
                // },

                // // Optional: Algolia search parameters
                // searchParameters: {},

                // // Optional: path for search page that enabled by default (`false` to disable it)
                // searchPagePath: 'search',
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
