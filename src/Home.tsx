import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import logo from "./assets/logo.svg";
import logoWhite from "./assets/logoWhite.svg";
import { Instagram as InstagramIcon, MessageCircle, Menu, X } from "lucide-react";
// Make sure to place your logo in the assets folder

// Sample images for the gallery - replace with your actual images
import galleryImg1 from "./assets/gallery1.jpeg";
import galleryImg2 from "./assets/gallery2.jpeg";
import galleryImg3 from "./assets/gallery3.jpeg";
import galleryImg4 from "./assets/gallery4.jpeg";
import galleryImg5 from "./assets/gallery5.jpeg";
import galleryImg6 from "./assets/gallery6.jpeg";
import profileImg from "./assets/profile.jpeg";
// Enhanced animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      duration: 0.8,
    },
  },
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: "0px 10px 25px rgba(23, 101, 113, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 1.2,
    },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 15px 35px rgba(23, 101, 113, 0.18)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const logoReveal = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const menuItemVariants = {
  closed: { opacity: 0, x: 50 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="home">
      <header className="header">
        <motion.div
          className="logo-container"
          initial="hidden"
          animate="visible"
          variants={logoReveal}
        >
          <img src={logo} alt="Larissa Marques Nail" className="logo" />
        </motion.div>
        <nav className="nav">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            className="desktop-nav"
          >
            {["Início", "Sobre", "Serviços", "Contato"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, color: "#176571" }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            className="menu-button"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul className="mobile-nav">
                {["Início", "Sobre", "Serviços", "Contato"].map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    whileHover={{ x: 10, color: "#176571" }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        scrollToSection(e, item.toLowerCase());
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.section
        id="início"
        className="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="hero-content">
          <motion.h1 custom={0} variants={textReveal}>
            Especialista em unhas personalizadas
            <span className="accent-dot">.</span>
          </motion.h1>
          <motion.p custom={1} variants={textReveal}>
            Olá, sou Larissa Marques Nail Designer e te proporciono beleza,
            durabilidade e estilo em cada detalhe. Unhas impecáveis, feitas sob
            medida para realçar sua personalidade.
          </motion.p>
          <motion.a
            href="https://wa.me/5535991578568?text=Oie%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!%20%E2%98%BA%EF%B8%8F"
            target="_blank"
            rel="noopener noreferrer"
            custom={2}
            variants={textReveal}
            whileHover={{
              scale: 1.05,
            }}
            className="cta-button"
          >
            Agende agora
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        id="serviços"
        className="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Meus Serviços
        </motion.h2>

        <div className="services-container">
          <div className="services-grid">
            {[
              {
                title: "Alongamento",
                desc: "Ele é feito no molde f1, tem como maior vantagem a rapidez de sua aplicação e traz um resultado com a mesma resistência que qualquer outro extensor, mantendo sua naturalidade para um alongamento mais bonito.",
              },
              {
                title: "Blindagem",
                desc: "É um procedimento que fortalece e protege as unhas naturais, usando uma camada de base, sem a aplicação do gel construtor. Evita quebras e lascas, ajuda no crescimento saudável, pode ser usada com ou sem esmalte.Perfeita pra quem quer unhas mais fortes, bonitas e duradouras!",
              },
              {
                title: "Banho de Gel",
                desc: "Fazê-lo sobre as unhas pode trazer muitas vantagens. Mais que proteger e permitir que a unha não quebre, o processo também permite criar a durabilidade que você tanto almeja sem precisar aumentar o tamanho da unha.",
              },
              {
                title: "Esmaltação",
                desc: "Esmaltação comum é a aplicação de esmalte nas unhas, feita após a limpeza, preparação e finalização com brilho.É o jeito tradicional de deixar as unhas bonitas, com cor e bem cuidadas.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Galeria de Unhas
        </motion.h2>

        <div className="gallery-container">
          <div className="gallery-grid">
            {[
              { img: galleryImg1, wide: false },
              { img: galleryImg2, wide: false },
              { img: galleryImg3, wide: false },
              { img: galleryImg4, wide: false },
              { img: galleryImg5, wide: false, className: "top-aligned" },
              { img: galleryImg6, wide: false },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`gallery-item ${item.wide ? "wide" : ""}`}
                variants={galleryItemVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.img
                  src={item.img}
                  alt="Unhas"
                  className={item.className}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="sobre"
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="about-container">
          <motion.div
            className="about-image"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={profileImg}
              alt="Larissa Marques"
              initial={{ filter: "grayscale(100%)" }}
              whileInView={{ filter: "grayscale(0%)" }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
          <motion.div className="about-content" variants={fadeIn}>
            <h2 className="section-title left-aligned">Sobre Mim</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
             Me chamo Larissa, tenho 20 anos e sou profissional Nail Designer, atuando com foco na naturalidade e delicadeza em cada detalhe do meu trabalho. Busco constantemente o aprimoramento das minhas técnicas, mantendo-me atualizada com as tendências e inovações do mercado, sempre com o objetivo de oferecer o melhor para cada cliente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Especializada em alongamentos, manutenção, blindagem, unhas de gel
              e esmaltação, meu compromisso é proporcionar não apenas um resultado estético de qualidade, mas também uma experiência de cuidado e confiança.
            </motion.p>
            <motion.ul
              className="certifications"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
            >
              {[
                "Certificação em Nail Art Avançada",
                "Especialista em Alongamentos",
                "Técnica em Blindagem Profissional",
                "Design de Unhas Personalizado",
              ].map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  ✓ {cert}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href="https://wa.me/5535991578568?text=Oie%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!%20%E2%98%BA%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(23, 101, 113, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Agende agora
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        id="contato"
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoWhite} alt="Larissa Marques Nail" />
          </div>
          <div className="footer-contact">
            <h3>Contato</h3>
            <p>Instagram: <a href="https://www.instagram.com/larissamarques_nails/">@larissamarques_nails</a></p>
            <p>Telefone: <a href="https://wa.me/5535991578568?text=Oie%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!%20%E2%98%BA%EF%B8%8F"
                aria-label="WhatsApp">(35) 99144-2214</a></p>
            <div className="social-icons">
              <motion.a
                href="https://www.instagram.com/larissamarques_nails/"
                aria-label="Instagram"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <InstagramIcon size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/5535991578568?text=Oie%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!%20%E2%98%BA%EF%B8%8F"
                aria-label="WhatsApp"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <MessageCircle size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Larissa Marques Nails. Todos os
            direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
