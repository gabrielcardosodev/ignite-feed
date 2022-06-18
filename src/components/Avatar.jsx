import styles from './Avatar.module.css'

export function Avatar({ src, hasBorder }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}