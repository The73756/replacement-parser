import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './ReplBlock.module.scss';

export const Preloader = () => {
  return <Skeleton height='100%' containerClassName={styles.item} lineHeight={2} />;
};
