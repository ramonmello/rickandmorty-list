import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  background-color: rgb(36, 40, 47);
`;

export const WrapperBtn = styled.div`
  max-width: 250px;

  .btn {
    margin: 8px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  div {
    margin: 10px;
  }
`;
