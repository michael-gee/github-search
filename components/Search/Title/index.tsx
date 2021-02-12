import { Icon } from 'semantic-ui-react'

import styles from './Title.module.css'

export const Title = () => {
	return (
		<h2 className={styles.title}>
			<Icon name="search" />
			<span>
				Search Github <b>Users</b>
			</span>
		</h2>
	)
}
