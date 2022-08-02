import React from 'react';
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
            My government name is Otsogile Ogaisitse Onalepelo but mine is Morena. I am an experienced self-taught software engineer, a qualified AI engineer, and an allied health professional.
            A multipotentialite, if you may. With the ability to quickly learn complex things on a need-to-know basis and apply them. 
        </SectionText>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Button onClick={props.handleClick}>Download CV</Button>
          <Button onClick={props.handleClick}>Contact Me</Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;