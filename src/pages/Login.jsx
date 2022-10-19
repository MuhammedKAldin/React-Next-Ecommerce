import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
width:100vw;
height:100vw;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
    url("https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1554896373000/photosp/98d799bd-1311-48ec-ae7f-49fe162d5615/stock-photo-pink-white-shopping-fashion-wooden-view-top-sale-hangers-98d799bd-1311-48ec-ae7f-49fe162d5615.jpg") center;

    display:flex;
    align-items; center;
    justify-content:center;
    background-size:cover;
`;

const Wrapper = styled.div`
    width: 25%;
    paddomg:20px;
    bakcground-color:white;
    ${mobile({width: "75%"})}


`;

const Title = styled.h1`
    font-size: 24px;
    font-weight:300;
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;


const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding 15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link> Dont Remember Password? Click here</Link>
                <Link> Create new Account </Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
