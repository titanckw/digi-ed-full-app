"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/logo";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("student");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const role = searchParams.get("role");
    if (role && ["student", "tutor", "parent", "school"].includes(role)) {
      setUserType(role);
    }
  }, [searchParams]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      let dashboardUrl = "/dashboard/student";
      let welcomeMessage = `Welcome back, ${email.split("@")[0]}! 🎉`;

      switch (userType) {
        case "student":
          dashboardUrl = "/dashboard/student";
          welcomeMessage = `Welcome back, student! Ready to learn? 📚`;
          break;
        case "tutor":
          dashboardUrl = "/dashboard/tutor";
          welcomeMessage = `Welcome back, tutor! Ready to teach? 👨‍🏫`;
          break;
        case "parent":
          dashboardUrl = "/dashboard/parent";
          welcomeMessage = `Welcome back, parent! Let's check on progress. 👨‍👩‍👧‍👦`;
          break;
        case "school":
          dashboardUrl = "/dashboard/school";
          welcomeMessage = `Karibu Mwalimu! Your CBC dashboard is ready. 🏫`;
          break;
      }

      alert(welcomeMessage + "\n\nRedirecting to your dashboard...");
      setIsLoading(false);
      router.push(dashboardUrl);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="xl" href="/" />
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In to DigiEd</CardTitle>
            <CardDescription>
              Welcome back! Please enter your details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={userType}
              onValueChange={(value) => {
                setUserType(value);
                // Clear fields when switching tabs for clarity
                setEmail("");
                setPassword("");
              }}
              className="mb-6"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="tutor">Tutor</TabsTrigger>
                <TabsTrigger value="parent">Parent</TabsTrigger>
                <TabsTrigger value="school">School</TabsTrigger>
              </TabsList>

              <TabsContent value={userType} className="space-y-4 mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={
                        userType === "school"
                          ? "mwalimu@school.edu"
                          : "name@example.com"
                      }
                      className="h-11"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-11 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember-me"
                        className="rounded"
                      />
                      <Label htmlFor="remember-me">Remember me</Label>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert("Password reset link sent!")}
                      className="text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push(`/signup?role=${userType}`)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
