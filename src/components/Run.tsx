import React from "react";
type RunProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Run = (props: RunProps) => {
  const handleRunChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event");
  };
  return <input type="text" value={props.value} onChange={handleRunChange} />;
};
