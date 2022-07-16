import styled from "styled-components";
export const FormAddTask = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(p) => p.theme.space[3]}px;
`;
export const TitleAddTask = styled.label`
  font-family: ${(p) => p.theme.fonts.monospace};
  font-weight: ${(p) => p.theme.fontWeights.bold}; ;
`;
export const InputAddTas = styled.input`
  width: 250px;
  outline: none;
`;
export const BtnAdd = styled.button`
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.primary};
  padding: ${(p) => p.theme.space[3]}px;
  border: none;
  cursor: pointer;
`;
