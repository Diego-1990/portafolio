const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector(".form-note");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const githubLinks = document.querySelectorAll("[data-github-link]");
const linkedinLinks = document.querySelectorAll("[data-linkedin-link]");
const emailLinks = document.querySelectorAll("[data-email-link]");

const EMAIL_USER = "sandovaldiego0510";
const EMAIL_DOMAIN = "gmail";
const EMAIL_TLD = "com";
const PROFILE_EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}.${EMAIL_TLD}`;
const GITHUB_URL = "https://github.com/Diego-1990";
const LINKEDIN_URL = "https://www.linkedin.com/in/diego-sandoval-0b5636412/";

const translations = {
  es: {
    "title.home": "DEV_CORE | Portafolio de Programador",
    "title.projects": "Proyectos | DEV_CORE",
    "title.skills": "Habilidades | DEV_CORE",
    "title.contact": "Contacto | DEV_CORE",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.cta": "Mi CV",
    "home.titleA": "Ingeniero de Software &",
    "home.titleB": "Arquitecto de Sistemas",
    "home.lead": "Desarrollo aplicaciones web con Java, Spring Boot, SQL y PostgreSQL, enfocadas en rendimiento, organizacion y soluciones utiles para negocios.",
    "home.primary": "Ver proyectos",
    "home.secondary": "Contactar",
    "home.role": "Programador web",
    "home.identity": "ARCHIVO DE IDENTIDAD",
    "projects.label": "PROYECTOS",
    "projects.title": "Proyectos Seleccionados",
    "projects.lead": "Estos son los proyectos principales que muestran mi enfoque: sitios utiles, visuales y orientados a negocios reales.",
    "projects.heading": "Proyectos principales",
    "projects.statusFullstack": "FULLSTACK",
    "projects.statusBackend": "Gestion",
    "projects.statusCommerce": "ECOMMERCE",
    "projects.statusFrontend": "Interfaz",
    "projects.statusPos": "POS",
    "projects.openCase": "Ver proyecto",
    "projects.refFitai": "Fitness con IA",
    "projects.refGym": "Gestion de gimnasio",
    "projects.refImperial": "Tienda ecommerce",
    "projects.refQuezza": "Operacion restaurante",
    "projects.refPortfolio": "Portafolio web",
    "projects.fitaiTitle": "FitAI Coach",
    "projects.fitaiText": "Plataforma fitness inteligente para atletas. Genera rutinas y planes de alimentacion con IA, registra progreso corporal y muestra metricas en un dashboard moderno.",
    "projects.gymTitle": "Sistema para Gimnasio",
    "projects.gymText": "Sistema administrativo para gimnasios. Organiza atletas, instructores y administradores, asigna rutinas/dietas y centraliza el seguimiento interno del progreso fisico.",
    "projects.perfumeTitle": "Imperial Parfums",
    "projects.perfumeText": "Ecommerce fullstack premium para perfumes. Incluye autenticacion JWT, roles USER/SELLER/ADMIN, catalogo publico, carrito persistente, panel vendedor y panel admin.",
    "projects.quezzaTitle": "Quezza Restaurant POS",
    "projects.quezzaText": "Sistema web POS para restaurantes con gestion de mesas, ordenes, cocina, caja, inventario y usuarios por roles.",
    "projects.previewStore": "Tienda",
    "projects.previewProduct": "Producto",
    "projects.previewCart": "Carrito",
    "projects.caseLabel": "CASO DE PROYECTO",
    "projects.caseTitle": "Imperial Parfums",
    "projects.caseText": "Las pantallas muestran un ecommerce premium completo: landing de marca, catalogo con busqueda y filtros, detalle de producto, autenticacion, carrito y resumen de compra.",
    "projects.casePointOne": "Experiencia visual tipo tienda de lujo",
    "projects.casePointTwo": "Flujo real de compra con carrito persistente",
    "projects.casePointThree": "Roles USER, SELLER y ADMIN conectados al backend",
    "projects.caseHome": "Inicio de marca",
    "projects.caseCatalog": "Catalogo con filtros",
    "projects.caseDetail": "Detalle de producto",
    "projects.caseAccount": "Login y registro",
    "projects.caseCart": "Carrito y checkout",
    "detail.back": "Volver a proyectos",
    "detail.overview": "Resumen",
    "detail.features": "Funciones principales",
    "detail.screens": "Pantallas del proyecto",
    "detail.stack": "Stack tecnico",
    "imperial.title": "Imperial Parfums",
    "imperial.lead": "Tienda premium de perfumes con catalogo, autenticacion JWT, roles, carrito persistente y paneles para vendedor y administrador.",
    "imperial.overview": "Imperial Parfums simula una plataforma ecommerce real para venta de perfumes de lujo. El proyecto separa frontend y backend, protege rutas por roles y conecta el carrito, catalogo y cuenta del usuario con una API REST.",
    "imperial.featureOne": "Registro, login, JWT y refresh tokens.",
    "imperial.featureTwo": "Roles USER, SELLER y ADMIN.",
    "imperial.featureThree": "Catalogo publico con busqueda y filtros.",
    "imperial.featureFour": "Carrito conectado al backend e historial de pedidos.",
    "imperial.featureFive": "Panel vendedor para productos y panel admin para usuarios y ordenes.",
    "imperial.screenHome": "Presenta la identidad premium del ecommerce y lleva al usuario a explorar perfumes o crear cuenta.",
    "imperial.screenCatalog": "Permite buscar fragancias y filtrar por genero, notas olfativas y orden de productos.",
    "imperial.screenDetail": "Muestra precio, descripcion, notas y accion principal para agregar el perfume al carrito.",
    "imperial.screenAccount": "Centraliza acceso y creacion de cuenta para guardar la experiencia del usuario.",
    "imperial.screenCart": "Resume productos seleccionados, subtotal y flujo para continuar compra o ir a checkout.",
    "fitai.lead": "Aplicacion fitness fullstack para atletas que genera rutinas y dietas con IA, registra progreso corporal y muestra estadisticas en un dashboard profesional.",
    "fitai.overview": "FitAI Coach esta pensado como una plataforma SaaS fitness inteligente. Su enfoque principal es ayudar al atleta a crear planes personalizados, consultar ejercicios y medir avances desde una interfaz moderna.",
    "fitai.featureOne": "Rutinas y dietas generadas con IA.",
    "fitai.featureTwo": "Perfil fitness con objetivo, experiencia, equipo y lesiones.",
    "fitai.featureThree": "Catalogo de ejercicios y registro de progreso corporal.",
    "fitai.featureFour": "Dashboard con metricas, planes activos y estadisticas.",
    "fitai.featureFive": "Panel admin preparado para gestionar ejercicios.",
    "fitai.previewProfile": "Perfil",
    "fitai.previewPlans": "Planes",
    "fitai.previewProgress": "Progreso",
    "fitai.screenHomeTitle": "Inicio y propuesta",
    "fitai.screenHome": "Presenta la plataforma fitness y orienta al usuario hacia rutinas, dietas y seguimiento.",
    "fitai.screenProfileTitle": "Perfil fitness",
    "fitai.screenProfile": "Guarda datos del atleta como objetivo, experiencia, equipo disponible y restricciones.",
    "fitai.screenDashboardTitle": "Dashboard",
    "fitai.screenDashboard": "Resume metricas, progreso y planes activos para consultar el estado del usuario rapido.",
    "fitai.screenPlansTitle": "Rutinas y dietas con IA",
    "fitai.screenPlans": "Permite generar planes personalizados para entrenamiento y alimentacion segun el perfil.",
    "fitai.screenExercisesTitle": "Catalogo de ejercicios",
    "fitai.screenExercises": "Organiza ejercicios con informacion util para entrenar de forma mas clara.",
    "fitai.screenAdminTitle": "Panel admin",
    "fitai.screenAdmin": "Seccion preparada para gestionar ejercicios y mantener contenido del sistema.",
    "fitai.screenProgressTitle": "Progreso corporal",
    "fitai.screenProgress": "Registra avances fisicos y ayuda a visualizar cambios durante el tiempo.",
    "gym.lead": "Sistema administrativo para centralizar atletas, instructores, administradores, rutinas, dietas y seguimiento del progreso fisico.",
    "gym.overview": "Este proyecto resuelve la organizacion manual dentro de un gimnasio. Permite administrar usuarios por rol, asignar planes de entrenamiento y alimentacion, y consultar el avance fisico de cada atleta desde un panel interno.",
    "gym.featureOne": "Usuarios con roles de administrador, instructor y atleta.",
    "gym.featureTwo": "Creacion y asignacion de rutinas personalizadas.",
    "gym.featureThree": "Creacion y asignacion de planes de alimentacion.",
    "gym.featureFour": "Seguimiento de peso, altura, grasa corporal e historial semanal.",
    "gym.featureFive": "Panel administrativo para control interno del gimnasio.",
    "quezza.lead": "Sistema web de administracion para restaurantes con gestion de mesas, ordenes, cocina, caja, inventario y usuarios por roles.",
    "quezza.overview": "Quezza Restaurant POS centraliza el flujo operativo de un restaurante: meseros toman ordenes, cocina actualiza pedidos, caja cobra cuentas y administracion controla usuarios, productos e inventario desde una plataforma conectada.",
    "quezza.featureOne": "Gestion de mesas y toma de ordenes por mesero.",
    "quezza.featureTwo": "Pantalla de cocina para seguimiento de pedidos.",
    "quezza.featureThree": "Caja, pagos y cuentas pendientes.",
    "quezza.featureFour": "Productos, categorias, inventario basico y menu QR publico.",
    "quezza.featureFive": "Login con JWT, BCrypt y control de acceso por roles.",
    "quezza.rolesTitle": "Roles y modulos",
    "quezza.roleAdmin": "Usuarios, reportes, configuracion y administracion general.",
    "quezza.roleWaiter": "Mesas, toma de ordenes y seguimiento de cuentas.",
    "quezza.roleKitchen": "Visualizacion y actualizacion de pedidos en preparacion.",
    "quezza.roleCashier": "Cobros, pagos y cierre de cuentas pendientes.",
    "quezza.screenDashboardTitle": "Dashboard",
    "quezza.screenDashboard": "Muestra ventas, ingresos, mesas activas y ordenes pendientes para supervision general.",
    "quezza.screenTablesTitle": "Mapa de mesas",
    "quezza.screenTables": "Permite ver disponibilidad, ocupacion y estado de limpieza de las mesas del salon.",
    "quezza.screenPosTitle": "Toma de ordenes",
    "quezza.screenPos": "El mesero selecciona mesa, productos y cantidades para construir la cuenta del cliente.",
    "quezza.screenKitchenTitle": "Cocina en tiempo real",
    "quezza.screenKitchen": "La cocina recibe pedidos, cambia estados y avisa cuando una orden esta lista.",
    "quezza.screenInventoryTitle": "Inventario",
    "quezza.screenInventory": "Controla stock, minimos, mermas y edicion de ingredientes usados por el restaurante.",
    "quezza.screenCashierTitle": "Caja",
    "quezza.screenCashier": "Agrupa cuentas pendientes, selecciona una orden y prepara el cobro final.",
    "quezza.screenPaymentTitle": "Registro de pago",
    "quezza.screenPayment": "Registra monto, metodo de pago y calcula el restante para cerrar la venta.",
    "portfolio.lead": "Sitio profesional multipagina para presentar perfil, proyectos, habilidades y contacto con cambio de idioma y modo claro/oscuro.",
    "portfolio.overview": "El portafolio fue creado como una presentacion formal de programador web, con una identidad visual tecnica, navegacion clara, enlaces reales de contacto y secciones editables para crecer con nuevos proyectos.",
    "portfolio.featureOne": "Paginas separadas para inicio, proyectos, habilidades y contacto.",
    "portfolio.featureTwo": "Modo claro y oscuro con colores consistentes.",
    "portfolio.featureThree": "Cambio de idioma entre espanol e ingles.",
    "portfolio.featureFour": "Contacto por correo y enlace real a GitHub.",
    "portfolio.featureFive": "Diseno responsive para escritorio y movil.",
    "projects.portfolioTitle": "Portafolio Personal",
    "projects.portfolioText": "Sitio de presentacion profesional con diseño oscuro, paginas separadas, cambio de idioma y formulario de contacto.",
    "projects.tagCatalog": "Catalogo",
    "projects.tagResponsive": "Responsivo",
    "projects.tagInterface": "Interfaz",
    "projects.tagFrontend": "Interfaz",
    "projects.tagBrand": "Marca",
    "skills.title": "Habilidades Tecnicas",
    "skills.lead": "Tecnologias y habilidades que uso para crear paginas, catalogos, interfaces y sistemas web para negocios.",
    "skills.techSectionTitle": "Habilidades Tecnicas",
    "skills.frontendGroup": "Frontend",
    "skills.backendGroup": "Backend y base de datos",
    "skills.toolsGroup": "Herramientas",
    "skills.htmlText": "Estructura semantica para paginas web claras.",
    "skills.cssText": "Diseño responsivo, estilos visuales y estructuras de pagina.",
    "skills.jsText": "Interaccion, formularios y logica en el navegador.",
    "skills.javaText": "Base para aplicaciones y logica de servidor.",
    "skills.springText": "APIs y servicios de servidor con Java.",
    "skills.sqlText": "Consultas, tablas y manejo de datos.",
    "skills.postgreText": "Base de datos relacional para proyectos web.",
    "skills.detailOneLabel": "01 // enfoque",
    "skills.detailOne": "Prioridad en paginas responsivas, textos claros, navegacion sencilla y una presentacion visual que ayude a vender o comunicar mejor.",
    "skills.detailTwoLabel": "02 // ejecucion",
    "skills.detailTwo": "Trabajo con estructura limpia, componentes reutilizables cuando conviene y detalles visuales pensados para una experiencia consistente.",
    "soft.title": "Habilidades Blandas",
    "soft.teamTitle": "Trabajo en equipo",
    "soft.teamText": "Colaboro con claridad, respeto roles y busco que el avance del proyecto sea ordenado.",
    "soft.communicationTitle": "Comunicacion",
    "soft.communicationText": "Explico ideas tecnicas de forma simple y mantengo una comunicacion constante sobre avances y bloqueos.",
    "soft.problemTitle": "Resolucion de problemas",
    "soft.problemText": "Analizo errores con paciencia, divido problemas grandes y busco soluciones practicas.",
    "soft.adaptTitle": "Adaptabilidad",
    "soft.adaptText": "Me adapto a nuevas tecnologias, cambios de alcance y necesidades reales del proyecto.",
    "contact.title": "Contacto",
    "contact.lead": "Si tu negocio necesita organizar procesos, vender mejor o tener una presencia digital mas profesional, podemos construir una solucion web a la medida.",
    "contact.formTitle": "Contactame",
    "contact.formLead": "Cuentame que necesitas mejorar y te ayudo a convertirlo en una aplicacion web clara, funcional y lista para crecer.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.namePlaceholder": "TU_NOMBRE",
    "contact.emailPlaceholder": "TU_CORREO",
    "contact.messagePlaceholder": "DESCRIBE_TU_PROYECTO",
    "contact.success": ""
  },
  en: {
    "title.home": "DEV_CORE | Developer Portfolio",
    "title.projects": "Projects | DEV_CORE",
    "title.skills": "Skills | DEV_CORE",
    "title.contact": "Contact | DEV_CORE",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.cta": "Resume",
    "home.titleA": "Software Engineer &",
    "home.titleB": "Systems Architect",
    "home.lead": "I build web applications with Java, Spring Boot, SQL, and PostgreSQL, focused on solid backend architecture, clean APIs, and practical business solutions.",
    "home.primary": "View projects",
    "home.secondary": "Contact",
    "home.role": "Web developer",
    "home.identity": "IDENTITY FILE",
    "projects.label": "PROJECTS",
    "projects.title": "Selected Projects",
    "projects.lead": "These are the main projects that show my focus: useful, visual websites oriented toward real businesses.",
    "projects.heading": "Main projects",
    "projects.statusFullstack": "FULLSTACK",
    "projects.statusBackend": "Management",
    "projects.statusCommerce": "ECOMMERCE",
    "projects.statusFrontend": "Interface",
    "projects.statusPos": "POS",
    "projects.openCase": "View project",
    "projects.refFitai": "AI fitness",
    "projects.refGym": "Gym management",
    "projects.refImperial": "Ecommerce store",
    "projects.refQuezza": "Restaurant operations",
    "projects.refPortfolio": "Web portfolio",
    "projects.fitaiTitle": "FitAI Coach",
    "projects.fitaiText": "Intelligent fitness platform for athletes. It generates workout routines and meal plans with AI, tracks body progress, and displays metrics in a modern dashboard.",
    "projects.gymTitle": "Gym Management System",
    "projects.gymText": "Administrative system for gyms. It organizes athletes, instructors, and administrators, assigns routines/meal plans, and centralizes internal progress tracking.",
    "projects.perfumeTitle": "Imperial Parfums",
    "projects.perfumeText": "Premium fullstack perfume ecommerce. It includes JWT authentication, USER/SELLER/ADMIN roles, public catalog, persistent cart, seller panel, and admin panel.",
    "projects.quezzaTitle": "Quezza Restaurant POS",
    "projects.quezzaText": "Web POS system for restaurants with table management, orders, kitchen flow, cashier module, inventory, and role-based users.",
    "projects.previewStore": "Store",
    "projects.previewProduct": "Product",
    "projects.previewCart": "Cart",
    "projects.caseLabel": "PROJECT CASE STUDY",
    "projects.caseTitle": "Imperial Parfums",
    "projects.caseText": "The screens show a complete premium ecommerce experience: brand landing page, catalog with search and filters, product detail, authentication, cart, and checkout summary.",
    "projects.casePointOne": "Luxury store visual experience",
    "projects.casePointTwo": "Real shopping flow with persistent cart",
    "projects.casePointThree": "USER, SELLER, and ADMIN roles connected to the backend",
    "projects.caseHome": "Brand landing page",
    "projects.caseCatalog": "Filtered catalog",
    "projects.caseDetail": "Product detail",
    "projects.caseAccount": "Login and registration",
    "projects.caseCart": "Cart and checkout",
    "detail.back": "Back to projects",
    "detail.overview": "Overview",
    "detail.features": "Main features",
    "detail.screens": "Project screens",
    "detail.stack": "Technical stack",
    "imperial.title": "Imperial Parfums",
    "imperial.lead": "Premium perfume store with catalog, JWT authentication, roles, persistent cart, and seller/admin panels.",
    "imperial.overview": "Imperial Parfums simulates a real ecommerce platform for luxury perfumes. The project separates frontend and backend, protects routes by role, and connects the cart, catalog, and user account through a REST API.",
    "imperial.featureOne": "Registration, login, JWT, and refresh tokens.",
    "imperial.featureTwo": "USER, SELLER, and ADMIN roles.",
    "imperial.featureThree": "Public catalog with search and filters.",
    "imperial.featureFour": "Backend-connected cart and order history.",
    "imperial.featureFive": "Seller panel for products and admin panel for users and orders.",
    "imperial.screenHome": "Presents the ecommerce premium identity and guides users to explore perfumes or create an account.",
    "imperial.screenCatalog": "Lets users search fragrances and filter by gender, scent notes, and product order.",
    "imperial.screenDetail": "Shows price, description, notes, and the main action to add the perfume to the cart.",
    "imperial.screenAccount": "Centralizes login and account creation so the user experience can be saved.",
    "imperial.screenCart": "Summarizes selected products, subtotal, and the flow to keep shopping or continue to checkout.",
    "fitai.lead": "Fullstack fitness application for athletes that generates workouts and meal plans with AI, tracks body progress, and displays statistics in a professional dashboard.",
    "fitai.overview": "FitAI Coach is designed as an intelligent fitness SaaS platform. Its main focus is helping athletes create personalized plans, browse exercises, and measure progress from a modern interface.",
    "fitai.featureOne": "AI-generated workouts and meal plans.",
    "fitai.featureTwo": "Fitness profile with goal, experience, equipment, and injuries.",
    "fitai.featureThree": "Exercise catalog and body progress tracking.",
    "fitai.featureFour": "Dashboard with metrics, active plans, and statistics.",
    "fitai.featureFive": "Admin panel prepared for exercise management.",
    "fitai.previewProfile": "Profile",
    "fitai.previewPlans": "Plans",
    "fitai.previewProgress": "Progress",
    "fitai.screenHomeTitle": "Home and value",
    "fitai.screenHome": "Presents the fitness platform and guides users toward workouts, meal plans, and tracking.",
    "fitai.screenProfileTitle": "Fitness profile",
    "fitai.screenProfile": "Stores athlete data such as goal, experience, available equipment, and restrictions.",
    "fitai.screenDashboardTitle": "Dashboard",
    "fitai.screenDashboard": "Summarizes metrics, progress, and active plans so the user status is easy to review.",
    "fitai.screenPlansTitle": "AI workouts and meals",
    "fitai.screenPlans": "Generates personalized training and nutrition plans based on the user's profile.",
    "fitai.screenExercisesTitle": "Exercise catalog",
    "fitai.screenExercises": "Organizes exercises with useful information for clearer training sessions.",
    "fitai.screenAdminTitle": "Admin panel",
    "fitai.screenAdmin": "Prepared section for managing exercises and keeping system content updated.",
    "fitai.screenProgressTitle": "Body progress",
    "fitai.screenProgress": "Records physical progress and helps visualize changes over time.",
    "gym.lead": "Administrative system for centralizing athletes, instructors, administrators, routines, meal plans, and physical progress tracking.",
    "gym.overview": "This project solves manual organization inside a gym. It manages users by role, assigns training and meal plans, and lets staff review each athlete's physical progress from an internal panel.",
    "gym.featureOne": "Users with administrator, instructor, and athlete roles.",
    "gym.featureTwo": "Creation and assignment of custom routines.",
    "gym.featureThree": "Creation and assignment of meal plans.",
    "gym.featureFour": "Tracking weight, height, body fat, and weekly history.",
    "gym.featureFive": "Administrative panel for internal gym control.",
    "quezza.lead": "Restaurant administration web system with table, order, kitchen, cashier, inventory, and role-based user management.",
    "quezza.overview": "Quezza Restaurant POS centralizes a restaurant's operational flow: waiters take orders, kitchen staff update requests, cashiers close checks, and administrators control users, products, and inventory from one connected platform.",
    "quezza.featureOne": "Table management and waiter order taking.",
    "quezza.featureTwo": "Kitchen screen for order tracking.",
    "quezza.featureThree": "Cashier module, payments, and pending checks.",
    "quezza.featureFour": "Products, categories, basic inventory, and public QR menu.",
    "quezza.featureFive": "JWT login, BCrypt, and role-based access control.",
    "quezza.rolesTitle": "Roles and modules",
    "quezza.roleAdmin": "Users, reports, configuration, and general administration.",
    "quezza.roleWaiter": "Tables, order taking, and check tracking.",
    "quezza.roleKitchen": "View and update orders in preparation.",
    "quezza.roleCashier": "Payments, collections, and closing pending checks.",
    "quezza.screenDashboardTitle": "Dashboard",
    "quezza.screenDashboard": "Shows sales, revenue, active tables, and pending orders for general supervision.",
    "quezza.screenTablesTitle": "Table map",
    "quezza.screenTables": "Shows availability, occupancy, reservations, and cleaning status across the dining room.",
    "quezza.screenPosTitle": "Order taking",
    "quezza.screenPos": "Lets waiters select a table, products, and quantities to build the customer's check.",
    "quezza.screenKitchenTitle": "Real-time kitchen",
    "quezza.screenKitchen": "Kitchen staff receive orders, update statuses, and notify when an order is ready.",
    "quezza.screenInventoryTitle": "Inventory",
    "quezza.screenInventory": "Controls stock, minimums, waste, and ingredient editing for restaurant operations.",
    "quezza.screenCashierTitle": "Cashier",
    "quezza.screenCashier": "Groups pending checks, selects an order, and prepares the final payment flow.",
    "quezza.screenPaymentTitle": "Payment registration",
    "quezza.screenPayment": "Registers amount, payment method, and remaining balance to close the sale.",
    "portfolio.lead": "Multipage professional site to present profile, projects, skills, and contact with language switching and light/dark mode.",
    "portfolio.overview": "The portfolio was created as a formal developer presentation, with a technical visual identity, clear navigation, real contact links, and editable sections ready to grow with new projects.",
    "portfolio.featureOne": "Separate pages for home, projects, skills, and contact.",
    "portfolio.featureTwo": "Light and dark mode with consistent colors.",
    "portfolio.featureThree": "Language switching between Spanish and English.",
    "portfolio.featureFour": "Email contact and real GitHub link.",
    "portfolio.featureFive": "Responsive design for desktop and mobile.",
    "projects.portfolioTitle": "Personal Portfolio",
    "projects.portfolioText": "Professional presentation site with dark design, separate pages, language switching, and a contact form.",
    "projects.tagCatalog": "Catalog",
    "projects.tagResponsive": "Responsive",
    "projects.tagInterface": "Interface",
    "projects.tagFrontend": "Frontend",
    "projects.tagBrand": "Branding",
    "skills.title": "Technical Stack",
    "skills.lead": "Technologies and skills I use to create websites, catalogs, interfaces, and web systems for businesses.",
    "skills.techSectionTitle": "Technical Skills",
    "skills.frontendGroup": "Frontend",
    "skills.backendGroup": "Backend and database",
    "skills.toolsGroup": "Tools",
    "skills.htmlText": "Semantic structure for clear web pages.",
    "skills.cssText": "Responsive design, visual styles, and layouts.",
    "skills.jsText": "Interaction, forms, and browser logic.",
    "skills.javaText": "Foundation for applications and backend logic.",
    "skills.springText": "APIs and backend services with Java.",
    "skills.sqlText": "Queries, tables, and data management.",
    "skills.postgreText": "Relational database for web projects.",
    "skills.detailOneLabel": "01 // focus",
    "skills.detailOne": "Priority on responsive pages, clear text, simple navigation, and visual presentation that helps sell or communicate better.",
    "skills.detailTwoLabel": "02 // execution",
    "skills.detailTwo": "Clean structure, reusable components when useful, and visual details designed for a consistent experience.",
    "soft.title": "Soft Skills",
    "soft.teamTitle": "Teamwork",
    "soft.teamText": "I collaborate clearly, respect roles, and help keep project progress organized.",
    "soft.communicationTitle": "Communication",
    "soft.communicationText": "I explain technical ideas simply and keep consistent communication about progress and blockers.",
    "soft.problemTitle": "Problem solving",
    "soft.problemText": "I analyze errors patiently, break down large problems, and look for practical solutions.",
    "soft.adaptTitle": "Adaptability",
    "soft.adaptText": "I adapt to new technologies, scope changes, and real project needs.",
    "contact.title": "Get In Touch",
    "contact.lead": "If your business needs to organize processes, sell better, or build a stronger digital presence, we can create a custom web solution.",
    "contact.formTitle": "Let's Connect",
    "contact.formLead": "Tell me what you need to improve, and I will help turn it into a clear, functional web application ready to grow.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.namePlaceholder": "YOUR_NAME",
    "contact.emailPlaceholder": "YOUR_EMAIL",
    "contact.messagePlaceholder": "DESCRIBE_YOUR_PROJECT",
    "contact.success": ""
  }
};

const getLanguage = () => localStorage.getItem("portfolioLanguage") || "es";
const getTheme = () => localStorage.getItem("portfolioTheme") || "dark";

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;

  themeButtons.forEach((button) => {
    button.innerHTML = `<span class="material-symbols-outlined">${theme === "dark" ? "light_mode" : "dark_mode"}</span>`;
    button.setAttribute("aria-label", theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  });
};

const applyLanguage = (language) => {
  document.documentElement.lang = language;
  document.title = translations[language][`title.${document.body.dataset.page}`] || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key] || element.textContent;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = translations[language][key] || element.placeholder;
  });

  languageButtons.forEach((button) => {
    button.innerHTML = language === "es" ? "&#x1F1FA;&#x1F1F8;" : "&#x1F1F2;&#x1F1FD;";
    button.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
  });
};

githubLinks.forEach((link) => {
  link.href = GITHUB_URL;
});

linkedinLinks.forEach((link) => {
  link.href = LINKEDIN_URL;
});

emailLinks.forEach((link) => {
  link.href = `mailto:${PROFILE_EMAIL}`;
});

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav && menuButton) {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

const currentPage = document.body.dataset.page;
navLinks.forEach((link) => {
  link.classList.toggle("active", link.dataset.nav === currentPage);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = getLanguage() === "es" ? "en" : "es";
    localStorage.setItem("portfolioLanguage", nextLanguage);
    applyLanguage(nextLanguage);
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("portfolioTheme", nextTheme);
    applyTheme(nextTheme);
  });
});

applyTheme(getTheme());
applyLanguage(getLanguage());

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent(`Nuevo contacto de portafolio - ${name || "Sin nombre"}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);

    window.location.href = `mailto:${PROFILE_EMAIL}?subject=${subject}&body=${body}`;
  });
}
