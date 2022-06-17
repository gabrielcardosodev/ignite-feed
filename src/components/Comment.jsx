import styles from './Comment.module.css'

import profilePic1 from '../assets/images/profile-pic-1.png'

import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src={profilePic1} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Cardoso</strong>
              <time title='17 de junho às 16h' dateTime="2022-06-17 16:00:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}