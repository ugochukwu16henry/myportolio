
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Portfolio Category Selection
        const categoryCards = document.querySelectorAll('.category-card');

        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                filterProjects(category);

                // Update active filter button
                document.querySelectorAll('.showcase-filter').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-filter') === category ||
                        (category === 'all' && btn.getAttribute('data-filter') === 'all')) {
                        btn.classList.add('active');
                    }
                });
            });
        });

        // Project Filtering
        const filterBtns = document.querySelectorAll('.showcase-filter');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(button => button.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                filterProjects(filter);
            });
        });

        function filterProjects(filter) {
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Project Modal
        const projectModal = document.getElementById('projectModal');
        const closeModal = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const modalDescription = document.getElementById('modalDescription');
        const modalTech = document.getElementById('modalTech');
        const modalLiveLink = document.getElementById('modalLiveLink');
        const modalCaseStudy = document.getElementById('modalCaseStudy');

        // Sample project data (in a real site, this would come from a database)
        const projects = {
            'family-education-blog': {
                title: 'Family Education Blog',
                image: 'https://via.placeholder.com/800x400',
                description: 'A comprehensive blog platform focused on family education, featuring responsive design, category organization, comment systems, and social sharing capabilities. The site includes resources for parents, educators, and family counselors with an intuitive content management system.',
                technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Responsive Design'],
                liveLink: '#',
                caseStudy: '#'
            },
            'ams-solutions': {
                title: 'AMS Solutions Corporate Website',
                image: 'https://via.placeholder.com/800x400',
                description: 'A professional corporate website for a business process outsourcing company. Features include service showcases, client testimonials, team profiles, and a secure client portal for project management and communication.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
                liveLink: '#',
                caseStudy: '#'
            },
            'family-games-store': {
                title: 'Family Games E-store',
                image: 'https://via.placeholder.com/800x400',
                description: 'A fully-featured e-commerce platform specializing in educational and family-oriented games. Includes product catalogs, shopping cart functionality, secure payment processing, inventory management, and order tracking systems.',
                technologies: ['Shopify', 'Liquid', 'JavaScript', 'Payment Gateway API'],
                liveLink: '#',
                caseStudy: '#'
            }
        };

        // Open modal when project links are clicked
        document.querySelectorAll('.project-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const projectCard = link.closest('.project-card');
                const projectTitle = projectCard.querySelector('h3').textContent;

                // Find matching project data
                let projectKey = '';
                if (projectTitle.includes('Family Education Blog')) projectKey = 'family-education-blog';
                if (projectTitle.includes('AMS Solutions')) projectKey = 'ams-solutions';
                if (projectTitle.includes('Family Games')) projectKey = 'family-games-store';

                if (projects[projectKey]) {
                    const project = projects[projectKey];
                    modalTitle.textContent = project.title;
                    modalImage.src = project.image;
                    modalDescription.textContent = project.description;

                    // Clear and repopulate technologies
                    modalTech.innerHTML = '';
                    project.technologies.forEach(tech => {
                        const techElement = document.createElement('span');
                        techElement.className = 'tech-item';
                        techElement.textContent = tech;
                        modalTech.appendChild(techElement);
                    });

                    modalLiveLink.href = project.liveLink;
                    modalCaseStudy.href = project.caseStudy;

                    projectModal.style.display = 'block';
                }
            });
        });

        // Close modal
        closeModal.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    