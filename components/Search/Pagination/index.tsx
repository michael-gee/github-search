import { Pagination as SemanticPagination } from 'semantic-ui-react'

import { useState } from 'react'

import styles from './Pagination.module.css'

type Props = {
	total: number
}

export const Pagination = (props: Props) => {
	const [page] = useState<number>(1)

	return (
		<div className={styles.pagination}>
			<SemanticPagination
				activePage={page}
				totalPages={Math.floor(props.total / 30)}
				firstItem={null}
				lastItem={null}
			/>
			<span>{props.total} Items Found</span>
		</div>
	)
}
