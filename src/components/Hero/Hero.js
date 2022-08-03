import React from 'react';
import Link from 'next/link';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey There!
        </SectionTitle>
        <SectionText>
            My government names are Otsogile Onalepelo, but mine is Morena. I am an experienced self-taught software engineer, a qualified AI engineer, and an allied health professional.
            A multipotentialite, if you may. With the ability to quickly learn complex things on a need-to-know basis and apply them. 
        </SectionText>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Link href='/docs/Otsogile-Onalepelo-CV.pdf'>
            <Button>Download CV</Button>
          </Link>
          <Link href='mailto:hireme@morena.dev' rel='noopener noreferrer'>
            <Button>Contact Me</Button>
          </Link>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;