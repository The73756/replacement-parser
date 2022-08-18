import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useRef, useCallback } from 'react';
import axios from 'axios';

import { Home } from './pages/Home';
import { Frame } from './pages/ReplFrame';

import './scss/main.scss';

export const AppContext = createContext({});

const names = [
  'Замена главный корпус',
  'Замена 4 корпус',
  'Расписание 1-2 курс',
  'Расписание 3-4 курс',
  'Расписание - 4 корпус',
];

export const App = () => {
  const [items, setItems] = useState([]); //список ХЕШЕЙ ссылок на замену
  const [updatedItems, setupdatedItems] = useState([]); //список ХЕШЕЙ измененных ссылок
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const isCheked = useRef(false);

  const fetchItems = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get('/response.json'); // здесь будет обращение к php/parser.php (response такого же вида)
      const response = data.map((str) => str.split('d/')[1].split('/')[0]); // /(?<=d\/)(.*?)(?=\/)/ - не работает в сафари!!!!

      setItems(response);
      setLoading(false);
    } catch (error) {
      alert('Ошибка все капец сайт лег');
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    const prevData = localStorage.getItem('data');

    if (!prevData) {
      localStorage.setItem('data', JSON.stringify(items));
      return setIsFirstLoad(true);
    }

    if (prevData && items.length) {
      const prevDataArr = JSON.parse(prevData);
      const updData = items.filter((item) => !prevDataArr.includes(item));

      setupdatedItems(!isFirstLoad ? updData : []); //что бы при первой загрузке все не выделялось как измененное
      isCheked.current = true;
    }

    if (isCheked.current) {
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items, isFirstLoad]);

  return (
    <main>
      <div className='container'>
        <AppContext.Provider value={{ items, loading, updatedItems, names, fetchItems }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='zamena/:id' element={<Frame />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </main>
  );
};
