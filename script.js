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
        'technology-title': '技术与项目',
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
        
        'test-stand': '5000N级地面试车系统',
        'test-stand-desc': '本试车台主要用于对小型液体或固体火箭发动机进行卧式推力测试，测试过程涉及发动机产生的轴向推力、剪力等机械载荷。设计目标是保证试车台在最大推力5kN作用下，结构稳定、测量准确、安全可靠，适用于实验室或野外测试环境。在设计时，我们采用模块化设计，便于运输和组装，主要分为承力框架、发动机固定与支撑系统、连接系统、推力传递系统以及压载与稳定系统。',
        'max-thrust': '最大推力',
        'max-thrust-value': '5kN',
        'test-type': '测试类型',
        'test-type-value': '卧式推力测试',
        'design-feature': '设计特点',
        'design-feature-value': '模块化设计',
        'application-env': '应用环境',
        'application-env-value': '实验室/野外',
        
        'injector': '同轴涡旋式喷注器',
        'injector-desc': '同轴涡旋式喷注器可以使两种燃料在进入燃烧室前先进入预设的腔室，通过旋转和增压，使得液体从喷口出来时处于高速的状态并发生碰撞，混合成为细小的液滴进入燃烧状态。',
        'inlet-pressure': '入口压力',
        'inlet-pressure-value': '2.5MPa',
        'material': '材质',
        'material-value': '铜合金',
        'manufacturing': '制造工艺',
        'manufacturing-value': '金属粉末3D打印',
        'mixing-angle': '混合角度',
        'mixing-angle-value': '可调整',
        
        // 团队
        'team-title': '核心团队',
        'ceo-cto': 'CEO & CTO',
        'cmo': 'CMO',
        'coo': 'COO',
        'liang-zhibin': '梁智斌',
        'liang-desc': '航天领域连续创业者，专利证书印刷机。华南理工大学本科，火箭相关发明专利5项，部分成果处于领先地位',
        'zheng-lixun': '郑立勋',
        'zheng-desc': '产学研落地关键推手，华南博士圈联络站，华南理工大学本硕博，ANU联合培养博士，清华大学经济管理学院博士后',
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
        'copyright': '© 2025 冕巢航天. 保留所有权利.',
        'footer-slogan': '引领航天技术革命,让太空探索更加经济可行',
        'quick-links': '快速链接',
        'follow-us': '关注我们',
        'send-message': '发送消息',
        'your-name': '您的姓名',
        'your-email': '您的邮箱',
        'subject': '主题',
        'your-message': '您的消息',
        'company-name': '冕巢航天'
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
        'technology-title': 'Technology & Projects',
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
        
        'test-stand': '5000N Level Ground Test Stand',
        'test-stand-desc': 'This test stand is primarily used for horizontal thrust testing of small liquid or solid rocket engines. The test involves mechanical loads such as axial thrust and shear force generated by the engine. The design goal is to ensure that the test stand is stable, accurate, and safe under a maximum thrust of 5kN, suitable for laboratory or field test environments. In the design, we adopted a modular design for easy transportation and assembly, mainly divided into a load-bearing frame, engine fixing and support system, connection system, thrust transmission system, and ballast and stability system.',
        'max-thrust': 'Maximum Thrust',
        'max-thrust-value': '5kN',
        'test-type': 'Test Type',
        'test-type-value': 'Horizontal Thrust Test',
        'design-feature': 'Design Features',
        'design-feature-value': 'Modular Design',
        'application-env': 'Application Environment',
        'application-env-value': 'Laboratory/Field',
        
        'injector': 'Coaxial Swirl Injector',
        'injector-desc': 'A coaxial swirl injector allows two fuels to enter the combustion chamber before mixing. By rotating and pressurizing, the liquid is ejected at high speed and collides, forming small droplets that enter the combustion state.',
        'inlet-pressure': 'Inlet Pressure',
        'inlet-pressure-value': '2.5MPa',
        'material': 'Material',
        'material-value': 'Copper Alloy',
        'manufacturing': 'Manufacturing Process',
        'manufacturing-value': 'Metal Powder 3D Printing',
        'mixing-angle': 'Mixing Angle',
        'mixing-angle-value': 'Adjustable',
        
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
        'wechat-value': 'Coronest Aerospace',
        'email': 'Email',
        'email-value': 'contact@coronest.com',
        
        // Stats
        'reusable-rate': 'Reusable Rate',
        'cost-reduction-stat': 'Cost Reduction',
        'quick-launch': 'Quick Launch',
        
        // Footer
        'copyright': '© 2025 Coronest Aerospace. All rights reserved.',
        'footer-slogan': 'Leading the aerospace technology revolution, making space exploration more economically viable',
        'quick-links': 'Quick Links',
        'follow-us': 'Follow Us',
        'send-message': 'Send Message',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'subject': 'Subject',
        'your-message': 'Your Message',
        'company-name': 'Coronest Aerospace'
    }
};

// 当前语言
let currentLang = 'zh';

// 语言切换功能
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新导航链接
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const zhText = link.getAttribute('data-lang-zh');
        const enText = link.getAttribute('data-lang-en');
        if (lang === 'zh') {
            link.textContent = zhText;
        } else {
            link.textContent = enText;
        }
    });
    
    // 更新页脚快速链接
    document.querySelectorAll('.footer-section a').forEach(link => {
        const zhText = link.getAttribute('data-lang-zh');
        const enText = link.getAttribute('data-lang-en');
        if (zhText && enText) {
            if (lang === 'zh') {
                link.textContent = zhText;
            } else {
                link.textContent = enText;
            }
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // 更新页面内容
    updatePageContent(lang);
    
    // 更新新闻页面内容
    updateNewsContent(lang);
    
    // 更新新闻详情页面内容
    updateNewsDetailContent(lang);
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
    
    // 更新技术与项目部分
    const techTitle = document.querySelector('#technology .section-title');
    if (techTitle) techTitle.textContent = t['technology-title'];
    
    const projectsTitle = document.querySelector('#projects .section-title');
    if (projectsTitle) projectsTitle.textContent = lang === 'zh' ? '项目展示' : 'Project Showcase';
    
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
    if (projectsTitle) projectsTitle.textContent = lang === 'zh' ? '项目展示' : 'Project Showcase';
    
    // 更新项目标题和描述
    const projectTitles = document.querySelectorAll('.project-details h3');
    if (projectTitles[0]) projectTitles[0].textContent = t['reusable-upper'];
    if (projectTitles[1]) projectTitles[1].textContent = t['engine-2000n'];
    if (projectTitles[2]) projectTitles[2].textContent = t['aerospike-engine'];
    if (projectTitles[3]) projectTitles[3].textContent = t['reusable-rocket'];
    if (projectTitles[4]) projectTitles[4].textContent = t['test-stand'];
    if (projectTitles[5]) projectTitles[5].textContent = t['injector'];
    
    const projectDescs = document.querySelectorAll('.project-description');
    if (projectDescs[0]) projectDescs[0].textContent = t['reusable-upper-desc'];
    if (projectDescs[1]) projectDescs[1].textContent = t['engine-desc'];
    if (projectDescs[2]) projectDescs[2].textContent = t['aerospike-engine-desc'];
    if (projectDescs[3]) projectDescs[3].textContent = t['rocket-desc'];
    if (projectDescs[4]) projectDescs[4].textContent = t['test-stand-desc'];
    if (projectDescs[5]) projectDescs[5].textContent = t['injector-desc'];
    
    // 更新项目规格
    updateProjectSpecs(lang);
    
    // 更新团队部分
    const teamTitle = document.querySelector('#team .section-title');
    if (teamTitle) teamTitle.textContent = t['team-title'];
    
    // 更新团队成员信息
    const teamNames = document.querySelectorAll('.team-card h3');
    if (teamNames[0]) teamNames[0].textContent = t['zheng-lixun']; // 郑立勋 (CMO)
    if (teamNames[1]) teamNames[1].textContent = t['liang-zhibin']; // 梁智斌 (CEO & CTO)
    if (teamNames[2]) teamNames[2].textContent = t['li-yiting']; // 李羿葶 (COO)
    
    const teamTitles = document.querySelectorAll('.team-title');
    if (teamTitles[0]) teamTitles[0].textContent = t['cmo']; // CMO
    if (teamTitles[1]) teamTitles[1].textContent = t['ceo-cto']; // CEO & CTO
    if (teamTitles[2]) teamTitles[2].textContent = t['coo']; // COO
    
    const teamDescs = document.querySelectorAll('.team-description');
    if (teamDescs[0]) teamDescs[0].textContent = t['zheng-desc']; // 郑立勋描述
    if (teamDescs[1]) teamDescs[1].textContent = t['liang-desc']; // 梁智斌描述
    if (teamDescs[2]) teamDescs[2].textContent = t['li-desc']; // 李羿葶描述
    
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
    
    // 更新页脚内容
    const footerSlogan = document.querySelector('.footer-section p');
    if (footerSlogan) footerSlogan.textContent = t['footer-slogan'];
    
    const quickLinksTitle = document.querySelector('.footer-section h4');
    if (quickLinksTitle) quickLinksTitle.textContent = t['quick-links'];
    
    const followUsTitle = document.querySelector('.footer-section:last-child h4');
    if (followUsTitle) followUsTitle.textContent = t['follow-us'];
    
    // 更新联系表单
    const namePlaceholder = document.querySelector('input[placeholder*="姓名"]');
    if (namePlaceholder) namePlaceholder.placeholder = t['your-name'];
    
    const emailPlaceholder = document.querySelector('input[placeholder*="邮箱"]');
    if (emailPlaceholder) emailPlaceholder.placeholder = t['your-email'];
    
    const subjectPlaceholder = document.querySelector('input[placeholder*="主题"]');
    if (subjectPlaceholder) subjectPlaceholder.placeholder = t['subject'];
    
    const messagePlaceholder = document.querySelector('textarea[placeholder*="消息"]');
    if (messagePlaceholder) messagePlaceholder.placeholder = t['your-message'];
    
    const sendButton = document.querySelector('button[type="submit"]');
    if (sendButton) sendButton.textContent = t['send-message'];
    
    // 更新页眉公司名称
    const navCompanyName = document.querySelector('.nav-logo span');
    if (navCompanyName) navCompanyName.textContent = t['company-name'];
    
    // 更新页脚公司名称
    const footerCompanyName = document.querySelector('.footer-logo span');
    if (footerCompanyName) footerCompanyName.textContent = t['company-name'];
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
    
    // 项目5 - 5000N级地面试车系统
    const project5Specs = document.querySelector('#project-5 .project-specs');
    if (project5Specs) {
        const specLabels = project5Specs.querySelectorAll('.spec-label');
        const specValues = project5Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['max-thrust'];
        if (specLabels[1]) specLabels[1].textContent = t['test-type'];
        if (specLabels[2]) specLabels[2].textContent = t['design-feature'];
        if (specLabels[3]) specLabels[3].textContent = t['application-env'];
        
        if (specValues[0]) specValues[0].textContent = t['max-thrust-value'];
        if (specValues[1]) specValues[1].textContent = t['test-type-value'];
        if (specValues[2]) specValues[2].textContent = t['design-feature-value'];
        if (specValues[3]) specValues[3].textContent = t['application-env-value'];
    }
    
    // 项目6 - 同轴涡旋式喷注器
    const project6Specs = document.querySelector('#project-6 .project-specs');
    if (project6Specs) {
        const specLabels = project6Specs.querySelectorAll('.spec-label');
        const specValues = project6Specs.querySelectorAll('.spec-value');
        
        if (specLabels[0]) specLabels[0].textContent = t['inlet-pressure'];
        if (specLabels[1]) specLabels[1].textContent = t['material'];
        if (specLabels[2]) specLabels[2].textContent = t['manufacturing'];
        if (specLabels[3]) specLabels[3].textContent = t['mixing-angle'];
        
        if (specValues[0]) specValues[0].textContent = t['inlet-pressure-value'];
        if (specValues[1]) specValues[1].textContent = t['material-value'];
        if (specValues[2]) specValues[2].textContent = t['manufacturing-value'];
        if (specValues[3]) specValues[3].textContent = t['mixing-angle-value'];
    }
}

// 更新新闻页面内容
function updateNewsContent(lang) {
    const t = translations[lang];
    
    // 更新新闻页面标题
    const newsTitle = document.querySelector('.news-hero .section-title');
    if (newsTitle) newsTitle.textContent = lang === 'zh' ? '新闻动态' : 'News';
    
    const newsSubtitle = document.querySelector('.news-subtitle');
    if (newsSubtitle) newsSubtitle.textContent = lang === 'zh' ? '关注我们的最新研发进展和技术突破' : 'Follow our latest R&D progress and technological breakthroughs';
    
    // 更新新闻项目标题和内容
    const newsTitles = document.querySelectorAll('.news-title');
    const newsExcerpts = document.querySelectorAll('.news-excerpt');
    const newsCategories = document.querySelectorAll('.news-category');
    
    if (lang === 'zh') {
        // 中文内容
        const zhTitles = [
            '2000N液体燃料发动机首次点火测试成功',
            'Aerospike发动机设计完成，进入制造阶段',
            '5000N级地面试车台建设完成',
            '同轴涡旋式喷注器技术获得突破',
            '可复用火箭整箭系统设计启动',
            '核心团队完成组建，研发能力全面提升'
        ];
        
        const zhExcerpts = [
            '我们的2000N液体燃料发动机在实验室环境下成功完成首次点火测试，推力输出稳定，燃烧效率达到预期目标。这标志着我们在自研发动机技术方面取得了重要突破...',
            '经过数月的精心设计，我们的Aerospike发动机设计方案已经完成并通过评审。该发动机采用创新的自适应环境压强技术，将在不同大气条件下保持最佳推进效率...',
            '我们的5000N级地面试车台建设已经完成，该试车台采用模块化设计，具备完善的测试能力。将为发动机测试提供安全可靠的测试环境...',
            '我们自主研发的同轴涡旋式喷注器技术取得重要突破，通过金属粉末3D打印工艺成功制造出高精度喷注器。该技术将显著提升发动机的燃烧效率...',
            '我们正式启动了100%可复用火箭整箭系统的设计工作。该项目将整合所有自主研发技术，打造完整的可复用火箭系统，预计2026年完成首飞...',
            '我们的核心团队已经完成组建，包括CEO&CTO梁智斌、CMO郑立勋、COO李羿葶等资深专家。团队具备丰富的航天领域经验，将为项目发展提供强大支撑...'
        ];
        
        const zhCategories = [
            '技术突破',
            '研发进展',
            '基础设施',
            '技术创新',
            '项目进展',
            '团队动态'
        ];
        
        newsTitles.forEach((title, index) => {
            if (zhTitles[index]) title.textContent = zhTitles[index];
        });
        
        newsExcerpts.forEach((excerpt, index) => {
            if (zhExcerpts[index]) excerpt.textContent = zhExcerpts[index];
        });
        
        newsCategories.forEach((category, index) => {
            if (zhCategories[index]) category.textContent = zhCategories[index];
        });
    } else {
        // 英文内容
        const enTitles = [
            '2000N Liquid Fuel Engine First Ignition Test Successful',
            'Aerospike Engine Design Completed, Entering Manufacturing Phase',
            '5000N Level Ground Test Stand Construction Completed',
            'Coaxial Swirl Injector Technology Breakthrough',
            'Reusable Rocket System Design Initiated',
            'Core Team Assembly Completed, R&D Capability Significantly Enhanced'
        ];
        
        const enExcerpts = [
            'Our 2000N liquid fuel engine successfully completed its first ignition test in a laboratory environment, with stable thrust output and combustion efficiency meeting expected targets. This marks an important breakthrough in our self-developed engine technology...',
            'After months of careful design, our Aerospike engine design plan has been completed and approved. This engine uses innovative adaptive environmental pressure technology to maintain optimal propulsion efficiency under different atmospheric conditions...',
            'Our 5000N level ground test stand construction has been completed. This test stand adopts a modular design with comprehensive testing capabilities, providing a safe and reliable testing environment for engine testing...',
            'Our self-developed coaxial swirl injector technology has achieved an important breakthrough, successfully manufacturing high-precision injectors through metal powder 3D printing technology. This technology will significantly improve engine combustion efficiency...',
            'We have officially initiated the design work for the 100% reusable rocket system. This project will integrate all self-developed technologies to create a complete reusable rocket system, expected to complete its first flight in 2026...',
            'Our core team has completed assembly, including senior experts such as CEO&CTO Liang Zhibin, CMO Zheng Lixun, COO Li Yiting, etc. The team has rich aerospace experience and will provide strong support for project development...'
        ];
        
        const enCategories = [
            'Technology Breakthrough',
            'R&D Progress',
            'Infrastructure',
            'Technology Innovation',
            'Project Progress',
            'Team Dynamics'
        ];
        
        newsTitles.forEach((title, index) => {
            if (enTitles[index]) title.textContent = enTitles[index];
        });
        
        newsExcerpts.forEach((excerpt, index) => {
            if (enExcerpts[index]) excerpt.textContent = enExcerpts[index];
        });
        
        newsCategories.forEach((category, index) => {
            if (enCategories[index]) category.textContent = enCategories[index];
        });
    }
    
    // 更新"阅读更多"链接
    const readMoreLinks = document.querySelectorAll('.news-link');
    readMoreLinks.forEach(link => {
        const icon = link.querySelector('i');
        link.innerHTML = lang === 'zh' ? '阅读更多 ' : 'Read More ';
        if (icon) link.appendChild(icon);
    });
    
    // 更新视频区域内容
    const videoTitle = document.querySelector('.video-section .section-title');
    if (videoTitle) {
        const zhText = videoTitle.getAttribute('data-lang-zh');
        const enText = videoTitle.getAttribute('data-lang-en');
        if (zhText && enText) {
            videoTitle.textContent = lang === 'zh' ? zhText : enText;
        }
    }
    
    const videoSubtitle = document.querySelector('.video-subtitle');
    if (videoSubtitle) {
        const zhText = videoSubtitle.getAttribute('data-lang-zh');
        const enText = videoSubtitle.getAttribute('data-lang-en');
        if (zhText && enText) {
            videoSubtitle.textContent = lang === 'zh' ? zhText : enText;
        }
    }
    
    const videoInfoTitle = document.querySelector('.video-info h3');
    if (videoInfoTitle) {
        const zhText = videoInfoTitle.getAttribute('data-lang-zh');
        const enText = videoInfoTitle.getAttribute('data-lang-en');
        if (zhText && enText) {
            videoInfoTitle.textContent = lang === 'zh' ? zhText : enText;
        }
    }
    
    const videoInfoDesc = document.querySelector('.video-info p');
    if (videoInfoDesc) {
        const zhText = videoInfoDesc.getAttribute('data-lang-zh');
        const enText = videoInfoDesc.getAttribute('data-lang-en');
        if (zhText && enText) {
            videoInfoDesc.textContent = lang === 'zh' ? zhText : enText;
        }
    }
}

// 更新新闻详情页面内容
function updateNewsDetailContent(lang) {
    const t = translations[lang];
    
    // 更新面包屑导航
    const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
    breadcrumbLinks.forEach(link => {
        const zhText = link.getAttribute('data-lang-zh');
        const enText = link.getAttribute('data-lang-en');
        if (zhText && enText) {
            link.textContent = lang === 'zh' ? zhText : enText;
        }
    });
    
    const breadcrumbSpan = document.querySelector('.breadcrumb span');
    if (breadcrumbSpan) {
        const zhText = breadcrumbSpan.getAttribute('data-lang-zh');
        const enText = breadcrumbSpan.getAttribute('data-lang-en');
        if (zhText && enText) {
            breadcrumbSpan.textContent = lang === 'zh' ? zhText : enText;
        }
    }
    
    // 更新新闻详情标题和内容
    const newsDetailTitle = document.querySelector('.news-detail-title');
    const newsDetailSubtitle = document.querySelector('.news-detail-subtitle');
    const newsCategory = document.querySelector('.news-detail-header .news-category');
    
    if (lang === 'zh') {
        if (newsDetailTitle) newsDetailTitle.textContent = '2000N液体燃料发动机首次点火测试成功';
        if (newsDetailSubtitle) newsDetailSubtitle.textContent = '我们的2000N液体燃料发动机在实验室环境下成功完成首次点火测试，这标志着我们在自研发动机技术方面取得了重要突破。';
        if (newsCategory) newsCategory.textContent = '技术突破';
    } else {
        if (newsDetailTitle) newsDetailTitle.textContent = '2000N Liquid Fuel Engine First Ignition Test Successful';
        if (newsDetailSubtitle) newsDetailSubtitle.textContent = 'Our 2000N liquid fuel engine successfully completed its first ignition test in a laboratory environment, marking an important breakthrough in our self-developed engine technology.';
        if (newsCategory) newsCategory.textContent = 'Technology Breakthrough';
    }
    
    // 更新新闻正文内容
    const newsBody = document.querySelector('.news-detail-body');
    if (newsBody) {
        if (lang === 'zh') {
            newsBody.innerHTML = `
                <p>经过数月的精心设计和准备，我们的2000N液体燃料发动机在实验室环境下成功完成首次点火测试。测试过程中，发动机推力输出稳定，燃烧效率达到预期目标，各项技术指标均符合设计要求。</p>
                
                <h2>测试详情</h2>
                <p>本次测试在严格控制的环境条件下进行，测试时间持续30秒，发动机推力稳定在2000N左右，燃烧室压力保持在设计范围内。测试过程中，发动机运行平稳，无异常振动和噪音。</p>
                
                <h2>技术突破</h2>
                <p>此次成功测试标志着我们在以下技术领域取得了重要突破：</p>
                <ul>
                    <li>自研发动机设计技术</li>
                    <li>燃料喷射和混合技术</li>
                    <li>燃烧室热管理技术</li>
                    <li>发动机控制系统</li>
                </ul>
                
                <h2>下一步计划</h2>
                <p>基于此次测试的成功，我们将继续推进发动机的优化工作，包括：</p>
                <ul>
                    <li>提高发动机效率</li>
                    <li>延长测试时间</li>
                    <li>进行多次点火测试</li>
                    <li>集成到火箭系统中</li>
                </ul>
                
                <p>这次测试的成功为我们后续的火箭发射项目奠定了坚实的技术基础，我们将继续努力，为中国的航天事业贡献力量。</p>
            `;
        } else {
            newsBody.innerHTML = `
                <p>After months of careful design and preparation, our 2000N liquid fuel engine successfully completed its first ignition test in a laboratory environment. During the test, the engine's thrust output was stable, combustion efficiency met expected targets, and all technical indicators met design requirements.</p>
                
                <h2>Test Details</h2>
                <p>This test was conducted under strictly controlled environmental conditions, with a test duration of 30 seconds. The engine thrust remained stable at around 2000N, and the combustion chamber pressure stayed within the design range. During the test, the engine ran smoothly with no abnormal vibrations or noise.</p>
                
                <h2>Technology Breakthrough</h2>
                <p>This successful test marks important breakthroughs in the following technical areas:</p>
                <ul>
                    <li>Self-developed engine design technology</li>
                    <li>Fuel injection and mixing technology</li>
                    <li>Combustion chamber thermal management technology</li>
                    <li>Engine control system</li>
                </ul>
                
                <h2>Next Steps</h2>
                <p>Based on the success of this test, we will continue to advance engine optimization work, including:</p>
                <ul>
                    <li>Improving engine efficiency</li>
                    <li>Extending test duration</li>
                    <li>Conducting multiple ignition tests</li>
                    <li>Integration into rocket systems</li>
                </ul>
                
                <p>The success of this test has laid a solid technical foundation for our subsequent rocket launch projects. We will continue to work hard to contribute to China's aerospace industry.</p>
            `;
        }
    }
    
    // 更新相关新闻标题
    const relatedNewsTitle = document.querySelector('.related-news h3');
    if (relatedNewsTitle) relatedNewsTitle.textContent = lang === 'zh' ? '相关新闻' : 'Related News';
    
    // 更新相关新闻内容
    const relatedNewsItems = document.querySelectorAll('.related-news-item');
    if (lang === 'zh') {
        const zhRelatedTitles = [
            'Aerospike发动机设计完成',
            '5000N级地面试车台建设完成'
        ];
        const zhRelatedExcerpts = [
            '经过数月的精心设计，我们的Aerospike发动机设计方案已经完成并通过评审...',
            '我们的5000N级地面试车台建设已经完成，该试车台采用模块化设计...'
        ];
        
        relatedNewsItems.forEach((item, index) => {
            const title = item.querySelector('h4');
            const excerpt = item.querySelector('p');
            const link = item.querySelector('a');
            
            if (title && zhRelatedTitles[index]) title.textContent = zhRelatedTitles[index];
            if (excerpt && zhRelatedExcerpts[index]) excerpt.textContent = zhRelatedExcerpts[index];
            if (link) link.textContent = '阅读更多';
        });
    } else {
        const enRelatedTitles = [
            'Aerospike Engine Design Completed',
            '5000N Level Ground Test Stand Construction Completed'
        ];
        const enRelatedExcerpts = [
            'After months of careful design, our Aerospike engine design plan has been completed and approved...',
            'Our 5000N level ground test stand construction has been completed. This test stand adopts a modular design...'
        ];
        
        relatedNewsItems.forEach((item, index) => {
            const title = item.querySelector('h4');
            const excerpt = item.querySelector('p');
            const link = item.querySelector('a');
            
            if (title && enRelatedTitles[index]) title.textContent = enRelatedTitles[index];
            if (excerpt && enRelatedExcerpts[index]) excerpt.textContent = enRelatedExcerpts[index];
            if (link) link.textContent = 'Read More';
        });
    }
}

// 视频播放功能
function initVideoPlayer() {
    const video = document.getElementById('project-video');
    const playBtn = document.getElementById('play-btn');
    const overlay = document.querySelector('.video-overlay');
    
    if (!video || !playBtn || !overlay) return;
    
    // 播放按钮点击事件
    playBtn.addEventListener('click', function() {
        video.play();
        overlay.classList.add('hidden');
    });
    
    // 视频播放时隐藏覆盖层
    video.addEventListener('play', function() {
        overlay.classList.add('hidden');
    });
    
    // 视频暂停时显示覆盖层
    video.addEventListener('pause', function() {
        overlay.classList.remove('hidden');
    });
    
    // 视频结束时显示覆盖层
    video.addEventListener('ended', function() {
        overlay.classList.remove('hidden');
    });
    
    // 视频加载错误处理
    video.addEventListener('error', function() {
        console.log('视频加载失败，请检查视频文件是否存在');
        overlay.innerHTML = '<p style="color: white; font-size: 1.2rem;">视频加载失败</p>';
    });
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

    // 初始化视频播放器
    initVideoPlayer();
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
