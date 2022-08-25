import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useRef, useCallback } from 'react';
import axios from 'axios';

import { Home } from './pages/Home';
import { Frame } from './pages/ReplFrame';
import { ErrorBlock } from './components/ErrorBlock';

import './scss/main.scss';
import { Header } from './components/Header';

export const AppContext = createContext({});

const names = [
  { title: 'Замена', descr: 'главный корпус' },
  { title: 'Замена', descr: '4 корпус' },
  { title: 'Расписание', descr: '1-2 курс' },
  { title: 'Расписание', descr: '3-4 курс' },
  { title: 'Расписание', descr: '4 корпус' },
];

export const App = () => {
  const [items, setItems] = useState([]); //список ХЕШЕЙ ссылок на замену
  const [updatedItems, setUpdatedItems] = useState([]); //список ХЕШЕЙ измененных ссылок
  const [prevItems, setPrevItems] = useState(localStorage.getItem('rp-data')); //JSON ХЕШЕЙ сохраненных в localStorage ссылок
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const isCheked = useRef(false);
  const errorMesage = useRef('');
  const syncDate = useRef(localStorage.getItem('rp-sync-date'));

  const fetchItems = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get('/response.json'); // здесь будет обращение к php/parser.php (response такого же вида)

      if (data.length) {
        const response = data.map((str) => str.split('d/')[1].split('/')[0]); // /(?<=d\/)(.*?)(?=\/)/ - не работает в сафари!!!!
        const date = new Date().toLocaleString();

        setItems(response);
        localStorage.setItem('rp-sync-date', date);
      } else {
        setIsError(true);
        errorMesage.current = '204. No Content'; // По спеке не ошибка
      }
    } catch (error) {
      setIsError(true);
      errorMesage.current = `${error.response.status}. ${error.response.statusText}`;
      console.error(error);
    } finally {
      setLoading(false);
      if (isError) {
        if (prevItems) {
          setItems(JSON.parse(prevItems));
        }
      }
    }
  }, [prevItems, isError]);

  const checkPrevItems = useCallback(() => {
    if (!prevItems) {
      localStorage.setItem('rp-data', JSON.stringify(items));
      setPrevItems(JSON.stringify(items));

      return setIsFirstLoad(true);
    }

    if (prevItems && items.length) {
      const prevDataArr = JSON.parse(prevItems);
      const updData = items.filter((item) => !prevDataArr.includes(item));

      setUpdatedItems(!isFirstLoad ? updData : []); //что бы при первой загрузке все не выделялось как измененное
      isCheked.current = true;
    }

    if (isCheked.current) {
      localStorage.setItem('rp-data', JSON.stringify(items));
    }
  }, [isFirstLoad, items, prevItems]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    checkPrevItems();
  }, [checkPrevItems]);

  return (
    <>
      <Header />
      <AppContext.Provider
        value={{ items, loading, updatedItems, names, fetchItems, checkPrevItems }}>
        <main>
          <div className='container'>
            {isError ? (
              <ErrorBlock resopnseCode={errorMesage.current} syncDate={syncDate.current} />
            ) : (
              ''
            )}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='zamena/:id' element={<Frame />} />
            </Routes>
          </div>
        </main>
      </AppContext.Provider>
    </>
  );
};
