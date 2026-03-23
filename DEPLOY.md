# 静态站点部署说明

本项目前端为 **Vite + React**，生产构建产物在仓库根目录下的 **`dist/public/`**（`dist/` 已在 `.gitignore` 中，需本地或 CI 执行构建后再上传）。

## 1. 生成静态文件

```bash
pnpm install
pnpm run build:static
```

等价于 `vite build`，会生成：

- `dist/public/index.html`
- `dist/public/assets/*`（JS、CSS 等）

> 完整 `pnpm run build` 还会用 esbuild 打包 Node 服务（`dist/index.js`），适合用 `pnpm start` 跑一体化服务；**纯静态托管只需 `build:static` 与 `dist/public` 目录。**

## 2. 本地预览静态包

```bash
pnpm exec vite preview --host 127.0.0.1
```

或使用任意支持 **SPA 回退到 `index.html`** 的静态服务器，例如：

```bash
npx --yes serve -s dist/public
```

## 3. 部署到 HTTP 服务器

将 **`dist/public/` 里的全部内容** 上传到站点根目录（或子路径，见下节「子路径部署」）。

### Nginx 示例（单页应用）

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/brain-learning-kids;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

把 `root` 指向上传后的目录（即包含 `index.html` 与 `assets/` 的那一层）。

### 仅静态文件、无 try_files 时

若所有访问都从根路径 `/` 进入，部分场景也可直接用简单静态目录；若以后有前端路由子路径，仍建议使用上面的 `try_files` 或 `serve -s`。

## 4. 子路径部署（可选）

若站点挂在 `https://example.com/kids/` 而非域名根路径，需在构建前设置 `base`：

在项目根创建或修改环境变量 / 构建命令，例如：

```bash
# 注意末尾斜杠
VITE_BASE_PATH=/kids/ pnpm exec vite build
```

并在 `vite.config.ts` 中配置 `base: process.env.VITE_BASE_PATH ?? "/"`（若当前未配置，需要加这一行）。**当前默认 `base` 为 `/`，仅适合部署在站点根目录。**

## 5. 重新构建

更新代码后重新执行 `pnpm run build:static`，再覆盖服务器上的 `index.html` 与 `assets/` 即可。
