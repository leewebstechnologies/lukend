import styled from "styled-components";

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
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Input =styled.input`
    width: 200px;
`

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <LeftForm></LeftForm>
          <RightForm></RightForm>
        </FormContainer>
        <AddressContainer>a</AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
