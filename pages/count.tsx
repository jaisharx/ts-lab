import { Button, Text, Center, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'

const Count: NextPage = () => {
  const [count, setCount] = useState(0)

  return (
    <Center minH="90vh">
      <HStack>
        <Button
          colorScheme="orange"
          size="lg"
          onClick={() => setCount((currentCount) => (currentCount -= 1))}
          >
          -
        </Button>
        <Text fontSize="2xl">{count}</Text>
        <Button
          colorScheme="orange"
          size="lg"
          onClick={() => setCount((currentCount) => (currentCount += 1))}
        >
          +
        </Button>
      </HStack>
    </Center>
  )
}

export default Count
