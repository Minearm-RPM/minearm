export const SiteConfig: SiteConfig = {
  site: "https://bing.com/",
  title: "Minearm-RPM & Website",
  description: "This is a Minearm-RPM & Website",
  localSearch: true,
  markdownMath: false,
};

interface SiteConfig {
  site: string;
  title: string;
  description: string;
  localSearch: boolean;
  markdownMath: "Katex" | "Mathjax" | true;
}
