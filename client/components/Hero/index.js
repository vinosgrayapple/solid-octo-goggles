import React from 'react';
import styled from 'styled-components'


function Hero() {
  const HeroComponent = styled.section`
position: relative;
justify-content: center;
min-height: 100vh;
color: #fff;
text-align: center;

.background-image{
background-image: url(images/hero.jpg);
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-size: cover;
background-color: #2196F3;
z-index: -1;
}

.background-image:after{
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #414a4f;
opacity: 0.75;
}

h1{
font: bold 60px 'Open Sans', sans-serif;
margin-bottom: 15px;
}

h3{
font: normal 28px 'Open Sans', sans-serif;
margin-bottom: 40px;
}

a.btn{
padding: 20px 46px;
}

@media (max-width: 800px){


  min-height: 600px;


h1{
  font-size: 48px;
}

  h3{
  font-size: 24px;
}

  a.btn{
  padding: 15px 40px;
}

}


`
  return (
    <HeroComponent>
      <div className="background-image" />
      <h1>Responsive Flexbox Template</h1>
      <h3>A freebie by Tutorialzine.</h3>
      <a href="https://skillcrucial.com/" className="btn" target="_blank" rel="noopener noreferrer">Skill  Crucial</a>
    </HeroComponent>
  );
}
export default Hero;
