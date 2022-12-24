import axios from "axios"

import * as types from "./actiontype"



let fetchdata=(url)=>dispatch=>{
    
    dispatch({type:types.Fetch_User_Details_loading})
axios.post("https://new-server-rc7s.onrender.com/fetchdetails",{url}).then((res)=>{dispatch({type:types.Fetch_User_Details_Success})
}).catch((err)=>dispatch({type:types.Fetch_User_Details_Error}))
}

let deletedata=()=>async(dispatch)=>{
   await dispatch({type:types.Delete_User_Details_Loading})
axios.delete("https://new-server-rc7s.onrender.com/deleteall").then((res)=>{dispatch({type:types.Delete_User_Details_Success})
}).catch((err)=>{dispatch({type:types.Delete_User_Details_Error}
    )
    console.log(err)

})
}

let getdata=(page,params)=>dispatch=>{
dispatch({type:types.Get_User_Details_Loading})

axios.get(`https://new-server-rc7s.onrender.com/userdetails?limit=10&page=${page}`,params).then((res)=>{dispatch({type:types.Get_User_Details_Success,payload:res.data})
}).catch((err)=>{dispatch({type:types.Get_User_Details_Error})
console.log(err)
}
)

}
export {fetchdata,deletedata,getdata}