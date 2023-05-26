import { buildSchema } from 'graphql';

export default buildSchema(`
  """Type"""
  type Bootcamp {
    text: String
  }

  """Methods"""
  type RootQuery {
    getBootcamps: Bootcamp
  }

  """Schema"""
  schema {
    query: RootQuery
  }
`);
