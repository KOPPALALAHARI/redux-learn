import { useSelector } from "react-redux";

export default function Userinfo(){
    const data = useSelector((state) => state.user)
    return(
        <div>
            <h3>{data.username} , {data.balance}</h3>
        </div>
    )
}