import React from 'react';
import styled from 'styled-components'
import './style.css'

function Footer() {
  const FooterComponent = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: #fff;
background-color: #414a4f;
padding: 60px 0;
ul{
display: flex;
margin-bottom: 25px;
font-size: 32px;
}
ul li{
  margin: 0 8px;
}

ul li:first-child{
margin-left: 0;
}

ul li:last-child{
margin-right: 0;
}

p{
text-transform: uppercase;
font-size: 14px;
color: rgba(255,255,255,0.6);
margin-bottom: 10px;
}

p a{
color: #fff;
}

@media (max-width: 700px){
padding: 80px 15px;
}
`

  return (
    <FooterComponent>
      <ul>
        <li><a href="https://twitter.com/s_komarychev" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square" /></a></li>
        <li><a href="https://www.facebook.com/skomarychev" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square" /></a></li>
        <li><a href="https://github.com/vinosgrayapple" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" /></a></li>
      </ul>
      <p>Made by <a href="http://tutorialzine.com/" target="_blank" rel="noopener noreferrer">tutorialzine</a>. images courtesy to <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer">unsplash</a>.</p>
      <p>No attribution required. you can remove this footer.</p>
    </FooterComponent>
  )
}

export default Footer;
