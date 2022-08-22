import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={570}
    height={150}
    viewBox='0 0 570 150'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='125' y='188' rx='0' ry='0' width='3' height='3' />
    <rect x='0' y='0' rx='5' ry='5' width='570' height='150' />
  </ContentLoader>
);
