import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ABDN Freshmen Handbook",
  description: "阿伯丁数据科学与人工智能学院新生手册指南",

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "ABDN 新生手册",
      description: "阿伯丁数据科学与人工智能学院新生手册指南",
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-cn/' },
          { text: '快速开始', link: '/zh-cn/guide' },
        ],
        footer: {
          message: '基于 MIT 许可证发布',
          copyright: 'Copyright © 2025 AptS:1547'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "ABDN Freshmen Handbook",
      description: "Aberdeen Institude of Data Science and Artificial Intelligence Freshman Handbook Guide",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/guide' },
        ],
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2025 AptS:1547'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:title', content: 'ABDN Freshmen Handbook' }],
    ['meta', { name: 'og:site_name', content: 'ABDN Freshmen Handbook' }],
    ['meta', { name: 'og:url', content: 'https://abdn-freshmen-handbook.docs.esap.cc/' }],
  ],

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search Documentation',
                buttonAriaLabel: 'Search Documentation'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/AptS-1547/ABD-Handbook/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  }
})
