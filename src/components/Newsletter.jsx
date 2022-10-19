import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height:60vh;
    background:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Title = styled.h1`
    font-size:70px;
    margin:20:20px;
`;

const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAlign: "center"})}

`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background:white;
    display:flex;
    justify-content:space-between;
    ${mobile({width: "80%"})}

`;
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;
const Button = styled.button`
    flex:1;
    border:none;
    background:teal;
    color:white;
    cursor:pointer;
    
`;

export default function Newsletter() {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Description>Get timely updates from your favorite products</Description>
          <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <object style={{width:"40px",borderRadius:"10%"}} height="28px" type="image/svg+xml" data="https://www.svgrepo.com/show/182632/send.svg"></object>
            </Button>
          </InputContainer>
      </Container>
  )
}
