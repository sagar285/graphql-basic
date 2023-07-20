const {UserList,MovieList} =require("../Data")
const _ =require("lodash")
const resolvers ={
    Query:{
        users(){
            return UserList;
        },
        user(parent,args){
            const id=args.id
           const user = _.find(UserList,{id:Number(id)});
           return user; 
        },
        movies(){
            return MovieList;
        },
        movie(parent,args){
           const name =args.name
           const movie =_.find(MovieList,{name})
           return movie;
        }

    },
    User:{
        favoritemovies(){
            return _.filter(MovieList,(movie)=>movie.yearofPublication>=2000&&movie.yearofPublication<=2010)
        }
    },
    Mutation:{
        createUser(parent,args){
            const user=args.input;
            const lastid=UserList[UserList.length-1].id;
            user.id=lastid+1;
            UserList.push(user);
            return user;
        },
        updateUsername(parent,args){
            const {id,newUsername}=args.input;
            let userUpdate;
            UserList.forEach((user)=>{
                if(user.id===Number(id)){
                    user.username=newUsername;
                    userUpdate=user;
                }
            })
            return userUpdate;
        },
        deleteUser(parent,args){
            const id =args.id;
            _.remove(UserList,(user)=>user.id===Number(id))
            return null;
        }
    }
}

module.exports={resolvers};