import { buildSchema } from 'graphql';

export default buildSchema(`
  type TestData {
    text: String
  }

  type RootQuery {
    hello: TestData
  }
  schema {
    query: RootQuery
  }
`);
