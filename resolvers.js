const resolvers = {
Query: {
user: ()=> User.find(),
message: ()=> MessageChannel.find()
},
}