/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Serve the Apple App Site Association file with the correct content type
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          }
        ]
      }
    ];
  },
  
  // Set up rewrites to handle Apple App Site Association file
  async rewrites() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/api/apple-app-site-association'
      },
      {
        source: '/apple-app-site-association',
        destination: '/api/apple-app-site-association'
      }
    ];
  }
};

module.exports = nextConfig;