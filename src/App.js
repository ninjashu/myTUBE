import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
const App = () => {

  const [data, setdata] = useState("trending");
  const [api, setapi] = useState([]);
  const inputref = useRef(null);
  function handledata() {
    console.log(inputref.current.value);
    setdata(inputref.current.value);
    console.log(data)
  }

  useEffect(() => {
    const url =
      `https://youtube-v31.p.rapidapi.com/search?q=` +
      data +
      `&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;

    const options = {
        method: 'GET',
      headers: {
        // "X-RapidAPI-Key": 'd524316328mshbea11e3b1cf1f18p18b2fejsn496c0cf813d6',
        // "X-RapidAPI-Host": 'youtube-v31.p.rapidapi.com',
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      // .then(json => console.log(json))
      .then((json) => setapi(json.items))
      .catch((err) => console.error("error:" + err));
    }, [data]);
    
    
    return (
      <>
    <div className='header'>
      {/* <Header /> */}
      <Header handledata={handledata} inputref={inputref} />
    </div>
    <div className='main'>
      <Main api={api} setdata={setdata}/>
      {/* <Main /> */}
    </div>
    </>
  )
}
export default App