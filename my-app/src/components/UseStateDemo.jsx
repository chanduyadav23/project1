import { useState } from "react";

function UseStateDemo()
{
    const [count,seCount]=useState(0);
    const increment=()=>{
        seCount(prevCount=>prevCount+1);
    }
    const decrement=()=>{
        seCount(prevCount=>prevCount-1);
    }
    const reset=()=>{
        seCount(0);
    }

    const [liked,setLiked]=useState(true)
    function handleChange(e)
    {
        setLiked(e.target.checked)
    }
        const [isLogin,setLogin]=useState(false)
        return(
        <div>

            <div>
                <h1>Login Status</h1>
                { isLogin && <p>You Are Logged in</p>}
                { !isLogin && <p>You Are Logged out</p>}

                <button onClick={()=>setLogin(!isLogin)}>
                    {isLogin?"Logout":"Login"}
                </button>
            </div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <div>
                <label>
                    <input type="checkbox" checked={liked} onChange={handleChange} />
                    I liked this change.
                </label>
                <p>You {liked?'liked':'did not like'} this change</p>
            </div>
        </div>
        
    )
}

export default UseStateDemo;