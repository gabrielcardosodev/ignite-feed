import styles from './Post.module.css'

export function Post() {
  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img src="https://avatars.githubusercontent.com/u/35928107?v=4" />
      
        <div className={styles.authorInfo}>
          <strong>Kayo Oliveira</strong>
          <span>FullStack Developer</span>
        </div>
      </div>

      <time title='17 de junho às 16h' dateTime="2022-06-17 16:00:00">Publicado há 1h</time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉{' '}<a href="#">jane.design/doctorcare</a></p> 

      <p>
        <a href="#">#novoprojeto</a>{' '}
        <a href="#">#nlw</a>{' '}
        <a href="#">#rocketseat</a>
      </p>
    </div>
   </article>
  )
}