import { Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("white", "gray.700");
  const heading = useColorModeValue("", "gray.400");

  return (
    <Flex
      bg={bg}
      color={heading}
      px={4}
      py={2}
      align="center"
      borderTop={useColorModeValue("1px", "")}
      borderTopColor={useColorModeValue("gray.400", "none")}
    >
      Copyright &copy; 2023 - Bin-Ladin.com
    </Flex>
  );
};

export default Footer;
