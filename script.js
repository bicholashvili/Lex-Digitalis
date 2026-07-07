document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        ka: {
            brand: 'Lex Digitalis',
            nav_about: 'ჩვენს შესახებ',
            nav_team: 'ჩვენი გუნდი',
            nav_clients: 'ჩვენი კლიენტები',
            nav_public: 'საჯარო სექტორისთვის',
            nav_private: 'კერძო სექტორისათვის',
            cta_consult: 'კონსულტაციის მოთხოვნა',
            hero_title: 'Lex Digitalis — სადაც სამართალი და ციფრული ინოვაცია ერწყმის ერთმანეთს',
            hero_subtitle: 'ტექნოლოგიების ინტეგრაცია სამუშაო პროცესში საჯარო და კერძო სექტორისთვის.',
            hero_cta_primary: 'ითანამშრომლეთ ჩვენთან',
            about_title: 'ორმაგი უპირატესობა — სრული სამართლებრივი და ტექნოლოგიური მომსახურება',
            about_text: 'Lex Digitalis წარმოადგენს ინოვაციურ პლატფორმას, რომელიც უზრუნველყოფს უმაღლესი სტანდარტის კომპლექსურ მომსახურებას როგორც სამართლებრივი, ისე ტექნოლოგიური მიმართულებით. ჩვენი გუნდი აერთიანებს მაღალკვალიფიციურ იურისტებს, პოლიტიკის დოკუმენტების ავტორებსა და ციფრული ტრანსფორმაციის ექსპერტებს მრავალწლიანი პრაქტიკული გამოცდილებით. ჩვენ ვეხმარებით საჯარო და კერძო სექტორის წარმომადგენლებს რთული ბიუროკრატიული თუ სამართლებრივი ბარიერების გადალახვაში, რეგულაციებთან შესაბამისობის უზრუნველყოფასა და თანამედროვე ტექნოლოგიური (მათ შორის ხელოვნური ინტელექტის) ინსტრუმენტების უსაფრთხო, ეფექტიან ინტეგრაციაში.',
            about_legal_title: 'იურისტების გუნდი',
            about_legal_desc: 'გამოცდილი ადვოკატები, აკადემიური პერსონალი, სამართალშემოქმედები და პოლიტიკის დოკუმენტების ავტორები.',
            about_tech_title: 'ტექნოლოგიური გუნდი',
            about_tech_desc: 'მანქანური სწავლების ინჟინრები, IT ინფრასტრუქტურის სპეციალისტები და ციფრული ტრანსფორმაციის კონსულტანტები.',
            clients_text: 'ჩვენ ვთანამშრომლობთ სახელმწიფო უწყებებთან და კერძო კომპანიებთან, რათა უზრუნველვყოთ მათი საქმიანობის ეფექტიანობა და სამართლებრივი გამართულობა, ასევე, ქართულ და უცხოურ სამეცნიერო დაწესებულებებთან, ინოვაციური მიდგომების გაზიარებისთვის.',
            service1_title: 'VASP ლიცენზირება და კრიპტორეგულაციების მხარდაჭერა',
            service1_desc: 'სრული გზამკვლევი საქართველოს ეროვნული ბანკისგან ვირტუალური აქტივის მომსახურების პროვაიდერის (VASP) სტატუსის მოსაპოვებლად.',
            service2_title: 'საჯარო სექტორის ციფრული ტრანსფორმაცია',
            service2_desc: 'საჯარო მმართველობის სამუშაო პროცესების ავტომატიზაცია, უქაღალდო, ღრუბლოვან ტექნოლოგიებთან თავსებად ოპერაციებზე გადასვლა.',
            service3_title: 'ადმინისტრაციული წარმოების/დოკუმენტბრუნვის AI ავტომატიზაცია',
            service3_desc: 'ადმინისტრაციულ ორგანოებში ხელოვნური ინტელექტის (AI) ინსტრუმენტების დანერგვა და შესაბამისი ინსტრუქციების/შიდა მოქმედების აქტების შემუშავება.',
            service4_title: 'სისხლისსამართლებრივი წარმოების გაციფრულება და ავტომატიზაცია',
            service4_desc: 'AI სისტემების დანერგვა საქმის მასალების ანალიზის, პროცესების ავტომატიზაციისა და მტკიცებულებათა კლასიფიკაციისთვის ევროდირექტივის მოთხოვნათა შესაბამისად.',
            service5_title: 'პერსონალურ მონაცემთა დაცვა და შესაბამისობა',
            service5_desc: 'პერსონალურ მონაცემთა უსაფრთხოების მკაცრი სახელმძღვანელო პრინციპების, ზეგავლენის შეფასებისა და რეაგირების მექანიზმების შემუშავება, საქართველოს კანონმდებლობასა და GDPR-თან თავსებადობით.',
            service6_title: 'ტრენინგ-ცენტრი საჯარო მოხელეთათვის',
            service6_desc: 'უმაღლესი დონის სასერტიფიკატო პროგრამები და კურსები, რომლებიც შექმნილია საჯარო მოხელეების ტექნიკური წიგნიერებისა და შესაბამისობის (compliance) უნარების ასამაღლებლად.',
            service_link: 'დეტალურად',
            contact_title: 'დაგვიკავშირდით',
            contact_subtitle: 'შეავსეთ ფორმა და ჩვენი იურისტი 24 საათში დაგიკავშირდებათ.',
            form_fullname: 'სახელი, გვარი *',
            form_fullname_placeholder: 'სახელი, გვარი',
            form_org: 'ორგანიზაცია / კომპანია',
            form_org_placeholder: 'ორგანიზაცია / კომპანია',
            form_email: 'ელ. ფოსტა *',
            form_email_placeholder: 'ელ. ფოსტა',
            form_phone: 'ტელეფონი *',
            form_phone_placeholder: 'ტელეფონი',
            form_service: 'მომსახურების სფერო',
            form_service_placeholder: 'აირჩიეთ...',
            form_message: 'პროექტის / შეკითხვის აღწერა',
            form_message_placeholder: 'აღწერეთ თქვენი ამოცანა...',
            form_consent: 'ვეთანხმები, რომ ჩემს მიერ გაგზავნილი მონაცემები დამუშავდეს Lex Digitalis-ის კონფიდენციალურობის პოლიტიკის შესაბამისად.',
            form_submit: 'მოთხოვნის გაგზავნა',
            modal_title: 'მოთხოვნა გაიგზავნა!',
            modal_text: 'მადლობა! ჩვენი იურისტი მალე დაგიკავშირდებათ.',
            modal_btn: 'კარგი',
            footer_address: 'თბილისი, საქართველო',
            footer_copyright: '© 2026 Lex Digitalis. ყველა უფლება დაცულია.',
            footer_legal_info: 'სამართლებრივი ინფორმაცია',
            footer_privacy: 'კონფიდენციალურობის პოლიტიკა',
            footer_social: 'სოციალური ქსელები'
        },
        en: {
            brand: 'Lex Digitalis',
            nav_about: 'About Us',
            nav_team: 'Our Team',
            nav_clients: 'Our Clients',
            nav_public: 'For Public Sector',
            nav_private: 'For Private Sector',
            cta_consult: 'Request Consultation',
            hero_title: 'Lex Digitalis — Where Law Meets Digital Innovation',
            hero_subtitle: 'Integration of technology in workflows for the public and private sectors.',
            hero_cta_primary: 'Partner with Us',
            about_title: 'The Dual Edge – Full Legal and Technological Services',
            about_text: 'Lex Digitalis is an innovative platform providing top-tier, comprehensive services in both legal and technological domains. Our team unites highly qualified advocates, policy document authors, and digital transformation experts with years of practical experience. We assist representatives of the public and private sectors in overcoming complex bureaucratic and legal barriers, ensuring regulatory compliance, and securely and efficiently integrating modern technological (including AI) tools.',
            about_legal_title: 'Legal Team',
            about_legal_desc: 'Experienced advocates, academic personnel, lawmakers, and policy document authors.',
            about_tech_title: 'Tech Team',
            about_tech_desc: 'Machine learning engineers, IT infrastructure specialists, and digital transformation advisors.',
            clients_text: 'We collaborate with government agencies and private companies to ensure the efficiency and legal soundness of their operations, as well as with Georgian and foreign scientific institutions to share innovative approaches.',
            service1_title: 'VASP Licensing & Crypto Regulations Support',
            service1_desc: 'Complete roadmap to securing Virtual Asset Service Provider licensing from the National Bank of Georgia.',
            service2_title: 'Public Sector Digital Transition',
            service2_desc: 'Automation of public administration workflows, transition to paperless, cloud-compliant operations.',
            service3_title: 'AI Automation of Administrative Procedures',
            service3_desc: 'Implementation of AI tools in administrative bodies and development of relevant instructions/internal acts.',
            service4_title: 'Digitization and Automation of Criminal Procedure',
            service4_desc: 'Implementation of AI systems for case file analysis, process automation, and evidence classification in accordance with the requirements of the European Directive.',
            service5_title: 'Personal Data Protection and Compliance',
            service5_desc: 'Development of rigorous personal data security guidelines, impact assessments, and response frameworks tailored to Georgian legislation and GDPR.',
            service6_title: 'Training Center for Public Officials',
            service6_desc: 'Premium certification programs and courses designed to upgrade the technical literacy and compliance capacity of public servants.',
            service_link: 'Details',
            contact_title: 'Contact Us',
            contact_subtitle: 'Fill in the form and our lawyer will get back to you within 24 hours.',
            form_fullname: 'First Name, Last Name *',
            form_fullname_placeholder: 'First Name, Last Name',
            form_org: 'Organization / Company',
            form_org_placeholder: 'Organization / Company',
            form_email: 'Email *',
            form_email_placeholder: 'Email',
            form_phone: 'Phone *',
            form_phone_placeholder: 'Phone',
            form_service: 'Service Area',
            form_service_placeholder: 'Select...',
            form_message: 'Project / Question Description',
            form_message_placeholder: 'Describe your task...',
            form_consent: 'I agree that my submitted data will be processed in accordance with Lex Digitalis\' Privacy Policy.',
            form_submit: 'Submit Request',
            modal_title: 'Request Sent!',
            modal_text: 'Thank you! Our lawyer will contact you shortly.',
            modal_btn: 'OK',
            footer_address: 'Tbilisi, Georgia',
            footer_copyright: '© 2026 Lex Digitalis. All rights reserved.',
            footer_legal_info: 'Legal Information',
            footer_privacy: 'Privacy Policy',
            footer_social: 'Social Networks'
        }
    };

    let currentLang = 'ka';
    const langElements = document.querySelectorAll('[data-lang-key]');

    function applyLanguage(lang) {
        if (!translations[lang]) return;
        const dict = translations[lang];
        langElements.forEach(el => {
            const key = el.dataset.langKey;
            // Пропускаем hero_title, так как он печатается через скрипт
            if (dict[key] !== undefined && key !== 'hero_title') {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
            const key = el.dataset.langKeyPlaceholder;
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        const select = document.getElementById('serviceArea');
        if (select) {
            const options = select.querySelectorAll('option');
            options.forEach(opt => {
                if (opt.value === '') {
                    opt.textContent = dict.form_service_placeholder || 'აირჩიეთ...';
                } else if (lang === 'en') {
                    if(opt.value === 'VASP / Crypto') opt.textContent = 'VASP / Crypto';
                    if(opt.value === 'საჯარო სექტორი') opt.textContent = 'Public Sector';
                    if(opt.value === 'AI ავტომატიზაცია') opt.textContent = 'AI Automation';
                    if(opt.value === 'სისხლისსამართლებრივი წარმოება') opt.textContent = 'Criminal Procedure';
                    if(opt.value === 'მონაცემთა დაცვა') opt.textContent = 'Data Privacy';
                    if(opt.value === 'ტრენინგები') opt.textContent = 'Training';
                } else {
                    opt.textContent = opt.value;
                }
            });
        }

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
        });

        document.documentElement.lang = lang;
        updateHreflang(lang);
        localStorage.setItem('lex_lang', lang);
        currentLang = lang;
    }

    function updateHreflang(lang) {
        document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
        const baseUrl = 'https://lexdigitalis.ge';
        const links = [
            { hreflang: 'ka', href: baseUrl + '/' },
            { hreflang: 'en', href: baseUrl + '/en/' }
        ];
        links.forEach(item => {
            const link = document.createElement('link');
            link.rel = 'alternate';
            link.hreflang = item.hreflang;
            link.href = item.href;
            document.head.appendChild(link);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (lang === currentLang) return;
            applyLanguage(lang);
        });
    });

    const savedLang = localStorage.getItem('lex_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language || navigator.languages?.[0] || 'ka';
        currentLang = browserLang.startsWith('en') ? 'en' : 'ka';
    }
    applyLanguage(currentLang);

    // ==========================================
    // ЛОГИКА ЭФФЕКТА ПЕЧАТНОЙ МАШИНКИ (Typewriter)
    // ==========================================
    const typewriterEl = document.getElementById('typewriter');
    let typeCharIndex = 0;
    let isDeletingType = false;

    function typeWriter() {
        if (!typewriterEl) return;
        const currentText = translations[currentLang].hero_title;
        
        // Предотвращение ошибок при переключении языка
        if (typeCharIndex > currentText.length) {
            typeCharIndex = currentText.length;
        }

        if (isDeletingType) {
            typeCharIndex--;
        } else {
            typeCharIndex++;
        }

        typewriterEl.textContent = currentText.substring(0, typeCharIndex);

        // Скорость печати и удаления
        let typeSpeed = isDeletingType ? 25 : 60;

        if (!isDeletingType && typeCharIndex === currentText.length) {
            // Пауза перед удалением (3 секунды)
            typeSpeed = 3000; 
            isDeletingType = true;
        } else if (isDeletingType && typeCharIndex === 0) {
            // Пауза перед тем, как начать печатать заново
            isDeletingType = false;
            typeSpeed = 500; 
        }

        setTimeout(typeWriter, typeSpeed);
    }
    // Запускаем печатную машинку через небольшую паузу
    setTimeout(typeWriter, 500);

    // ==========================================
    // ОСТАЛЬНАЯ ЛОГИКА (Мобильное меню, Форма)
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('nav--open');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
        });
    });

    const form = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    const modalClose = document.getElementById('modalClose');
    const modalBtn = document.getElementById('modalBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const consent = document.getElementById('consent');

        let valid = true;
        if (!fullName.value.trim()) {
            alert(currentLang === 'ka' ? 'გთხოვთ, მიუთითოთ სახელი და გვარი.' : 'Please enter your name and last name.');
            fullName.focus();
            valid = false;
        } else if (!email.value.trim() || !email.validity.valid) {
            alert(currentLang === 'ka' ? 'გთხოვთ, მიუთითოთ ვალიდური ელ. ფოსტა.' : 'Please enter a valid email address.');
            email.focus();
            valid = false;
        } else if (!phone.value.trim()) {
            alert(currentLang === 'ka' ? 'გთხოვთ, მიუთითოთ ტელეფონის ნომერი.' : 'Please enter your phone number.');
            phone.focus();
            valid = false;
        } else if (!consent.checked) {
            alert(currentLang === 'ka' ? 'გთხოვთ, დაეთანხმოთ კონფიდენციალურობის პირობებს.' : 'Please agree to the privacy policy terms.');
            consent.focus();
            valid = false;
        }
        if (!valid) return;

        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            modal.classList.add('modal--open');
            form.reset();
        })
        .catch(() => {
            alert(currentLang === 'ka' ? 'დაფიქსირდა შეცდომა. გთხოვთ, სცადოთ მოგვიანებით.' : 'An error occurred. Please try again later.');
        });
    });

    function closeModal() {
        modal.classList.remove('modal--open');
    }
    modalClose.addEventListener('click', closeModal);
    modalBtn.addEventListener('click', closeModal);
    modal.querySelector('.modal__overlay').addEventListener('click', closeModal);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // NETWORK CANVAS LOGIC (Анимация связей)
    // ==========================================
    const canvas = document.getElementById('networkCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // СКОРОСТЬ УВЕЛИЧЕНА В 2 РАЗА (было 0.4, стало 0.8)
                this.vx = (Math.random() - 0.5) * 0.8; 
                this.vy = (Math.random() - 0.5) * 0.8;
                this.char = Math.random() > 0.5 ? '0' : '1';
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.font = '14px monospace';
                // ЧАСТИЦЫ СТАЛИ НАМНОГО ЯРЧЕ (непрозрачность 0.9 вместо 0.4)
                ctx.fillStyle = 'rgba(14, 165, 233, 0.9)'; 
                ctx.fillText(this.char, this.x, this.y);
            }
        }

        const particleCount = window.innerWidth > 768 ? 75 : 35;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    // ЛИНИИ ПРОРИСОВЫВАЮТСЯ ДАЛЬШЕ И ЯРЧЕ
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(14, 165, 233, ${0.5 - dist/300})`; 
                        ctx.lineWidth = 1.2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        animate();
    }
});