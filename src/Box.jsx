import './Styles/Box.css'

export default function Box({ val, color }) {

    return (
        <div className="box" id={ color }>
            {val}
        </div>
    )

}