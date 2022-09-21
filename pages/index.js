//Styles
// import utilStyles from '../styles/utils.module.scss';

// Components
import Head from 'next/head';
// import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Videos from '../components/Videos/Videos';
import Footer from '../components/Footer/Footer';
import PageWithJSbasedForm from '../pages/js-form';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kurku</title>
        <link rel="icon" href="/images/kurku_logo.png" />
        <script src="https://kit.fontawesome.com/0be556c1af.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <Header/>
        <Videos/>
        <PageWithJSbasedForm/>
        {/* <Footer/> */}
      </main>      
    </div>
  )
}
