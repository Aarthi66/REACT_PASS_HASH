const initialState ={
   pass:[]
};

function rootReducer (state = initialState,action ){
    if(action.type === 'addacc'){
        return Object.assign({},state,{
            pass: state.pass.concat(action.val)
        })
    }
    return state;
}

export default rootReducer;
