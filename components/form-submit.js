"use client";

import { useFormState } from "react-dom";

export default function FormSumbit() {
  const status = useFormState();

  if (status.pending) {
    return <p>Creating Post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
