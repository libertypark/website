"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

const AnnouncementsPage = () => {
  const announcements = [
    {
      id: 1,
      title: "Annual Community BBQ & Potluck",
      date: "October 26, 2024",
      content: "Join us for our annual community BBQ and potluck! Bring your favorite dish to share and enjoy an evening of fun, food, and neighborly camaraderie at the community park. Festivities begin at 5 PM.",
    },
    {
      id: 2,
      title: "Street Sweeping Schedule Update",
      date: "October 10, 2024",
      content: "Please note a change in the street sweeping schedule for the upcoming month. Sweeping will now occur on the second and fourth Tuesdays. Kindly ensure all vehicles are moved from the streets on these days.",
    },
    {
      id: 3,
      title: "New Online Payment Portal Available",
      date: "September 28, 2024",
      content: "We are excited to announce the launch of our new online payment portal! You can now conveniently pay your HOA dues and other fees securely through our website. Visit the 'Contact' page for details.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Community Announcements</h1>
      <p className="text-lg text-center text-muted-foreground mb-10">
        Stay informed about the latest news, events, and important updates from our HOA.
      </p>

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
      </div>
    </div>
  );
};

export default AnnouncementsPage;