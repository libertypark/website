"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { showError, showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const boardRoles = ["President", "Vice-President", "Secretary", "Treasurer"];
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>(boardRoles); // All selected by default
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleRecipientChange = (role: string, checked: boolean) => {
    if (checked) {
      setSelectedRecipients((prev) => [...prev, role]);
    } else {
      setSelectedRecipients((prev) => prev.filter((r) => r !== role));
    }
  };

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

    if (selectedRecipients.length === 0) {
      showError("Please select at least one recipient");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderEmail, subject, message, recipient: selectedRecipients }), // Send array of recipients
      });

      const result = await response.json();

      if (response.ok) {
        showSuccess("Message sent successfully!");
        setSenderEmail("");
        setSubject("");
        setMessage("");
        setSelectedRecipients(boardRoles); // Reset to all selected
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
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={popoverOpen}
                      className="w-full justify-between h-auto min-h-[40px] flex-wrap"
                    >
                      {selectedRecipients.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {selectedRecipients.map((role) => (
                            <Badge key={role} variant="secondary" className="flex items-center">
                              {role}
                              <X
                                className="ml-1 h-3 w-3 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRecipientChange(role, false);
                                }}
                              />
                            </Badge>
                          ))}
                        </div>
                      ) : (
                        "Select recipients..."
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                    <Command>
                      <CommandInput placeholder="Search roles..." />
                      <CommandEmpty>No role found.</CommandEmpty>
                      <CommandGroup>
                        {boardRoles.map((role) => (
                          <CommandItem
                            key={role}
                            onSelect={() => handleRecipientChange(role, !selectedRecipients.includes(role))}
                            className="flex items-center cursor-pointer"
                          >
                            <Checkbox
                              checked={selectedRecipients.includes(role)}
                              onCheckedChange={(checked) => handleRecipientChange(role, checked as boolean)}
                              className="mr-2"
                            />
                            {role}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
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
                Your message will be sent to the selected Liberty Park Owners Association board member(s).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;