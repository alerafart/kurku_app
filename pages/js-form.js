import styles from '../components/Footer/footer.module.scss';
import { useState } from 'react';
export default function PageWithJSbasedForm() {

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
     // event.preventDefault()
  
      // const data = {
      //   name: event.target.name.value,
      //   email: event.target.email.value,
      //   message: event.target.message.value,
      // }
  
  //const handleSubmit = e => {
   // e.preventDefault();
      const data = {
        name,
        email,
        message,
      };
    // console.log(data);
    
 // };
      // Get data from the form.
      
      console.log(data);
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data);
  
      // API endpoint where we send form data.
      const endpoint = '/api/form';
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form action="/api/form" method="post"
            onSubmit={handleSubmit} 
            className={styles.footer__contact__form}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                type="text"
                rows="4"
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
            </form>
    )
  }
  