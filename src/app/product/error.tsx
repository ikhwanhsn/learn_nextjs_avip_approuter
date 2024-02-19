"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main>
      <h1>Error</h1>
      <button onClick={() => reset()}>Reset</button>
    </main>
  );
};

export default Error;
