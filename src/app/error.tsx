"use client";
import { Button } from "@mui/material";

// it will be always a client component

const error = ({ error, reset }: { error: any; reset: any }) => {
  console.log(error);
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-red-400 font-bold text-2xl text-center my-3">
        {error.message}
      </h1>
      <Button onClick={() => reset()}>Re-Try</Button>
    </div>
  );
};

export default error;
