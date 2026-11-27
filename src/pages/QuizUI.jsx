import "./QuizUI.css";

function QuizUI ({ onClick }) {
    return (
        <div className="quiz-ui">
            <h1>Quiz page</h1>
            <button onClick={onClick}>Home</button>
        </div>
    );
}

export default QuizUI