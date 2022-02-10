import { useEffect, useState } from "react"
import styled from "styled-components"
import KeyboardGrid from "./KeyboardGrid"
import WordsGrid from "./WordsGrid"

const MainGrid = () => {
    const [enteredWords, setEnteredWords] = useState([]);
    const [currentWord, setCurrentWord] = useState([]);
    const [gameEnd, setGameEnd] = useState("");
    const [showGame, setShowGame] = useState(true);

    useEffect(() => {
        if (gameEnd === "") return;
        setTimeout(() => {
            setShowGame(false);
        }, 2000)
    }, [gameEnd])

    return(
        <Container>
            <div className="header">
                 СЛОВЕЧКИ
            </div>
            {showGame ?
                <>
                    <WordsContainer>
                    <WordsGrid currentWord={currentWord} enteredWords={enteredWords} />    
                    </WordsContainer>
                    <KeyboardGrid setWord={setCurrentWord} enteredWords={enteredWords} setEnteredWords={setEnteredWords} currentWord={currentWord} setGameEnd={setGameEnd}/>
                </>
            :
                <>
                    {gameEnd === "win" ? 
                        <p>GREAT JOB</p>
                    :
                        <p>YOU LOST</p>
                    }
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    min-width: 360px;
    height: 100vh;
    /* background: rgb(240, 240, 240); */

    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    .header {
        width: 100;

        display: grid;
        place-items: center;
        font-size: 30px;
        border-bottom: 1px solid rgb(229, 231, 235, 200);
        padding: 8px 0;
        font-weight: 800;
    }
`

const WordsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    padding: 20px 0;
`


export default MainGrid