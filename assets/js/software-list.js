// 软件列表页面功能
const SoftwareListPage = {
    currentCategory: 'all',
    searchKeyword: '',

    // 初始化页面
    init: async function() {
        // 等待软件数据加载完成
        await SoftwareData.loadSoftwareData();
        
        // 绑定事件
        this.bindEvents();
        
        // 渲染软件列表
        this.renderSoftwareList();
        
        // 更新分类筛选器
        this.updateCategoryFilter();
    },

    // 绑定事件
    bindEvents: function() {
        // 搜索输入框
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchKeyword = e.target.value.trim();
                this.renderSoftwareList();
            });
        }

        // 分类筛选器
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                this.renderSoftwareList();
            });
        }
    },

    // 更新分类筛选器选项
    updateCategoryFilter: function() {
        const categoryFilter = document.getElementById('category-filter');
        if (!categoryFilter) return;

        const categories = SoftwareData.getAllCategories();
        
        // 清空现有选项（保留"所有分类"）
        categoryFilter.innerHTML = '<option value="">所有分类</option>';
        
        // 添加分类选项
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    },

    // 渲染软件列表
    renderSoftwareList: function() {
        let softwareList = SoftwareData.getAllSoftware();

        // 按分类筛选
        if (this.currentCategory && this.currentCategory !== '') {
            softwareList = softwareList.filter(software => 
                software.category === this.currentCategory
            );
        }

        // 按关键词搜索
        if (this.searchKeyword) {
            softwareList = SoftwareData.searchSoftware(this.searchKeyword);
            
            // 如果已经按分类筛选，需要再次筛选
            if (this.currentCategory && this.currentCategory !== '') {
                softwareList = softwareList.filter(software => 
                    software.category === this.currentCategory
                );
            }
        }

        // 按下载量排序
        softwareList.sort((a, b) => b.downloadCount - a.downloadCount);

        // 渲染到页面
        this.renderSoftwareCards(softwareList);
    },

    // 渲染软件卡片
    renderSoftwareCards: function(softwareList) {
        const container = document.getElementById('software-items');
        if (!container) return;

        if (softwareList.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>没有找到相关软件</h3>
                    <p>请尝试其他搜索关键词或分类</p>
                </div>
            `;
            return;
        }

        const html = softwareList.map(software => this.renderSoftwareCard(software)).join('');
        container.innerHTML = html;
    },

    // 渲染单个软件卡片
    renderSoftwareCard: function(software) {
        return `
            <div class="software-card" data-id="${software.id}">
                <div class="software-card-image">
                    <img src="${software.screenshotUrl}" alt="${software.title}" />
                    <div class="software-card-overlay">
                        <a href="software-detail.html?id=${software.id}" class="btn btn-primary btn-sm">
                            <i class="fas fa-eye"></i> 查看详情
                        </a>
                    </div>
                </div>
                <div class="software-card-content">
                    <div class="software-card-header">
                        <h3 class="software-card-title">${software.title}</h3>
                        <span class="software-card-category">${software.category}</span>
                    </div>
                    <p class="software-card-description">${software.description}</p>
                    <div class="software-card-meta">
                        <span class="software-card-version">
                            <i class="fas fa-tag"></i>
                            v${software.version}
                        </span>
                        <span class="software-card-downloads">
                            <i class="fas fa-download"></i>
                            ${Utils.formatNumber(software.downloadCount)} 次下载
                        </span>
                    </div>
                    <div class="software-card-actions">
                        <a href="software-detail.html?id=${software.id}" class="btn btn-outline btn-sm">
                            <i class="fas fa-info-circle"></i> 详情
                        </a>
                        <a href="${software.downloadUrl || 'download.html'}" class="btn btn-primary btn-sm">
                            <i class="fas fa-download"></i> 下载
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    SoftwareListPage.init();
});