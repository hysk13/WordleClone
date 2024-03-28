import './Styles/Notification.css';

export default function Notification({ txt }) {

    return (
        <div className="notif-wrap" style={{display: (txt == '') ? 'none': 'flex'}}>
            <p className="notif-txt">{txt}</p>
        </div>
    )

}