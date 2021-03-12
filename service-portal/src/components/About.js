import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 

const Hemlo =styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;

`;

export const About = () => (

  <Hemlo>
     <h2>ABOUT THIS WEBSITE</h2>
    <p>THIS PORTAL'S OBJECTIVE IS TO CONNECTED SERVICE SEEKERS AND SERVICE PROVIDERS KEWLLL</p>
  </Hemlo>

)