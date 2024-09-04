// This component is only to main the structure.. It does not provide any functionality
import styles from './Container.module.css'
export default function Container({children}){
    return <div className={styles.parentContainer}>{children}</div>
}