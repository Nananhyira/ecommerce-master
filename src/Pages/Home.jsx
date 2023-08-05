import { useEffect, useState } from "react";
import {
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchData } from "../api/fetchData";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetchData("/products");
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Center minH="80vh">
        <Text>A problem has occurred</Text>
      </Center>
    );
  }

  const headingColor = useColorModeValue("", "gray.400");

  return (
    <>
      <Heading
        color={headingColor}
        pt={20}
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        Products
      </Heading>

      <Grid mt={4} templateColumns="repeat(12, 1fr)" gap={3}>
        {products.map((product) => (
          <GridItem key={product.id} colSpan={{ base: 6, md: 4, lg: 3 }}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Home;
