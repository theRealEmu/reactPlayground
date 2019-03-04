import React from "react";

export default function about(props) {
  return (
    <div>
      <h1>Welcome to our about page!</h1>
      <p>
        What do you want here <strong> {props.match.params.id}</strong> ?!
      </p>
    </div>
  );
}
