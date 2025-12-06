"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-16 bg-primary text-primary-foreground rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our HOA Community!</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your central hub for important documents, community announcements, and contact information.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <Link to="/announcements">View Announcements</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/documents">Access Documents</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>Find all important HOA documents here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access bylaws, meeting minutes, financial reports, and more.</p>
            <Button asChild>
              <Link to="/documents">Go to Documents</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
            <CardDescription>Stay up-to-date with community news.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Check for the latest updates, events, and important notices.</p>
            <Button asChild>
              <Link to="/announcements">See Announcements</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Reach out to the HOA board.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Have questions or need assistance? Find our contact details.</p>
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;