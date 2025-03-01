import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.800" color="white" py={4}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          textAlign={{ base: "center", md: "left" }}
        >
          <Stack spacing={4}>
            <Heading as="h2" size="md" mb={4}>
              Company
            </Heading>
            <Link href="/about" _hover={{ textDecoration: "underline" }}>
              About Us
            </Link>
            <Link href="/careers" _hover={{ textDecoration: "underline" }}>
              Careers
            </Link>
            <Link href="/press" _hover={{ textDecoration: "underline" }}>
              Press
            </Link>
          </Stack>
          <Stack spacing={4}>
            <Heading as="h2" size="md" mb={4}>
              Support
            </Heading>
            <Link href="/contact" _hover={{ textDecoration: "underline" }}>
              Contact Us
            </Link>
            <Link href="/faq" _hover={{ textDecoration: "underline" }}>
              FAQ
            </Link>
            <Link href="/support" _hover={{ textDecoration: "underline" }}>
              Support Center
            </Link>
          </Stack>
          <Stack spacing={4} align={{ base: "center", md: "flex-end" }}>
            <Flex justify="center" mb={4}>
              <Link
                href="mailto:info@company.com"
                isExternal
                mx={2}
                _hover={{ color: "gray.400" }}
              >
                {/* <Icon as={EmailIcon} boxSize={6} /> */}
              </Link>
              <Link
                href="tel:+1234567890"
                isExternal
                mx={2}
                _hover={{ color: "gray.400" }}
              >
                {/* <Icon as={PhoneIcon} boxSize={6} /> */}
              </Link>
              <Link href="/about" mx={2} _hover={{ color: "gray.400" }}>
                {/* <Icon as={InfoIcon} boxSize={6} /> */}
              </Link>
            </Flex>
            <Text color="gray.400">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
