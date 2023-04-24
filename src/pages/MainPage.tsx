import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate('/friends')}>click to start</Button>
      <Image src={`/images/monstax.png`} />
    </Container>
  );
};

const Container = styled.div`
  height: 650px;
  background-color: #e6e6e6;
`;

const Image = styled.img`
  width: 270px;
  height: 500px;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 50px;
  width: 160px;
  margin: 50px;
  font-size: 1.3rem;
  border-radius: 1.7rem;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(73, 71, 71, 0.5);
  :hover {
    background-color: #b3b3b3;
    color: #333333;
  }
`;

export default MainPage;
