"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const documents = [
  { id: 1, name: "HOA Bylaws", date: "2023-01-15", link: "#" },
  { id: 2, name: "Annual Meeting Minutes 2023", date: "2023-11-20", link: "#" },
  { id: 3, name: "Financial Report Q4 2023", date: "2024-01-05", link: "#" },
  { id: 4, name: "Architectural Guidelines", date: "2022-07-01", link: "#" },
];

const DocumentsPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Community Documents</h1>
      <p className="text-center text-lg text-muted-foreground">
        Access important association documents, reports, and guidelines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium">{doc.name}</CardTitle>
              <FileText className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">Last updated: {doc.date}</p>
              <Button asChild className="w-full">
                <a href={doc.link} download>
                  <Download className="mr-2 h-4 w-4" /> Download
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;