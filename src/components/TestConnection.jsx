import { useState, useEffect } from "react";
import API from "../api/axios";

function TestConnection() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        API.get("/api/test")
            .then((res) => {
                setMsg(res.data.message);
            })
            .catch((err)=> {
                console.error("error connecting backend: ", err);
            });
    }, []);

    return (
        <div>
            <h2>Backend says: {msg}</h2>
        </div>
    );

};

export default TestConnection;