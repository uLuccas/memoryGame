import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c;
`;

export const AreaWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;

  color: white;
  background-color: transparent;

  border-radius: 5px;
  border: none;

  margin: 20px;
  transition: 0.4s;

  font-size: medium;
  letter-spacing: 1px;
  &:hover {
    background-color: #363636;
    box-shadow: 0px 2px 2px black;
    cursor: pointer;
  }
`;
