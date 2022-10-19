import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #f5fbfd;
    position:relative;


`;

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background:white;
    position:absolute;
`;

const Image = styled.img`
    height:75%;
    z-index:2;
`;

// to be used in this container &hover (as it cannot be used before)
const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.4s;
    cursor:pointer;
    &:hover {
        opacity:1;
    }
`;

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:0.4s ease; 
    cursor:pointer;
    &:hover{
        background:#e9f5f5;
        transform:scale(1.1);
    }
`;

export default function Product({item}) {
  return (
      <Container>
          <Circle />
          <Image src={item.img} />
          <Info>
              <Icon>
                  <object  height="20px" type="image/svg+xml" data="https://www.svgrepo.com/show/39031/cart.svg"></object>
              </Icon>
              <Icon>
                  <object  height="20px" type="image/svg+xml" data="https://www.svgrepo.com/show/14071/search.svg"></object>
              </Icon>
              <Icon>
                  <object  height="20px" type="image/svg+xml" data="https://www.svgrepo.com/show/9761/heart.svg"></object>
              </Icon>
          </Info>
      </Container>
  )
}
