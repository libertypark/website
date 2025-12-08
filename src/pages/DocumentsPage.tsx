"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DocumentsPage = () => {
  const documents = [
    {
      id: 5,
      title: "Liberty Park Bylaws",
      description: "Official bylaws governing the Liberty Park Owners Association.",
      date: "2025-12-01",
      link: "/documents/bylaws",
      type: "view"
    },
    {
      id: 6,
      title: "Liberty Park Owners Association Covenants, Conditions, and Restrictions (CC&Rs) and Architectural Control Standards",
      description: "Official covenants, conditions, restrictions, and architectural control standards for Liberty Park residents.",
      date: "2025-12-01",
      link: "/documents/ccrs",
      type: "view"
    },
    {
      id: 7,
      title: "First Amendment to Declaration of Covenants",
      description: "The first amendment to the declaration of covenants for Liberty Park.",
      date: "2025-12-01",
      link: "/documents/architectural-standards",
      type: "view"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Documents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col p-6">
              <div className="flex items-center space-x-4 mb-4">
                {doc.type === "download" ? (
                  <FileText className="h-8 w-8 text-blue-500 flex-shrink-0" />
                ) : (
                  <BookOpen className="h-8 w-8 text-purple-500 flex-shrink-0" />
                )}
                <div>
                  <CardTitle className="text-xl font-semibold">{doc.title}</CardTitle>
                </div>
              </div>
              <p className="text-gray-700 mb-4 flex-grow">{doc.description}</p>
              {doc.type === "download" ? (
                <Button asChild className="w-full mt-auto">
                  <a href={doc.link} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              ) : (
                <Button asChild className="w-full mt-auto">
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