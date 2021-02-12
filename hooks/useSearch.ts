import { useState, useEffect } from 'react'

export function useSearch() {
	const [loadStatus, setLoadStatus] = useState<LoadStates>(LoadStates.IDLE)
	const [url, setUrl] = useState<string>('')
	const [results, setResults] = useState({ items: [], total: 0 })

	useEffect(() => {
		if (url.length > 0) {
			setLoadStatus(LoadStates.LOADING)

			_fetchSearchResults()

			async function _fetchSearchResults() {
				const res = await fetch(url)
				const { items, total_count } = await res.json()

				setResults({ items, total: total_count })
				setLoadStatus(LoadStates.SUCCESS)
			}
		}
	}, [url])

	function _onUpdateSearch(value: string, page: number = 1) {
		setUrl(`https://api.github.com/search/users?page${page}&q=${value}`)
	}

	return {
		loadStatus,
		results,
		onUpdateSearch: _onUpdateSearch
	}
}

export enum LoadStates {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}
