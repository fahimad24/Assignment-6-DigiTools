import React, { useState } from "react";
import { AuthContext } from "./auth-context";

const Authprovider = ({ children }) => {
  const [addtoCart, setAddToCart] = useState([]);

  const value = { addtoCart, setAddToCart };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Authprovider;
