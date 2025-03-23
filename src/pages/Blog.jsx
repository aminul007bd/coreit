import {
  Alert,
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import Card from "../components/common/Card";
import baseUrl from "../config";
import { useGet } from "../hooks/useGet"; // Import the useGet hook

export default function Blog() {
  const {
    data: posts,
    error,
    isLoading,
  } = useGet({
    url: `${baseUrl}/blogs`,
    queryKey: ["blogPosts"],
  });

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Alert status="error">Error loading blog posts</Alert>;

  return (
    <Box p={4} color={"gray.800"}>
      <Heading as="h1" size="xl" mb={4}>
        Blog
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {posts.map((post) => (
          <Card key={post.id}>
            <Heading as="h2" size="md" mb={2}>
              {post.title}
            </Heading>
            <Text>{post.content}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}