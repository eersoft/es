// 关于我们页面功能
const AboutPage = {
    // 初始化
    init: function() {
        this.bindEvents();
        this.initTimeline();
    },

    // 绑定事件
    bindEvents: function() {
        // 联系表单提交
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }
    },

    // 初始化时间线动画
    initTimeline: function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    },

    // 处理联系表单提交
    handleContactForm: function(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // 获取表单数据
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        // 验证表单
        if (!this.validateContactForm(name, email, subject, message)) {
            return;
        }

        // 显示加载状态
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        Utils.showLoading(submitBtn);

        // 模拟发送邮件（实际应用中应该发送到服务器）
        setTimeout(() => {
            Utils.hideLoading(submitBtn, originalText);
            
            // 显示成功消息
            Utils.showMessage('消息发送成功！我们会尽快回复您。', 'success');
            
            // 重置表单
            form.reset();
        }, 2000);
    },

    // 验证联系表单
    validateContactForm: function(name, email, subject, message) {
        if (!name) {
            Utils.showMessage('请输入您的姓名', 'error');
            return false;
        }

        if (!email) {
            Utils.showMessage('请输入您的邮箱', 'error');
            return false;
        }

        if (!Utils.validateEmail(email)) {
            Utils.showMessage('请输入有效的邮箱地址', 'error');
            return false;
        }

        if (!subject) {
            Utils.showMessage('请输入主题', 'error');
            return false;
        }

        if (!message) {
            Utils.showMessage('请输入您的消息', 'error');
            return false;
        }

        if (message.length < 10) {
            Utils.showMessage('消息内容至少需要10个字符', 'error');
            return false;
        }

        return true;
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('about.html')) {
        AboutPage.init();
    }
});

// 导出到全局
window.AboutPage = AboutPage;
