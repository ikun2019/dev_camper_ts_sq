import { buildSchema } from 'graphql';

export default buildSchema(`
  """Type"""
  type Bootcamp {
    id: ID!
    text: String!
  }

  """Root Query"""
  type RootQuery {
    getBootcamps: Bootcamp
    getBootcamp(id: ID!): Bootcamp
  }

  """Schema"""
  schema {
    query: RootQuery
  }
`);
