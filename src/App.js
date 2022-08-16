import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

import { Home } from './pages/Home';
import { Frame } from './pages/Frame';

export const AppContext = createContext({});

export const App = () => {
  const [items, setItems] = useState([]); //список ХЕШЕЙ ссылок на замену
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get('responce.json'); // здесь будет обращение к php/parser.php (response такого же вида)
        const response = data.map((str) => str.split('d/')[1].split('/')[0]); // /(?<=d\/)(.*?)(?=\/)/ - не работает в сафари!!!!

        setItems(response);
        setLoading(false);
      })();
    } catch (error) {
      alert('Ошибка все капец сайт лег');
      console.error(error);
    }
  }, []);
  return (
    <AppContext.Provider value={{ items, loading }}>
      <Routes>
        <Route path='/' element={<Home items={items} />} />
        <Route path='zamena/:hash' element={<Frame items={items} />} />
      </Routes>
    </AppContext.Provider>
  );
};
