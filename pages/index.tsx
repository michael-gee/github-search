import Head from 'next/head'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Footer } from '../components/Footer'

import { useSearch, LoadStates } from '../hooks/useSearch'

const SearchPage = () => {
	const { loadStatus, results, page, onUpdatePage, onUpdateSearch } = useSearch()

	return (
		<>
			<Head>
				<title>Code Search</title>
				<meta
					name="description"
					content="Michael Gee's clone implementation of Github's search page."
				/>
				<meta
					property="og:image"
					content="https://github.githubassets.com/images/modules/open_graph/github-logo.png"
				/>
			</Head>

			<Header />

			<Search>
				<Search.Title />
				<Search.Input onUpdateSearch={onUpdateSearch} />

				{loadStatus === LoadStates.SUCCESS && results.total > 0 && (
					<>
						<Search.List>
							{results.items.map((user: any) => {
								return (
									<Search.User
										login={user.login}
										avatar={user.avatar_url}
										url={user.html_url}
										key={user.id}
									/>
								)
							})}
						</Search.List>
						<Search.Pagination page={page} total={results.total} onUpdatePage={onUpdatePage} />
					</>
				)}
			</Search>

			<Footer />
		</>
	)
}

export default SearchPage
