import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, trackEvent } from "@/lib/firebase";

interface WhitelistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WhitelistDialog = ({ open, onOpenChange }: WhitelistDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email.includes("@")) {
      trackEvent("waitlist_submission_error", {
        reason: !name ? "missing_name" : "invalid_email",
      });
      setSubmitted("error");
      return;
    }

    try {
      await addDoc(collection(db, "whitelist"), {
        name,
        email,
        createdAt: Timestamp.now(),
      });
      trackEvent("waitlist_submission_success", {
        userType: "new",
      });
      setSubmitted("success");
      setTimeout(() => {
        setSubmitted(null);
        onOpenChange(false);
        setName("");
        setEmail("");
      }, 2000);
    } catch (error) {
      console.error("Firestore error:", error);
      trackEvent("waitlist_submission_error", {
        reason: "server_error",
        error: error.message,
      });
      setSubmitted("error");
    }
  };

  const handleClose = () => {
    trackEvent("waitlist_dialog_close", {
      submitted: submitted !== null,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="p-0 max-w-4xl w-full rounded-none border-none overflow-hidden shadow-2xl"
      >
        <DialogTitle className="sr-only">Join the Whitelist</DialogTitle>

        <DialogClose asChild>
          <button className="absolute top-4 right-4 text-white z-10">
            <X size={28} />
          </button>
        </DialogClose>

        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left Image Section */}
          <div
            className="hidden md:block w-full md:w-1/2 bg-black bg-cover bg-center min-h-[250px] md:min-h-[600px]"
            style={{
              backgroundImage: "url('/images/car-popup.webp')",
            }}
          />

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-[#2a2a2a] to-[#5c5c5c] text-white flex flex-col justify-center items-center px-6 py-10 relative">
            <h2 className="text-xl md:text-3xl font-semibold text-center leading-snug mb-6">
              Be the First to get update<br />by Joining Our Whitelist!
            </h2>

            <div className="bg-white text-black rounded-lg p-6 w-full max-w-md shadow-md">
              <h3 className="text-lg font-semibold text-center mb-1">
                Join the Whitelist!
              </h3>
              <DialogDescription
                className="text-center text-sm mb-4"
              >
                Sign up now for early notification upon launch.
              </DialogDescription>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="w-full p-3 rounded-md bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="w-full p-3 rounded-md bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
                >
                  Join Exclusive Whitelist
                </button>

                {submitted === "success" && (
                  <p className="text-center text-green-600 text-sm mt-2">
                    🎉 Thank you! You’ve successfully joined the whitelist.
                  </p>
                )}
                {submitted === "error" && (
                  <p className="text-center text-red-600 text-sm mt-2">
                    Please provide valid name and email.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhitelistDialog;
