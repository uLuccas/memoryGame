import styled from "styled-components";

export const CardContainerNotVisible = styled.button`
  width: 220px;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  color: #fff;
  background-color: #363636;
  border: 2px solid #000;
  box-shadow: 2px 1px 2px #000;
  border-radius: 10px 0px 10px 0px;

  img {
    width: 200px;
    border-radius: 10px 0px 10px 0px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const CardContainer = styled.button`
  width: 220px;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  color: #fff;
  background-color: #363636;

  border: 2px solid #000;
  box-shadow: 2px 1px 2px #000;
  border-radius: 10px 0px 10px 0px;
`;

export const Image = styled.img`
  width: 180px;

  border-radius: 10px;
`;
