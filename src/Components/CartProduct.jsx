import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeItem } from "../Slices/CartSlice";

const CartProduct = ({
  id,
  category,
  image,
  price,
  rating,
  title,
  quantity,
}) => {
  const dispatch = useDispatch();

  // Dark mode Variables
  const heading = useColorModeValue("", "gray.400");
  const text = useColorModeValue("black", "gray.500");
  const deleteBtn = useColorModeValue("red", "red.600");

  //   let { category, image, price, rating, title } = product;

  return (
    <Flex py={10} px={4} gap={4}>
      <Box w={{ md: "20%" }}>
        <Image
          src={image}
          alt={title}
          maxW="150px"
          mx={{ base: "auto", md: "none" }}
        />
      </Box>
      <Box w={{ md: "80%" }}>
        <Heading color={heading} fontSize={{ base: "lg", md: "4xl" }}>
          {title}
        </Heading>

        <Stack mt={3}>
          <Text color="gray.400">
            Category :{" "}
            <Text as="span" color={text} textTransform="capitalize">
              {category}
            </Text>
          </Text>
          <Text color="gray.400">
            Rating :{" "}
            <Text as="span" color={text} textTransform="capitalize">
              {rating.rate}
            </Text>
          </Text>
          <Text color="gray.400">
            Price :{" "}
            <Text as="span" color="brand.500" fontSize="x-large">
              ${price}
            </Text>
          </Text>
        </Stack>
        <Flex justify="space-between" mt={4}>
          <HStack>
            <IconButton
              size={{ base: "sm", md: "md", lg: "lg" }}
              variant="outline"
              border="1px"
              bg="transparent"
              icon={<RiSubtractFill />}
              onClick={() => dispatch(decreaseQuantity({ id }))}
            />
            <Text color={text}>{quantity}</Text>
            <IconButton
              size={{ base: "sm", md: "md", lg: "lg" }}
              variant="outline"
              border="1px"
              bg="transparent"
              icon={<RiAddFill />}
              onClick={() => dispatch(addToCart({ id }))}
            />
          </HStack>
          <Button
            bg={deleteBtn}
            _hover={{
              bg: "red.600",
            }}
            border="none"
            size={{ base: "sm", md: "md", lg: "lg" }}
            onClick={() =>
              dispatch(
                removeItem({ id, category, image, price, rating, title })
              )
            }
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartProduct;
