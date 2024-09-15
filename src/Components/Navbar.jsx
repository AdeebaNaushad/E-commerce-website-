import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  Spacer,
  Text,
  Container,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="teal.500" w="100%" position="sticky" top="0" zIndex="999">
      <Container maxW="1320px">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Logo */}
          <HStack spacing={8} alignItems={"center"}>
            <Image
              boxSize="82px"
              src="https://i.postimg.cc/Zq0Nbyyn/logo-removebg-preview.png" // Add your logo path here
              alt="MyShop Logo"
            />
            {/* <Text fontSize="xl" fontWeight="bold" color="white" mr="6px">MyShop</Text> */}
          </HStack>

          {/* Navigation Links */}
          <HStack as={"nav"} spacing={8} display={{ base: "none", md: "flex" }}>
            <Link href="/" color="white">
              Home
            </Link>
            <Link href="/products" color="white">
              Products
            </Link>
            <Link href="/about" color="white">
              About Us
            </Link>
            <Link href="/contact" color="white">
              Contact
            </Link>
          </HStack>

          <Spacer />

          {/* Sign Up Button */}
          <HStack spacing={6}>
            <Button
              as={"a"}
              href="/signup"
              bg="white"
              color="teal.500"
              _hover={{ bg: "teal.100" }}
            >
              Sign Up
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
