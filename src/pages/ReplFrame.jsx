import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../App';
import { ReplFrameBlock } from '../components/ReplFrameBlock';
import { ReplFrameBlockEmpty } from '../components/ReplFrameBlock/ReplFrameBlockEmpty';
import { FramePreloader } from '../components/ReplFrameBlock/FramePreloader';

export const Frame = () => {
  const { items, updatedItems, names, loading } = useContext(AppContext);

  let element;

  const { id } = useParams();
  const arrIdx = id - 1;

  if (items.length) {
    const item = items[arrIdx];

    const itemObj = {
      frameItem: item,
      isUpdated: updatedItems.includes(item),
      title: names[arrIdx].title,
      descr: names[arrIdx].descr,
    };

    element = <ReplFrameBlock key={arrIdx} {...itemObj} />;
  } else {
    element = <ReplFrameBlockEmpty />;
  }

  return <>{!loading ? element : <FramePreloader />}</>;
};
