import { SWRConfig } from 'swr';
import { Layout } from '../components/Layout';
// import '../styles/app.css'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <SWRConfig
            value={{
                refreshInterval: 10000,
                fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
            }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}

export default MyApp;