"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Liberty Park Owners Association
        </Link>
        <nav className="space-x-4">
          <Button variant="ghost" asChild className="hover:bg-green-700 text-white">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="hover:bg-green-700 text-white">
            <Link to="/documents">Documents</Link>
          </Button>
          <Button variant="ghost" asChild className="hover:bg-green-700 text-white">
            <Link to="/announcements">Announcements</Link>
          </Button>
          <Button variant="ghost" asChild className="hover:bg-green-700 text-white">
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;