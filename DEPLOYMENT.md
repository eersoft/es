# GitHub Pages 部署指南

## 部署步骤

### 1. 创建GitHub仓库

1. 登录GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议使用：`eersoft.github.io`（这样可以直接通过 `https://eersoft.github.io` 访问）
4. 或者使用其他名称，如：`eersoft-website`
5. 设置为公开仓库
6. 不要初始化README（因为我们已经有了）

### 2. 上传文件到GitHub

#### 方法一：使用Git命令行

```bash
# 进入项目目录
cd eersoft-github-pages

# 初始化Git仓库
git init

# 添加远程仓库
git remote add origin https://github.com/[username]/[repository-name].git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: EERSOFT website"

# 推送到GitHub
git push -u origin main
```

#### 方法二：使用GitHub Desktop

1. 下载并安装GitHub Desktop
2. 登录GitHub账户
3. 选择 "Clone a repository from the Internet"
4. 选择刚创建的仓库
5. 将 `eersoft-github-pages` 文件夹中的所有文件复制到克隆的仓库文件夹中
6. 在GitHub Desktop中提交并推送更改

#### 方法三：直接上传

1. 在GitHub仓库页面点击 "uploading an existing file"
2. 将 `eersoft-github-pages` 文件夹中的所有文件拖拽到上传区域
3. 填写提交信息并提交

### 3. 启用GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

### 4. 访问网站

- 如果仓库名为 `eersoft.github.io`，网站地址为：`https://eersoft.github.io`
- 如果仓库名为其他名称，网站地址为：`https://[username].github.io/[repository-name]`

## 自定义域名（可选）

如果您有自己的域名，可以设置自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名，如：`www.eersoft.com`
3. 在您的域名DNS设置中添加CNAME记录，指向 `[username].github.io`

## 更新网站

每次更新网站内容后：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "Update website content"

# 推送到GitHub
git push origin main
```

GitHub Pages会自动重新部署网站，通常需要几分钟时间。

## 故障排除

### 常见问题

1. **网站无法访问**
   - 检查GitHub Pages是否已启用
   - 确认仓库是公开的
   - 等待几分钟让GitHub Pages完成部署

2. **图片无法显示**
   - 检查图片路径是否正确
   - 确认图片文件已上传到GitHub

3. **样式不生效**
   - 检查CSS文件路径
   - 确认浏览器缓存已清除

### 检查部署状态

1. 进入仓库的 "Actions" 页面
2. 查看GitHub Pages的部署状态
3. 如果有错误，点击查看详细日志

## 性能优化

### 建议的优化措施

1. **图片优化**
   - 压缩图片文件大小
   - 使用WebP格式（如果浏览器支持）

2. **代码优化**
   - 压缩CSS和JavaScript文件
   - 使用CDN加速

3. **SEO优化**
   - 添加meta标签
   - 使用语义化HTML标签

## 备份

建议定期备份网站文件：

```bash
# 克隆仓库到本地
git clone https://github.com/[username]/[repository-name].git

# 或拉取最新更改
git pull origin main
```

## 技术支持

如果遇到问题，可以：

1. 查看GitHub Pages文档：https://docs.github.com/en/pages
2. 检查GitHub Pages状态：https://www.githubstatus.com/
3. 在GitHub仓库中创建Issue寻求帮助
