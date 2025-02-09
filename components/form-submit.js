"use client";

import { useActionState } from "react-dom";

export default function FormSumbit() {
  const status = useActionState();

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
