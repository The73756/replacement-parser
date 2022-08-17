import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../App';

export const Frame = () => {
  const { items, updItems } = useContext(AppContext);
  const { id } = useParams();
  const item = items[id - 1];

  const isUpd = updItems.includes(item);

  console.log(item);

  return (
    <div className={isUpd ? 'updated' : ''}>
      <iframe
        src={`https://drive.google.com/file/d/${item}/preview`}
        width='640' //drive.google.com/file/d/{uniq.id}/preview
        height='480'
        allow='autoplay'
        title='Title'></iframe>
    </div>
  );
};
