import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;
`;

const Modal = ({isVisible, setIsVisible, ...props}) => {
    return (
        <StyledModal {...props} onClick={() => setIsVisible(false) }>
            <Content {...props} onClick={(evt) => evt.stopPropagation()}>
            </Content>
        </StyledModal>
    )
};

export default Modal;