import Head from 'next/head'
import Hero from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/TimeLine/TimeLine';
import Technologies from '../components/Technologies/Technologies';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Morena | Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section grid> 
        <Hero />
        <BgAnimation /> 
      </Section> 
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
