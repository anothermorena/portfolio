import React from 'react';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const data = [
  { number: 7, text: 'Deans List Awards'},
  { number: 3, text: 'Best Student Awards', },
  { number: 1, text: 'Fully Funded Masters Degree Scholarship Award', },
  { number: 10, text: 'Certificates of Execellence', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;