import { Pagination as SemanticPagination } from 'semantic-ui-react'

import styles from './Pagination.module.css'

type Props = {
	total: number
	page: number
	onUpdatePage: (page: number) => void
}

export const Pagination = (props: Props) => {
	const totalPages = props.total > 1000 ? Math.floor(1000 / 30) : Math.floor(props.total / 30)

	return (
		<div className={`${styles.pagination} fade-in`}>
			<SemanticPagination
				activePage={props.page}
				totalPages={totalPages}
				onPageChange={(_, { activePage }) => props.onUpdatePage(Number(activePage))}
				firstItem={null}
				lastItem={null}
			/>
			<span>{props.total} Items Found</span>
		</div>
	)
}
