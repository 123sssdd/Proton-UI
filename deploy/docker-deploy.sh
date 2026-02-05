#!/bin/bash

# Docker 部署脚本
# 用法: ./docker-deploy.sh [build|start|stop|restart|logs]

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# 检查 Docker
check_docker() {
    if ! command -v docker &> /dev/null; then
        error "Docker 未安装，请先安装 Docker"
    fi

    if ! command -v docker-compose &> /dev/null; then
        error "Docker Compose 未安装，请先安装 Docker Compose"
    fi

    info "Docker 环境检查通过 ✓"
}

# 构建镜像
build_images() {
    info "开始构建 Docker 镜像..."
    docker-compose build --no-cache
    info "镜像构建完成 ✓"
}

# 启动容器
start_containers() {
    info "启动容器..."
    docker-compose up -d
    info "容器启动完成 ✓"
    info ""
    info "访问地址:"
    info "  Docs:       http://localhost:3001"
    info "  Playground: http://localhost:3002"
}

# 停止容器
stop_containers() {
    info "停止容器..."
    docker-compose down
    info "容器已停止 ✓"
}

# 重启容器
restart_containers() {
    info "重启容器..."
    docker-compose restart
    info "容器重启完成 ✓"
}

# 查看日志
view_logs() {
    info "查看容器日志 (Ctrl+C 退出)..."
    docker-compose logs -f
}

# 查看状态
show_status() {
    info "容器状态:"
    docker-compose ps
}

# 清理
cleanup() {
    info "清理未使用的镜像和容器..."
    docker system prune -f
    info "清理完成 ✓"
}

# 显示帮助
show_help() {
    echo "用法: ./docker-deploy.sh [命令]"
    echo ""
    echo "命令:"
    echo "  build    构建 Docker 镜像"
    echo "  start    启动容器"
    echo "  stop     停止容器"
    echo "  restart  重启容器"
    echo "  logs     查看日志"
    echo "  status   查看状态"
    echo "  cleanup  清理未使用的资源"
    echo "  all      构建并启动 (默认)"
    echo ""
    echo "示例:"
    echo "  ./docker-deploy.sh build   # 只构建镜像"
    echo "  ./docker-deploy.sh start   # 只启动容器"
    echo "  ./docker-deploy.sh         # 构建并启动"
}

# 主函数
main() {
    local command=${1:-all}

    check_docker

    case $command in
        build)
            build_images
            ;;
        start)
            start_containers
            ;;
        stop)
            stop_containers
            ;;
        restart)
            restart_containers
            ;;
        logs)
            view_logs
            ;;
        status)
            show_status
            ;;
        cleanup)
            cleanup
            ;;
        all)
            build_images
            start_containers
            ;;
        help|-h|--help)
            show_help
            ;;
        *)
            error "未知命令: $command (使用 --help 查看帮助)"
            ;;
    esac
}

main "$@"
