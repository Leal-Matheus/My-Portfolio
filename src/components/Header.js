import Link from 'next/link';
import Logo from '../assets/img/originalLogo.png';
import IconTranslate from '../assets/img/IconTrad.png';
import styles from '@/assets/styles/home.module.scss'
import Image from 'next/image';

import { Mitr } from 'next/font/google';

const mitrR = Mitr({
    weight: "400",
    subsets:['latin']
})
// const mitrSB = Mitr({
//     weight: "600",
// subsets:['latin']
// })

export default function Home() {
  return (
    <header className={styles.container} id={styles.header}>
        <Image src={Logo} className={styles.logoHeader} alt='Logo'/>
        <nav className={styles.navHeader}>
            <Link className={`${styles.linkHeader} ${mitrR.className}`} href=''>about me</Link>
            <Link className={`${styles.linkHeader} ${mitrR.className}`} href=''>portfolio</Link>
            <Image src={IconTranslate} alt='Icon Translate'/>
            <button className={`${styles.defaultBtn} ${mitrR.className}`}>contact me</button>
        </nav>
    </header>

  )
}