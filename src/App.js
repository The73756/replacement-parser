import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, createContext, useRef, useCallback } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { Frame } from './pages/ReplFrame';
import { Header } from './components/Header';

import './scss/main.scss';

export const AppContext = createContext({});

const names = [
  { title: 'Замена', descr: 'главный корпус' },
  { title: 'Замена', descr: '4 корпус' },
  { title: 'Расписание', descr: '1-2 курс' },
  { title: 'Расписание', descr: '3-4 курс' },
  { title: 'Ссылка', descr: '1-2 курс 4 корпус' },
  { title: 'Расписание', descr: '3-4 курс 4 корпус' },
];

export const App = () => {
  const [items, setItems] = useState([]); //список ссылок на замену без /view?...
  const [updatedItems, setUpdatedItems] = useState([]); //список измененных ссылок
  const [prevItems, setPrevItems] = useState(localStorage.getItem('rp-data')); //JSON сохраненных в localStorage ссылок
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const isChecked = useRef(false);
  const errorMessage = useRef('');
  const syncDate = useRef(localStorage.getItem('rp-sync-date'));
  const errorMessageText = errorMessage.current;
  const syncDateText = syncDate.current;

  const fetchItems = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get('/php/parser.php'); // при разработке заменить на */response.json*
      if (data.length) {
        const date = new Date().toLocaleString(); // (str) => str.split('/view')[0]
        setItems(data);
        localStorage.setItem('rp-sync-date', date);
      } else {
        setIsError(true);
        errorMessage.current = '204. No Content'; // По спеке не ошибка
      }
    } catch (error) {
      setIsError(true);
      errorMessage.current = `${error.data.status}. ${error.data.statusText}`;
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
      isChecked.current = true;
    }

    if (isChecked.current) {
      localStorage.setItem('rp-data', JSON.stringify(items));
    }
  }, [isFirstLoad, items, prevItems]);

  useEffect(() => {
    void fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    checkPrevItems();
  }, [checkPrevItems]);

  return (
    <>
      <AppContext.Provider
        value={{
          items,
          loading,
          updatedItems,
          names,
          fetchItems,
          checkPrevItems,
          errorMessageText,
          syncDateText,
        }}>
        <Header isError={isError} updatedItems={updatedItems} />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Frame />} />
            </Routes>
          </div>
        </main>
      </AppContext.Provider>
    </>
  );
};
