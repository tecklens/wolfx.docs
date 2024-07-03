import styles from './grid.module.css'

export default function Column({children}) {
  return (
    <div className={`${styles.col} nx-flex nx-flex-col `}>
      {children}
    </div>
  )
}