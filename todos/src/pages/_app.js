import '@/styles/globals.css'
import Layout from '@/components/layout'
import Footer from '@/components/Footer'



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );}
