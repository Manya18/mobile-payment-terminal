import styled from "styled-components";

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
