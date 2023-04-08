import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";


export default function Building(){
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="flex">
            {isAuthenticated && <Sidebar/>}
            <Link to="add">Add new building</Link>
        </div>


        
    );
}