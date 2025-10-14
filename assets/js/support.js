// 支持页面功能
const SupportPage = {
    // 赞赏记录数据
    donationRecords: [],
    
    // 分页配置
    pagination: {
        itemsPerPage: 20, // 每页显示条数，可以修改这个值
        currentPage: 1,
        totalPages: 0,
        totalItems: 0
    },

    // 初始化
    init: function() {
        this.loadDonationRecords();
        this.bindEvents();
    },

    // 从JSON文件加载赞赏记录
    loadDonationRecords: async function() {
        try {
            // 检查是否在本地文件协议下运行
            if (window.location.protocol === 'file:') {
                console.warn('检测到本地文件协议，无法加载JSON数据。请使用HTTP服务器运行。');
                this.showLocalFileWarning();
                return;
            }
            
            const response = await fetch('assets/data/donations.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.donationRecords = data.donations || [];
            this.renderDonationRecords();
        } catch (error) {
            console.error('加载赞赏记录失败:', error);
            this.showErrorMessage();
        }
    },

    // 显示本地文件协议警告
    showLocalFileWarning: function() {
        const container = document.getElementById('donation-list');
        if (container) {
            container.innerHTML = `
                <div class="local-file-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>本地文件协议限制</h3>
                    <p>由于浏览器安全限制，无法在本地直接打开HTML文件时加载JSON数据。</p>
                    <p><strong>解决方案：</strong></p>
                    <ul>
                        <li>使用本地HTTP服务器：<code>python -m http.server 8000</code></li>
                        <li>然后访问：<code>http://localhost:8000/support.html</code></li>
                        <li>或直接访问GitHub Pages在线版本</li>
                    </ul>
                </div>
            `;
        }
    },

    // 渲染赞赏记录
    renderDonationRecords: function() {
        const container = document.getElementById('donation-list');
        if (!container) return;

        if (this.donationRecords.length === 0) {
            container.innerHTML = '<div class="no-donations">暂无赞赏记录</div>';
            return;
        }

        // 按日期排序（从新到旧）
        const sortedRecords = [...this.donationRecords].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA; // 倒序排列，最新的在前面
        });

        // 计算分页信息
        this.pagination.totalItems = sortedRecords.length;
        this.pagination.totalPages = Math.ceil(this.pagination.totalItems / this.pagination.itemsPerPage);
        
        // 确保当前页不超出范围
        if (this.pagination.currentPage > this.pagination.totalPages) {
            this.pagination.currentPage = 1;
        }

        // 获取当前页的数据
        const startIndex = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
        const endIndex = startIndex + this.pagination.itemsPerPage;
        const currentPageRecords = sortedRecords.slice(startIndex, endIndex);

        // 渲染当前页的记录
        const html = currentPageRecords.map(record => `
            <div class="donation-item">
                <span class="donor-name">${record.name}</span>
                <span class="donation-amount">¥${record.amount}</span>
                <span class="donation-message">${record.message}</span>
                <span class="donation-date">${record.date}</span>
            </div>
        `).join('');

        container.innerHTML = html;
        
        // 渲染分页控件
        this.renderPagination();
    },

    // 渲染分页控件
    renderPagination: function() {
        const paginationContainer = document.getElementById('pagination-container');
        if (!paginationContainer) return;

        if (this.pagination.totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        const currentPage = this.pagination.currentPage;
        const totalPages = this.pagination.totalPages;
        const totalItems = this.pagination.totalItems;
        const itemsPerPage = this.pagination.itemsPerPage;
        
        // 计算显示范围
        const startItem = (currentPage - 1) * itemsPerPage + 1;
        const endItem = Math.min(currentPage * itemsPerPage, totalItems);

        let paginationHTML = `
            <div class="pagination-info">
                显示第 ${startItem}-${endItem} 条，共 ${totalItems} 条记录
            </div>
            <div class="pagination-controls">
        `;

        // 上一页按钮
        if (currentPage > 1) {
            paginationHTML += `<button class="pagination-btn" onclick="SupportPage.goToPage(${currentPage - 1})">
                <i class="fas fa-chevron-left"></i> 上一页
            </button>`;
        }

        // 页码按钮
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // 第一页和省略号
        if (startPage > 1) {
            paginationHTML += `<button class="pagination-btn" onclick="SupportPage.goToPage(1)">1</button>`;
            if (startPage > 2) {
                paginationHTML += `<span class="pagination-ellipsis">...</span>`;
            }
        }

        // 中间页码
        for (let i = startPage; i <= endPage; i++) {
            const isActive = i === currentPage ? 'active' : '';
            paginationHTML += `<button class="pagination-btn ${isActive}" onclick="SupportPage.goToPage(${i})">${i}</button>`;
        }

        // 最后一页和省略号
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += `<span class="pagination-ellipsis">...</span>`;
            }
            paginationHTML += `<button class="pagination-btn" onclick="SupportPage.goToPage(${totalPages})">${totalPages}</button>`;
        }

        // 下一页按钮
        if (currentPage < totalPages) {
            paginationHTML += `<button class="pagination-btn" onclick="SupportPage.goToPage(${currentPage + 1})">
                下一页 <i class="fas fa-chevron-right"></i>
            </button>`;
        }

        paginationHTML += '</div>';
        paginationContainer.innerHTML = paginationHTML;
    },

    // 跳转到指定页面
    goToPage: function(page) {
        if (page >= 1 && page <= this.pagination.totalPages) {
            this.pagination.currentPage = page;
            this.renderDonationRecords();
            
            // 滚动到赞赏记录区域顶部
            const donationSection = document.querySelector('.content-section:last-child');
            if (donationSection) {
                donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    },

    // 显示错误消息
    showErrorMessage: function() {
        const container = document.getElementById('donation-list');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    加载赞赏记录失败，请稍后重试
                </div>
            `;
        }
    },

    // 绑定事件
    bindEvents: function() {
        // 这里可以添加其他事件绑定
    }
};

// 复制功能
function copyEmail() {
    Utils.copyToClipboard('eersoft@msn.com');
}

function copyWechat() {
    Utils.copyToClipboard('esm-hou');
}

function copyQQ() {
    Utils.copyToClipboard('39064839');
}

function copyWechatInfo() {
    Utils.copyToClipboard('esm-hou');
}

function copyAlipayInfo() {
    Utils.copyToClipboard('eersoft@msn.com');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('support.html')) {
        SupportPage.init();
    }
});

// 导出到全局
window.SupportPage = SupportPage;
