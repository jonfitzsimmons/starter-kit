"use client";

import { Box, Flex, VStack, Heading, Text } from "@/components/design-system";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    setCreatedAt(new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }));
  }, []);

  return (
    <Box
      width="100vw"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="bg.primary"
      p={{ base: 0, md: "24px" }}
    >
      {/* Device Frame Wrapper - visible only on desktop */}
      <Box
        display={{ base: "none", md: "flex" }}
        position="relative"
        alignItems="center"
        justifyContent="center"
        width="430px"
        height="890px"
      >
        {/* iPhone Frame Image */}
        <Box
          position="absolute"
          inset="0"
          zIndex={1}
          pointerEvents="none"
        >
          <Image
            src="/iphone-mock.png"
            alt="iPhone frame"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        {/* Content inside the device frame - iPhone 14/15 Pro dimensions */}
        <Box
          position="relative"
          zIndex={0}
          width="393px"
          height="852px"
          overflow="hidden"
          borderRadius="47px"
          bg="bg.secondary"
        >
          <AppContent createdAt={createdAt} isInFrame />
        </Box>
      </Box>

      {/* Mobile view - full width, no frame */}
      <Box
        display={{ base: "flex", md: "none" }}
        width="100%"
        minHeight="100vh"
        bg="bg.secondary"
      >
        <AppContent createdAt={createdAt} />
      </Box>
    </Box>
  );
}

// Extracted content component for reuse
function AppContent({ 
  createdAt, 
  isInFrame = false 
}: { 
  createdAt: string; 
  isInFrame?: boolean;
}) {
  return (
    <Box
      width="100%"
      height="100%"
      p="16px"
      pt={isInFrame ? "60px" : "48px"}
      pb={isInFrame ? "34px" : "32px"}
      display="flex"
      flexDirection="column"
    >
      {/* Text section - centered */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="24px"
        flexShrink={0}
      >
        <Heading size="xl" textAlign="center" mb="8px">
          starter-kit
        </Heading>
        <Text
          fontSize="sm"
          color="text.secondary"
          textAlign="center"
        >
          Created {createdAt}
        </Text>
      </Flex>

      {/* Button container - fills remaining space, pinned to bottom */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        width="100%"
      >
        <VStack gap="16px" width="100%">
          <Button
            colorPalette="blue"
            variant="solid"
            size="lg"
            width="100%"
            rounded="xl"
          >
            Primary Action
          </Button>
          <Button
            colorPalette="gray"
            variant="surface"
            size="lg"
            width="100%"
            rounded="xl"
          >
            Secondary Action
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
