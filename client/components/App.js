import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fab
} from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import Head from './head';
import Header from './Header';
import Hero from './Hero';
import OurWork from './OurWork';
import Features from './Features'
import Reviews from './Reviews'
import Contacts from './Contacts'
import Footer from './Footer'

library.add(fab, faCheckSquare, faCoffee);
function App() {
  const BodyComponent = styled.div`
  *{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
font: normal 16px sans-serif;
color: #555;
}
ul, nav{
list-style: none;
}
a{
text-decoration: none;
color: inherit;
cursor: pointer;
opacity: 0.9;
}
a:hover{
opacity: 1;
}
a.btn{
color: #fff;
border-radius: 4px;
text-transform: uppercase;
background-color: #2196F3;
font-weight: 800;
text-align: center;
}
hr{
width: 150px;
height: 2px;
background-color: #2196F3;
border: 0;
margin-bottom: 80px;
}
section{
display: flex;
flex-direction: column;
align-items: center;
padding: 125px 100px;
}
@media (max-width: 1000px){
section{
  padding: 100px 50px;
}
}
@media (max-width: 600px){
section{
  padding: 80px 30px;
}
}
section h3.title{
color: #414a4f;
text-transform: capitalize; 
font: bold 32px 'Open Sans', sans-serif;
margin-bottom: 35px;
text-align: center;
}
section p{
max-width: 800px;
text-align: center;
margin-bottom: 35px;
padding: 0 20px;
line-height: 2;
}
ul.grid{
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
}
`
  return (
    <BodyComponent>
      <Head title="Responsive Landing Page Template With Flexbox" />
      <Header />
      <Hero />
      <OurWork />
      <Features />
      <Reviews />
      <Contacts />
      <Footer />
    </BodyComponent>
  );
}

App.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
