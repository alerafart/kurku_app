//Styles
// import utilStyles from '../styles/utils.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
// Components
import Head from 'next/head';
import Header from '../components/Header/Header';
import Videos from '../components/Videos/Videos';
import Footer from '../components/Footer/Footer';
import data from '../data.json';

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Kurku</title>
        <link rel="icon" href="./favicon.ico" />
        <script src="https://kit.fontawesome.com/0be556c1af.js" crossOrigin="anonymous"></script>
      </Head>
      <main>
      <a href='#header'  >
          <FontAwesomeIcon id='backToTop' icon={faSquareCaretUp} />
        </a>
        <Header/>
        <Videos videolist={data.videolist}/>
        <Footer/>
      </main>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .logo {
          height: 1em;
        }
      `}</style> */}

      <style jsx global>{`
      
        html,
          body {
              padding: 0;
              margin: 0;;
              font-family: 'Oswald', sans-serif;
              //background-color:red;
              width:100%;
          }
          
          .container {
            align-self: center;
            width: 100vw;
        height: auto;
            // width:100vw;
            width:100%;
            flex: 1;
            background-color:red;
            // min-height: 100vh;
            // padding: 0 0.5rem;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
          }
          main {
            //background-color:grey;
            width: 100%;
           // flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-weight: bold;
          }
          h2 {
            font-family: 'Archivo Narrow', sans-serif;
            width: 95%;
            text-align: left;
            color: black;
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 1.5rem;
          }
          h3 {
            font-weight:600;
            text-transform: uppercase;
          }

          * {
              box-sizing: border-box;
          }

            
            
            footer {
              width: 100%;
              height: fit-content;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            footer img {
              margin-left: 0.5rem;
              background-color: #f5f5f5;
              padding: 2px;
            }

            footer a {

            }
            footer p {
              text-transform: uppercase;
              font-weight: bold;
              padding: 0.2rem;
              
            }
            a {
              color: inherit;
              text-decoration: none;
              font-family: 'Barlow Condensed', 'Oswald', sans-serif;
            }

            .grid {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              max-width: 800px;
              margin-top: 3rem;
            }

            .logo {
              height: 1em;
            }

            #backToTop {
              position:fixed;
              bottom: 0;
              right: 10px;
              color:green;
              width: 40px;
              height: 40px;
              background-color: #f5f5f5;
              color:#0c0c0c;
              border-radius: 5px;
              z-index:1;
              margin: 1rem;
            
            }
            #backToTop:hover {
              color:rgb(62, 140, 187);
            }
      `}</style>      
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