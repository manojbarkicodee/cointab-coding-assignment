import * as types from "./actiontype"
let initialstate={
    userdata:[],
    loading:false,
    success:false,
    error:false,
    delete_error:false,
    delete_succes:false,
    user_loading:false,user_success:false,
    user_error:false,
    totoalpages:0
}



export let reducer=(state=initialstate,{type,payload})=>{
switch(type){
    case (type=types.Fetch_User_Details_loading):
        {
            return {...state,loading:true}
        }case (type=types.Fetch_User_Details_Success):{
            return {...state,loading:false,success:true}
        }case (type=types.Fetch_User_Details_Error):{
            return {...state,success:false,error:true}
        }case (type=types.Delete_User_Details_Success):{
            return {...state,delete_succes:true,delete_error:false}
        }case (type=types.Delete_User_Details_Error):{
            return {...state,delete_error:true,delete_succes:false}
          
        }  case(type=types.Get_User_Details_Loading):{

        }
        case(type=types.Get_User_Details_Loading):{
            return {...state,user_loading:true}
        }
        case (type=types.Get_User_Details_Success):{
            let {results,totalcount}=payload
            return {...state,user_loading:false,user_success:true,user_error:false, userdata:results,totalpages:(totalcount/10)}
        }
        case (type=types.Get_User_Details_Error):{
            return {...state,user_loading:false,user_success:false,user_error:true,userdata:[],totalpages:0}
        }
    default:
    return state
}
}