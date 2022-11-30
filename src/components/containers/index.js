import styled from "styled-components";

export const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0px"};
`;
