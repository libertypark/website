"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 text-center mt-8">
      <div className="container mx-auto">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Liberty Park Owners Association. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;