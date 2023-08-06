import React from 'react';
import { FaRobot, FaTools, FaReact, FaDatabase } from 'react-icons/fa';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, from web development through
      cross-platform mobile development to artificial intelligence.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaReact size='2rem' />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, Bootstrap, Tailwind CSS, Materialize CSS, Chakra UI,
            JavaScript, jQuery, Ajax, React, React Native, Expo, SEO, WPO, PWA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDatabase size='2rem' />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            XML, JSON, SQL, MySQL, Redis, PHP, Botman, Restful & SOAP APIs,
            Python, FastAPI, C++, Twilio, Node Js, Express Js, Mongo DB Africa
            is Talking
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRobot size='2rem' />
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            ETL, EDA, Data Visualization, NumPy, Pandas, Scikit-learn,
            Matplotlib, Seaborn, TensorFlow, Keras, Machine & Deep Learning
            Algorithms, Streamlit, Dialogflow, NLP, NLTK, Spacy, Gensim,
            fastText, Recommender Systems.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTools size='2rem' />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools & Skils</ListTitle>
          <ListParagraph>
            Git & GitHub, G it Lab, Docker, UML, A/B Testing, Pytest, Jest,
            Cypress, Web Scraping, Cloud Technologies, Postman,System Design,
            Design Patterns, People Skills, Presentation Skills, Linux,
            Microsoft Office.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
