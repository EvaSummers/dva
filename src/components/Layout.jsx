import styles from './styles/styles.scss'

// 内容容器
export const Content=({className,...rest})=>(
    <div className={`${styles['content-wrap']} ${className}`} {...rest} />
)