"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* The welcome banner card has been removed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">Documents</CardTitle>
            <CardDescription>Access important community documents, bylaws, and meeting minutes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/documents">Browse Documents</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">Announcements</CardTitle>
            <CardDescription>Stay up-to-date with the latest announcements and notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/announcements">Read Announcements</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">Contacts</CardTitle>
            <CardDescription>Find contact details for the HOA board and important services.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;