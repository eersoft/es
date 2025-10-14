// 下载页面功能
const DownloadPage = {
    currentCategory: 'all',

    // 初始化
    init: function() {
        this.bindEvents();
        this.renderDownloadList();
    },

    // 绑定事件
    bindEvents: function() {
        // 分类筛选
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.handleCategoryFilter(tab.dataset.category);
            });
        });
    },

    // 处理分类筛选
    handleCategoryFilter: function(category) {
        // 更新活跃标签
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.currentCategory = category;
        this.renderDownloadList();
    },

    // 渲染下载列表
    renderDownloadList: function() {
        const container = document.getElementById('download-grid');
        if (!container) return;

        let software = SoftwareData.getAllSoftware();
        
        // 按分类筛选
        if (this.currentCategory !== 'all') {
            software = software.filter(s => s.category === this.currentCategory);
        }

        // 按下载量排序
        software.sort((a, b) => b.downloadCount - a.downloadCount);

        if (software.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-download"></i>
                    <h3>暂无软件</h3>
                    <p>该分类下暂时没有可下载的软件</p>
                </div>
            `;
            return;
        }

        const html = software.map(software => this.renderDownloadItem(software)).join('');
        container.innerHTML = html;
    },

    // 渲染下载项目
    renderDownloadItem: function(software) {
        const downloadButtons = this.generateDownloadButtons(software);
        
        return `
            <div class="download-card" data-id="${software.id}">
                <div class="download-card-header">
                    <div class="download-icon">
                        <img src="${software.iconUrl}" alt="${software.title}" />
                    </div>
                    <div class="download-info">
                        <h3 class="download-title">${software.title}</h3>
                        <p class="download-description">${software.description}</p>
                        <div class="download-meta">
                            <span class="download-version">
                                <i class="fas fa-tag"></i>
                                v${software.version}
                            </span>
                            <span class="download-size">
                                <i class="fas fa-hdd"></i>
                                ${software.fileSize}
                            </span>
                            <span class="download-category">
                                <i class="fas fa-folder"></i>
                                ${software.category}
                            </span>
                        </div>
                        <div class="download-stats">
                            <span class="download-count">
                                <i class="fas fa-download"></i>
                                ${Utils.formatNumber(software.downloadCount)} 次下载
                            </span>
                        </div>
                    </div>
                </div>
                <div class="download-card-actions">
                    <a href="software-detail.html?id=${software.id}" class="btn btn-outline">
                        <i class="fas fa-info-circle"></i>
                        查看详情
                    </a>
                    ${downloadButtons}
                </div>
            </div>
        `;
    },

    // 生成下载按钮
    generateDownloadButtons: function(software) {
        let buttons = '';
        
        if (software.directDownload && software.downloadUrl) {
            buttons += `
                <button class="btn btn-primary" onclick="DownloadPage.directDownload('${software.downloadUrl}', '${software.title}')">
                    <i class="fas fa-download"></i>
                    直接下载
                </button>
            `;
        }
        
        if (software.cloudStorage) {
            buttons += `
                <button class="btn btn-secondary" onclick="DownloadPage.showCloudStorage('${software.id}')">
                    <i class="fas fa-cloud"></i>
                    网盘下载
                </button>
            `;
        }
        
        return buttons;
    },

    // 下载软件
    downloadSoftware: function(softwareId) {
        const software = SoftwareData.getSoftwareById(softwareId);
        if (!software) {
            Utils.showMessage('软件不存在', 'error');
            return;
        }

        // 显示下载确认对话框
        this.showDownloadDialog(software);
    },

    // 显示下载对话框
    showDownloadDialog: function(software) {
        const dialog = document.createElement('div');
        dialog.className = 'download-dialog';
        dialog.innerHTML = `
            <div class="dialog-overlay" onclick="this.parentElement.remove()"></div>
            <div class="dialog-content">
                <div class="dialog-header">
                    <h3>下载 ${software.title}</h3>
                    <button class="dialog-close" onclick="this.closest('.download-dialog').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="dialog-body">
                    <div class="download-info">
                        <img src="${software.iconUrl}" alt="${software.title}" class="download-preview" />
                        <div class="download-details">
                            <h4>${software.title}</h4>
                            <p>版本：v${software.version}</p>
                            <p>大小：${software.fileSize}</p>
                            <p>分类：${software.category}</p>
                        </div>
                    </div>
                    <div class="download-options">
                        <h4>选择下载方式：</h4>
                        <div class="download-buttons">
                            <button class="btn btn-primary" onclick="DownloadPage.startDownload('${software.downloadUrl}', '${software.title}')">
                                <i class="fas fa-download"></i>
                                直接下载
                            </button>
                            <button class="btn btn-secondary" onclick="DownloadPage.copyDownloadLink('${software.downloadUrl}')">
                                <i class="fas fa-link"></i>
                                复制链接
                            </button>
                        </div>
                    </div>
                    <div class="download-notice">
                        <i class="fas fa-info-circle"></i>
                        <p>下载前请确保您的系统满足软件要求，如有问题请联系我们。</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);

        // 添加动画效果
        setTimeout(() => {
            dialog.classList.add('show');
        }, 10);
    },

    // 开始下载
    startDownload: function(downloadUrl, softwareName) {
        // 模拟下载过程
        Utils.showMessage(`开始下载 ${softwareName}...`, 'info');
        
        // 实际应用中，这里应该触发真实的下载
        // window.open(downloadUrl, '_blank');
        
        // 模拟下载完成
        setTimeout(() => {
            Utils.showMessage(`${softwareName} 下载完成！`, 'success');
        }, 2000);

        // 关闭对话框
        const dialog = document.querySelector('.download-dialog');
        if (dialog) {
            dialog.remove();
        }
    },

    // 复制下载链接
    copyDownloadLink: function(downloadUrl) {
        Utils.copyToClipboard(downloadUrl);
        
        // 关闭对话框
        const dialog = document.querySelector('.download-dialog');
        if (dialog) {
            dialog.remove();
        }
    },

    // 直接下载
    directDownload: function(downloadUrl, softwareName) {
        Utils.showMessage(`正在下载 ${softwareName}...`, 'info');
        window.open(downloadUrl, '_blank');
    },

    // 显示网盘下载选项
    showCloudStorage: function(softwareId) {
        const software = SoftwareData.getSoftwareById(softwareId);
        if (!software || !software.cloudStorage) {
            Utils.showMessage('该软件暂无网盘下载链接', 'warning');
            return;
        }

        const dialog = document.createElement('div');
        dialog.className = 'cloud-storage-dialog';
        dialog.innerHTML = `
            <div class="dialog-overlay" onclick="this.parentElement.remove()"></div>
            <div class="dialog-content">
                <div class="dialog-header">
                    <h3>网盘下载 - ${software.title}</h3>
                    <button class="dialog-close" onclick="this.closest('.cloud-storage-dialog').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="dialog-body">
                    <div class="cloud-storage-options">
                        ${this.generateCloudStorageOptions(software.cloudStorage)}
                    </div>
                    <div class="download-notice">
                        <i class="fas fa-info-circle"></i>
                        <p>请选择您偏好的网盘进行下载，部分网盘可能需要提取码或访问密码。</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);

        // 添加动画效果
        setTimeout(() => {
            dialog.classList.add('show');
        }, 10);
    },

    // 生成网盘选项
    generateCloudStorageOptions: function(cloudStorage) {
        let options = '';
        
        if (cloudStorage.baidu) {
            options += `
                <div class="cloud-option">
                    <div class="cloud-info">
                        <i class="fab fa-baidu" style="color: #2932e1;"></i>
                        <div>
                            <h4>百度网盘</h4>
                            <p>提取码: <code>${cloudStorage.baidu.password}</code></p>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="DownloadPage.openCloudLink('${cloudStorage.baidu.url}')">
                        <i class="fas fa-external-link-alt"></i>
                        打开链接
                    </button>
                </div>
            `;
        }
        
        if (cloudStorage.weiyun) {
            options += `
                <div class="cloud-option">
                    <div class="cloud-info">
                        <i class="fas fa-cloud" style="color: #00d4aa;"></i>
                        <div>
                            <h4>腾讯微云</h4>
                            <p>访问密码: <code>${cloudStorage.weiyun.password}</code></p>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="DownloadPage.openCloudLink('${cloudStorage.weiyun.url}')">
                        <i class="fas fa-external-link-alt"></i>
                        打开链接
                    </button>
                </div>
            `;
        }
        
        return options;
    },

    // 打开网盘链接
    openCloudLink: function(url) {
        window.open(url, '_blank');
        
        // 关闭对话框
        const dialog = document.querySelector('.cloud-storage-dialog');
        if (dialog) {
            dialog.remove();
        }
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('download.html')) {
        DownloadPage.init();
    }
});

// 导出到全局
window.DownloadPage = DownloadPage;
