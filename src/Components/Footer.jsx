import { Box, Container, Stack, Text, Link, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" w="100%">
      <Container as={Stack} maxW="1320px" py={4}>
        {/* Footer Links */}
        <HStack spacing={8} justifyContent="center" flexWrap="wrap">
          <Link href="/privacy-policy" color="white">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="white">
            Terms of Service
          </Link>
          <Link href="/faq" color="white">
            FAQ
          </Link>
          <Link href="/support" color="white">
            Support
          </Link>
        </HStack>

        {/* Footer Copyright */}
        <Text mt={4} textAlign="center">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </Text>

        {/* Made with Love */}
        <Text mt={2} textAlign="center" fontStyle="italic">
          Made by Adeeba with ❤️
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
