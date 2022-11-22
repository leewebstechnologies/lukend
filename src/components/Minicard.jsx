import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
    
`
const Minicard = () => {
  return (
    <Container>
      <Image />
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
        sit ullam quia velit perspiciatis, ipsum ducimus, fuga temporibus at
        accusamus ratione voluptas cupiditate? Doloremque maiores quisquam rerum
        quasi repellendus.
      </Text>
    </Container>
  );
};

export default Minicard;
