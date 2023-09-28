// Input schema into the GraphQL server
const typeDefs = `
type Query {
users: {User}
messages: {Message}
}

type User{
id: ID!
name: String!
email: String!
message: {Message}
} 

type Message {
id: ID!
message: String1
senderMail: String!
recieverMail: String!
timestamp: Float!
users: {User}
}

type Mutation{
ceateUser(name: String! email: String!): User!
updateUser:(id: ID! name: String!): User!
deleteUser(email: string!): Boolean!
userTyping(email: String! reciverMail: String!): Boolean!

createMessage(senderMail: String! receiverMail: String! message: String! timestamp)
updateMessage(id: ID! message: String!):Message!
deleteMessage(id: String!): Boolean!
}

type Subscription:{
newMessage(receiverMail: String!): Message
userTyping(receiverMail: String!): String
newUser: User
oldUser: String
}`;