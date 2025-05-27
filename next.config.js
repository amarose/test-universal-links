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
  }
};

module.exports = nextConfig;