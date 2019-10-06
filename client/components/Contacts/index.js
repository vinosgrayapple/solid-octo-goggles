import React from 'react';
import styled from 'styled-components'


function Contacts() {
  const ContactsComponent = styled.section`
background-color: #f7f7f7;
form{
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

max-width: 800px;
width: 80%;
}
form input{
padding: 15px;
flex: 1;
margin-right: 30px;
font-size: 18px;
color: #555;
}
form .btn{
padding: 18px 42px;
}
@media (max-width: 800px){
form input{
  flex-basis: 100%;
  margin: 0 0 20px 0;
}
}
`

  return (
    <ContactsComponent>
      <h3 className="title">Join our newsletter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <hr />

      <form>
        <input type="email" placeholder="Email" />
        <a href="#" className="btn">Subscribe now</a>
      </form>
    </ContactsComponent>
  )
}

export default Contacts;
