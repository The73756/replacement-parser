import { useContext, useEffect } from 'react';

import { AppContext } from '../App';
import { ReplBlock } from '../components/ReplBlock';
import { ReplBlockEmpty } from '../components/ReplBlock/ReplBlockEmpty';

import { Preloader } from '../components/ReplBlock/Preloader';

import '../scss/main.scss';

export const Home = () => {
  const { items, loading, updatedItems, titles, checkPrevItems } = useContext(AppContext);

  useEffect(() => {
    checkPrevItems();
  }, [checkPrevItems]);

  let elements = [];

  if (items.length) {
    elements = items.map((item, index) => {
      const itemObj = {
        index,
        indexOf: items.indexOf(item) + 1,
        isUpdated: updatedItems.includes(item),
        title: titles[index],
      };

      return <ReplBlock key={index} {...itemObj} />;
    });
  } else {
    elements = <ReplBlockEmpty />;
  }

  const skeletons = [...new Array(5)].map((item, index) => <Preloader key={index} />);

  return (
    <>
      <div className='items'>{!loading ? elements : skeletons}</div>
    </>
  );
};
