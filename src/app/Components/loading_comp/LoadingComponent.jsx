"use client";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const LoadingComponent = ({ delay = 2000, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <>{loading ? <Loader /> : children}</>;
};

export default LoadingComponent;
