import {
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { BsHandbag, BsFillMoonFill } from "react-icons/bs";
import { PiSunLight } from "react-icons/pi";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.700");
  const heading = useColorModeValue("", "gray.400");
  const icon = useColorModeValue("brand.200", "gray.600");

  return (
    <Flex
      as="nav"
      px={4}
      py={2}
      justify="space-between"
      shadow="md"
      zIndex={100}
      w="100%"
      pos="fixed"
      top={0}
      bg={bg}
    >
      <Heading
        as={Link}
        to="/"
        fontSize={{ base: "2xl", md: "3xl" }}
        color={heading}
      >
        Bin-
        <Text as="span" color="brand.300">
          Ladin
        </Text>
      </Heading>
      <Box>
        <Search />
      </Box>
      <HStack spacing={4}>
        <Icon
          as={RxAvatar}
          boxSize={5}
          display={{ base: "none", md: "flex" }}
        />
        <Box as={Link} to="cart" pos="relative">
          <Icon as={BsHandbag} boxSize={5} />
          <Badge bg={icon} rounded="50%" pos="absolute" bottom="0" left="10px">
            {cart.length}
          </Badge>
        </Box>
        <IconButton
          border={0}
          bg="brand.500"
          icon={useColorModeValue(<BsFillMoonFill />, <PiSunLight />)}
          onClick={() => toggleColorMode()}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
