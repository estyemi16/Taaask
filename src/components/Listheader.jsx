import React from "react";

const Listheader = ({ title, count }) => {
  return (
    <div className=" text-sm mb-2">
      {title}
      {count === 0 ? "" : ` (${count})`}
    </div>
  );
};

export default Listheader;
