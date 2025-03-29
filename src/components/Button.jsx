import React from "react";

function Button({ text }) {
  return (
    <button className="text-sm text-amber-600 inline-block">
      <div className="flex justify-center items-center gap-3">
        {" "}
        {text}
        <img src="/btn-icon.png" alt="Arrow-Icon"  />
      </div>
    </button>
  );
}

export default Button;
