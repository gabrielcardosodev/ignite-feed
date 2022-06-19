import logoImg from '../assets/images/logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="logo do ignite feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}