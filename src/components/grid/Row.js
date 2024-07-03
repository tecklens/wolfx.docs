import styles from './grid.module.css'

export default function Row({children}) {
  return (
    <div className={`${styles.row} nx-w-full`}>
      {children}
    </div>
  )
}