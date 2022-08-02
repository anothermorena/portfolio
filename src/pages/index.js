import Hero from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/TimeLine/TimeLine';
import Technologies from '../components/Technologies/Technologies';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation /> 
      </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
