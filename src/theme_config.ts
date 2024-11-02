import { Icons } from "@comp/icons/icon";
import { SiteConfig } from "./site_config";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { library, icon } from "@fortawesome/fontawesome-svg-core";
//import Code from '~/components/code.astro';
// library.add(faStar);
// const starIcon = icon({ prefix: "fas", iconName: "star" });

const today = new Date();

export const ThemeConfig: Configs = {
  site: {
    title: SiteConfig.title,
    favicon: "/favicon.png",
    logo: "/favicon.png",
    author: "Minearm-RPM",
    localSearch: {
      enable: true,
      comment: "你可以使用类似 unix 的格式：[扩展搜索](/blog/Search-help/)",
      hits: ["[扩展搜索](/blogSearch-help//)", "[Help](/blog/Search-help/)"],
    },
    backgroundBubbles: 20,
  },
  head: [``],
  body: [``],
  header: {
    menu: [
      {
        name: "主页",
        customClass: "home",
        link: "/",
        icon: "local:solid.house",
      },
      {
        name: "博客",
        customClass: "articles",
        icon: "local:solid.pen-fancy",
        children: [
          {
            name: "分类",
            customClass: "categories",
            icon: "local:solid.hard-drive",
            link: "/categories",
          },
          {
            name: "标签",
            customClass: "tags",
            icon: "local:solid.tags",
            link: "/tags",
          },
        ],
      },
      {
        name: "我的",
        customClass: "mine",
        icon: Icons.IDcardIcon,
        children: [
          {
            name: "朋友",
            customClass: "friends",
            icon: "local:solid.link",
            link: "/friends",
          },
          {
            name: "MC",
            customClass: "MC",
            icon: "local:solid.paper-plane",
            link: "https://game.minearm.org",
          },
        ],
      },
      {
        name: "关于",
        customClass: "about",
        link: "/about",
        icon: "local:solid.paper-plane",
      },
    ],
    buttons: [
      {
        icon: "local:solid.house",
        link: "/",
        customClass: "",
        title: "返回主页",
      },
    ],
    functions: {
      headerLogo: "left",
      themeControl: true,
      pagePercent: true,
    },
  },
  aside: {
    authorInfo: {
      avatar: "/avatar.avif",
      description: "localhost@root #~",
      socialMedias: [
        {
          link: "https://github.com/Minearm-RPM",
          customClass: "github",
          icon: "local:brands.github",
          title: "github",
        },
        {
          link: "mailto:minearm@minearm.org",
          customClass: "mail-minearm",
          icon: "local:solid.envelope",
          title: "mail",
        },
        {
          link: "https://space.bilibili.com/1279178840",
          customClass: "bilibili",
          icon: "local:brands.bilibili",
          title: "social-bili",
        },
      ],
    },
    announcement: {
      headline: "看公告啦！",
      content:
        "欢迎各位[找茬](https://github.com/Minearm-RPM/minearm-rpm-arch/issues)~",
    },
    siteInfo: {
      busuanzi: false,
      totalWordCounts: true,
      totalPostCounts: true,
    },
    customCards: [
      {
        // icon: `<i class="fa-solid fa-star"></i>`,
        icon: "local:solid.star",
        title: "推荐文章",
        content: "暂时莫有<br>T-T",
      },
    ],
  },
  footer: {
    text: "Design & Build with ❤ by Minearm-RPM",
    copyright: `&copy; 2023-${today.getFullYear()} By [Minearm-RPM](/about)`,
    // 也可以使用 {{}} 包裹函数体，并返回替换值
    // You can also use {{}} to wrap the function body and return the replacement value.
    // copyright: `&copy; 2023-{{const today = new Date();return today.getFullYear();}} By [Minearm-RPM](/about)`,
  },
  homePage: {
    heroShoot: "/heroimg.jpg",
    heroTitle: "Minearm-RPM & Website",
    heroDescription: "Welcome to Minearm & Website!",
    defaultCover: "/heroimg.jpg",
    paginationSize: 10,
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: ["Announcement", "SiteInfo"],
      direct: "right",
    },
  },
  postPage: {
    aside: {
      comps: ["AuthorInfo"],
      stickyComps: [],
    },
  },
  tagsPage: {
    floating: true,
  },
  comments: {
    // type: "twikoo",
    // options: {
    //  envId: "",
    //   lang: "zh-CN",
    // },
  	 type: "waline",
  	 options: {
	   serverURL: "https://youserver.com",
     },
    //type: true,
    //options: null,
  },
};
