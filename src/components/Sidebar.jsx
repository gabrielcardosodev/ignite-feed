import styles from './Sidebar.module.css'

import pencilImg from '../assets/images/pencil.svg'
import profilePic1 from '../assets/images/profile-pic-1.png'
import coverImg from '../assets/images/cover.png'

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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.50001 14.875H1.75C1.58424 14.875 1.42527 14.8091 1.30806 14.6919C1.19085 14.5747 1.125 14.4158 1.125 14.25V10.7578C1.12472 10.6766 1.14044 10.5962 1.17128 10.5212C1.20211 10.4461 1.24745 10.3778 1.30469 10.3203L10.6797 0.945305C10.7379 0.886252 10.8072 0.839356 10.8836 0.807345C10.9601 0.775335 11.0421 0.75885 11.125 0.75885C11.2079 0.75885 11.2899 0.775335 11.3664 0.807345C11.4428 0.839356 11.5122 0.886252 11.5703 0.945305L15.0547 4.42968C15.1138 4.48784 15.1606 4.55716 15.1927 4.63361C15.2247 4.71006 15.2412 4.79211 15.2412 4.87499C15.2412 4.95787 15.2247 5.03993 15.1927 5.11638C15.1606 5.19283 15.1138 5.26215 15.0547 5.3203L5.50001 14.875ZM5.50001 14.875H14.875M8.625 2.99999L13 7.37499" stroke="#2B369E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}