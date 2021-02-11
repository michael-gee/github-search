import styles from './Search.module.css'

type Props = {
	children?: React.ReactNode
}

export const Search = (props: Props) => {
	return <main className={styles.main}>{props.children}</main>
}
