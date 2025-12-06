"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Annual Community BBQ",
    date: "October 26, 2024",
    content: "Join us for our annual community BBQ at the park! Food, games, and fun for all ages. Please RSVP by October 20th.",
  },
  {
    id: 2,
    title: "Upcoming Board Meeting",
    date: "September 15, 2024",
    content: "The next HOA board meeting will be held on September 25th at 7:00 PM in the community center. All residents are welcome to attend.",
  },
  {
    id: 3,
    title: "Pool Maintenance Schedule",
    date: "August 30, 2024",
    content: "The community pool will be closed for routine maintenance from September 1st to September 3rd. We apologize for any inconvenience.",
  },
];

const AnnouncementsPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Community Announcements</h1>
      <p className="text-center text-lg text-muted-foreground">
        Stay informed with the latest news and updates from your HOA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{announcement.title}</CardTitle>
              <Megaphone className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardDescription className="px-6">{announcement.date}</CardDescription>
            <CardContent>
              <p className="text-base">{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;