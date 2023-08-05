import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center minH="100vh">
      <Spinner
        size="xl"
        color="brand.500"
        thickness="4px"
        speed="0.65s"
        emptyColor="brand.100"
      />
    </Center>
  );
};

export default Loading;
