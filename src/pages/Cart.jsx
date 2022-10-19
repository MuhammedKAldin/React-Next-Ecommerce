import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px" })}
`;
const Title = styled.h1`
font-weight: 200;
text-align:center;
`;
const Top = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor:pointer;
    border: ${props => props.type === "filled" && "none" };
    // if type === filled =True=> black =False=> transparent
    background-color: ${props => props.type === "filled" ? "black" : "transparent" }
    color: ${props => props.type === "filled" && "white" }
`;

const TopTexts = styled.div`
    ${mobile({display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection: "column" })}

`;

const Info = styled.div`
    flex:3;
`;

//== Required Globally ==//
//== Will Be Used As Component from here, to Generate Items in The Cart Displaying Infos Per item


const Product = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection: "column" })}

`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    // Just use the color given (No Other Conditions)
    background-color ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;


//== Amount Per Product ==//

// Includes Increase/Decrease Product Quanitity & Displays Current Value of Quantity
// Shape Exmplae => (+) (Quantity) (-)
// Total Price Underneath them to Display 

const ProductAmountContainer = styled.div`
    display:flex;
    align-content:center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size:24px;
    margin: 5px;
    ${mobile({margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:200;
    ${mobile({marginBottom: "20px" })}
`;

// Horizontal line Products-Verticle-Sepereator
const Hr = styled.hr``;

//=======================//

const Summary = styled.div`
    flex:1;
    background-color: white;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height:50vh;
`;

const SummaryTitle = styled.h1`
    font-weight:200;
`;

const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color: black;
    color:white;
    font-weight:600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled" >CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://m.media-amazon.com/images/I/61YXZmuiJsL._AC_UY550_.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> DISNEY PRINCESS DRESS </ProductName>
                                <ProductId><b>ID:</b> 94564184161856</ProductId>
                                <ProductColor color="skyblue" />
                                <ProductSize><b>Size:</b> XL </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <object height="35px" data="https://www.svgrepo.com/show/333316/remove.svg" />
                                <ProductAmount>2</ProductAmount>
                                <object height="30px" data="https://www.svgrepo.com/show/274451/add.svg" />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr />

                    <Product>
                        <ProductDetail>
                            <Image src="https://www.collinsdictionary.com/images/full/dress_31690953_1000.jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Summer Sundress Casual Dress </ProductName>
                                <ProductId><b>ID:</b> 94564184161856</ProductId>
                                <ProductColor color="pink" />
                                <ProductSize><b>Size:</b> M </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <object height="35px" data="https://www.svgrepo.com/show/333316/remove.svg" />
                                <ProductAmount>2</ProductAmount>
                                <object height="30px" data="https://www.svgrepo.com/show/274451/add.svg" />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle> ORDER SUMMARY`</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total" >
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
