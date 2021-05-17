import React from "react";

export default function Footer(props: {}) {
  return (
    <>
      <div className="footer">
        <a href="/signin">  <p><button>Editor</button></p></a>
        <a href="/sigin">  <p><button>Organizations</button></p></a>
        <a href="/sigin">  <p><button>Author</button></p></a>
      </div>
    </>
  );
}