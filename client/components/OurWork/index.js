import React from 'react';
import styled from 'styled-components'


function OurWork() {
  const OurWorkComponent = styled.section`
background-color: #fff;
.grid li{
padding: 20px;
height: 350px;
border-radius: 3px;

background-clip: content-box;
background-size: cover;
background-position: center;
background-color: #333;
}
.grid li.small{
flex-basis: 40%;
}
.grid li.large{
flex-basis: 60%;
}


@media (max-width: 1000px){
.grid li.small,
.grid li.large{
  flex-basis: 100%;
}

}
`
  return (
    <OurWorkComponent>
      <h3 className="title">Some of our work</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
      <hr />
      <ul className="grid">
        <li className="small" style={{ backgroundImage: 'url(images/coast.jpg)' }} />
        <li className="large" style={{ backgroundImage: 'url(images/island.jpg)' }} />
        <li className="large" style={{ backgroundImage: 'url(images/balloon.jpg)' }} />
        <li className="small" style={{ backgroundImage: 'url(images/mountain.jpg)' }} />
      </ul>
    </OurWorkComponent>
  );
}
export default OurWork;
