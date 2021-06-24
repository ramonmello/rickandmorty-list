import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: #f1f1f1;
  border-radius: 8px;
  width: 500px;
  background-color: rgb(60, 62, 68);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const Image = styled.img`
  max-height: 200px;
`;
