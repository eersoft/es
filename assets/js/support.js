// 支持页面功能
const SupportPage = {
    // 赞赏记录数据
    donationRecords: [],

    // 初始化
    init: function() {
        this.loadDonationRecords();
        this.bindEvents();
    },

    // 从JSON文件加载赞赏记录
    loadDonationRecords: async function() {
        try {
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

    // 渲染赞赏记录
    renderDonationRecords: function() {
        const container = document.getElementById('donation-list');
        if (!container) return;

        if (this.donationRecords.length === 0) {
            container.innerHTML = '<div class="no-donations">暂无赞赏记录</div>';
            return;
        }

        // 按金额排序（从高到低）
        const sortedRecords = [...this.donationRecords].sort((a, b) => {
            const amountA = parseFloat(a.amount);
            const amountB = parseFloat(b.amount);
            return amountB - amountA;
        });

        const html = sortedRecords.map(record => `
            <div class="donation-item">
                <span class="donor-name">${record.name}</span>
                <span class="donation-amount">¥${record.amount}</span>
                <span class="donation-message">${record.message}</span>
                <span class="donation-date">${record.date}</span>
            </div>
        `).join('');

        container.innerHTML = html;
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
