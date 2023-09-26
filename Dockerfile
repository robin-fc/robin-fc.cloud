#构建阶段-用node镜像编译
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build

#运行阶段-用nginx镜像运行
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 运行在443端口
EXPOSE 443