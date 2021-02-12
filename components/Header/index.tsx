import { Icon } from 'semantic-ui-react'

import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<a href="https://github.com" className={styles.githubLogo}>
				<Icon name="github" />
			</a>

			<nav className={styles.nav}>
				<a href="https://github.com/pulls">Pull requests</a>
				<a href="https://github.com/issues">Issues</a>
				<a href="https://github.com/marketplace">Marketplace</a>
				<a href="https://github.com/explore">Explore</a>
			</nav>

			<div className={styles.secondaryLinks}>
				<a href="https://github.com/notifications">
					<Icon name="alarm" />
				</a>
				<a href="https://github.com/new">
					<Icon name="add" />
				</a>
				<a href="https://github.com/michaelgee22">
					<Icon name="user circle" />
				</a>
			</div>
		</header>
	)
}
