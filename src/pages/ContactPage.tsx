"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Import Select components
import { showError, showSuccess } from "@/utils/toast";

const ContactPage = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<string>(""); // New state for selected recipient
  const [isSubmitting, setIsSubmitting] = useState(false);

  const boardRoles = ["President", "Vice-President", "Secretary", "Treasurer"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!senderEmail.trim()) {
      showError("Please enter your email address");
      return;
    }

    if (!subject.trim()) {
      showError("Please enter a subject");
      return;
    }
    
    if (!message.trim()) {
      showError("Please enter a message");
      return;
    }

    if (!selectedRecipient) {
      showError("Please select a recipient");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderEmail, subject, message, recipient: selectedRecipient }), // Include selectedRecipient
      });

      const result = await response.json();

      if (response.ok) {
        showSuccess("Message sent successfully!");
        setSenderEmail("");
        setSubject("");
        setMessage("");
        setSelectedRecipient(""); // Reset recipient selection
      } else {
        showError(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6 justify-center">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto w-full">
          <CardHeader className="text-center">
            <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Contact Board Members</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">Send to</Label>
                <Select onValueChange={setSelectedRecipient} value={selectedRecipient}>
                  <SelectTrigger id="recipient">
                    <SelectValue placeholder="Select a board member" />
                  </SelectTrigger>
                  <SelectContent>
                    {boardRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="senderEmail">Your Email</Label>
                <Input
                  id="senderEmail"
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  rows={6}
                  required
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Your message will be sent to the selected Liberty Park Owners Association board member.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;