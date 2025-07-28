// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 关闭移动端菜单
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 数字动画效果
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const updateNumber = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + (stat.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.textContent = target + (stat.textContent.includes('%') ? '%' : '');
                }
            };
            
            updateNumber();
        });
    }
    
    // 观察者API - 当元素进入视口时触发动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // 如果是统计数字部分，触发数字动画
                if (entry.target.classList.contains('about-stats')) {
                    animateNumbers();
                }
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.tech-card, .project-card, .team-card, .about-stats').forEach(el => {
        observer.observe(el);
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="主题"]').value;
            const message = this.querySelector('textarea').value;
            
            // 简单的表单验证
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 模拟表单提交
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('消息已发送！我们会尽快回复您。');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // 按钮点击效果
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 添加涟漪效果的CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .tech-card, .project-card, .team-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .tech-card.animate, .project-card.animate, .team-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .about-stats {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .about-stats.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // 火箭动画增强
    const rocket = document.querySelector('.rocket');
    if (rocket) {
        // 添加鼠标悬停效果
        rocket.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'translateX(-50%) scale(1.1)';
        });
        
        rocket.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'translateX(-50%) scale(1)';
        });
    }
    
    // 滚动进度指示器
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #e94560, #f093fb);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
    
    // 添加打字机效果到标题
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // 当页面加载完成后开始打字机效果
    window.addEventListener('load', function() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            heroTitle.innerHTML = '';
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 50);
            }, 500);
        }
    });
    
    // 添加视差滚动效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // 添加粒子效果
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                opacity: 0.3;
                animation: float 6s infinite linear;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 6}s;
            `;
            hero.appendChild(particle);
        }
    }
    
    // 添加浮动动画的CSS
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // 创建粒子
    createParticles();
    
    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}); 