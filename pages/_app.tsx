//* Import NextJS Features & Type *//
import type { AppProps } from 'next/app';

//* Import Global Styling *//
import '../styles/globals.css';


//* --- START App --- *//
const App = ({ Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}
export default App;
//* --- END App --- *//