export const GAME_READY = "GAME_READY";
export const GAME_IN_PROGRESS = "GAME_IN_PROGRESS";
export const GAME_END = "GAME_END";
export const GAME_WIN = "GAME_WIN";

export const colorCodes = {
    0: "transparent",
    1: "limegreen",
    2: "green",
    3: "blue",
    4: "yellow",
    5: "orange",
    6: "red",
    7: "darkred",
    8: "black"
}

export const difficultyName = ({
    1: "Very easy",
    2: "Easy",
    3: "Medium",
    4: "Hard",
    5: "Very Hard",
    6: "Impossible"
})

export function timeToMinutes(timeToSec) {
    if (timeToSec >= 599) return "9:59"
    const minute = Math.floor(timeToSec / 60);
    const seconds = Math.floor(timeToSec % 60);
    return (minute + ":" + (seconds < 10 ? "0" : "") + seconds);
}