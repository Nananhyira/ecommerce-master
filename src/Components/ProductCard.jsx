import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ id, description, image, price, title }) => {
  const heading = useColorModeValue("", "gray.400");
  const text = useColorModeValue("black", "gray.500");

  return (
    <LinkBox>
      <Card maxW="xs" h="250px">
        <CardBody>
          <Image
            src={image}
            mx="auto"
            maxW={20}
            h="80px"
            alt={title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading
              color={heading}
              fontSize={{ base: "sm", md: "md" }}
              noOfLines={title.length > 20 ? 1 : 0}
            >
              {title}
            </Heading>
            <Text noOfLines={1} color={text}>
              {description}
            </Text>
            <Flex justify="space-between" align="center" gap={2}>
              <Text color={text}>${price}</Text>
              <LinkOverlay as={RouterLink} to={`productDetails/${id}`}>
                <Button size="sm" textTransform="uppercase">
                  buy now
                </Button>
              </LinkOverlay>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default ProductCard;
