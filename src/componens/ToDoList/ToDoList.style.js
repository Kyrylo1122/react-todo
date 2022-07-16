import styled from "styled-components";
export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  padding: ${(p) => p.theme.space[2]}px;
  border: ${(p) => p.theme.borders.normal};
  font-family: ${(p) => p.theme.fonts.monospace};
  font-size: ${(p) => p.theme.fontSizes.xs};
  text-transform: uppercase;
`;
export const DeleteBtn = styled.button`
  margin-left: auto;
  padding: ${(p) => p.theme.space[2]}px ${(p) => p.theme.space[3]}px;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.background};
  }
`;
