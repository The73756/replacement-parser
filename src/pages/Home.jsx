import { ReplBlock } from '../components/ReplBlock';
import { ThemeChecker } from '../components/ThemeChecker';

import '../scss/main.scss';

export const Home = () => {
  return (
    <>
      <ThemeChecker />
      <div className='items'>
        <ReplBlock />
      </div>
    </>
  );
};
