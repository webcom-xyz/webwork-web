import React from "react";
import { ExclamationIcon } from "@heroicons/react/solid";

export default function Alert(props) {
  return (
    <div className="bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
