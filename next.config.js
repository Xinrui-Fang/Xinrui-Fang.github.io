/** @type {import('next').NextConfig} */
const nextConfig = {
  // 仅在有 STATIC_EXPORT 时做静态导出（如 GitHub Actions 部署）；本地默认 build 可配合 npm start 运行
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" } : {}),
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : "",
}

module.exports = nextConfig
