import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";
import BuildingCard from "./BuildingCard";
import LinkButton from "../common/LinkButton";


export default function Building(){
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className="flex">
            {isAuthenticated && <Sidebar/>}
                <div className="">
                    <BuildingCard />
                </div>
                
                <div className="">
                    <div className=" rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700 m-10">
                        <div className="border-t-2 border-neutral-100 px-6 py-4 dark:border-neutral-600 dark:text-neutral-50">
                            <LinkButton text="Create new building" link="add"/>
                        </div>
                </div>
            </div>
        </div>
    );
}