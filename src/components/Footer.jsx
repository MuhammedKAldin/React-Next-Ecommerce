import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    padding:20;
    ${mobile({flexDirection: "column"})}

`;


const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:10px;
    padding-left:20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display: "none"})}

`;

const Title = styled.h2`
    margin-bottom:30px;
    font-weight:700;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor: "#fff8f8"})}

`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment = styled.img`
    width:50%;
`;


export default function Footer() {
  return (
    <Container>
      <Left>
          <Logo>NE<span style={{fontSize:"40px"}} >X</span>T.</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, natus repellendus. Rerum deserunt quas delectus, ipsa recusandae ad repellat quae quibusdam maxime ipsum consectetur est perferendis quos, aliquid expedita voluptatum.
          </Desc>
          <SocialContainer>
              <SocialIcon>
                <object height="50px" type="image/svg+xml" data="https://www.svgrepo.com/show/158427/facebook.svg"></object>
              </SocialIcon>
              <SocialIcon>
                <object height="50px" type="image/svg+xml" data="https://www.svgrepo.com/show/57062/instagram.svg"></object>
              </SocialIcon>
              <SocialIcon>
                <object height="50px" type="image/svg+xml" data="https://www.svgrepo.com/show/157815/twitter.svg"></object>
              </SocialIcon>
              <SocialIcon>
                <object height="50px" type="image/svg+xml" data="https://www.svgrepo.com/show/155239/pinterest.svg"></object>
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title> Useful Links </Title>
          <List>

              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Accessorries</ListItem>
              <ListItem>MY Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
        <Title> Contact </Title>
        <ContactItem>
            <object style={{paddingRight:"10px"}} height="30px" type="image/svg+xml" data="https://www.svgrepo.com/show/61426/location-pin.svg"></object>
            622 Dixie Path , South Tobinchester 98336</ContactItem>
        <ContactItem>
            <object style={{paddingRight:"10px"}} height="30px" type="image/svg+xml" data="https://www.svgrepo.com/show/64208/phone.svg"></object>
            +1 243 56 78</ContactItem>
        <ContactItem>
            <object style={{paddingRight:"10px"}} height="30px" type="image/svg+xml" data="https://www.svgrepo.com/show/17588/mail.svg"></object>
            contact@next.dev</ContactItem>
        <Payment style={{marginLeft:"-5px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWE-NuGT8HDKuOOk4EZqX587TbIFaV2jxEIK79EuGKsAYX9j7dp6yjaCgzueb1QUcsw&usqp=CAU" />
      </Right>
    </Container>
  )
}
