import { useState } from "react";

function Battle() {

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [click1, setClick1] = useState("");
    const [click2, setClick2] = useState("");

    function handleChange1(event) {
        setPlayer1({ player1: event.target.value });
    }

    function handleChange2(event) {
        setPlayer2({ player2: event.target.value });
    }

    function handleSubmit1(event) {
        setClick1((prevState) => ({
            click1: !prevState.click1,
        }))
    }

    function handleSubmit2() {
        setClick2((prevState) => ({
            click2: !prevState.click2,
        }))
    }

    return (
        <div>
            <div className='battle'>
                <h2>Players</h2>
                <div className='center'>
                    {
                        !click1 ? (
                            <div className='submit'>
                                <h3>Player One</h3>
                                <input type="text"
                                    placeholder='Github Username'
                                    value={player1}
                                    onChange={handleChange1}
                                />
                                <input type="submit"
                                    onClick={handleSubmit1}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>{player1}</h4>
                            </div>
                        )
                    }
                    {
                        !click2 ? (
                            <div className='submit'>
                                <h3>Player Two</h3>
                                <input type="text"
                                    placeholder='Github Username'
                                    value={player2}
                                    onChange={handleChange2}
                                />
                                <input type="submit"
                                    onClick={handleSubmit2}
                                />
                            </div>
                        ) : (
                            <div>
                                <h4>{player2}</h4>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Battle;