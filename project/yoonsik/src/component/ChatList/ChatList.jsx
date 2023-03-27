import React from "react";
import "./ChatList.css";
import { InputForm } from "../InputForm/InputForm";

function Chat(props) {
    const array = ['Apple Store: 좋은 소식을 알려드립니다! W624126832가 2022/01/07 까지 배송될 예정입니다.','Apple Store: 오늘이 바로 기다리시던 그 날입니다. W624126832 이 오늘 배송 예정입니다.','Apple Store: 주문 제품 W624126832 배송이 완료되었습니다. 제품이 마음에 드셨기를 바랍니다.'];

    return (
        array.map(item => <div className="recipient">{item}</div>)
    );
}

export {Chat};