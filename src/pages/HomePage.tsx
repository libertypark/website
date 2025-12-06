"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to HOA Connect</h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Your central hub for community information, important documents, and announcements.
        </p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          <Link to="/announcements">View Latest Announcements</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">Document Sharing</CardTitle>
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
            <CardDescription>Stay up-to-date with the latest news and events in our community.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="mt-4">
              <Link to="/announcements">Read Announcements</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold mb-2">Contact Information</CardTitle>
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