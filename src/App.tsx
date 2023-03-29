import { GlobalStyle } from './styles/GlobalStyle';
import ChattingRoomPage from './pages/ChattingRoomPage';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ChattingRoomPage />
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 350px;
  border-radius: 20px;
  box-shadow: 1px 1px 15px rgba(73, 71, 71, 0.5);
`;

export default App;
