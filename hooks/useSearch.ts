import { useState, useEffect } from 'react'

export function useSearch() {
	const [loadStatus, setLoadStatus] = useState<LoadStates>(LoadStates.IDLE)
	const [url, setUrl] = useState({
		baseUrl: 'https://api.github.com/search/users',
		page: 1,
		searchTerm: ''
	})
	const [results, setResults] = useState({ items: [], total: 0 })

	useEffect(() => {
		if (url.searchTerm.length > 0) {
			setLoadStatus(LoadStates.LOADING)

			_fetchSearchResults()

			async function _fetchSearchResults() {
				const res = await fetch(`${url.baseUrl}?page=${url.page}&q=${url.searchTerm}`)
				const { items, total_count } = await res.json()

				setResults({ items, total: total_count })
				setLoadStatus(LoadStates.SUCCESS)
			}
		}
	}, [url])

	function _onUpdateSearch(value: string) {
		setUrl({ ...url, searchTerm: value })
	}

	function _onUpdatePage(page: number) {
		setUrl({ ...url, page })
	}

	return {
		loadStatus,
		results,
		page: url.page,
		onUpdateSearch: _onUpdateSearch,
		onUpdatePage: _onUpdatePage
	}
}

export enum LoadStates {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}
