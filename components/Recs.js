import React, { useState, useEffect } from "react";

function Recs({ results }) {
  const [mounted, setMounted] = useState(false);
  const [resultArray, setResultArray] = useState([]);
  async function getRecs() {
    const a = await results;
    setResultArray(a);
    setMounted(true);
  }
  getRecs();
  useEffect(() => {
    console.log(resultArray);
    console.log(mounted);
    setMounted(false);
  }, resultArray);

  //   console.log(getRecs());

  return (
    <div className="overflow-scroll z-20 flex flex-row">
      {mounted ? resultArray.map((d) => <p>{d}</p>) : <p>hi</p>}
    </div>
  );
}

export default Recs;
