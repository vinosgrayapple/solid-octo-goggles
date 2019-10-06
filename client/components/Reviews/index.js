import React from 'react';
import styled from 'styled-components'


function Reviews() {
  const ReviewsComponent = styled.section`
background-color: #fff;
.quote{
text-align: center;
width: 80%;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 0;
}
.author{
  font-size: 18px;
  margin-bottom: 50px;
}
.author:last-child{
  margin-bottom: 0;
}

@media (max-width: 1000px){

.quote{
  font-size: 20px;
}

.author{
    font-size: 16px;
}

}


`

  return (
    <ReviewsComponent>
      <h3 className="title">What others say:</h3>

      <p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p className="author">— Patrick Farrell</p>

      <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
      <p className="author">— George Smith</p>

      <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
      <p className="author">— Kevin Blake</p>

    </ReviewsComponent>
  )
}

export default Reviews;
