import Hero from 'routes/home/hero/hero';
import { HeaderBox } from 'components';

const Home = () => (
      <div class='container' >
        <HeaderBox variant='IllustrationHero' />
        <Hero />
      </div>
);

export default Home;
