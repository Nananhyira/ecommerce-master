import { Link as RouterLink, useParams } from "react-router-dom";
import { fetchData } from "../api/fetchData";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import Loading from "../Components/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchApi = async () => {
    try {
      const { data } = await fetchData("/products/" + id);
      setProductDetails(data);
      setIsLoading(false);
      // console.log(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Center minH="100vh">
        <Text>A problem has occurred</Text>
      </Center>
    );
  }

  const { category, description, image, price, rating, title } = productDetails;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(productDetails));
  };

  // Dark mode Variables
  const heading = useColorModeValue("", "gray.400");
  const text = useColorModeValue("black", "gray.500");

  return (
    <>
      <Flex
        mt={14}
        py={10}
        px={4}
        gap={{ base: 8, md: 4 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box w={{ md: "60%" }}>
          <Image
            src={image}
            alt={title}
            maxW={350}
            mx={{ base: "auto", md: "none" }}
          />
        </Box>
        <Box w={{ md: "60%" }}>
          <Heading color={heading} fontSize={{ base: "2xl", md: "4xl" }}>
            {title}
          </Heading>
          <Text mt={4} color={text}>
            {description}
          </Text>
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
            {/* <HStack>
              <IconButton
                size={{ base: "sm", md: "md", lg: "lg" }}
                variant="outline"
                border="1px"
                bg="transparent"
                icon={<RiSubtractFill />}
              />
              <Text>0</Text>
              <IconButton
                size={{ base: "sm", md: "md", lg: "lg" }}
                variant="outline"
                border="1px"
                bg="transparent"
                icon={<RiAddFill />}
              />
            </HStack> */}
            <Button
              leftIcon={<RiAddFill />}
              size={{ base: "sm", md: "md", lg: "lg" }}
              onClick={handleAdd}
            >
              Add To Cart
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box pb={10} pl={{ base: 0, md: 30 }}>
        <Link as={RouterLink} to="/" color={text}>
          Continue Shopping
        </Link>
      </Box>
    </>
  );
};

export default ProductDetails;
