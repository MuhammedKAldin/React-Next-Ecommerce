import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
// import { ReactComponent as SearchIcon } from 'search.svg';


const Container = styled.div`
    height:60px;
    ${mobile({backgroundColor: "red"})}
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({padding: "10px 0px"})}

`;

const Left = styled.div`
    flex:2;
    display:flex;
    align-items:center;
    
`;

const Language = styled.span`
    font-size:15;
    cursor:pointer;
    ${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`;

const Input = styled.input`
    border:none;
    ${mobile({width: "50px"})}

`;

const Center = styled.div`
    flex:1;
    align-items:center;

`;

const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:2 ,justifyContent: "center"})}

`;

const MenuItem = styled.div`
    font-size:15px;
    cursor:pointer;
    display:flex;
    align-items:center;
    margin-left:25px;
    ${mobile({fontSize: "12px" , marginLeft:"10px"})}

`;

const Badge = styled.span`
    border-radius:20px;
    width:20px;
    font-size:20;
    position:relative;
    bottom:10px;
    background: ${props => props.color || "palevioletred"};
    text-align:center;
    color:white;
`;

export default function Navbar() {
  return (
    <Container>
        <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search' /> 
                    <object  height="20px" type="image/svg+xml" data="https://www.svgrepo.com/show/18282/search.svg"></object>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>NE<span style={{fontSize:"40px"}} >X</span>T.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <object height="20px" type="image/svg+xml" data="https://www.svgrepo.com/show/9072/cart.svg"></object>
                    <Badge color="blue" >5</Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
