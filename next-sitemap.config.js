module.exports = {
  siteUrl: "https://nguyenpham.pro",
  generateRobotsTxt: true,
  sitemapSize: 10000,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: '/',
    }],
  },
  exclude: [
    "/_**",
    "/thanks",
  ],
  // additionalPaths: async () => {
  //   const res = await fetch("https://nguyenpham.pro/wp-json/wp/v2/posts?per_page=100");
  //   const posts = await res.json();
  //   const result = []
  //   posts.forEach(post => {
  //     result.push({
  //       loc: `https://madelab.io/blog/${post.slug}`,
  //       changefreq: "daily",
  //       priority: 0.7,
  //       lastmod: post.modified.replace(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).*/, "$1T$2Z"),
  //     });
  //   });
  //   return result;
  // }
};