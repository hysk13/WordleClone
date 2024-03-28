import './Styles/Key.css';

export default function Key({ k, width, onPress, color }) {
    
    return (
        <div className="key" onClick={ onPress } style={{width: width, backgroundColor: color}}>
            <p>{k}</p>
        </div>
    )

}