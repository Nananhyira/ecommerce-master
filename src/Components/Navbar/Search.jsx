import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <AiOutlineSearch color="gray.300" />
      </InputRightElement>
      <Input
        type="search"
        placeholder="Search Products"
        maxW={{ base: "150px", md: "400px" }}
        border="1px solid"
        borderColor="gray.400"
      />
    </InputGroup>
  );
};

export default Search;
