import { useContext } from 'react';

import { AppContext } from '../App';
import { ReplBlock } from '../components/ReplBlock';
import { Skeleton } from '../components/ReplBlock/Skeleton';

import '../scss/main.scss';

export const Home = () => {
  const { items, loading, updatedItems, names } = useContext(AppContext);

  const elements = items.map((item, index) => {
    const itemObj = {
      index,
      indexOf: items.indexOf(item) + 1,
      isUpdated: updatedItems.includes(item),
      name: names[index],
    };

    return <ReplBlock key={index} {...itemObj} />;
  });
  const skeletons = [...new Array(5)].map((item, index) => <Skeleton key={index} />);

  return (
    <>
      <div className='items'>{!loading ? elements : skeletons}</div>
    </>
  );
};
