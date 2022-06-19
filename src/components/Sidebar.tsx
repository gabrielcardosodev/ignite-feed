import { Avatar } from './Avatar'

import { PencilSimpleLine } from 'phosphor-react'
import profilePic1 from '../assets/images/profile-pic-1.png'
import coverImg from '../assets/images/cover.png'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverImg} />

      <div className={styles.profile}>
        <Avatar hasBorder src={profilePic1} />

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