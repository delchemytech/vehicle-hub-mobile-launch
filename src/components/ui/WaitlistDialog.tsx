import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User, Car, BellRing, Shield } from "lucide-react";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    onOpenChange(false);
  };

  const benefits = [
    { icon: BellRing, text: "Early access to new features" },
    { icon: Shield, text: "Priority support" },
    { icon: Car, text: "Exclusive launch offers" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-vehicle-navy">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Be among the first to experience the future of vehicle management
          </DialogDescription>
        </DialogHeader>

        <div className="my-6 grid grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-2"
            >
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                <benefit.icon className="h-5 w-5 text-vehicle-blue" />
              </div>
              <span className="text-sm text-gray-600">{benefit.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  className="pl-10" 
                  required 
                />
              </div>
            </div>

            <div className="relative">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="submit" 
              className="w-full bg-vehicle-blue hover:bg-vehicle-skyblue text-white font-semibold py-6"
            >
              Join Exclusive Waitlist
            </Button>
          </DialogFooter>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          By joining, you'll be the first to know when we launch in your area
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;