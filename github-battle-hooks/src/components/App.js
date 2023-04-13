import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import SingleLanguage from './SingleLanguage';
import Battle from './Battle';



function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, []);



  return (
    <>
      <Header />
      <Routes >
        <Route path='/'
          element={[
            <Menu data={data} />,
            <Main data={data} />
          ]}
        />
        <Route path='/post/:language'
          element={[
            <Menu data={data} />,
            <SingleLanguage data={data} />]}
        />
        <Route path='/battle'
          element={<Battle />}
        />
      </Routes>
    </>
  )
}

export default App;
