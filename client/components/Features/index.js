import React from 'react';
import styled from 'styled-components'


function Features() {
  const FeaturesComponent = styled.section`{
background-color: #f7f7f7;
.grid li{
padding: 0 30px;
flex-basis: 33%;
text-align: center;
}
.grid li i{
  font-size: 50px;
  color: #2196F3;
  margin-bottom: 25px;
}
.grid li h4{
color: #555;
  font-size: 20px;
  margin-bottom: 25px;
}
.grid li p{
  margin: 0;
}
@media (max-width: 1000px){

.grid li{
  flex-basis: 70%;
  margin-bottom: 65px;
}
.grid li:last-child{
  margin-bottom: 0;
}
}
@media (max-width: 600px){
.grid li{
  flex-basis: 100%;
}
}
`

  return (
    <FeaturesComponent>
      <h3 className="title">Features and services</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr />

      <ul className="grid">
        <li>
          <i className="fa fa-camera-retro" />
          <h4>Photography</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
        </li>
        <li>
          <i className="fa fa-cubes" />
          <h4>Web Development</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
        </li>
        <li>
          <i className="fa fa-newspaper-o" />
          <h4>Content Editing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
        </li>
      </ul>
    </FeaturesComponent>
  )
}

export default Features;
