import React, { useState, useEffect } from "react";

function Recs({ results, genre }) {
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
  }, [resultArray, genre]);

  //   console.log(getRecs());

  return (
    <div className="overflow-scroll pt-6 flex flex-row scrollbar-hide">
      {mounted ? (
        resultArray.map((d) => <p className="p-5">{d}</p>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Recs;
