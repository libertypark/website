"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  // The document has been removed from the public directory to address security concerns.
  // For public documents, consider hosting them on a dedicated public file storage or CDN.
  // For private documents, a backend service with authentication/authorization is required.
  const documents: { id: number; title: string; description: string; date: string; link: string; }[] = [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Community Documents</h1>
      <p className="text-lg text-center text-muted-foreground mb-10">
        Here you can find all important documents related to our Homeowners Association.
      </p>

      {documents.length === 0 ? (
        <div className="text-center text-muted-foreground text-xl">
          No documents are currently available for download.
          <p className="text-base mt-2">
            Please check back later or contact the HOA for more information.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                <FileText className="h-8 w-8 text-blue-500" />
                <div>
                  <CardTitle className="text-xl font-semibold">{doc.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">Published: {doc.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{doc.description}</p>
                <Button asChild className="w-full">
                  <a href={doc.link} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;