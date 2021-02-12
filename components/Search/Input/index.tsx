import { useRef } from 'react'

import styles from './Input.module.css'

type Props = {
	onUpdateSearch: Function
}

export const Input = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
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
	)

	function _onChange(e: any) {
		if (e.key === 'Enter') {
			_onSubmit()
		}
	}

	function _onSubmit() {
		const value = inputRef.current !== null ? inputRef.current.value : null
		props.onUpdateSearch(value)
	}
}
