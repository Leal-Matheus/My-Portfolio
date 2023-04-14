import Head from 'next/head';
import Image from 'next/image';
import { Inter, Mitr, Montserrat_Alternates } from 'next/font/google';
import Avatar from '../assets/img/Avatar.png';
import backLanguages from '../assets/img/backLanguages.png';
import styles from '@/assets/styles/home.module.scss';
import Header from '../components/Header';
import TextShpere from '@/components/TextShpere';

// const inter = Inter({ subsets: ['latin'] })
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

export default function Home() {
  return (
    
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <p className={`${styles.backTextWeb} ${mitrSB.className}`}>web developer</p>
      <main className={`${styles.main} ${styles.container}`}>
        <section className={styles.introSection}>
          <Image className={styles.backLanguages} src={backLanguages} alt='Languages Background' />
          <div className={styles.boxTop}>
            <h1 className={`${styles.title} ${montserrat.className}`}>frontend, backend & design</h1>
            <p className={`${styles.myDescription} ${mitrR.className}`}>An Eternal Apprentice, Always Looking to Improve With Creativity</p>
            <Image className={styles.avatar} src={Avatar} alt='Avatar' />
          </div>
          <button className={`${styles.defaultBtn} ${mitrR.className}`}>view more</button>
        </section>
        <section className={styles.aboutMeSection}>
          <p className={`${styles.backTextAbout} ${mitrSB.className}`}>About</p>
          <div className={styles.aboutLeft}>
            <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
              Hi,
            </h2>
            <h2 className={`${styles.titleAbout} ${montserratH2.className}`}>
              I`m Matheus
            </h2>
            <p className={`${styles.paragraphAbout} ${mitrR.className}`}>A full-stack developer always willing to learn more about this beautiful area of ​​programming.</p>
            <p className={`${styles.paragraphAbout} ${mitrR.className}`}>In search of my first big job, I took many courses and learned several programming languages</p>
          </div>
          <div className={styles.aboutRight}>
            <TextShpere />
          </div>
        </section>
      </main>
    </>
  )
}
