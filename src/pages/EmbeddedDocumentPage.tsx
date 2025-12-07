"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const EmbeddedDocumentPage = () => {
  const embedSrc = "https://workdrive.zohoexternal.com/embed/uoy3hd3158b1339024b3396cac2fca9c08948?toolbar=false&appearance=light&themecolor=green";

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6 flex justify-start">
        <Button variant="outline" asChild>
          <Link to="/documents">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Documents
          </Link>
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Liberty Park Bylaws</h1>
      {/* Removed the descriptive paragraph */}
      <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={embedSrc}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          className="w-full h-full"
          title="Liberty Park Bylaws"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedDocumentPage;