import styled from "styled-components";
import Man_old from "../img/man_old.png";
import Minicard from "./Minicard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;
const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: #fff;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
const Services = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={Man_old} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources.
          </Desc>
          <CardContainer>
            <Minicard />
            <Minicard />
            <Minicard />
          </CardContainer>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Services;
