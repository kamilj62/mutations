"use client";

export default function FeedError(error) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong. We're working on it!</p>
      <p>{error.message}</p>
    </>
  );
}
