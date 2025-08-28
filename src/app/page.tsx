"use client";

import React from "react";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  // console.log(router)
  const navigate = (page: string) => {
    router.push(`${page}`);
  };

  return (
    <div>
      <button onClick={() => navigate("login")}>Go to the Login Page</button>
    </div>
  );
};

export default Home;
