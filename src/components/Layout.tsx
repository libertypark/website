"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Megaphone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">HOA Portal</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/documents">
                <FileText className="mr-2 h-4 w-4" /> Documents
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/announcements">
                <Megaphone className="mr-2 h-4 w-4" /> Announcements
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </Link>
            </Button>
          </nav>
          {/* Mobile navigation can be added here if needed, e.g., using a Sheet component */}
        </div>
      </header>
      <main className="flex-grow container py-8">{children}</main>
      <footer className="border-t bg-background py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Homeowners Association. All rights reserved.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Layout;