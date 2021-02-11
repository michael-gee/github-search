import Head from 'next/head'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Footer } from '../components/Footer'

const SearchPage = () => (
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
			<h1 style={{ color: 'white' }}>Search</h1>
		</Search>

		<Footer />
	</>
)

export default SearchPage
