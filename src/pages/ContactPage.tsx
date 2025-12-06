"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-lg text-muted-foreground">
        Reach out to the Homeowners Association board for any inquiries or assistance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <Mail className="h-10 w-10 mx-auto mb-4 text-primary" />
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">hoa.board@example.com</p>
            <p className="text-sm text-muted-foreground">For general inquiries</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Phone className="h-10 w-10 mx-auto mb-4 text-primary" />
            <CardTitle>Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">(123) 456-7890</p>
            <p className="text-sm text-muted-foreground">Emergency line (after hours)</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
            <CardTitle>Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">123 Community Lane</p>
            <p className="text-lg">Anytown, USA 12345</p>
            <p className="text-sm text-muted-foreground">Mailing address</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;