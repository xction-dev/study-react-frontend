// @ts-ignore
export default function Chat ({isMe, content}) {
    return <div className={`Chat ${isMe? "me" : "you"}`}>{content}</div>
}


// "Chat me"

const a = "me"
const b =`Chat ${a}`