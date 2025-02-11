import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg="white" color="black">
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="container.xl" px={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our IT Company
          </Heading>
          <Text fontSize="lg" mb={8}>
            We provide top-notch IT solutions to help your business thrive in
            the digital age.
          </Text>
          <Button
            bg="white"
            color="blue.600"
            px={6}
            py={2}
            rounded="md"
            _hover={{ bg: "gray.200" }}
          >
            Learn More
          </Button>
        </Container>
      </Box>

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

      {/* Services Section */}
      <Box bg="gray.200" py={20}>
        <Container maxW="container.xl" px={4}>
          <Heading as="h2" size="xl" mb={4}>
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box bg="white" p={6} rounded="md" shadow="md" mx={2}>
              <Heading as="h3" size="md" mb={2}>
                Web Development
              </Heading>
              <Text>
                We build responsive and scalable web applications to help your
                business reach a wider audience.
              </Text>
            </Box>
            <Box bg="white" p={6} rounded="md" shadow="md" mx={2}>
              <Heading as="h3" size="md" mb={2}>
                Cloud Solutions
              </Heading>
              <Text>
                We provide cloud solutions that ensure your business operations
                are efficient and scalable.
              </Text>
            </Box>
            <Box bg="white" p={6} rounded="md" shadow="md">
              <Heading as="h3" size="md" mb={2}>
                IT Consulting
              </Heading>
              <Text>
                Our IT consulting services help you strategize and implement the
                best technology solutions for your business.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
