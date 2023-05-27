import { buildSchema } from 'graphql';

export default buildSchema(`
  """Type"""
  type Bootcamp {
    id: ID!
    text: String!
  }
  

  """Input Data"""
  input bootcampInputData {
    text: String!
  }

  """Root Query"""
  type RootQuery {
    getBootcamps: [Bootcamp!]!
    getBootcamp(id: ID!): Bootcamp!
  }
  type RootMutation {
    createBootcamp(bootcampInput: bootcampInputData): Bootcamp!
  }

  """Schema"""
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
