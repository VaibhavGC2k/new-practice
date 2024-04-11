import React, { useState } from "react";

export default function Checkbox() {
  const [selectAll, setSelectAll] = useState(false);
  const [select, setSelect] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
  });

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelect({
      a: !selectAll,
      b: !selectAll,
      c: !selectAll,
      d: !selectAll,
      e: !selectAll,
    });
  };

  const handleSelect = (e, index) => {
    setSelectAll(Object.values({...select, [index]:e.target.checked}).every(value => value === true))
    setSelect({ ...select, [index]: e.target.checked });
  };
 
  return (
    <>
      all
      <input type="checkbox" onClick={handleSelectAll} checked={selectAll} />
      <br />
      <input
        type="checkbox"
        checked={select.a}
        onClick={(e) => handleSelect(e, "a")}
      />
      <input
        type="checkbox"
        checked={select.b}
        onClick={(e) => handleSelect(e, "b")}
      />
      <input
        type="checkbox"
        checked={select.c}
        onClick={(e) => handleSelect(e, "c")}
      />
      <input
        type="checkbox"
        checked={select.d}
        onClick={(e) => handleSelect(e, "d")}
      />
      <input
        type="checkbox"
        checked={select.e}
        onClick={(e) => handleSelect(e, "e")}
      />
    </>
  );
}
