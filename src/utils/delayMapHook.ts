import React, { useEffect, useState } from "react";
import { useAppState } from "../state/AppStateContext";

const DelayMapHooks = () => {
  const [array, setArray] = useState([]);
  const { list, dispatch } = useAppState();

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      //setTimeout(() => setArray((prevState) => [...prevState, i]), 3000 * i);
    }
  }, []);

  //   return (
  //     <div>
  //       {array.map((elem, key) => {
  //         return <div>Number: {elem}</div>;
  //       })}
  //     </div>
  //   );
};

export default DelayMapHooks;
