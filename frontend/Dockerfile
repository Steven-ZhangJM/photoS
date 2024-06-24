# 使用 Node.js 的官方镜像作为基础镜像
FROM node:14

# 创建并设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露前端开发服务器的端口
EXPOSE 3000

# 启动前端开发服务器
CMD ["npm", "start"]
