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
    setMounted(false);
  }, [resultArray, genre]);

  //   console.log(getRecs());
  let i = 0;
  return (
    <div className="overflow-scroll pt-6 flex flex-row scrollbar-hide">
      {mounted ? (
        resultArray.slice(0, 50).map((d) => (
          <p key={i++} className="p-5">
            {d}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Recs;
