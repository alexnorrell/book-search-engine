const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        savedBooks: [Book]
        bookCount: Int
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: saveBookInput): User
        removeBook(bookId: String!): User
    }
    type Auth{
        token: ID!,
        user: User
    }
    input saveBookInput {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
`

module.exports = typeDefs