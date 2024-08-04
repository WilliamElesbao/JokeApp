/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.dev.to',
            port: '',
            pathname: '/cdn-cgi/image/**',
          },
          {
            protocol: 'https',
            hostname: 'www.svgheart.com',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.w3.org',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
