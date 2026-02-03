# 多阶段构建 Dockerfile
FROM node:18-alpine AS builder

# 安装 pnpm
RUN npm install -g pnpm@8

WORKDIR /app

# 复制依赖文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/docs/package.json ./packages/docs/
COPY packages/core/package.json ./packages/core/
COPY packages/streaming/package.json ./packages/streaming/

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建文档站点
RUN pnpm build --filter=@proton-ui/docs

# 生产阶段
FROM nginx:alpine

# 复制自定义 Nginx 配置
COPY packages/docs/nginx.conf /etc/nginx/conf.d/default.conf

# 复制构建产物
COPY --from=builder /app/packages/docs/doc_build /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
