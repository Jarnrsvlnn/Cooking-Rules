import "./Monitor.css";
import GameInterface from "../GameInterface/GameInterface";

function Monitor () {
    return (
        <div className="monitor">
            <div className="monitor-screen">
                {/* dont touch these */}
                <GameInterface />
            </div>

            <div className="monitor-stand"></div>
        </div>
    );
}

export default Monitor  