import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";

function SocialNetworkLogin() {
  return (
    <div className="d-flex" style={{ margin: "0 -0.8rem" }}>
      <Google />
      <Facebook />
    </div>
  );
}

export default SocialNetworkLogin;
