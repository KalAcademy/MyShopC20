import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'info@kalacademy.org',
    password: bcrypt.hashSync('123456'),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456'),
  },  
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456'),
  },    
]

export default users