import { AppProps } from 'next/app'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
