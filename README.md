# Xinrui Fang - Academic Website

极简风格个人学术主页，基于 Next.js 与 Tailwind CSS。

## 运行

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

## 构建

```bash
npm run build
npm start
```

构建后会生成静态资源到 `out/` 目录（`output: 'export'`），可直接部署到任意静态托管。

## 部署到 GitHub Pages

1. 将仓库推送到 GitHub，默认分支设为 `main`。
2. 在仓库 **Settings → Pages** 中，**Source** 选择 **GitHub Actions**。
3. 推送代码到 `main` 后，Actions 会自动执行 **Deploy to GitHub Pages**：安装依赖、`npm run build` 生成 `out/` 并部署。
4. **项目页**（如 `https://<username>.github.io/Xinrui/`）：workflow 已自动设置 `BASE_PATH=/<repo>`。
5. **用户/组织页**（如 `https://<username>.github.io/`）：仓库名需为 `<username>.github.io`，workflow 会使用 `BASE_PATH=""`。

本地仅需静态文件时，执行 `npm run build` 后把 `out/` 里的内容上传到任意静态服务器即可。

## 内容说明

- 内容与 [xinrui.design](https://xinrui.design/) 一致，包括：About Me、Research Interests、News、Publications、Services。
- 出版物与新闻的 PDF/链接目前为占位符 `#`，可在 `src/app/data.ts` 中替换为真实链接。
