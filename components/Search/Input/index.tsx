import { useState, useRef } from 'react'

import styles from './Input.module.css'

type Props = {
	onUpdateSearch: (value: string) => void
}

export const Input = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	return (
		<>
			<div className={styles.inputContainer}>
				<input
					ref={inputRef}
					type="text"
					onKeyPress={_onChange}
					placeholder="Search..."
					className={styles.input}
				/>

				<button onClick={_onSubmit} className={styles.submit}>
					Search
				</button>
			</div>

			{errorMessage && <div className={styles.error}>{errorMessage}</div>}
		</>
	)

	function _onChange(e: any) {
		if (e.key === 'Enter') {
			_onSubmit()
		}
	}

	function _onSubmit() {
		if (errorMessage) setErrorMessage(null)

		const value = inputRef.current !== null ? inputRef.current.value : ''

		if (value === '') setErrorMessage('Please enter a value before submitting the search.')

		props.onUpdateSearch(value)
	}
}
