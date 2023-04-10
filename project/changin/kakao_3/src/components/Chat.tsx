// // @ts-ignore
// export default function Chat ({isMe, content}) {
//     return <div className={`Chat ${isMe? "me" : "you"}`}>{content}</div>
// }

// // "Chat me"

// const a = "me"
// const b =`Chat ${a}`

type Props = {
  isMine: boolean;
  content: string;
};

export default function Chat({ isMine, content }: Props) {
  return <div className={`Chat ${isMine ? "me" : "you"}`}>{content}</div>;
}
