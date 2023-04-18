module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'logo.png' }
    ]
  ],
  title: 'vitepress',
  description: 'Just playing around.',
  themeConfig: {
    logo: 'logo.png',
    // outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Kwun'
    },
    nav: [
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'guide',
        link: '/guide/'
      },
      {
        text: 'config',
        link: '/config/'
      },
      {
        text: '导航',
        items: [
          { text: '页面1', link: '/page/page1' },
          { text: '页面2', link: '/page/page2' }
        ]
      }
    ],
    sidebar: {
      '/':[
        {
          text: 'Guide',
          items: [
            { text: '快速开始', link: '/' }, 
            { text: '通用', link: '/components/button/' }, 
          ]
        }
      ],
      // This sidebar gets displayed when user is under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/about/' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],
      // This sidebar gets displayed when user is under `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    }
  }
}