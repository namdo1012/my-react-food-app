import React from "react";
import "./ChatBox.css";

function ChatBox() {
  return (
    <div
      className="chatbox"
      onClick={() => alert("Sorry! This feature is not supported now!")}
    >
      <ion-icon name="chatbox-ellipses" class="chatbox-icon"></ion-icon>
    </div>
  );
}

export default ChatBox;
