"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnnouncementsPage = () => {
  const announcements = [
    // All previous announcements have been removed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Announcements</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Megaphone className="h-8 w-8 text-green-500" />
              <div>
                <CardTitle className="text-xl font-semibold">{announcement.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">Posted: {announcement.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
        
        {/* 2025 Special Assessment Card */}
        <Card className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="h-8 w-8 text-purple-500" />
              <div>
                <CardTitle className="text-xl font-semibold">2025 Special Assessment</CardTitle>
              </div>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">View details about the 2025 special assessment for community improvements.</p>
            <Button asChild className="w-full mt-auto">
              <Link to="/announcements/special-assessment">
                <BookOpen className="mr-2 h-4 w-4" /> View Document
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* New 2025 Annual Meeting Card */}
        <Card className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="h-8 w-8 text-purple-500" />
              <div>
                <CardTitle className="text-xl font-semibold">2025 Annual Meeting</CardTitle>
              </div>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">View details about the 2025 annual meeting.</p>
            <Button asChild className="w-full mt-auto">
              <Link to="/announcements/annual-meeting">
                <BookOpen className="mr-2 h-4 w-4" /> View Document
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnnouncementsPage;