import React from "react";

import { useState } from "react";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) {
      return false;
    }

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value  && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (e.target.value !== "" && e.target.previousSibling)
      e.target.previousSibling.focus();
  };

  const handleSubmit = () => {
    console.log(otp.join(""));
  };

  return (
    <>
      <div>
        <h2>OTP</h2>
        <div>
          {otp.map((data, i) => {
            return (
              <input
                value={data}
                className="inputs"
                onChange={(e) => handleChange(e, i)}
                maxLength={1}
              />
            );
          })}
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
