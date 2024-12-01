# Minearm & Website
# 本主题是从[HusBlog](https://github.com/KraHsu/HsuBlog.git)改进而来的

但是Minearm & Website做出了很大的改变，比如修复了scss警告和升级astro版本到4.16.13

# 效果
![Minearm](https://portal.astro.build/_image?href=https%3A%2F%2Fstorage.googleapis.com%2Fdev-portal-bucket%2Fkotpt1ztaalrk5frua5pnwdvoh185ylgg0rio9.webp)

# 文件结构

```bash
rootfs:
|
---
|   +---hooks
|   +---info
|   +---logs
|   |   \---refs
|   |       +---heads
|   |       \---remotes
|   |           \---origin
|   +---objects
|   |   +---info
|   |   \---pack
|   \---refs
|       +---heads
|       +---remotes
|       |   \---origin
|       \---tags
+---.vercel
+---public
|   \---scripts
\---src
    +---components
    |   +---animation
    |   +---aside
    |   +---client
    |   +---footer
    |   +---header
    |   +---icons
    |   +---loading
    |   \---postlist
    +---content
    |   \---blog
    |       \---default
    |           +---history
    |           |   +---公元前
    |           |   \---近代篇
    |           \---it
    +---layouts
    +---pages
    |   +---about
    |   +---blog
    |   +---categories
    |   |   \---[category]
    |   +---friends
    |   \---tags
    |       \---[tag]
    +---styles
    |   +---blog
    |   |   \---dist
    |   +---components
    |   |   \---dist
    |   +---dist
    |   \---tags
    \---utils
```

```

~~~bash
# 安装主题
npm i minearm-website
~~~

~~~
# 安装依赖
npm install
# 更新
npm update
~~~

~~~
# 启动开发预览
npm run dev
~~~

~~~
# 构建和预览
npm run build
npm run preview
~~~

# 许可证
本项目在MIT许可证下授权，版权所有©2024

由Minearm-RPM构建的

# 转载时需标明出处！。
