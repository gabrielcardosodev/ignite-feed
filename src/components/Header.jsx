import styles from './Header.module.css'

import logoImg from '../assets/images/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="logo do ignite feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}