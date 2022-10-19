import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    hieght:30px;
    background:teal;
    color:white;
    text-align:center;
    font-size:14px;
    font-weight:700;

`;

export default function Announcement() {
  return (
    <div>
      <Container>
          Super Deal Free Shipping on Orders Over $50
      </Container>
    </div>
  )
}
