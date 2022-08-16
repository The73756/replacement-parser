import { useParams } from 'react-router-dom';

export const Frame = () => {
  const { hash } = useParams();
  console.log(hash);

  return (
    <iframe
      src={`https://drive.google.com/file/d/${hash}/preview`}
      width='640' //drive.google.com/file/d/{uniq.id}/preview
      height='480'
      allow='autoplay'
      title='Inline Frame Example'></iframe>
  );
};
