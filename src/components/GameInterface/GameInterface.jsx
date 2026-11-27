/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./GameInterface.css";
import Home from "../../pages/Home";
import QuizUI from "../../pages/QuizUI";

function GameInterface () {
    const [currentPage, setCurrentPage] = useState("home");

    function navigate (page) {
        setCurrentPage(page)
    }

    return (
        <>
            {currentPage === "home" ? (
                <Home onClick={() => navigate("quiz")} />
            ) : (
                <QuizUI onClick={() => navigate("home")} />
            )}
        </>
    );
}

export default GameInterface