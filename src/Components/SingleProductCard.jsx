import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SingleProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="4"
      cursor="pointer"
      onClick={handleCardClick}
    >
      <Image src={product.images} alt={product.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product.stock} stock &bull; {product.rating} rating
          </Box>
        </Box>

        <Box
          m="2"
          fontWeight="semibold"
          as="h5"
          lineHeight="tight"
          noOfLines={1}
          align="center"
        >
          {product.title}
        </Box>
        <Box mt="2" as="h5" noOfLines={2}>
          {product.description}
        </Box>

        <Box as="span" color="gray.800" fontSize="m">
          $ {product.price}
        </Box>
        <Box as="span" color="gray" fontSize="sm" ml="2">
          &bull; Discount {product.discountPercentage} %
        </Box>

        <Box as="h4" ml="" color="teal" fontSize="m">
          Brand: {product.brand}
        </Box>
      </Box>
    </Box>
  );
}
