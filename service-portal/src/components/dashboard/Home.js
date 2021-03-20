import React, { Component } from 'react'
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 200px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

function Home() {
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <h2>CURRENT POSTS OF CUSTOMER fdhfght </h2>
    </div>
  )
}


export default withRouter(Home)

