import React from "react";
import { useGlobalContext } from "../context";
const Home = () =>{
    const {data} = useGlobalContext();
    const {user ,token} = data;
    return (
        <section>
            <div>
                <h1>{`Hello ${user.name}`}</h1>
            </div>
        </section>
    )
}
export default Home