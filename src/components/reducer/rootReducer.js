const initialState={
    post:new Object(),
}

function rootReducer(state=initialState,action){
    switch(action.type)
    {
        case 'ADD_POST':
        state.post[action.payload[0]]=action.payload[1]
        console.log(state.post)
        return {post:state.post}
            
        case 'DELETE_POST':
        var data=action.payload[0]
        let rslt=new Object()
        console.log(data)
        Object.keys(state.post).reduce((result,key)=>{
            if(key!=data){
                rslt[key]=state.post[key]
            }
        },{})
        return {post:rslt}
        
        default:
        return state

      
    }
}

export default rootReducer
