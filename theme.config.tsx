import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import logo from './AntiTUSITUProject_Icon.png';

const config: DocsThemeConfig = {
  banner: {
    dismissible: false,
    text: (
      <a href="https://github.com/AntiTUSITUProject" target="_blank">
        🔔 该网站仍在建设中。您可以在GitHub上给我们提供帮助，任何帮助都会使我们变得更好！（点击前往）
      </a>
    )
  },
  search: {
    placeholder: "搜索……",
    error: "无法加载搜索系统"
  },
  head: (
    <link rel="icon" href={logo.src} type="image/x-icon" />
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 反吐司兔计划'
    }
  },
  project: {
    link: 'https://github.com/AntiTUSITUProject',
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  toc: {
    title: <span>目录</span>,
    extraContent: <span>反吐司兔计划<br />希望能够帮到你 ❤</span>
  },
  gitTimestamp: null,
  logo: <><img src={logo.src} alt="logo" style={{ width: '50px', height: '50px' }} /><span>⁣⁣⁣⁣⁣⁣⁣⁣ ⁣⁣⁣⁣ ⁣⁣⁣⁣ ⁣反吐司兔计划</span></>,
  docsRepositoryBase: 'https://github.com/AntiTUSITUProject/blob/main',
  footer: {
    text: (
      <span>
        版权所有 © {new Date().getFullYear()} { }
        <a href="https://www.tusitu123.top" target="_blank">
          反吐司兔计划 (Anti TUSITU Project)
        </a>
      </span>
    )
  }
}

export default config
