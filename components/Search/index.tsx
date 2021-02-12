import { Title } from './Title'
import { Input } from './Input'
import { List } from './List'
import { User } from './User'
import { Pagination } from './Pagination'

import styles from './Search.module.css'

type Props = {
	children?: React.ReactNode
}

export const Search = (props: Props) => {
	return <main className={styles.main}>{props.children}</main>
}

Search.Title = Title
Search.Input = Input
Search.List = List
Search.User = User
Search.Pagination = Pagination
