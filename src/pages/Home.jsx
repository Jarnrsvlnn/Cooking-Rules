import "./Home.css";

function Home ({ onClick }) {
    return (
        <div className="home">
            <h1>Home page</h1>
            <button onClick={onClick}>Start</button>
        </div>
    );
}

export default Home