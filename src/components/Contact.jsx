import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoY2AArZMmNRrKbnQLZyulR7hhq1j3T7tT1YfzZTTztyOI1qU37nQxVLMfrTe_EREF8Ew&usqp=CAU");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 50%;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
`;

const Form = styled.div`
  height: 250px;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const AddressContainer = styled.div`
  width: 50%;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;

const TextArea = styled.textarea`
  width: 200px;
  padding: 20px;
  height: 60%;
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: #fff;
  font-size: 16px;
  padding: 15px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions
            <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>
              123, Park Avenue, New York, USA.
            </Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+234 808 483 8268</Text>
            <Text>+234 810 395 0088</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>aliuajibade317@gmail.com</Text>
            <Text>leewebs@yahoo.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
