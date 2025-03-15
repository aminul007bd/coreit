import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg="white" color="black">
      {/* About Section */}
      <Box py={20}>
        <Container maxW="container.xl" px={4} py={4}>
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            Our company specializes in providing innovative IT solutions
            tailored to your business needs. With a team of experienced
            professionals, we ensure that your technology infrastructure is
            robust, secure, and efficient.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
