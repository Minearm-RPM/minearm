---
layout: "../../layouts/DefaultMdLayout.astro"
title: about
description: ""
heroColor: "#007aff"
useComments: true
useToc: true
---
# Minearm & Website
# 本主题是从[HsuBlog](https://github.com/KraHsu/HsuBlog.git)改进而来的
最新的正式版是0.2.1
最新的测试版是0.0.3-beta.4

但是Minearm & Website做出了很大的改变，比如修复了scss警告和升级astro版本到5.5.4

# 效果
![Minearm](https://portal.astro.build/_image?href=https%3A%2F%2Fstorage.googleapis.com%2Fdev-portal-bucket%2Fgetsej9k9i2o7ocjk55eiiqbbkqybh02hotjnz.webp&w=800&h=529&f=webp)

# node(环境)

要让 Astro 在你的系统上运行，你还需要安装 Node.js，版本 v18.17.1 或 v20.3.0 或更高版本。(不支持 v19)

# 文件结构

```bash
root
 ├─public
 │  └─scripts
 └─src
    ├─components
    │  ├─animation
    │  ├─aside
    │  ├─client
    │  ├─footer
    │  ├─header
    │  ├─icons
    │  ├─loading
    │  └─postlist
    ├─content
    │  └─blog
    │      └─default
    ├─layouts
    ├─pages
    │  ├─about
    │  ├─blog
    │  ├─categories
    │  │  └─[category]
    │  ├─friends
    │  └─tags
    │      └─[tag]
    ├─styles
    │  ├─blog
    │  │  └─dist
    │  ├─components
    │  │  └─dist
    │  ├─dist
    │  └─tags
    └─utils
```

~~~bash
# 安装主题
npm i minearm-website
git clone https://github.com/Minearm-RPM/Minearm.git node_modules/
~~~

# 进入astro目录
~~~bash
cd node_modules/minearm-website
# 或者(对应上面两种方法)
cd node_modules/
~~~

~~~bash
# 安装依赖
npm install
# 更新
npm update
~~~

~~~bash
# 启动开发预览
npm run dev
~~~

~~~bash
# 构建和预览
npm run build
npm run preview
~~~

# 许可证

本项目在MIT许可证下授权，版权所有©2024

由Minearm-RPM构建的

# 转载时需标明出处
