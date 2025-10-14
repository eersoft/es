// 软件数据管理
const SoftwareData = {
    // 软件数据
    software: [
        {
            id: 1,
            title: 'esXGray',
            description: '去除图片背景灰色的小工具，可以处理pdf并生成pdf或docx文档。',
            longDescription: 'esXGray是一个简单的图片处理工具，主要用于去除手机拍摄图片的背景灰色。支持批量操作和直接处理PDF文件，结果可直接生成PDF/DOCX文档。支持去手写、裁剪、橡皮擦等修改功能。',
            category: '图片处理',
            version: '2.0',
            fileSize: '15.2 MB',
            downloadCount: 12500,
            isFeatured: true,
            isActive: true,
            screenshotUrl: 'assets/images/sh_esxgray.png',
            iconUrl: 'assets/images/sh_esxgray.png',
            downloadUrl: 'download.html#esxgray',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本\n至少2GB内存\n100MB可用磁盘空间',
            changelog: 'v2.0 (2024-01-15)\n- 新增批量处理功能\n- 优化处理算法，提升处理速度\n- 修复已知问题\n\nv1.5 (2023-12-01)\n- 新增PDF直接处理功能\n- 改进用户界面\n- 增加快捷键支持',
            features: [
                '去除手机拍摄图片背景灰色',
                '支持批量操作',
                '支持直接处理pdf文件',
                '漂白结果可直接生成PDF/DOCX文档',
                '支持去手写',
                '支持裁剪、橡皮擦等后期修改',
                '画笔支持带压感手写板',
                '可作为电子白板',
                '方便的单键快捷键'
            ],
            createdDate: '2023-01-01',
            updatedDate: '2024-01-15'
        },
        {
            id: 2,
            title: 'PDFZip',
            description: 'PDF文件批量压缩小工具，本地运行不上传文件',
            longDescription: 'PDFZip是一个简单的PDF压缩工具，支持批量处理。本地处理，不上传文件，保护隐私。支持可视化进度显示，可以中止操作。',
            category: '文档处理',
            version: '1.8',
            fileSize: '8.5 MB',
            downloadCount: 8900,
            isFeatured: true,
            isActive: true,
            screenshotUrl: 'assets/images/sh_pdfzip.png',
            iconUrl: 'assets/images/sh_pdfzip.png',
            downloadUrl: 'download.html#pdfzip',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本\n至少1GB内存\n50MB可用磁盘空间',
            changelog: 'v1.8 (2024-01-10)\n- 新增并行压缩功能\n- 优化压缩算法\n- 改进进度显示\n\nv1.5 (2023-11-15)\n- 新增批量处理功能\n- 支持进度保存与恢复',
            features: [
                '批量处理、并行压缩',
                '可中止、逐项取消',
                '可视化进度与统计',
                '本地处理，不上传文件，保护隐私杜绝文件外泄',
                '列表支持按"文件名/原始大小"排序',
                '支持多种输出方式',
                '自动多方案尝试（预置 + 降级）',
                '纯图 PDF 可选预缩放',
                '支持保存进度与恢复'
            ],
            createdDate: '2023-02-01',
            updatedDate: '2024-01-10'
        },
        {
            id: 3,
            title: 'esXls2Doc',
            description: '一个将Excel表格导出至Word的小工具。',
            longDescription: 'esXls2Doc是一个VBA工具，源码公开。操作简单，支持批量处理。支持合并结果，支持直接生成PDF文件。',
            category: '文档转换',
            version: '1.2',
            fileSize: '2.1 MB',
            downloadCount: 5600,
            isFeatured: true,
            isActive: true,
            screenshotUrl: 'assets/images/sh_xls2doc.png',
            iconUrl: 'assets/images/sh_xls2doc.png',
            downloadUrl: 'download.html#esxls2doc',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Microsoft Excel 2010或更高版本\n支持VBA宏\n至少512MB内存',
            changelog: 'v1.2 (2023-12-20)\n- 新增多行合一功能\n- 优化转换速度\n- 修复格式问题\n\nv1.0 (2023-10-01)\n- 初始版本发布',
            features: [
                'vba工具',
                '公开源码安全放心',
                '操作简便，简洁高效',
                '批量处理，一点即成',
                '支持合并结果',
                '支持直接生成PDF文件',
                '支持多行合一'
            ],
            createdDate: '2023-03-01',
            updatedDate: '2023-12-20'
        },
        {
            id: 4,
            title: 'esDoc2Xls',
            description: '一个将Word文档中表格信息导入至Excel的工具，可以导入表前表后特定段落。',
            longDescription: 'esDoc2Xls支持多种提取方式，简单快捷，提速增效。支持表格原样复制，VBA工具，开源安全。',
            category: '文档转换',
            version: '1.1',
            fileSize: '1.8 MB',
            downloadCount: 3200,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_doc2xls.png',
            iconUrl: 'assets/images/sh_doc2xls.png',
            downloadUrl: 'download.html#esdoc2xls',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Microsoft Word 2010或更高版本\nMicrosoft Excel 2010或更高版本\n支持VBA宏',
            changelog: 'v1.1 (2023-11-30)\n- 新增段落提取功能\n- 优化表格识别\n\nv1.0 (2023-09-15)\n- 初始版本发布',
            features: [
                '支持多种提取方式',
                '简单快捷，提速增效',
                '支持表格原样复制',
                'VBA工具，开源安全'
            ],
            createdDate: '2023-04-01',
            updatedDate: '2023-11-30'
        },
        {
            id: 5,
            title: '在线报纸阅读器',
            description: '一款报纸阅读器，可以查看在线报纸，目前已经内置了如人民日报、国防报、华西都市报等十多份不同报纸。',
            longDescription: '聚合多家报纸在线源，支持全屏，自动隐藏工具栏，提供更大视界，开源免费。',
            category: '阅读工具',
            version: '1.0',
            fileSize: '5.2 MB',
            downloadCount: 2100,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_paper.png',
            iconUrl: 'assets/images/sh_paper.png',
            downloadUrl: 'download.html#newspaper',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本\n网络连接',
            changelog: 'v1.0 (2023-08-01)\n- 初始版本发布',
            features: [
                '聚合多家报纸在线源',
                '支持全屏',
                '自动隐藏工具栏，提供更大视界',
                '开源免费'
            ],
            createdDate: '2023-05-01',
            updatedDate: '2023-08-01'
        },
        {
            id: 6,
            title: '快捷拼图工具',
            description: '一个简单易用的拼图游戏工具',
            longDescription: '支持多种拼图模式，简单易用，适合休闲娱乐。',
            category: '游戏工具',
            version: '1.0',
            fileSize: '3.1 MB',
            downloadCount: 1800,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_imagecombiner.png',
            iconUrl: 'assets/images/sh_imagecombiner.png',
            downloadUrl: 'download.html#puzzle',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本',
            changelog: 'v1.0 (2023-07-01)\n- 初始版本发布',
            features: [
                '支持多种拼图模式',
                '简单易用',
                '适合休闲娱乐'
            ],
            createdDate: '2023-06-01',
            updatedDate: '2023-07-01'
        },
        {
            id: 7,
            title: 'WorkRecord-教师工作记录',
            description: '专为教师设计的工作记录工具',
            longDescription: '帮助教师记录日常工作，提高工作效率，支持多种记录格式。',
            category: '办公工具',
            version: '1.3',
            fileSize: '4.5 MB',
            downloadCount: 1500,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_workrecord.png',
            iconUrl: 'assets/images/sh_workrecord.png',
            downloadUrl: 'download.html#workrecord',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本',
            changelog: 'v1.3 (2023-12-15)\n- 新增数据导出功能\n- 优化界面设计\n\nv1.0 (2023-06-15)\n- 初始版本发布',
            features: [
                '专为教师设计',
                '记录日常工作',
                '提高工作效率',
                '支持多种记录格式'
            ],
            createdDate: '2023-06-15',
            updatedDate: '2023-12-15'
        },
        {
            id: 8,
            title: '定时（倒计时）关机工具',
            description: '一个简单实用的定时关机工具',
            longDescription: '支持倒计时关机，操作简单，界面友好。',
            category: '系统工具',
            version: '1.0',
            fileSize: '1.2 MB',
            downloadCount: 2800,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_autoshutdown.png',
            iconUrl: 'assets/images/sh_autoshutdown.png',
            downloadUrl: 'download.html#autoshutdown',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本',
            changelog: 'v1.0 (2023-05-20)\n- 初始版本发布',
            features: [
                '支持倒计时关机',
                '操作简单',
                '界面友好'
            ],
            createdDate: '2023-05-20',
            updatedDate: '2023-05-20'
        },
        {
            id: 9,
            title: '飞行员特训【小游戏】',
            description: '一款有趣的飞行员训练小游戏',
            longDescription: '挑战你的反应能力，看看你能坚持多少秒！',
            category: '游戏工具',
            version: '1.0',
            fileSize: '2.8 MB',
            downloadCount: 4200,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_20s.png',
            iconUrl: 'assets/images/sh_20s.png',
            downloadUrl: 'download.html#pilotgame',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Windows 7/8/10/11\n.NET Framework 4.0或更高版本',
            changelog: 'v1.0 (2023-04-10)\n- 初始版本发布',
            features: [
                '挑战反应能力',
                '简单易上手',
                '适合休闲娱乐'
            ],
            createdDate: '2023-04-10',
            updatedDate: '2023-04-10'
        },
        {
            id: 10,
            title: 'Xls2DocFast',
            description: '快速Excel转Word工具',
            longDescription: '比esXls2Doc更快的转换工具，专为大批量转换设计。',
            category: '文档转换',
            version: '1.0',
            fileSize: '2.5 MB',
            downloadCount: 1900,
            isFeatured: false,
            isActive: true,
            screenshotUrl: 'assets/images/sh_xls2docfast.png',
            iconUrl: 'assets/images/sh_xls2docfast.png',
            downloadUrl: 'download.html#xls2docfast',
            githubUrl: '',
            documentationUrl: '',
            systemRequirements: 'Microsoft Excel 2010或更高版本\nMicrosoft Word 2010或更高版本\n支持VBA宏',
            changelog: 'v1.0 (2023-03-20)\n- 初始版本发布',
            features: [
                '比esXls2Doc更快的转换速度',
                '专为大批量转换设计',
                '操作简单',
                '稳定可靠'
            ],
            createdDate: '2023-03-20',
            updatedDate: '2023-03-20'
        }
    ],

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
                        <a href="${software.downloadUrl}" class="btn btn-secondary btn-sm">
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
                                    <i class="fas fa-download"></i>
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
                                <a href="${software.downloadUrl}" class="btn btn-primary btn-large">
                                    <i class="fas fa-download"></i> 立即下载
                                </a>
                                ${software.githubUrl ? `
                                    <a href="${software.githubUrl}" class="btn btn-secondary btn-large">
                                        <i class="fab fa-github"></i> 查看源码
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="software-screenshots">
                    <h2>软件截图</h2>
                    <div class="screenshots-grid">
                        <div class="screenshot-main">
                            <img src="${software.screenshotUrl}" alt="${software.title} 主截图" />
                        </div>
                    </div>
                </div>

                <div class="software-content">
                    <div class="content-grid">
                        <div class="content-main">
                            <section class="software-section">
                                <h2>详细介绍</h2>
                                <div class="software-long-description">
                                    ${software.longDescription.replace(/\n/g, '<br>')}
                                </div>
                            </section>

                            <section class="software-section">
                                <h2>功能特点</h2>
                                <ul class="features-list">
                                    ${software.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </section>

                            ${software.changelog ? `
                                <section class="software-section">
                                    <h2>更新日志</h2>
                                    <div class="changelog-content">
                                        ${software.changelog.replace(/\n/g, '<br>')}
                                    </div>
                                </section>
                            ` : ''}
                        </div>

                        <div class="content-sidebar">
                            <div class="sidebar-widget">
                                <h3>系统要求</h3>
                                <div class="system-requirements">
                                    ${software.systemRequirements.replace(/\n/g, '<br>')}
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h3>下载统计</h3>
                                <div class="download-stats">
                                    <div class="stat-item">
                                        <span class="stat-label">总下载量</span>
                                        <span class="stat-value">${Utils.formatNumber(software.downloadCount)}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">评分</span>
                                        <span class="stat-value">
                                            <div class="rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <span>4.8</span>
                                            </div>
                                        </span>
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
document.addEventListener('DOMContentLoaded', function() {
    // 如果是首页，渲染软件列表
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
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
