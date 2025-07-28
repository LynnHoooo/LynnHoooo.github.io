// 语言翻译数据
const translations = {
    zh: {
        // 导航
        'home': '首页',
        'about': '关于我们',
        'technology': '技术',
        'projects': '项目',
        'partners': '合作伙伴',
        'team': '团队',
        'contact': '联系我们',
        
        // 主页
        'hero-title': '100%可复用火箭',
        'hero-subtitle': '冠而卫之为冕，初而起之于巢',
        'learn-more': '了解更多',
        'watch-demo': '观看演示',
        
        // 关于我们
        'about-title': '关于我们',
        'who-we-are': '我们是谁',
        'global-first': '全球首个可复用火箭末级方案',
        'aerospace-team': '痴迷航天的团队',
        'build-rocket': '打造100%可复用火箭',
        'core-advantages': '核心技术优势',
        'engine-tech': '自研发动机技术',
        'thermal-tech': '自研热管理技术',
        'aerospike-design': 'Aerospike构型设计',
        'reusable-tech': '100%可复用技术',
        'reusable-design': '可复用设计',
        'cost-reduction': '大幅降低成本',
        
        // 技术
        'technology-title': '核心技术',
        'self-engine': '自研发动机',
        'self-engine-desc': '自主研发的先进推进系统，采用创新技术实现高效推力输出',
        'thermal-management': '自研热管理技术',
        'thermal-desc': '材料局部致密性可调，气膜冷却防止过热，确保发动机稳定运行',
        'aerospike-config': 'Aerospike构型',
        'aerospike-desc': '自适应环境压强，在不同大气条件下保持最佳推进效率',
        'heat-protection': '热防护系统',
        'heat-desc': '创新的热防护材料，确保火箭在极端环境下安全返回',
        'navigation-control': '导航控制',
        'nav-desc': '精确的导航和控制系统，实现精准着陆和回收',
        'reusable-design-tech': '可复用设计',
        'reusable-desc': '模块化设计理念，确保每个部件都能重复使用',
        
        // 项目
        'projects-title': '项目展示',
        'reusable-upper': '可复用火箭末级',
        'reusable-upper-desc': '采用Aerospike发动机技术，具备长时间轨道滞留和多次变轨能力。LEO轨道运力可达300KG，适配任何直径≥1.5M的箭体，发动机燃料损耗降低30%，可长时间滞留轨道并多次变轨。',
        'leo-capacity': 'LEO运力',
        'leo-value': '300 KG',
        'diameter': '适配直径',
        'diameter-value': '≥1.5M',
        'fuel-consumption': '燃料损耗',
        'fuel-value': '降低30%',
        'orbit-capability': '轨道能力',
        'orbit-value': '长时间滞留+多次变轨',
        
        'engine-2000n': '2000N液体燃料发动机',
        'engine-desc': '自主研发的液体燃料发动机，采用先进的热管理技术和材料工艺，燃料损耗降低30%，效率显著提升，为火箭提供稳定可靠的推进动力。',
        'thrust': '推力',
        'thrust-value': '2000N',
        'efficiency': '效率提升',
        'efficiency-value': '显著提升',
        'tech-feature': '技术特点',
        'tech-value': '自研热管理技术',
        
        'aerospike-engine': 'Aerospike发动机',
        'aerospike-engine-desc': '采用自适应环境压强技术，在不同大气条件下保持最佳推进效率。Aerospike构型设计使发动机在各种高度和大气环境下都能发挥最佳性能。',
        'environment-adapt': '环境适应性',
        'adapt-value': '100%',
        'propulsion-efficiency': '推进效率',
        'propulsion-value': '95%',
        'tech-config': '技术构型',
        'config-value': 'Aerospike',
        'application': '应用场景',
        'app-value': '多高度环境',
        
        'reusable-rocket': '可复用火箭整箭',
        'rocket-desc': '下一步计划：开发完整的可复用火箭系统，实现整箭回收和重复使用。整合所有自主研发技术，打造100%可复用的火箭系统。',
        'plan-time': '计划时间',
        'time-value': '2026年',
        'reusable-target': '可复用目标',
        'target-value': '100%',
        'tech-integration': '技术整合',
        'integration-value': '全自主研发',
        'system-feature': '系统特点',
        'system-value': '整箭回收',
        
        // 团队
        'team-title': '核心团队',
        'ceo-cto': 'CEO & CTO',
        'cmo': 'CMO',
        'coo': 'COO',
        'liang-zhibin': '梁智斌',
        'liang-desc': '航天领域连续创业者 专利证书印刷机华南理工大学本科 航天领域连续创业者 火箭相关发明专利5项 部分成果处于领先地位',
        'zheng-lixun': '郑立勋',
        'zheng-desc': '产学研落地关键推手 华南博士圈联络站 华南理工大学本硕博 ANU联合培养博士 清华大学经济管理学院博士后',
        'li-yiting': '李羿葶',
        'li-desc': '人形任务管理器 风险处理官 华东师范大学本科 华南理工大学硕士 超十年的团队管理经验',
        
        // 合作伙伴
        'partners-title': '合作伙伴',
        
        // 联系我们
        'contact-title': '联系我们',
        'address': '地址',
        'address-value': '广州市天河区五山路华南理工大学35号楼4至6层之4-11',
        'wechat': '微信公众号',
        'wechat-value': '冕巢航天',
        'email': '邮箱',
        'email-value': 'contact@mianchao.com',
        
        // 统计
        'reusable-rate': '可复用率',
        'cost-reduction-stat': '成本降低',
        'quick-launch': '快速发射',
        
        // 页脚
        'copyright': '© 2025 冕巢航天. 保留所有权利.'
    },
    en: {
        // Navigation
        'home': 'Home',
        'about': 'About',
        'technology': 'Technology',
        'projects': 'Projects',
        'partners': 'Partners',
        'team': 'Team',
        'contact': 'Contact',
        
        // Homepage
        'hero-title': '100% Reusable Rocket',
        'hero-subtitle': 'Crown and Nest - The Future of Aerospace',
        'learn-more': 'Learn More',
        'watch-demo': 'Watch Demo',
        
        // About Us
        'about-title': 'About Us',
        'who-we-are': 'Who We Are',
        'global-first': 'Global First Reusable Rocket Upper Stage Solution',
        'aerospace-team': 'Aerospace-Obsessed Team',
        'build-rocket': 'Building 100% Reusable Rockets',
        'core-advantages': 'Core Technology Advantages',
        'engine-tech': 'Self-Developed Engine Technology',
        'thermal-tech': 'Self-Developed Thermal Management Technology',
        'aerospike-design': 'Aerospike Configuration Design',
        'reusable-tech': '100% Reusable Technology',
        'reusable-design': 'Reusable Design',
        'cost-reduction': 'Significant Cost Reduction',
        
        // Technology
        'technology-title': 'Core Technology',
        'self-engine': 'Self-Developed Engine',
        'self-engine-desc': 'Self-developed advanced propulsion system with innovative technology for efficient thrust output',
        'thermal-management': 'Self-Developed Thermal Management Technology',
        'thermal-desc': 'Adjustable material local density, film cooling prevents overheating, ensuring stable engine operation',
        'aerospike-config': 'Aerospike Configuration',
        'aerospike-desc': 'Adaptive environmental pressure, maintaining optimal propulsion efficiency under different atmospheric conditions',
        'heat-protection': 'Thermal Protection System',
        'heat-desc': 'Innovative thermal protection materials ensuring safe rocket return in extreme environments',
        'navigation-control': 'Navigation Control',
        'nav-desc': 'Precise navigation and control system for accurate landing and recovery',
        'reusable-design-tech': 'Reusable Design',
        'reusable-desc': 'Modular design philosophy ensuring every component can be reused',
        
        // Projects
        'projects-title': 'Project Showcase',
        'reusable-upper': 'Reusable Rocket Upper Stage',
        'reusable-upper-desc': 'Using Aerospike engine technology with long-term orbital stay and multiple orbit change capabilities. LEO capacity up to 300KG, adaptable to any rocket body diameter ≥1.5M, engine fuel consumption reduced by 30%, capable of long-term orbital stay with multiple orbit changes.',
        'leo-capacity': 'LEO Capacity',
        'leo-value': '300 KG',
        'diameter': 'Adaptable Diameter',
        'diameter-value': '≥1.5M',
        'fuel-consumption': 'Fuel Consumption',
        'fuel-value': 'Reduced by 30%',
        'orbit-capability': 'Orbital Capability',
        'orbit-value': 'Long-term Stay + Multiple Orbit Changes',
        
        'engine-2000n': '2000N Liquid Fuel Engine',
        'engine-desc': 'Self-developed liquid fuel engine using advanced thermal management technology and material processes, fuel consumption reduced by 30%, efficiency significantly improved, providing stable and reliable propulsion for rockets.',
        'thrust': 'Thrust',
        'thrust-value': '2000N',
        'efficiency': 'Efficiency Improvement',
        'efficiency-value': 'Significantly Improved',
        'tech-feature': 'Technical Feature',
        'tech-value': 'Self-Developed Thermal Management',
        
        'aerospike-engine': 'Aerospike Engine',
        'aerospike-engine-desc': 'Using adaptive environmental pressure technology, maintaining optimal propulsion efficiency under different atmospheric conditions. Aerospike configuration design enables the engine to perform optimally at various altitudes and atmospheric environments.',
        'environment-adapt': 'Environmental Adaptability',
        'adapt-value': '100%',
        'propulsion-efficiency': 'Propulsion Efficiency',
        'propulsion-value': '95%',
        'tech-config': 'Technical Configuration',
        'config-value': 'Aerospike',
        'application': 'Application Scenario',
        'app-value': 'Multi-Altitude Environment',
        
        'reusable-rocket': 'Fully Reusable Rocket',
        'rocket-desc': 'Next step plan: Develop complete reusable rocket system, achieving full rocket recovery and reuse. Integrate all self-developed technologies to create a 100% reusable rocket system.',
        'plan-time': 'Plan Time',
        'time-value': '2026',
        'reusable-target': 'Reusable Target',
        'target-value': '100%',
        'tech-integration': 'Technology Integration',
        'integration-value': 'Fully Self-Developed',
        'system-feature': 'System Feature',
        'system-value': 'Full Rocket Recovery',
        
        // Team
        'team-title': 'Core Team',
        'ceo-cto': 'CEO & CTO',
        'cmo': 'CMO',
        'coo': 'COO',
        'liang-zhibin': 'Liang Zhibin',
        'liang-desc': 'Aerospace serial entrepreneur, patent certificate printer, South China University of Technology undergraduate, aerospace serial entrepreneur, 5 rocket-related invention patents, some achievements leading the industry',
        'zheng-lixun': 'Zheng Lixun',
        'zheng-desc': 'Industry-university-research landing key promoter, South China doctoral circle liaison station, South China University of Technology bachelor, master, and doctoral degree, ANU joint training doctoral degree, Tsinghua University School of Economics and Management postdoctoral',
        'li-yiting': 'Li Yiting',
        'li-desc': 'Human task manager, risk handling officer, East China Normal University undergraduate, South China University of Technology master, over ten years of team management experience',
        
        // Partners
        'partners-title': 'Partners',
        
        // Contact
        'contact-title': 'Contact Us',
        'address': 'Address',
        'address-value': 'Room 4-11, 4-6th Floor, Building 35, South China University of Technology, Wushan Road, Tianhe District, Guangzhou',
        'wechat': 'WeChat Official Account',
        'wechat-value': 'Mianchao Aerospace',
        'email': 'Email',
        'email-value': 'contact@mianchao.com',
        
        // Stats
        'reusable-rate': 'Reusable Rate',
        'cost-reduction-stat': 'Cost Reduction',
        'quick-launch': 'Quick Launch',
        
        // Footer
        'copyright': '© 2025 Mianchao Aerospace. All rights reserved.'
    }
};

// 当前语言
let currentLang = 'zh';

// 语言切换功能
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新导航菜单
    document.querySelectorAll('[data-lang-zh]').forEach(element => {
        const key = element.getAttribute('data-lang-zh');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 更新页面内容
    updatePageContent(lang);
}

// 更新页面内容
function updatePageContent(lang) {
    const t = translations[lang];
    
    // 更新主页标题
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = t['hero-title'];
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t['hero-subtitle'];
    
    // 更新按钮文本
    const buttons = document.querySelectorAll('.btn');
    if (buttons[0]) buttons[0].textContent = t['learn-more'];
    if (buttons[1]) buttons[1].textContent = t['watch-demo'];
    
    // 更新关于我们部分
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = t['about-title'];
    
    const whoWeAre = document.querySelector('.who-we-are h3');
    if (whoWeAre) whoWeAre.textContent = t['who-we-are'];
    
    // 更新身份列表
    const identityList = document.querySelectorAll('.identity-list li');
    if (identityList[0]) identityList[0].innerHTML = `<i class="fas fa-globe"></i> ${t['global-first']}`;
    if (identityList[1]) identityList[1].innerHTML = `<i class="fas fa-users"></i> ${t['aerospace-team']}`;
    if (identityList[2]) identityList[2].innerHTML = `<i class="fas fa-rocket"></i> <strong>${t['build-rocket']}</strong>`;
    
    // 更新核心优势
    const coreAdvantages = document.querySelector('.core-advantages h3');
    if (coreAdvantages) coreAdvantages.textContent = t['core-advantages'];
    
    const advantagesList = document.querySelectorAll('.advantages li');
    if (advantagesList[0]) advantagesList[0].innerHTML = `<i class="fas fa-fire"></i> ${t['engine-tech']}`;
    if (advantagesList[1]) advantagesList[1].innerHTML = `<i class="fas fa-thermometer-half"></i> ${t['thermal-tech']}`;
    if (advantagesList[2]) advantagesList[2].innerHTML = `<i class="fas fa-rocket"></i> ${t['aerospike-design']}`;
    if (advantagesList[3]) advantagesList[3].innerHTML = `<i class="fas fa-recycle"></i> ${t['reusable-tech']}`;
    if (advantagesList[4]) advantagesList[4].innerHTML = `<i class="fas fa-cogs"></i> ${t['reusable-design']}`;
    if (advantagesList[5]) advantagesList[5].innerHTML = `<i class="fas fa-dollar-sign"></i> ${t['cost-reduction']}`;
    
    // 更新技术部分
    const techTitle = document.querySelector('#technology .section-title');
    if (techTitle) techTitle.textContent = t['technology-title'];
    
    // 更新技术卡片
    const techCards = document.querySelectorAll('.tech-card h3');
    if (techCards[0]) techCards[0].textContent = t['self-engine'];
    if (techCards[1]) techCards[1].textContent = t['thermal-management'];
    if (techCards[2]) techCards[2].textContent = t['aerospike-config'];
    if (techCards[3]) techCards[3].textContent = t['heat-protection'];
    if (techCards[4]) techCards[4].textContent = t['navigation-control'];
    if (techCards[5]) techCards[5].textContent = t['reusable-design-tech'];
    
    const techDescs = document.querySelectorAll('.tech-card p');
    if (techDescs[0]) techDescs[0].textContent = t['self-engine-desc'];
    if (techDescs[1]) techDescs[1].textContent = t['thermal-desc'];
    if (techDescs[2]) techDescs[2].textContent = t['aerospike-desc'];
    if (techDescs[3]) techDescs[3].textContent = t['heat-desc'];
    if (techDescs[4]) techDescs[4].textContent = t['nav-desc'];
    if (techDescs[5]) techDescs[5].textContent = t['reusable-desc'];
    
    // 更新项目部分
    const projectsTitle = document.querySelector('#projects .section-title');
    if (projectsTitle) projectsTitle.textContent = t['projects-title'];
    
    // 更新项目标题和描述
    const projectTitles = document.querySelectorAll('.project-details h3');
    if (projectTitles[0]) projectTitles[0].textContent = t['reusable-upper'];
    if (projectTitles[1]) projectTitles[1].textContent = t['engine-2000n'];
    if (projectTitles[2]) projectTitles[2].textContent = t['aerospike-engine'];
    if (projectTitles[3]) projectTitles[3].textContent = t['reusable-rocket'];
    
    const projectDescs = document.querySelectorAll('.project-description');
    if (projectDescs[0]) projectDescs[0].textContent = t['reusable-upper-desc'];
    if (projectDescs[1]) projectDescs[1].textContent = t['engine-desc'];
    if (projectDescs[2]) projectDescs[2].textContent = t['aerospike-engine-desc'];
    if (projectDescs[3]) projectDescs[3].textContent = t['rocket-desc'];
    
    // 更新项目规格
    updateProjectSpecs(lang);
    
    // 更新团队部分
    const teamTitle = document.querySelector('#team .section-title');
    if (teamTitle) teamTitle.textContent = t['team-title'];
    
    // 更新团队成员信息
    const teamNames = document.querySelectorAll('.team-card h3');
    if (teamNames[0]) teamNames[0].textContent = t['liang-zhibin'];
    if (teamNames[1]) teamNames[1].textContent = t['zheng-lixun'];
    if (teamNames[2]) teamNames[2].textContent = t['li-yiting'];
    
    const teamTitles = document.querySelectorAll('.team-title');
    if (teamTitles[0]) teamTitles[0].textContent = t['ceo-cto'];
    if (teamTitles[1]) teamTitles[1].textContent = t['cmo'];
    if (teamTitles[2]) teamTitles[2].textContent = t['coo'];
    
    const teamDescs = document.querySelectorAll('.team-description');
    if (teamDescs[0]) teamDescs[0].textContent = t['liang-desc'];
    if (teamDescs[1]) teamDescs[1].textContent = t['zheng-desc'];
    if (teamDescs[2]) teamDescs[2].textContent = t['li-desc'];
    
    // 更新合作伙伴部分
    const partnersTitle = document.querySelector('#partners .section-title');
    if (partnersTitle) partnersTitle.textContent = t['partners-title'];
    
    // 更新联系我们部分
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = t['contact-title'];
    
    // 更新联系信息
    const contactItems = document.querySelectorAll('.contact-item h4');
    if (contactItems[0]) contactItems[0].textContent = t['address'];
    if (contactItems[1]) contactItems[1].textContent = t['wechat'];
    if (contactItems[2]) contactItems[2].textContent = t['email'];
    
    const contactValues = document.querySelectorAll('.contact-item p');
    if (contactValues[0]) contactValues[0].textContent = t['address-value'];
    if (contactValues[1]) contactValues[1].textContent = t['wechat-value'];
    if (contactValues[2]) contactValues[2].textContent = t['email-value'];
    
    // 更新统计
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t['reusable-rate'];
    if (statLabels[1]) statLabels[1].textContent = t['cost-reduction-stat'];
    if (statLabels[2]) statLabels[2].textContent = t['quick-launch'];
    
    // 更新页脚版权
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t['copyright'];
}

// 更新项目规格的函数
function updateProjectSpecs(lang) {
    const t = translations[lang];
    
    // 项目1 - 可复用火箭末级
    const project1Specs = document.querySelector('#project-1 .project-specs');
    if (project1Specs) {
        const specLabels = project1Specs.querySelectorAll('.spec-label');
        const specValues = project1Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['leo-capacity'];
        if (specLabels[1]) specLabels[1].textContent = t['diameter'];
        if (specLabels[2]) specLabels[2].textContent = t['fuel-consumption'];
        if (specLabels[3]) specLabels[3].textContent = t['orbit-capability'];
        
        if (specValues[0]) specValues[0].textContent = t['leo-value'];
        if (specValues[1]) specValues[1].textContent = t['diameter-value'];
        if (specValues[2]) specValues[2].textContent = t['fuel-value'];
        if (specValues[3]) specValues[3].textContent = t['orbit-value'];
    }
    
    // 项目2 - 2000N液体燃料发动机
    const project2Specs = document.querySelector('#project-2 .project-specs');
    if (project2Specs) {
        const specLabels = project2Specs.querySelectorAll('.spec-label');
        const specValues = project2Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['thrust'];
        if (specLabels[1]) specLabels[1].textContent = t['fuel-consumption'];
        if (specLabels[2]) specLabels[2].textContent = t['efficiency'];
        if (specLabels[3]) specLabels[3].textContent = t['tech-feature'];
        
        if (specValues[0]) specValues[0].textContent = t['thrust-value'];
        if (specValues[1]) specValues[1].textContent = t['fuel-value'];
        if (specValues[2]) specValues[2].textContent = t['efficiency-value'];
        if (specValues[3]) specValues[3].textContent = t['tech-value'];
    }
    
    // 项目3 - Aerospike发动机
    const project3Specs = document.querySelector('#project-3 .project-specs');
    if (project3Specs) {
        const specLabels = project3Specs.querySelectorAll('.spec-label');
        const specValues = project3Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['environment-adapt'];
        if (specLabels[1]) specLabels[1].textContent = t['propulsion-efficiency'];
        if (specLabels[2]) specLabels[2].textContent = t['tech-config'];
        if (specLabels[3]) specLabels[3].textContent = t['application'];
        
        if (specValues[0]) specValues[0].textContent = t['adapt-value'];
        if (specValues[1]) specValues[1].textContent = t['propulsion-value'];
        if (specValues[2]) specValues[2].textContent = t['config-value'];
        if (specValues[3]) specValues[3].textContent = t['app-value'];
    }
    
    // 项目4 - 可复用火箭整箭
    const project4Specs = document.querySelector('#project-4 .project-specs');
    if (project4Specs) {
        const specLabels = project4Specs.querySelectorAll('.spec-label');
        const specValues = project4Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['plan-time'];
        if (specLabels[1]) specLabels[1].textContent = t['reusable-target'];
        if (specLabels[2]) specLabels[2].textContent = t['tech-integration'];
        if (specLabels[3]) specLabels[3].textContent = t['system-feature'];
        
        if (specValues[0]) specValues[0].textContent = t['time-value'];
        if (specValues[1]) specValues[1].textContent = t['target-value'];
        if (specValues[2]) specValues[2].textContent = t['integration-value'];
        if (specValues[3]) specValues[3].textContent = t['system-value'];
    }
}

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
    
    // 初始化语言切换
    initLanguageSwitch();
    
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
        background: linear-gradient(90deg, #0066cc, #0052a3);
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

// 初始化语言切换
function initLanguageSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// 图片加载处理函数
function hideLoading(element) {
    const imageContainer = element.closest('.project-image-large');
    const loadingElement = imageContainer.querySelector('.image-loading');
    if (loadingElement) {
        loadingElement.classList.add('hidden');
        setTimeout(() => {
            loadingElement.style.display = 'none';
        }, 300);
    }
}

function handleImageError(element) {
    const imageContainer = element.closest('.project-image-large');
    const loadingElement = imageContainer.querySelector('.image-loading');
    if (loadingElement) {
        loadingElement.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 15px;">⚠️</div>
            <p>图片加载失败</p>
            <p style="font-size: 0.9rem; opacity: 0.7;">请检查图片文件是否存在</p>
        `;
        loadingElement.style.background = 'rgba(255, 0, 0, 0.8)';
    }
} 
