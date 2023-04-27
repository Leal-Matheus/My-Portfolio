import Link from 'next/link';
import Logo from '../assets/img/originalLogo.png';
import { useRouter } from 'next/router'
import IconTranslate from '../assets/img/IconTrad.png';
import iconUser from '../assets/img/user.png'
import iconContact from '../assets/img/contact.png'
import iconPortfolio from '../assets/img/portfolio.png'
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

export default function Nav() {
  const router = useRouter();
  const { locale } = useRouter();
  const traducao = locale == "en-US" ? enUS : ptBR
  return (
    <nav className={styles.tabNavigation}>
        <div className={styles.columnNav}>
            <Image src={iconUser} alt='user icon' className={styles.iconNav} />
            <Link className={`${styles.linkBar} ${mitrR.className}`} href='#scroll1'>{traducao.aboutMe}</Link>
        </div>
        <div className={styles.columnNav}>
            <Image src={iconPortfolio} alt='portfolio icon' className={styles.iconNav} />
            <Link className={`${styles.linkBar} ${mitrR.className}`} href='#scroll2'>portfolio</Link>
        </div>
        <div className={styles.columnNav}>
            <Image src={iconContact} alt='contact icon' className={styles.iconNav} />
            <Link className={`${styles.linkBar} ${mitrR.className}`} href='#scroll3'>{traducao.contactMe}</Link>
        </div>
        {/* <Image src={IconTranslate} className="dropdown-toggle" alt='Icon Translate' data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu" data-bs-theme="dark">
            <li><a className="dropdown-item" href='/en-US'>English</a></li>
            <li><a className="dropdown-item" href='/pt-BR'>Portugues</a></li>
            </ul> */}
    </nav>

  )
}