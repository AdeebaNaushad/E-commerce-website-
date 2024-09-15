import { Box, Image, Text, Badge, Heading, Stack, HStack, VStack, Divider, Button, Tag } from "@chakra-ui/react";
import React from "react";


const Product = ({ product }) => {
  if (!product) return <p>Product not found</p>;

  return (
    <Box maxW="1320px" mx="auto" p={6}>
      <HStack spacing={10}>
        <Image src={product.thumbnail} alt={product.title} boxSize="400px" objectFit="cover" />
        <VStack align="start" spacing={4} flex="1">
          <Heading>{product.title}</Heading>
          <Text fontSize="lg" fontWeight="bold">
            Brand: {product.brand}
          </Text>
          <HStack>
            <Text fontSize="2xl" color="teal.500" fontWeight="bold">
              ${product.price.toFixed(2)}
            </Text>
            <Badge colorScheme="red" fontSize="md">
              {Math.round(product.discountPercentage * 100)}% OFF
            </Badge>
          </HStack>
          <Text fontSize="lg" color={product.availabilityStatus === "In Stock" ? "green.500" : "red.500"}>
            {product.availabilityStatus}
          </Text>
          <Text>SKU: {product.sku}</Text>
          <Text>Stock: {product.stock} available</Text>
          <HStack>
            <Text>Rating: {product.rating} ★</Text>
          </HStack>
          <Text>Minimum Order Quantity: {product.minimumOrderQuantity}</Text>
          <HStack spacing={4}>
            <Button colorScheme="teal">Add to Cart</Button>
            <Button variant="outline" colorScheme="teal">
              Buy Now
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <Divider my={6} />
      <VStack align="start" spacing={4}>
        <Heading size="md">Product Description</Heading>
        <Text>{product.description}</Text>
        <Heading size="md">Shipping Information</Heading>
        <Text>{product.shippingInformation}</Text>
        <Heading size="md">Return Policy</Heading>
        <Text>{product.returnPolicy}</Text>
        <Heading size="md">Warranty Information</Heading>
        <Text>{product.warrantyInformation}</Text>
        <Heading size="md">Weight and Dimensions</Heading>
        <Text>Weight: {product.weight} kg</Text>
        <Text>Dimensions: {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}</Text>
        <Heading size="md">Tags</Heading>
        <HStack spacing={2}>
          {product.tags.map((tag) => (
            <Tag key={tag} colorScheme="teal">
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Product;
