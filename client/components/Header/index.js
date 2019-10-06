import React from 'react';
import styled from 'styled-components'


function Header() {
  const HeaderComponent = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 35px 100px 0;


  h2{
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  }

  nav{
  display: flex;
  }

  nav li{
  margin: 0 15px;
  }

  nav li:first-child{
    margin-left: 0;
  }

  nav li:last-child{
    margin-right: 0;
  }

  @media (max-width: 1000px){
  padding: 20px 50px;
  }

  @media (max-width: 700px){
  flex-direction: column;
  h2{
  margin-bottom: 15px;
  }
`
  return (
    <HeaderComponent>
      <h2>
        <a href="/">Website Logo</a>
      </h2>
      <nav>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
      </nav>
    </HeaderComponent>
  );
}
export default Header;
