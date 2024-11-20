/** @type {import('next').NextConfig} */
const nextConfig = {
    // 동적 데이터를 사용하는 페이지는 빌드시 생성하지 않고
    // 요청시 생성하도록 설정
    output: "standalone",
};

module.exports = nextConfig;
