import { createStore } from "redux";
//initial state
const initialState = {
    user: {
        username:"LAHARI KOPPALA",
        balance: 50000,
    },
};
//Action Creators
export const addMoney = (amt) => ({
    type:"addMoney",
    payload:amt,
});

export const removeMoney = (amt) => ({
    type:"removeMoney",
    payload:amt,
});

//Function

function reducer(state = initialState,action){
    switch(action.type){
        case "addMoney":
            return{
                user: {
                    username: state.user.username,
                    balance: state.user.balance + action.payload,
                },

            };
        case "removeMoney":
            return{
                user: {
                    username:state.user.username,
                    balance:state.user.balance - action.payload,
                },
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;

