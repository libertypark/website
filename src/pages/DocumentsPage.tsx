"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen } from "lucide-react"; // Added BookOpen icon
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const DocumentsPage = () => {
  const documents = [
    { id: 4, title: "CC&Rs and Architectural Control Standards", description: "Covenants, Conditions, & Restrictions and Architectural Control Standards.", date: "2024-03-10", link: "/Liberty Park CCRs and Architectural Control Standards.pdf", type: "download" },
    { id: 5, title: "Liberty Park Bylaws", description: "Official bylaws governing the Liberty Park Owners Association.", date: "2023-01-15", link: "/documents/bylaws", type: "view" },
    { id: 6, title: "Liberty Park Rules and Regulations", description: "Official rules and regulations for Liberty Park residents.", date: "2024-01-01", link: "/documents/rules-and-regulations", type: "view" }, // New document entry
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Community Documents</h1>
      <p className="text-lg text-center text-muted-foreground mb-10">
        Here you can find all important documents related to our Homeowners Association.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4">
              {doc.type === "download" ? (
                <FileText className="h-8 w-8 text-blue-500" />
              ) : (
                <BookOpen className="h-8 w-8 text-purple-500" />
              )}
              <div>
                <CardTitle className="text-xl font-semibold">{doc.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">Published: {doc.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{doc.description}</p>
              {doc.type === "download" ? (
                <Button asChild className="w-full">
                  <a href={doc.link} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link to={doc.link}>
                    <BookOpen className="mr-2 h-4 w-4" /> View Document
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;