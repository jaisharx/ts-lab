import { Center, ListItem, UnorderedList } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

type User = {
  id: number
  name: string
}

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()

      console.log(data)
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <Center minH="90vh">
      <UnorderedList>
        {users?.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </UnorderedList>
    </Center>
  )
}

export default Home
