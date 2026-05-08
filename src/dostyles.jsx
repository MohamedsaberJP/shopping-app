import styles from './dostyles.module.css'

export default function Pagecontent(){
    return(<div className={styles.page}>
        <div className={styles.head}>header</div>
        <div className={`${styles.aside} ${styles.center}`}>aside</div>
        <div className={styles.nav}>nav</div>
        <div className={styles.footer}>footer</div>
    </div>)
}