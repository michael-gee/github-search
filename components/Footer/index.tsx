import { Icon } from 'semantic-ui-react'

import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/site/terms">Terms</a>
			<a href="https://github.com/site/privacy">Privacy</a>
			<a href="https://github.com/security">Security</a>
			<a href="https://githubstatus.com">Status</a>
			<a href="https://docs.github.com">Docs</a>

			<a href="https://github.com" className={styles.githubLogo}>
				<Icon name="github" />
			</a>

			<a href="https://github.com/contact">Contact</a>
			<a href="https://github.com/pricing">Pricing</a>
			<a href="https://docs.github.com">API</a>
			<a href="https://services.github.com">Training</a>
			<a href="https://github.blog">Blog</a>
			<a href="https://github.com/about">About</a>
		</footer>
	)
}
