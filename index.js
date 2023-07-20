const {ApolloServer} =require("apollo-server")
const {typeDefs} =require("./schema/typedef")
const {resolvers} =require("./schema/resolvers")

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url})=>{
    console.log(`server listening on port no:${url}`)
})


server.start()