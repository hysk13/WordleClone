import Box from './Box.jsx';
import './Styles/Board.css';

export default function Board({ board, colorProp }) {

    return (
        <div className="board">
            <div className="board-row">
                <Box val={board[0][0]} color={colorProp[0][0]} />
                <Box val={board[0][1]} color={colorProp[0][1]} />
                <Box val={board[0][2]} color={colorProp[0][2]} />
                <Box val={board[0][3]} color={colorProp[0][3]} />
                <Box val={board[0][4]} color={colorProp[0][4]} />
            </div>
            <div className="board-row">
                <Box val={board[1][0]} color={colorProp[1][0]} />
                <Box val={board[1][1]} color={colorProp[1][1]} />
                <Box val={board[1][2]} color={colorProp[1][2]} />
                <Box val={board[1][3]} color={colorProp[1][3]} />
                <Box val={board[1][4]} color={colorProp[1][4]} />
            </div>
            <div className="board-row">
                <Box val={board[2][0]} color={colorProp[2][0]} />
                <Box val={board[2][1]} color={colorProp[2][1]} />
                <Box val={board[2][2]} color={colorProp[2][2]} />
                <Box val={board[2][3]} color={colorProp[2][3]} />
                <Box val={board[2][4]} color={colorProp[2][4]} />
            </div>
            <div className="board-row">
                <Box val={board[3][0]} color={colorProp[3][0]} />
                <Box val={board[3][1]} color={colorProp[3][1]} />
                <Box val={board[3][2]} color={colorProp[3][2]} />
                <Box val={board[3][3]} color={colorProp[3][3]} />
                <Box val={board[3][4]} color={colorProp[3][4]} />
            </div>
            <div className="board-row">
                <Box val={board[4][0]} color={colorProp[4][0]} />
                <Box val={board[4][1]} color={colorProp[4][1]} />
                <Box val={board[4][2]} color={colorProp[4][2]} />
                <Box val={board[4][3]} color={colorProp[4][3]} />
                <Box val={board[4][4]} color={colorProp[4][4]} />
            </div>
            <div className="board-row">
                <Box val={board[5][0]} color={colorProp[5][0]} />
                <Box val={board[5][1]} color={colorProp[5][1]} />
                <Box val={board[5][2]} color={colorProp[5][2]} />
                <Box val={board[5][3]} color={colorProp[5][3]} />
                <Box val={board[5][4]} color={colorProp[5][4]} />
            </div>
        </div>
    )

}