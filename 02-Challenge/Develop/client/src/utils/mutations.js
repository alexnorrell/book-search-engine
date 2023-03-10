import {gql} from "@apollo/client"

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    login(email: $email,password: $password){
        token
        user{
            _id
            username
        }
    }
}
`

export const ADD_USER = gql`
mutation addUser($email: String!, $username: String!, $password: String!){
    addUser(email: $email,username: $username,password: $password){
        token
        user{
            _id
            username
        }
    }
}
`

export const SAVE_BOOK = gql`
mutation saveBook($book: saveBookInput!){
    saveBook(book: $book){
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`