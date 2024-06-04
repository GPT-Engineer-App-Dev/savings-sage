import { Container, Text, VStack, Box, Heading, Image, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box bg="gray.100" w="100%" p={4} borderRadius="md" boxShadow="md">
        <Flex align="center" mb={4}>
          <Heading as="h1" size="xl" color="teal.500">
            Financial Times
          </Heading>
          <Spacer />
          <Button colorScheme="teal" variant="outline" size="sm" mr={2}>
            Subscribe
          </Button>
          <Button colorScheme="teal" size="sm">
            Sign In
          </Button>
        </Flex>
        <Box mb={6}>
          <Image
            src="https://via.placeholder.com/1200x400"
            alt="Financial News"
            borderRadius="md"
            boxShadow="md"
          />
        </Box>
        <VStack spacing={8} align="stretch">
          <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <Flex align="center">
              <FaNewspaper size="24px" color="teal.500" />
              <Heading as="h2" size="md" ml={2}>
                Latest News
              </Heading>
            </Flex>
            <Text mt={2}>
              Stay updated with the latest financial news from around the world.
            </Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <Flex align="center">
              <FaChartLine size="24px" color="teal.500" />
              <Heading as="h2" size="md" ml={2}>
                Market Trends
              </Heading>
            </Flex>
            <Text mt={2}>
              Get insights into the latest market trends and analysis.
            </Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <Flex align="center">
              <FaMoneyBillWave size="24px" color="teal.500" />
              <Heading as="h2" size="md" ml={2}>
                Investment Tips
              </Heading>
            </Flex>
            <Text mt={2}>
              Learn about the best investment strategies and tips.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;