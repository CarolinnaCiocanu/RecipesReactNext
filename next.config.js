const withImages = require("next-images");

const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    disableStaticImages: true,
    domains: ["localhost", "img.buzzfeed.com"],
  },
};

module.exports = withPlugins([[withImages, {}]], nextConfig);
