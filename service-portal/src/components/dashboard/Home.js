import React from 'react';
import styled from 'styled-components';
//import 'bootstrap/dist/css/bootstrap.min.css';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1000px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <div>
    <h2>CURRENT POSTS</h2>

    </div>
   
  
  </GridWrapper>
  
  
)