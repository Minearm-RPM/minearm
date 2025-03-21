import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { markdownDirectives, remarkFrontmatter, rehypeFrontmatter, remarkRestyling, rehypeRestyling } from "./src/utils/md";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import remarkDirective from "remark-directive";
import vue from "@astrojs/vue";
import { SiteConfig } from "./src/site_config";
import { generateSearchData } from "./src/utils/generateSearchData.ts";
import type { Plugin } from "unified";

// 定义 remark 插件数组类型
type RemarkPluginArray = Array<Plugin | false | null | undefined>;
// 定义 rehype 插件数组类型
type RehypePluginArray = Array<Plugin | false | null | undefined>;

// 生成 remark 插件数组
const generateRemarkPlugins = (): RemarkPluginArray => [
  remarkFrontmatter,
  remarkGfm,
  SiteConfig.markdownMath === true && remarkMath,
  remarkRestyling,
  remarkDirective,
  markdownDirectives,
  SiteConfig.localSearch && generateSearchData,
].filter(Boolean);

// 生成 rehype 插件数组
const generateRehypePlugins = (): RehypePluginArray => [
  rehypeFrontmatter,
  rehypeRestyling,
  SiteConfig.markdownMath === "Katex" && rehypeKatex,
  SiteConfig.markdownMath === "Mathjax" && rehypeMathjax,
].filter(Boolean);

// 定义 markdown 配置
const markdownConfig = {
  syntaxHighlight: "shiki",
  shikiConfig: {
    theme: "css-variables",
    langs: [],
    wrap: false,
  },
  remarkPlugins: generateRemarkPlugins(),
  rehypePlugins: generateRehypePlugins(),
};

// 定义 build 配置
const buildConfig = {
  format: "directory",
};

// 定义 collections 配置
const collectionsConfig = [
  {
    name: "blog",
    label: "Blog Posts",
    path: "src/pages/blog",
    sort: (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  },
  // ... 其他集合
];

export default defineConfig({
  site: SiteConfig.site,
  integrations: [sitemap(), vue()],
  output: "static",
  build: buildConfig,
  collections: collectionsConfig,
  markdown: markdownConfig,
  edgeMiddleware: true,
});
    