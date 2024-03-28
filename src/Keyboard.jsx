import Key from "./Key.jsx"
import './Styles/Keyboard.css';

export default function Keyboard({ onPress, colorProp }) {

    return (
        <div className="keyboard">
            <div className="keyboard-row">
                <Key k={"q"} width={40} onPress={function() { onPress("q") }} color={colorProp["q"]} />
                <Key k={"w"} width={40} onPress={function() { onPress("w") }} color={colorProp["w"]} />
                <Key k={"e"} width={40} onPress={function() { onPress("e") }} color={colorProp["e"]} />
                <Key k={"r"} width={40} onPress={function() { onPress("r") }} color={colorProp["r"]} />
                <Key k={"t"} width={40} onPress={function() { onPress("t") }} color={colorProp["t"]} />
                <Key k={"y"} width={40} onPress={function() { onPress("y") }} color={colorProp["y"]} />
                <Key k={"u"} width={40} onPress={function() { onPress("u") }} color={colorProp["u"]} />
                <Key k={"i"} width={40} onPress={function() { onPress("i") }} color={colorProp["i"]} />
                <Key k={"o"} width={40} onPress={function() { onPress("o") }} color={colorProp["o"]} />
                <Key k={"p"} width={40} onPress={function() { onPress("p") }} color={colorProp["p"]} />
            </div>
            <div className="keyboard-row">
                <Key k={"a"} width={45} onPress={function() { onPress("a") }} color={colorProp["a"]} />
                <Key k={"s"} width={45} onPress={function() { onPress("s") }} color={colorProp["s"]} />
                <Key k={"d"} width={45} onPress={function() { onPress("d") }} color={colorProp["d"]} />
                <Key k={"f"} width={45} onPress={function() { onPress("f") }} color={colorProp["f"]} />
                <Key k={"g"} width={45} onPress={function() { onPress("g") }} color={colorProp["g"]} />
                <Key k={"h"} width={45} onPress={function() { onPress("h") }} color={colorProp["h"]} />
                <Key k={"j"} width={45} onPress={function() { onPress("j") }} color={colorProp["j"]} />
                <Key k={"k"} width={45} onPress={function() { onPress("k") }} color={colorProp["k"]} />
                <Key k={"l"} width={45} onPress={function() { onPress("l") }} color={colorProp["l"]} />
            </div>
            <div className="keyboard-row">
                {/* http://xahlee.info/comp/unicode_computing_symbols.html */}
                <Key k={"⌫"} width={45} onPress={function() { onPress("Backspace") }} />
                <Key k={"z"} width={45} onPress={function() { onPress("z") }} color={colorProp["z"]} />
                <Key k={"x"} width={45} onPress={function() { onPress("x") }} color={colorProp["x"]} />
                <Key k={"c"} width={45} onPress={function() { onPress("c") }} color={colorProp["c"]} />
                <Key k={"v"} width={45} onPress={function() { onPress("v") }} color={colorProp["v"]} />
                <Key k={"b"} width={45} onPress={function() { onPress("b") }} color={colorProp["b"]} />
                <Key k={"n"} width={45} onPress={function() { onPress("n") }} color={colorProp["n"]} />
                <Key k={"m"} width={45} onPress={function() { onPress("m") }} color={colorProp["m"]} />
                <Key k={"↩"} width={45} onPress={function() { onPress("Enter") }} />
            </div>
        </div>
    )

}