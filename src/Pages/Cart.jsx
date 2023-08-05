import { useSelector } from "react-redux";
import CartProduct from "../Components/CartProduct";
import {
  Box,
  Center,
  Divider,
  HStack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);

  // Dark mode Variables
  const bg = useColorModeValue("", "gray.800");
  const text = useColorModeValue("black", "gray.500");
  const navigate = useNavigate()

  const checkout =()=>{
    navigate("/checkout")
  }

  return (
    <Box mt={14} bg={bg}>
      {cart.length === 0 ? (
        <Center minH="80vh">
          <Text color={text} fontSize="2xl">
            Cart is Empty
          </Text>
        </Center>
      ) : (
        cart.map((product) => {
          return <CartProduct key={product.id} {...product} />;
        })
      )}
      <Divider bg={useColorModeValue("gray.900", "gray.300")} py="0.4px" />
      <HStack fontSize={{ base: "2xl", md: "4xl" }} color={text}>
        <Text>Total :</Text>
        <Text as="span">${total.toFixed(2)}</Text>
        <Button onClick={checkout}>checkout</Button>
      </HStack>
    </Box>
  );
};

export default Cart;
