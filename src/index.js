import React from "react";
import { render } from "react-dom";

import "material-icons";

const App = () => (
  <div>
    material icon demo <span className="material-icons">android</span>
  </div>
);

render(<App />, document.querySelector("#root"));
