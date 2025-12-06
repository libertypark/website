"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-center text-muted-foreground mb-10">
        Reach out to the HOA board or find important contact details for our community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Email Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              For general inquiries, please email:
            </p>
            <a href="mailto:info@hoaconnect.com" className="text-blue-600 hover:underline font-medium">
              info@hoaconnect.com
            </a>
          </CardContent>
        </Card>

        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <Phone className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Call Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              For urgent matters, please call:
            </p>
            <a href="tel:+15551234567" className="text-blue-600 hover:underline font-medium">
              (555) 123-4567
            </a>
          </CardContent>
        </Card>

        <Card className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Our Office</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              Visit us at our community office:
            </p>
            <p className="text-blue-600 font-medium">
              123 Community Lane, Suite 100
              <br />
              Anytown, CA 90210
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;