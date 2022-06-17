import styles from './Sidebar.module.css'

import profilePic1 from '../assets/images/profile-pic-1.png'
import coverImg from '../assets/images/cover.png'

import { PencilSimpleLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImg} />

      <div className={styles.profile}>
        <img src={profilePic1} />

        <strong>
          Gabriel Cardoso
        </strong>
        <span>
          Web Developer
        </span>
      </div>

      <footer className={styles.footer}>
        <a className={styles.button} href="#">
        <PencilSimpleLine size={20} />

        Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}