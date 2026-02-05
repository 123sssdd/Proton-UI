# 多阶段构建 Dockerfile
# 阶段 1: 构建阶段
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@8.15.3

# 复制 package.json 和 lock 文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/core/package.json ./packages/core/
COPY packages/streaming/package.json ./packages/streaming/
COPY packages/docs/package.json ./packages/docs/
COPY apps/playground/package.json ./apps/playground/
COPY configs/eslint-config/package.json ./configs/eslint-config/
COPY configs/typescript-config/package.json ./configs/typescript-config/
COPY configs/tailwind-config/package.json ./configs/tailwind-config/

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制所有源代码
COPY . .

# 构建所有项目
RUN pnpm build

# 阶段 2: Docs 生产镜像
FROM nginx:alpine AS docs

# 复制构建产物
COPY --from=builder /app/packages/docs/doc_build /usr/share/nginx/html

# 复制 Nginx 配置
COPY packages/docs/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
