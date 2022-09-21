//Styles
// import utilStyles from '../styles/utils.module.scss';

// Components
import Head from 'next/head';
import Header from '../components/Header/Header';
import Videos from '../components/Videos/Videos';
import Footer from '../components/Footer/Footer';
import {videolist} from '../data.json';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kurku</title>
        <link rel="icon" href="./favicon.ico" />
        <script src="https://kit.fontawesome.com/0be556c1af.js" crossorigin="anonymous"></script>
      </Head>
      <main>
        <Header/>
        <Videos videolist={videolist}/>
        <Footer/>
      </main>      
    </div>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export async function getStaticProps() {
const filePath = path.join(process.cwd(), 'data.json');
const jsonData = await fsPromises.readFile(filePath);
const objectData = JSON.parse(jsonData);

return {
  props: objectData
}
}