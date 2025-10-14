// 软件列表页面功能
const SoftwareList = {
    currentCategory: 'all',
    currentSearch: '',

    // 初始化
    init: function() {
        this.bindEvents();
        this.renderSoftware();
    },

    // 绑定事件
    bindEvents: function() {
        // 搜索功能
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentSearch = e.target.value;
                this.renderSoftware();
            });
        }

        // 分类筛选
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                this.renderSoftware();
            });
        }
    },

    // 获取筛选后的软件列表
    getFilteredSoftware: function() {
        let software = SoftwareData.software.filter(item => item.isActive);

        // 搜索筛选
        if (this.currentSearch) {
            const searchTerm = this.currentSearch.toLowerCase();
            software = software.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
        }

        // 分类筛选
        if (this.currentCategory && this.currentCategory !== '') {
            software = software.filter(item => item.category === this.currentCategory);
        }

        return software;
    },

    // 渲染软件列表
    renderSoftware: function() {
        const software = this.getFilteredSoftware();
        const container = document.getElementById('software-items');
        if (!container) return;

        if (software.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <p>没有找到相关软件</p>
                </div>
            `;
            return;
        }

        const html = software.map(software => `
            <div class="software-item">
                <a href="software-detail.html?id=${software.id}">${software.title}</a>
                <span class="software-description">${software.description}</span>
                <span class="software-version">v${software.version}</span>
            </div>
        `).join('');

        container.innerHTML = html;
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    SoftwareList.init();
});

// 导出到全局
window.SoftwareList = SoftwareList;