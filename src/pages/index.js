import Head from 'next/head';
import Image from 'next/image';
import { Mitr, Montserrat_Alternates } from 'next/font/google';
// import Script from 'next/script'
import Avatar from '../assets/img/Avatar.png';
import Github from '../assets/img/Github.png';
import GithubAzul from '../assets/img/GithubAzul.png';
import Linkedin from '../assets/img/Linkedin.png'
import LinkedinAzul from '../assets/img/LinkedinAzul.png'
import backLanguages from '../assets/img/backLanguages.png';
import styles from '@/assets/styles/home.module.scss';
import Header from '../components/Header';
import TextShpere from '@/components/TextShpere';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Link from 'next/link';
import { sendContactForm } from '@/lib/api';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '@/components/TabNavigation';

const mitrR = Mitr({
  weight: "400",
  subsets:['latin']
})
const mitrSB = Mitr({
  weight: "600",
  subsets:['latin']
})
const montserrat = Montserrat_Alternates({ 
  weight: "700",
  subsets: ['latin'] 
})
const montserratH2 = Montserrat_Alternates({ 
  weight: "600",
  subsets: ['latin'] 
})

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

const enUS = {
  about: "About",
  aboutMe: "About Me",
  textAbout1: "A full-stack developer always willing to learn more about this beautiful area of programming.",
  textAbout2: "In search of my first big job, I took many courses and learned several programming languages",
  home: "Home",
  see: "View More",
  project: "My Projects",
  projectText: "To acquire knowledge in this area, I developed some projects alone and in  groups that simulated real problems.",
  contact: "Contact",
  contactMe: "Contact Me",
  slogan: "An Eternal Apprentice, Always Looking to Improve With Creativity",
  name: "Name",
  subject: "Subject",
  message: "Message",
  submit: "Submit",
  hi: "Hi,",
  matheus: "I'm Matheus",
}
const ptBR = {
  about: "Sobre",
  aboutMe: "Sobre Mim",
  textAbout1: "Um desenvolvedor full-stack sempre buscando aprender mais sobre esta incrível área da programação.",
  textAbout2: "Em busca do meu primeiro grande emprego ja desenvolvi alguns projetos e fiz alguns cursos para demonstrar minha capacidade.",
  home: "Início",
  see: "Veja Mais",
  project: "Meus Projetos",
  projectText: "Para adquirir e testar meu conhecimento com algumas linguagens de programação desenvolvi projetos sozinho e em grupos como estes:",
  contact: "Contato",
  contactMe: "Meu Contato",
  slogan: "Um eterno Aprendiz, sempre buscando melhorar com criatividade",
  name: "Nome",
  subject: "Assunto",
  message: "Mensagem",
  submit: "Enviar",
  hi: "Olá,",
  matheus: "Eu sou o Matheus",
}

export default function Home() {
  const [state, setState] = useState(initState);
  // const notify = () => toast("Message Sent!"); 
  const {values,} = state;
  // código omitido
  const router = useRouter();
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const traducao = locale == "pt-BR" ? ptBR : enUS

  const handleToggle = () => {
    switch(locale){
      case "en-US": 
        router.push("/", "/", {locale:"pt-BR" }) 
          break;
      case "pt-BR":
        router.push("/", "/", {locale: "en-US"}) 
        break; 
      }
   } 



  const handleChange = ({target}) => 
    setState((prev) =>({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
}))

const onSubmit = async () => {
  setState((prev) => ({
    ...prev,
  }));
  
  try {
    await sendContactForm(values);
    toast.success('Message Sent!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
      console.log("Botão Clicado!")
      setState(initState)
      
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
  
    }
  }

  useEffect(() => {
    let constrain = 20;
    let mouseOverContainer = document.getElementById("ex1");
    let ex1Layer = document.getElementById("ex1-layer");
  
    function transforms(x, y, el) {
        let avatar = el.getBoundingClientRect();
        let calcX = -(y - avatar.y - (avatar.height / 2)) / constrain;
        let calcY = (x - avatar.x - (avatar.width / 2)) / constrain;
      
        return "perspective(100px) "
          + "   rotateX("+ calcX +"deg) "
          + "   rotateY("+ calcY +"deg) ";
    };
    
    function transformElement(el, xyEl) {
        el.style.transform  = transforms.apply(null, xyEl);
    }
    
    mouseOverContainer.onmousemove = function(e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([ex1Layer]);
    
        window.requestAnimationFrame(function(){
          transformElement(ex1Layer, position);
        });
    };

    // ANIMATION
    AOS.init({duration: 1000});

    // FORM

    const form = document.getElementById('formEmail')
    form.addEventListener('submit', e => {
      e.preventDefault()
      console.log('Deu certo')
    })
  })
  return (
    <>
      {/* <Script type="module" src="followMouse.js"></Script> */}
      <Head>
        <title>Matheus Leal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=10, minimum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headerNormal}>
        <Header/>
      </div>
      <div className={styles.navBar}>
        <Nav/>
      </div>
      <p data-aos="fade-left" className={`${styles.backTextWeb} ${mitrSB.className}`}>web developer</p>
      <main className={`${styles.main} ${styles.container} 'scrollspy-example'`} data-bs-spy="scroll" data-bs-target="#redirect"
        data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0" >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        <section className={styles.introSection}>
          <Image data-aos="fade-right" className={styles.backLanguages}  src={backLanguages} alt='Languages Background' />
          <div data-aos="fade-down" id='ex1' className={styles.boxTop}>
            <h1 className={`${styles.title} ${montserrat.className}`}>frontend, backend & design</h1>
            <p className={`${styles.myDescription} ${mitrR.className}`}>{traducao.slogan}</p>
            <Image id='ex1-layer'className={styles.avatar} src={Avatar} alt='Avatar' />
          </div>
          <a href='#scroll1' data-aos="fade-up" className={`${styles.defaultBtn} ${mitrR.className}`}>{traducao.see}</a>
        </section>
        <section className={`${styles.aboutMeSection} ${styles.anime}`} id='scroll1'>
          <p className={`${styles.backTextAbout} ${mitrSB.className}`}> {traducao.about} </p>
          <div data-aos="fade-up" className={styles.aboutLeft}>
            <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
              {traducao.hi}
            </h2>
            <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
              {traducao.matheus}
            </h2>
            <p className={`${styles.paragraphAbout} ${mitrR.className}`}>{traducao.textAbout1}</p>
            <p className={`${styles.paragraphAbout} ${mitrR.className}`}>{traducao.textAbout2}</p>
            <Link href='about' data-aos="fade-up" className={`${styles.defaultBtn} ${styles.btnRedirect} ${mitrR.className}`}>{traducao.see}</Link>
          </div>
          <div data-aos="fade-left" className={styles.aboutRight}>
            <TextShpere />
          </div>
        </section>
        <section  className={styles.projectsSection} id='scroll2'>
          <p data-aos="fade-right"className={`${styles.backTextProject} ${mitrSB.className}`}>portfolio</p>
          <div data-aos="fade-right" className={styles.textsProjects}>
            <h2 className={`${styles.titleProject} ${montserratH2.className}`}>{traducao.project}</h2>
            <p className={`${styles.paragraphProjects} ${mitrR.className}`}>{traducao.projectText}</p>
            <Link href='projects' data-aos="fade-right" className={`${styles.defaultBtn} ${styles.btnRedirect} ${mitrR.className}`}>{traducao.see}</Link>
          </div>
          <div data-aos="fade-up"className={styles.myProjects}>
            <div className={styles.cardProject}>
              {/* <Image src={Digibank} alt='digibank portfolio' /> */}
            </div>
            <div className={styles.cardProject}>
              {/* <Image src={Digibank} alt='digibank portfolio' /> */}
            </div>
            <div className={styles.cardProject}>
              {/* <Image src={Digibank} alt='digibank portfolio' /> */}
            </div>
          </div>
        </section>
        <section className={styles.contactSection} id='scroll3'>
          <p className={`${styles.backTextContact} ${mitrSB.className}`}>{traducao.contact}</p>
          <div data-aos="fade-up" className={styles.leftContact}>
            <h2 className={`${styles.titleContact} ${montserratH2.className}`}>{traducao.contactMe}</h2>
            <form id="formEmail" className={styles.formArea}>
              <div className={styles.nameEmail}>
                <div className={styles.orgInput}>
                  <label className={mitrR.className}>{traducao.name}</label>
                  <input 
                  type="text" 
                  name='name' 
                  className={styles.smallInput} 
                  value={values.name} 
                  onChange={handleChange} required></input>
                </div>
                <div className={styles.orgInput}>
                  <label className={mitrR.className}>email</label>
                  <input type="email" name='email' className={styles.smallInput} value={values.email} 
                  onChange={handleChange} required></input>
                </div>
              </div>
              <label className={mitrR.className}>{traducao.subject}</label>
              <input type="text" name='subject' className={styles.largeInput} value={values.subject} 
                  onChange={handleChange} required></input>
              <label className={mitrR.className}>{traducao.message}</label>
              <textarea name='message' className={styles.textAreaContact} value={values.message} 
                  onChange={handleChange} required></textarea>
              <button className={styles.btnSend} onClick={onSubmit} type="submit">{traducao.submit}</button>
            </form>
          </div>
          <div data-aos="fade-left" className={styles.rightContact}>
            <Link className={styles.bottomGithub} href="https://github.com/Leal-Matheus"><Image src={Github} alt="github logo"/></Link>
            <Link className={styles.topGithub} href="https://github.com/Leal-Matheus"><Image src={GithubAzul} alt="github logo"/></Link>
            <Link className={styles.bottomLinkedin} href="https://www.linkedin.com/in/matheus-leal-palmuti-b94009240/"><Image src={Linkedin} alt="linkedin logo"/></Link>
            <Link className={styles.topLinkedin} href="https://www.linkedin.com/in/matheus-leal-palmuti-b94009240/"><Image src={LinkedinAzul} alt="linkedin logo"/></Link>
          </div>
        </section>
      </main>
    </>
  )
}
