import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import produce, {castDraft} from "immer";
import styles from './component/style.module.css';
function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는중...");
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com",
            active: true
        },
        {
            id: 2,
            username: "tester",
            email: "tester@example.com",
            active: false
        },
        {
            id: 3,
            username: "liz",
            email: "liz@example.com",
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_USER":
            return produce(state,draft  =>{
                draft.users.push(action.user);
            })
            /*return {
                users: state.users.concat(action.user)
            };*/
        case "TOGGLE_USER":
            return produce(state,draft =>{
                const user = draft.users.find(user=> user.id === action.id);
                user.active = !user.active;
            });
            /*return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            };*/
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
    //CreateUser.jsx로 이동
    /*const [{ username, email }, onChange, reset] = useInputs({
        username: "",
        email: ""
    });*/
    const [state, dispatch] = useReducer(reducer, initialState);
    //CreateUser.jsx로 이동
    //const nextId = useRef(4);

    const { users } = state;
    // const { username, email } = state.inputs;

/*    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    }, [username, email, reset]);*/

//Context API로 이제 계층적으로 전달할 필요가 없다
/*    const onToggle = useCallback(id => {
        dispatch({
            type: "TOGGLE_USER",
            id
        });
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type: "REMOVE_USER",
            id
        });
    }, []);*/

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                /*username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}*/
            />
            <UserList users={users} />
            <div className={styles.size30}>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
