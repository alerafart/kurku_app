//Styles
import utilStyles from '../styles/utils.module.scss';

// Components
import Head from 'next/head';
// import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Videos from '../components/Videos/Videos';
import Footer from '../components/Footer/Footer';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kurku</title>
        <link rel="icon" href="/images/kurku_logo.png" />
      </Head>
      <main>
        <Header/>
        <Videos/>
        <Footer/>
      </main>      
    </div>
  )
}
