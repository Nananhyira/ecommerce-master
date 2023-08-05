import { Container, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "../Slices/CartSlice";

const RootLayout = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);

  const bg = useColorModeValue("", "gray.800");

  return (
    <>
      <Container maxW="container.xxl" p={0}>
        <Navbar />
      </Container>
      <Container maxW="container.xxl" as="main" bg={bg} pb={10}>
        <Outlet />
      </Container>
      <Container maxW="container.xxl" p={0}>
        <Footer />
      </Container>
    </>
  );
};

export default RootLayout;
