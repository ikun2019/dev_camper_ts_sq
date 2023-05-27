import { buildSchema } from 'graphql';

export default buildSchema(`
  """Type"""
  type Bootcamp {
    id: ID!
    text: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  type AuthData {
    token: String!
    user: User!
  }
  
  """Input Data"""
  input bootcampInputData {
    text: String!
  }
  input userInputData {
    name: String!
    email: String!
    password: String!
  }

  """Root Query"""
  type RootQuery {
    getBootcamps: [Bootcamp!]!
    getBootcamp(id: ID!): Bootcamp!
  }
  type RootMutation {
    createBootcamp(bootcampInput: bootcampInputData): Bootcamp!
    updateBootcamp(id: ID!, bootcampInput: bootcampInputData): Bootcamp!
    deleteBootcamp(id: ID!): Boolean
    createUser(userInput: userInputData): AuthData!
    loginUser(email: String!, password: String!): AuthData!
  }

  """Schema"""
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
