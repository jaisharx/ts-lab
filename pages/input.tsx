import { Center, Box, Input, Heading } from '@chakra-ui/react'
import { useState } from 'react'

import type { NextPage } from 'next'
import type { Dispatch, SetStateAction, } from 'react'

type CustomInputProps = {
  text: string
  setText: Dispatch<SetStateAction<string>>
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <Input
      mt="4"
      type="text"
      minW="30rem"
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
  )
}

const Home: NextPage = () => {
  const [text, setText] = useState('')

  return (
    <Center minH="90vh">
      <Box>
        <Heading w="full" fontSize="2xl" fontWeight="semibold">
          {text}
        </Heading>
        <CustomInput text={text} setText={setText} />
      </Box>
    </Center>
  )
}

export default Home
