import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaRobot, FaTools} from 'react-icons/fa';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies from web development world through cross platform development to artificial intelligence.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          HTML, CSS, Bootstrap, Tailwind CSS, Materialize CSS, Chakra UI, JavaScript, jQuery, Ajax, JSON, React, React Native, Expo, SEO, WPO, PWA
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          XML, SQL, MySQL, Redis, PHP, Botman, Restful & SOAP API’s, Python, FastAPI, C++, Twilio, Africa is Talking
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRobot size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
          ETL, EDA, Data Visualization, NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, TensorFlow, Keras, Machine & Deep Learning Algorithms, Streamlit, Dialogflow, MLOps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTools size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools & Skils</ListTitle>
          <ListParagraph>
          Git & GitHub, UML, A/B Testing, Pytest, Jest, Cypress, DevOps, Cloud Technologies, Postman, System Design, Design Patterns, People Skills, Presentation Skills, Microsoft Office.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;