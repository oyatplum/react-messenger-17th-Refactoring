import React from 'react';
import styled from 'styled-components';
import { Last } from '../../interface/interface';

function LastChat({ getLastMessage }: Last) {
  return <Message>{getLastMessage}</Message>;
}

const Message = styled.div`
  font-size: 0.75rem;
  padding: 0.2rem 0 0 0.1rem;
  color: #4d4d4d;
`;

export default LastChat;
