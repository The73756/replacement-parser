import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useRef } from 'react';
import axios from 'axios';

import { Home } from './pages/Home';
import { Frame } from './pages/Frame';

import './scss/main.scss';

export const AppContext = createContext({});

export const App = () => {
  const [items, setItems] = useState([]); //список ХЕШЕЙ ссылок на замену
  const [updItems, setUpdItems] = useState([]); //список ХЕШЕЙ измененных ссылок
  const [loading, setLoading] = useState(true);
  const isCheked = useRef(false);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get('/responce.json'); // здесь будет обращение к php/parser.php (response такого же вида)
        const response = data.map((str) => str.split('d/')[1].split('/')[0]); // /(?<=d\/)(.*?)(?=\/)/ - не работает в сафари!!!!

        setItems(response);
        setLoading(false);
      })();
    } catch (error) {
      alert('Ошибка все капец сайт лег');
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const prevData = localStorage.getItem('data');

    if (prevData && items.length) {
      const prevDataArr = JSON.parse(prevData);
      const updData = items.filter((item) => !prevDataArr.includes(item));

      setUpdItems(updData);
      isCheked.current = true;
    }

    if (isCheked.current || !prevData) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]);
  console.log(updItems);

  return (
    <main>
      <div className='container'>
        <AppContext.Provider value={{ items, loading, updItems }}>
          <Routes>
            <Route path='/' element={<Home items={items} />} />
            <Route path='zamena/:id' element={<Frame items={items} />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </main>
  );
};
