import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import logo from "./assets/logo.svg";
import { Instagram, MessageCircle } from "lucide-react";
// Make sure to place your logo in the assets folder

// Sample images for the gallery - replace with your actual images
import galleryImg1 from "./assets/gallery1.jpeg";
import galleryImg2 from "./assets/gallery2.jpeg";
import galleryImg3 from "./assets/gallery3.jpeg";
import galleryImg4 from "./assets/gallery4.jpeg";
import galleryImg5 from "./assets/gallery5.jpeg";
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 10px 25px rgba(23, 101, 113, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
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

const Home: React.FC = () => {
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
          >
            {["Início", "Sobre", "Serviços", "Contato"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, color: "#176571" }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <motion.section
        id="início"
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-content">
          <motion.h1 custom={0} variants={textReveal}>
            Unhas feitas sob medida<span className="accent-dot">.</span>
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
              boxShadow: "0px 8px 20px rgba(23, 101, 113, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
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
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Meus Serviços
        </motion.h2>

        <div className="services-container">
          <div className="services-grid">
            {[
              {
                title: "Alongamento",
                desc: "As unhas de gel são uma técnica de alongamento profissional na qual você escolhe o tamanho e formato que desejar, podendo optar por modelagens mais discretas ou unhas mais longas e estilosas. Uma das técnicas mais versáteis e elegantes entre as opções de alongamento existentes no mercado.",
              },
              {
                title: "Blindagem",
                desc: "A blindagem de unhas é um tipo de esmaltação em gel que forma uma camada mais resistente e durável do que as esmaltações comuns. A técnica proporciona brilho às unhas naturais, fortalecendo-as, além de aumentar a durabilidade do esmalte. Perfeito para quem quer unhas mais fortes, bonitas e duradouras.",
              },
              {
                title: "Banho de Gel",
                desc: "O banho de gel é ideal para quem deseja aumentar a resistência das unhas naturais. Ideal para proteger o esmalte da unha natural e proporcionar mais durabilidade do que uma esmaltação comum, além de garantir um acabamento mais brilhante e uniforme.",
              },
              {
                title: "Esmaltação",
                desc: "A esmaltação em gel é o procedimento mais procurado nos salões. Tem maior durabilidade que a esmaltação tradicional e mantém o brilho por muito mais tempo, sem quebrar ou descascar. A unhas não amassam, riscos e imperfeições são corrigidos facilmente.",
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
        variants={staggerContainer}
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
              { img: galleryImg4, wide: true },
              { img: galleryImg5, wide: false },
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
        variants={staggerContainer}
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
              Olá! Meu nome é Larissa, e sou apaixonada pelo universo das unhas!
              Com mais de 5 anos de experiência na área de alongamentos, me
              dedico a oferecer um atendimento personalizado e de alto nível
              para cada cliente que encontro no salão. Sou conhecida e admirada
              pela qualidade impecável do meu trabalho.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Especializada em alongamentos, manutenção, blindagem, unhas de gel
              e esmaltação, tenho como objetivo principal a excelência em cada
              detalhe. Aqui, você encontra tudo do que precisa!
            </motion.p>
            <motion.ul
              className="certifications"
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Larissa Marques Nail" />
          </div>
          <div className="footer-contact">
            <h3>Contato</h3>
            <p>Email: contato@LarissaNailDesigner.com</p>
            <p>Telefone: (00) 00000-0000</p>
            <div className="social-icons">
              <motion.a
                href="https://www.instagram.com/larissamarques_nails/"
                aria-label="Instagram"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/5535991578568?text=Oie%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!%20%E2%98%BA%EF%B8%8F"
                aria-label="WhatsApp"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Larissa Marques Nail. Todos os
            direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
