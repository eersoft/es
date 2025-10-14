// 支持页面功能
const SupportPage = {
    // 模拟的赞赏记录数据
    donationRecords: [
        { name: '张**', amount: 50, message: 'esXGray很好用，感谢！', date: '2024-01-15' },
        { name: '李**', amount: 20, message: 'PDFZip帮了大忙', date: '2024-01-14' },
        { name: '王**', amount: 100, message: '支持开发者，期待更多好软件', date: '2024-01-13' },
        { name: '刘**', amount: 30, message: 'esXls2Doc转换效果很棒', date: '2024-01-12' },
        { name: '陈**', amount: 15, message: '感谢分享', date: '2024-01-11' },
        { name: '赵**', amount: 80, message: '软件质量很高，值得支持', date: '2024-01-10' },
        { name: '孙**', amount: 25, message: '希望继续开发更多工具', date: '2024-01-09' },
        { name: '周**', amount: 60, message: 'esDoc2Xls很实用', date: '2024-01-08' },
        { name: '吴**', amount: 40, message: '支持开源软件', date: '2024-01-07' },
        { name: '郑**', amount: 35, message: '软件界面很友好', date: '2024-01-06' },
        { name: '马**', amount: 45, message: '功能很强大', date: '2024-01-05' },
        { name: '朱**', amount: 20, message: '谢谢分享', date: '2024-01-04' },
        { name: '胡**', amount: 70, message: '期待更多功能', date: '2024-01-03' },
        { name: '林**', amount: 55, message: '软件很稳定', date: '2024-01-02' },
        { name: '郭**', amount: 30, message: '界面设计很棒', date: '2024-01-01' }
    ],

    // 初始化
    init: function() {
        this.renderDonationRecords();
        this.bindEvents();
    },

    // 渲染赞赏记录
    renderDonationRecords: function() {
        const container = document.getElementById('donation-list');
        if (!container) return;

        // 按金额排序
        const sortedRecords = [...this.donationRecords].sort((a, b) => b.amount - a.amount);

        const html = sortedRecords.map(record => `
            <div class="donation-record">
                <div class="donation-avatar">
                    ${record.name.charAt(0)}
                </div>
                <div class="donation-info">
                    <div class="donation-name">${record.name}</div>
                    <div class="donation-message">${record.message}</div>
                    <div class="donation-date">${record.date}</div>
                </div>
                <div class="donation-amount">
                    ¥${record.amount}
                </div>
            </div>
        `).join('');

        container.innerHTML = html;
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
