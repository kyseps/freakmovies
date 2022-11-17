import React from "react";
import { imgLoader } from "../Helpers/img";

export default function MovieSearch({ item }) {
  return (
    <div className="flex gap-4 my-2">
      <img
        className="w-12 h-12 object-cover"
        src={
          item.poster_path ? imgLoader(item.poster_path, "w92") : "/movie.png"
        }
      />
      <p>{item.title}</p>
    </div>
  );
}