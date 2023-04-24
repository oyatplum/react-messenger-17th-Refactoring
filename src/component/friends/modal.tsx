import React from 'react';
import { ModalInfo } from './../../interface/interface';
import styled from 'styled-components';
import { useState } from 'react';

const Modal = ({ modalId }: ModalInfo) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <H>
      {modalId}
      {/* <RemoveModal onClick={}>{'X'}</RemoveModal> */}
    </H>
  );
};

const H = styled.div`
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  width: 270px;
  height: 575.4px;
  position: absolute;
`;
const RemoveModal = styled.div``;

export default Modal;
