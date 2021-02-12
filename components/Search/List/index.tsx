import styles from './List.module.css'

type Props = {
	children?: React.ReactNode
}

export const List = (props: Props) => {
	return <div className={styles.list}>{props.children}</div>
}
