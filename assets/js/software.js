// 软件数据管理
const SoftwareData = {
    // 软件数据
    software: [],
    
    // 数据加载状态
    isLoaded: false,
    isLoading: false,

    // 从JSON文件加载软件数据
    loadSoftwareData: async function() {
        if (this.isLoaded || this.isLoading) {
            return this.software;
        }

        this.isLoading = true;
        
        try {
            // 检查是否在本地文件协议下运行
            if (window.location.protocol === 'file:') {
                console.warn('检测到本地文件协议，无法加载JSON数据。请使用HTTP服务器运行。');
                this.showLocalFileWarning();
                return [];
            }
            
            const response = await fetch('assets/data/software.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.software = data.software || [];
            this.isLoaded = true;
            this.isLoading = false;
            
            console.log(`成功加载 ${this.software.length} 个软件数据`);
            return this.software;
        } catch (error) {
            console.error('加载软件数据失败:', error);
            this.isLoading = false;
            this.showErrorMessage();
            return [];
        }
    },

    // 显示本地文件协议警告
    showLocalFileWarning: function() {
        console.warn('由于浏览器安全限制，无法在本地直接打开HTML文件时加载JSON数据。请使用HTTP服务器运行。');
    },

    // 显示错误消息
    showErrorMessage: function() {
        console.error('加载软件数据失败，请检查网络连接或稍后重试。');
    },

    // 获取所有软件
    getAllSoftware: function() {
        return this.software.filter(s => s.isActive);
    },

    // 获取特色软件
    getFeaturedSoftware: function(count = 6) {
        return this.software
            .filter(s => s.isActive && s.isFeatured)
            .sort((a, b) => b.downloadCount - a.downloadCount)
            .slice(0, count);
    },

    // 根据分类获取软件
    getSoftwareByCategory: function(category) {
        return this.software
            .filter(s => s.isActive && s.category === category)
            .sort((a, b) => b.downloadCount - a.downloadCount);
    },

    // 根据ID获取软件
    getSoftwareById: function(id) {
        return this.software.find(s => s.id === id && s.isActive);
    },

    // 搜索软件
    searchSoftware: function(keyword) {
        if (!keyword) return this.getAllSoftware();
        
        const lowerKeyword = keyword.toLowerCase();
        return this.software.filter(s => 
            s.isActive && (
                s.title.toLowerCase().includes(lowerKeyword) ||
                s.description.toLowerCase().includes(lowerKeyword) ||
                s.category.toLowerCase().includes(lowerKeyword)
            )
        ).sort((a, b) => b.downloadCount - a.downloadCount);
    },

    // 获取所有分类
    getAllCategories: function() {
        const categories = [...new Set(this.software.map(s => s.category))];
        return categories.sort();
    },

    // 获取软件统计
    getStatistics: function() {
        const activeSoftware = this.getAllSoftware();
        return {
            totalSoftware: activeSoftware.length,
            totalDownloads: activeSoftware.reduce((sum, s) => sum + s.downloadCount, 0),
            categories: this.getAllCategories().length,
            featuredSoftware: activeSoftware.filter(s => s.isFeatured).length
        };
    }
};

// 软件展示功能
const SoftwareDisplay = {
    // 渲染软件卡片
    renderSoftwareCard: function(software) {
        return `
            <div class="software-card" data-id="${software.id}">
                <img src="${software.screenshotUrl}" alt="${software.title}" class="software-card-image" />
                <div class="software-card-content">
                    <h3 class="software-card-title">${software.title}</h3>
                    <p class="software-card-description">${software.description}</p>
                    <div class="software-card-meta">
                        <span class="software-card-category">${software.category}</span>
                        <span class="software-card-version">v${software.version}</span>
                    </div>
                    <div class="software-card-actions">
                        <a href="software-detail.html?id=${software.id}" class="btn btn-primary btn-sm">
                            <i class="fas fa-eye"></i> 查看详情
                        </a>
                        <a href="${software.downloadUrl || 'download.html'}" class="btn btn-secondary btn-sm">
                            <i class="fas fa-download"></i> 立即下载
                        </a>
                    </div>
                </div>
            </div>
        `;
    },

    // 渲染软件列表
    renderSoftwareList: function(softwareList, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (softwareList.length === 0) {
            container.innerHTML = '<p class="no-results">暂无软件</p>';
            return;
        }

        const html = softwareList.map(software => this.renderSoftwareCard(software)).join('');
        container.innerHTML = html;
    },

    // 渲染特色软件
    renderFeaturedSoftware: function() {
        const featuredSoftware = SoftwareData.getFeaturedSoftware(6);
        this.renderSoftwareList(featuredSoftware, 'featured-software-grid');
    },

    // 渲染软件详情
    renderSoftwareDetail: function(software) {
        if (!software) {
            document.body.innerHTML = `
                <div class="not-found">
                    <h1>软件不存在</h1>
                    <p>抱歉，您访问的软件不存在或已被删除。</p>
                    <a href="software.html" class="btn btn-primary">返回软件中心</a>
                </div>
            `;
            return;
        }

        // 更新页面标题
        document.title = `${software.title} - EERSOFT`;
        
        // 更新meta描述
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', software.description);
        }

        // 渲染软件详情内容
        const detailHTML = `
            <div class="software-detail">
                <!-- 软件头部信息 -->
                <div class="software-header">
                    <div class="software-header-content">
                        <div class="software-icon">
                            <img src="${software.iconUrl}" alt="${software.title}" />
                        </div>
                        <div class="software-info">
                            <h1 class="software-title">${software.title}</h1>
                            <p class="software-description">${software.description}</p>
                            <div class="software-meta">
                                <span class="software-version">
                                    <i class="fas fa-tag"></i>
                                    v${software.version}
                                </span>
                                <span class="software-size">
                                    <i class="fas fa-hdd"></i>
                                    ${software.fileSize}
                                </span>
                                <span class="software-category">
                                    <i class="fas fa-folder"></i>
                                    ${software.category}
                                </span>
                                <span class="software-downloads">
                                    <i class="fas fa-chart-line"></i>
                                    ${Utils.formatNumber(software.downloadCount)} 次下载
                                </span>
                            </div>
                            <div class="software-actions">
                                ${this.generateDownloadButtons(software)}
                                ${software.githubUrl ? `
                                    <a href="${software.githubUrl}" class="btn btn-outline btn-large" target="_blank">
                                        <i class="fab fa-github"></i> 查看源码
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 主要内容区域 -->
                <div class="software-content">
                    <div class="content-layout">
                        <!-- 左侧主要内容 -->
                        <div class="content-main">
                            <!-- 运行截图 -->
                            <section class="software-section">
                                <h2 class="section-title">
                                    <i class="fas fa-images"></i>
                                    运行截图
                                </h2>
                                <div class="screenshots-gallery">
                                    ${this.generateScreenshots(software)}
                                </div>
                            </section>

                            <!-- 功能介绍 -->
                            <section class="software-section">
                                <h2 class="section-title">
                                    <i class="fas fa-cogs"></i>
                                    功能介绍
                                </h2>
                                <div class="features-grid">
                                    ${software.features.map(feature => `
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle"></i>
                                            <span>${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="software-long-description">
                                    <h3>详细介绍</h3>
                                    <p>${software.longDescription.replace(/\n/g, '</p><p>')}</p>
                                </div>
                            </section>

                            <!-- 常见问题 -->
                            <section class="software-section">
                                <h2 class="section-title">
                                    <i class="fas fa-question-circle"></i>
                                    常见问题
                                </h2>
                                <div class="faq-list">
                                    ${this.generateFAQ(software)}
                                </div>
                            </section>

                            <!-- 更新日志 -->
                            ${software.changelog ? `
                                <section class="software-section">
                                    <h2 class="section-title">
                                        <i class="fas fa-history"></i>
                                        更新日志
                                    </h2>
                                    <div class="changelog-content">
                                        <pre>${software.changelog}</pre>
                                    </div>
                                </section>
                            ` : ''}
                        </div>

                        <!-- 右侧边栏 -->
                        <div class="content-sidebar">
                            <!-- 下载链接 -->
                            <div class="sidebar-widget">
                                <h3 class="widget-title">
                                    <i class="fas fa-download"></i>
                                    下载链接
                                </h3>
                                <div class="download-options">
                                    ${this.generateSidebarDownloadOptions(software)}
                                </div>
                            </div>

                            <!-- 系统要求 -->
                            <div class="sidebar-widget">
                                <h3 class="widget-title">
                                    <i class="fas fa-desktop"></i>
                                    系统要求
                                </h3>
                                <div class="system-requirements">
                                    <pre>${software.systemRequirements}</pre>
                                </div>
                            </div>

                            <!-- 软件信息 -->
                            <div class="sidebar-widget">
                                <h3 class="widget-title">
                                    <i class="fas fa-info-circle"></i>
                                    软件信息
                                </h3>
                                <div class="software-info-list">
                                    <div class="info-item">
                                        <span class="info-label">版本</span>
                                        <span class="info-value">v${software.version}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">大小</span>
                                        <span class="info-value">${software.fileSize}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">分类</span>
                                        <span class="info-value">${software.category}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">下载量</span>
                                        <span class="info-value">${Utils.formatNumber(software.downloadCount)}</span>
                                    </div>
                                    <div class="info-item">
                                        <span class="info-label">更新日期</span>
                                        <span class="info-value">${software.updatedDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 将内容插入到页面中
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = detailHTML;
        }
    },

    // 生成下载按钮
    generateDownloadButtons: function(software) {
        let buttons = '';
        
        if (software.directDownload && software.downloadUrl) {
            buttons += `
                <a href="${software.downloadUrl}" class="btn btn-primary btn-large" target="_blank">
                    <i class="fas fa-download"></i> 直接下载
                </a>
            `;
        }
        
        if (software.cloudStorage) {
            buttons += `
                <button class="btn btn-secondary btn-large" onclick="SoftwareDisplay.showCloudStorage('${software.id}')">
                    <i class="fas fa-cloud"></i> 网盘下载
                </button>
            `;
        }
        
        return buttons;
    },

    // 生成截图画廊
    generateScreenshots: function(software) {
        if (!software.screenshots || software.screenshots.length === 0) {
            return `
                <div class="screenshot-placeholder">
                    <i class="fas fa-image"></i>
                    <p>暂无截图</p>
                </div>
            `;
        }

        return software.screenshots.map((screenshot, index) => `
            <div class="screenshot-item" onclick="SoftwareDisplay.openScreenshotModal('${screenshot.url}', '${screenshot.title}')">
                <img src="${screenshot.url}" alt="${screenshot.title}" />
                <div class="screenshot-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>${screenshot.title}</span>
                </div>
            </div>
        `).join('');
    },

    // 生成常见问题
    generateFAQ: function(software) {
        if (!software.faq || software.faq.length === 0) {
            return `
                <div class="faq-placeholder">
                    <i class="fas fa-question-circle"></i>
                    <p>暂无常见问题</p>
                </div>
            `;
        }

        return software.faq.map((item, index) => `
            <div class="faq-item">
                <div class="faq-question" onclick="SoftwareDisplay.toggleFAQ(${index})">
                    <i class="fas fa-chevron-right"></i>
                    <span>${item.question}</span>
                </div>
                <div class="faq-answer" id="faq-answer-${index}">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    },

    // 生成侧边栏下载选项
    generateSidebarDownloadOptions: function(software) {
        let options = '';
        
        if (software.directDownload && software.downloadUrl) {
            options += `
                <div class="download-option">
                    <div class="download-option-header">
                        <i class="fas fa-download"></i>
                        <span>直接下载</span>
                    </div>
                    <a href="${software.downloadUrl}" class="btn btn-primary btn-sm" target="_blank">
                        立即下载
                    </a>
                </div>
            `;
        }
        
        if (software.cloudStorage) {
            options += `
                <div class="download-option">
                    <div class="download-option-header">
                        <i class="fas fa-cloud"></i>
                        <span>网盘下载</span>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="SoftwareDisplay.showCloudStorage('${software.id}')">
                        选择网盘
                    </button>
                </div>
            `;
        }
        
        return options;
    },

    // 切换FAQ显示/隐藏
    toggleFAQ: function(index) {
        const answer = document.getElementById(`faq-answer-${index}`);
        const question = answer.previousElementSibling;
        const icon = question.querySelector('i');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(90deg)';
        }
    },

    // 显示网盘下载选项
    showCloudStorage: function(softwareId) {
        const software = SoftwareData.getSoftwareById(softwareId);
        if (!software || !software.cloudStorage) {
            Utils.showMessage('该软件暂无网盘下载链接', 'warning');
            return;
        }

        // 复用下载页面的网盘对话框逻辑
        if (window.DownloadPage && window.DownloadPage.showCloudStorage) {
            window.DownloadPage.showCloudStorage(softwareId);
        }
    },

    // 打开截图模态框
    openScreenshotModal: function(imageUrl, title) {
        const modal = document.createElement('div');
        modal.className = 'screenshot-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="this.closest('.screenshot-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="${imageUrl}" alt="${title}" />
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // 添加动画效果
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
};

// 生成软件列表HTML（极简列表式）
SoftwareData.generateSoftwareListHTML = function() {
    const softwareList = this.software;
    let html = '';
    
    softwareList.forEach(software => {
        html += `
            <div class="software-item">
                <a href="software-detail.html?id=${software.id}">${software.title}</a>
                <span class="software-description">${software.description}</span>
                <span class="software-version">v${software.version}</span>
            </div>
        `;
    });
    
    return html;
};

// 渲染软件列表（极简列表式）
SoftwareDisplay.renderSoftwareList = function() {
    const container = document.getElementById('software-items');
    if (container) {
        container.innerHTML = SoftwareData.generateSoftwareListHTML();
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
    // 加载软件数据
    await SoftwareData.loadSoftwareData();
    
    // 如果是首页，渲染软件列表
    const currentPath = window.location.pathname;
    const isHomePage = currentPath.includes('index.html') || 
                      currentPath === '/' || 
                      currentPath === '/es/' ||
                      currentPath.endsWith('/es') ||
                      currentPath.endsWith('/es/');
    
    if (isHomePage) {
        SoftwareDisplay.renderSoftwareList();
    }
    
    // 如果是软件详情页，渲染软件详情
    if (window.location.pathname.includes('software-detail.html')) {
        const softwareId = parseInt(Utils.getUrlParameter('id'));
        const software = SoftwareData.getSoftwareById(softwareId);
        SoftwareDisplay.renderSoftwareDetail(software);
    }
});

// 导出到全局
window.SoftwareData = SoftwareData;
window.SoftwareDisplay = SoftwareDisplay;