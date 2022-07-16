import { Box } from "../Box/Box";
import shortid from "shortid";
import { FilterTitle, FilterInput } from "./Filter.style";
const inputId = shortid.generate();

export const Filter = ({ filter, changeFilter }) => (
  <Box display="flex" flexDirection="column" mt={4} mb={4}>
    <FilterTitle htmlFor={inputId}>Find your task</FilterTitle>
    <FilterInput
      type="text"
      value={filter}
      onChange={changeFilter}
      id={inputId}
    ></FilterInput>
  </Box>
);
