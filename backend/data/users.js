import { bcrypt } from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@exmple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@exmple.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@exmple.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default user
