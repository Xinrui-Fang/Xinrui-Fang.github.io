/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  // 仅在有 STATIC_EXPORT 时做静态导出（如 GitHub Actions 部署）；本地默认 build 可配合 npm start 运行
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export", images: { unoptimized: true } } : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig
