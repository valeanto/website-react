import React, { useState } from "react";
// create counter

export const useStateTest = () => {
  const [visible, setVisible] = useState(false);
  const onClick =()=> setVisible(true);
  return (
    <div>
      <div
        class="item"
        onClick={onClick}
      >hello</div>
    </div>
  );
};
export default useStateTest;
