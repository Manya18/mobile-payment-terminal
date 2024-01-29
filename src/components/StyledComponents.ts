import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  background-color: #efdecd;
  margin: 10px 0 0 0;
  border: none;
  &:hover {
    background-color: #bc987e;
  }
`;

export const Main = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  max-width: calc(100% / 3 * 2);
  margin-top: 30px;
  @media (max-width: 850px) {
    justify-content: space-around;
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const Operator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(49, 23, 9, 0.4);
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;

export const Text = styled.div`
  margin-top: 20px;
`;

export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(49, 23, 9, 0.4);
  margin-top: 20px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const ErrorMes = styled.p`
  color: red;
  font-size: 11px;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ErrorModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border: 4px solid #ff9999;
  animation: 0.5s ${fadeIn} ease-out;
`;

export const OkModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border: 4px solid #a8ffd2;
  animation: 0.5s ${fadeIn} ease-out;
`;

export const ModalPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const EscapeButton = styled.button`
  padding: 2px;
  background-color: #efdecd;
  margin: 10px 0 0 0;
  border: none;
  &:hover {
    background-color: #bc987e;
  }
`;
