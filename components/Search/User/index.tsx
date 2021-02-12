import Image from 'next/image'

import styles from './User.module.css'

type Props = {
	login: string
	avatar: string
	url: string
}

export const User = (props: Props) => {
	return (
		<a href={props.url} className={`${styles.user} fade-in`}>
			<Image src={props.avatar} width="100px" height="100px" />
			<div className={styles.login}>{props.login}</div>
		</a>
	)
}
