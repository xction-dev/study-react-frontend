// @ts-ignore
export default function Chat ({isMe, content}) {
    return <div className={`Chat ${isMe? "me" : "you"}`}>{content}</div>
}