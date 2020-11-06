import React, { useState, useEffect } from "react";

export default function useRefTest() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <>
      <div>
          {windowWidth}
      </div>
    </>
  );
}
