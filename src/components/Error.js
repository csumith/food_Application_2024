import { useRouteError } from "react-router-dom"
//useRouteError give you more detaills about error
const Error=()=>{
    let err = useRouteError()
    console.log("Error-Detaills =",err)
    return(
        <div>
            <h4>Oops Something went Wrong..!</h4>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    )
}
export default Error