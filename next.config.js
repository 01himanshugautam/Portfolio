module.exports = {
  webpack(config) {
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        port: '',
        pathname: '/assets/GitHub-Mark-ea2971cee799.png',
      },
    ],
  },
};
