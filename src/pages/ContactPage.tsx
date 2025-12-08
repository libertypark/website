"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { showError, showSuccess } from "@/utils/toast";

const boardMembers = [
  { id: "president", role: "President", name: "Susan Anderson", email: "president@libertyparkferndale.com" },
  { id: "vice-president", role: "Vice-President", name: "Melanie Prinsen", email: "vicepresident@libertyparkferndale.com" },
  { id: "secretary", role: "Secretary", name: "Brian Gregory", email: "secretary@libertyparkferndale.com" },
  { id: "treasurer", role: "Treasurer", name: "Erik Slayter", email: "treasurer@libertyparkferndale.com" },
];

const ContactPage = () => {
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleRecipient = (id: string) => {
    setSelectedRecipients(prev => 
      prev.includes(id) 
        ? prev.filter(recipientId => recipientId !== id) 
        : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedRecipients.length === 0) {
      showError("Please select at least one recipient");
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
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipients: selectedRecipients,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }

      showSuccess("Message sent successfully!");
      // Reset form
      setSelectedRecipients([]);
      setSubject("");
      setMessage("");
    } catch (error: any) {
      console.error("Error sending message:", error);
      showError(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedMembers = boardMembers.filter(member => 
    selectedRecipients.includes(member.id)
  );

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
              <div className="space-y-4">
                <Label>Select Recipients</Label>
                <div className="space-y-3">
                  {boardMembers.map((member) => (
                    <div 
                      key={member.id} 
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Checkbox
                        id={member.id}
                        checked={selectedRecipients.includes(member.id)}
                        onCheckedChange={() => toggleRecipient(member.id)}
                      />
                      <Label 
                        htmlFor={member.id} 
                        className="flex-grow flex justify-between cursor-pointer"
                      >
                        <span>
                          <span className="font-medium">{member.name}</span> - {member.role}
                        </span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
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

            {selectedMembers.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  Your message will be sent to the selected board members.
                </p>
                <ul className="mt-2 space-y-1">
                  {selectedMembers.map((member) => (
                    <li key={member.id} className="text-sm text-blue-700">
                      <span className="font-medium">{member.name}</span> - {member.role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;