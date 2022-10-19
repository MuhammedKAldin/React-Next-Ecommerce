import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";


const Container  = styled.div``;

const Wrapper  = styled.div`
    padding:50px;
    display:flex;
    ${mobile({padding: "10px", flexDirection:"column" })}
    
`;

const ImgContainer  = styled.div`flex:1`;

const Image  = styled.img`
    width:100%;
    hieght:90vh;
    object-fit:cover;
    ${mobile({height: "40vh" })}

`;

const InfoContainer  = styled.div`
    flex:1;
    p: 0px 50px;
    ${mobile({padding: "10px" })}

`;

const Title  = styled.h1`
    font-wieght:200;
`;

const Desc  = styled.p`
    margin:20px 0px;
`;

const Price  = styled.span`
    font-wieght:100;
    font-size:40px;
`;



const FilterContainer = styled.div`
    display:flex;
    margin:30px 0px;
    justify-content:space-between;
    width:50%;
    ${mobile({width: "100%" })}
`;
const Filter = styled.div`
display:flex;
align-items:center;
`
;
const FilterTitle = styled.span`
font-size:20px;
font-wieght:200;

`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props) => props.color};
margin:0px 5px;
cursor:pointer;
`;
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`;
const FilterSizeOption = styled.option``;



const AddContainer = styled.div`
display:flex;
align-items:center;
width:40%;
justify-content:space-between;
${mobile({width: "100%" })}
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-wieght:700;
`;

const Amount = styled.span`
width:30px;
hieght:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-item:center;
justify-content:center;
margin:0px 5px;
padding:10px;
font-size:22px;
`;

const Button = styled.button`
padding:15px;
border:2px solid teal;
background:white;
cursor:pointer;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement/>    
        <Wrapper>
            <ImgContainer>
                <Image src="https://image.made-in-china.com/202f0j00vKzfoRbGgrkS/Women-Elegant-Vintage-MIDI-Dress-Sexy-Solid-Patchwork-A-Line-Dress.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Dress</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam asperiores possimus itaque at velit pariatur, veniam iste sapiente, quas dolore esse! Voluptatum modi facere quia nostrum saepe odio doloremque!</Desc>
                <Price>$20</Price>


                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                        <FilterColor color="yellow" />
                        <FilterColor color="pink" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <object height="35px" data="https://www.svgrepo.com/show/333316/remove.svg" />
                        <Amount>1</Amount>
                        <object height="30px" data="https://www.svgrepo.com/show/274451/add.svg" />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
