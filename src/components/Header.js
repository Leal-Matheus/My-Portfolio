import Link from 'next/link';
import Logo from '../assets/img/originalLogo.png';
import { useRouter } from 'next/router'
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

const enUS = {
  aboutMe: "About Me",
  contactMe: "Contact Me",
}
const ptBR = {
  aboutMe: "Sobre Mim",
  contactMe: "Meu Contato",

}

export default function Header() {
  const router = useRouter();
  const { locale } = useRouter();
  const traducao = locale == "en-US" ? enUS : ptBR
  return (
    <header id={styles.header}>
      <div className={`${styles.container} ${styles.boxHeader}`}>
      <Image src={Logo} className={styles.logoHeader} alt='Logo'/>
        <nav className={styles.navHeader}>
            <Link className={`${styles.linkHeader} ${mitrR.className}`} href='#scroll1'>{traducao.aboutMe}</Link>
            <Link className={`${styles.linkHeader} ${mitrR.className}`} href='#scroll2'>portfolio</Link>
            <Image src={IconTranslate} className="dropdown-toggle" alt='Icon Translate' data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu" data-bs-theme="dark">
              <li><a className="dropdown-item" href='/en-US'>English</a></li>
              <li><a className="dropdown-item" href='/pt-BR'>Portugues</a></li>
            </ul>
            <a href='#scroll3' className={`${styles.defaultBtn} ${mitrR.className}`}>{traducao.contactMe}</a>
        </nav>
      </div>
    </header>

  )
}