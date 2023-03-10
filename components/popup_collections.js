import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Popup_collections = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return props.trigger ? (
    <div className="deux_collections">
      <div className="SUB_collections">
        <button onClick={() => props.setTrigger(false)} className="btn_close">
          <span className="btn_close_span">
            <img src="@/icons/window_close.png" width="30px" /> Quitter
          </span>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Popup_collections;
