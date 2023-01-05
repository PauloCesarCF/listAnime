import styles from './Footer.module.css'

const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <p>Feito por <a className={styles.link} href="https://github.com/PauloCesarCF">Paulo</a></p>
      <p>Todo o conteúdo foi pego da <a className={styles.link} href="https://kitsu.docs.apiary.io/">Kitsu Api</a></p>
    </footer>
  )
}

export default Footer