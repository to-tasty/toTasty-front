import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['k.kakaocdn.net'], // 카카오 CDN
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'http://ec2-52-78-225-145.ap-northeast-2.compute.amazonaws.com:8080/api/:path*', // 백엔드 서버 URL로 변경
      },
    ];
  },
};

export default nextConfig;
