import { useDispatch } from "react-redux";
import { addMoney,removeMoney } from "./store"

export default function Button(){
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(addMoney(500))}>ADD 1000</button>
            <br></br>
            <br></br>
            <button onClick={() => dispatch(removeMoney(500))}>Remove 500</button>
        </div>
    )
    
}