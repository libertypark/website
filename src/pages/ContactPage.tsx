"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const boardMembers = [
  { role: "President", name: "Susan Anderson", email: "president@libertyparkferndale.com" },
  { role: "Vice-President", name: "Melanie Prinsen", email: "vicepresident@libertyparkferndale.com" },
  { role: "Secretary", name: "Brian Gregory", email: "secretary@libertyparkferndale.com" },
  { role: "Treasurer", name: "Erik Slayter", email: "treasurer@libertyparkferndale.com" },
];

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      {/* Removed the descriptive paragraph */}

      <div className="grid grid-cols-1 gap-6 justify-center">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto w-full">
          <CardHeader className="text-center">
            <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Board Member Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {boardMembers.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{member.role}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                        {member.email}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;