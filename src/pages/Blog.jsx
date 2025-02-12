import {
  Alert,
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";

import Card from "../components/common/Card";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchBlogPosts = async () => {
  const response = await fetch(`http://localhost:3000/blogs`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Blog() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery(["blogPosts"], fetchBlogPosts);

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Alert status="error">Error loading blog posts</Alert>;

  return (
    <Box p={4}>
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
