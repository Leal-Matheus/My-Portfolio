import Link from "next/link";
import TextShpere from "@/components/TextShpere";
import styles from '@/assets/styles/home.module.scss';
import { useRouter } from 'next/router'
import { Mitr } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/TabNavigation";

const mitrR = Mitr({
    weight: "400",
    subsets: ['latin']
})
const mitrSB = Mitr({
    weight: "600",
    subsets: ['latin']
})
const montserrat = Montserrat_Alternates({
    weight: "700",
    subsets: ['latin']
})
const montserratH2 = Montserrat_Alternates({
    weight: "600",
    subsets: ['latin']
})

const enUS = {
    about: "About",
    aboutMe: "About Me",
    textAbout1: "A full-stack developer always willing to learn more about this beautiful area of programming.",
    textAbout2: "In search of my first big job, I took many courses and learned several programming languages",
    hi: "Hi,",
    see: "View More",
    matheus: "I'm Matheus",
}
const ptBR = {
    about: "Sobre",
    aboutMe: "Sobre Mim",
    textAbout1: "Um desenvolvedor full-stack sempre buscando aprender mais sobre esta incrível área da programação.",
    textAbout2: "Em busca do meu primeiro grande emprego ja desenvolvi alguns projetos e fiz alguns cursos para demonstrar minha capacidade.",
    hi: "Olá,",
    see: "Veja Mais",
    matheus: "Eu sou o Matheus",
}

export default function About() {
    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const traducao = locale == "pt-BR" ? ptBR : enUS
    const handleToggle = () => {
        switch (locale) {
            case "en-US":
                router.push("/", "/", { locale: "pt-BR" })
                break;
            case "pt-BR":
                router.push("/", "/", { locale: "en-US" })
                break;
        }
    }

    return (
        <div>
            <div className={styles.headerNormal}>
                <Header />
            </div>
            <div className={styles.navBar}>
                <Nav />
            </div>
            <main className={`${styles.main} ${styles.container}`} >
                <section className={`${styles.aboutMeSection} ${styles.anime}`} id='scroll1'>
                    <p className={`${styles.backTextPageAbout} ${mitrSB.className}`}> {traducao.about} </p>
                    <div data-aos="fade-up" className={styles.aboutLeft}>
                        <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
                            {traducao.hi}
                        </h2>
                        <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
                            {traducao.matheus}
                        </h2>
                        <p className={`${styles.paragraphAbout} ${mitrR.className}`}>{traducao.textAbout1}</p>
                        <p className={`${styles.paragraphAbout} ${mitrR.className}`}>{traducao.textAbout2}</p>
                        <Link href='project' data-aos="fade-up" className={`${styles.defaultBtn} ${styles.btnRedirect} ${mitrR.className}`}>{traducao.see}</Link>
                    </div>
                    <div data-aos="fade-left" className={styles.aboutRight}>
                        <TextShpere />
                    </div>
                </section>
            </main>
        </div>
    )
}