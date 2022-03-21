import React from "react";
import DirectSon from "./direct-son";

const DirectFather = () => {
  return (
    <div>
      <DirectSon nome="Junior" idade={20} nerd={true} />
      <DirectSon nome="Gabriel" idade={17} nerd={false} />
    </div>
  );
};

export default DirectFather;
