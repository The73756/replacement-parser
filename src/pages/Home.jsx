import { useContext, useEffect } from 'react';

import { AppContext } from '../App';
import { ReplBlock } from '../components/ReplBlock';
import { NoItems } from '../components/NoItems';

import { Preloader } from '../components/ReplBlock/Preloader';

import '../scss/main.scss';

export const Home = () => {
  const { items, loading, updatedItems, names, checkPrevItems } = useContext(AppContext);

  useEffect(() => {
    checkPrevItems();
  }, [checkPrevItems]);

  const elements = items.map((item, index) => {
    let itemObj = {
      index,
      indexOf: items.indexOf(item) + 1,
      isUpdated: updatedItems.includes(item),
      title: names[index].title,
      descr: names[index].descr,
    };

    if (item.includes('chtotib.ru/schedule')) {
      itemObj = {
        index,
        indexOf: items.indexOf(item) + 1,
        isUpdated: updatedItems.includes(item),
        title: names[index].title,
        descr: names[index].descr,
        isLink: true,
        link: item,
      };
    }

    return <ReplBlock key={index} {...itemObj} />;
  });

  const skeletons = [...new Array(5)].map((item, index) => <Preloader key={index} />);

  return (
    <>
      {!items.length && !loading ? (
        <NoItems />
      ) : (
        <div className='items'>{!loading ? elements : skeletons}</div>
      )}
    </>
  );
};
