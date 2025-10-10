"use client";

import type React from "react";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Logo } from "@/components/logo";
import { Eye, EyeOff, Upload } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("student");
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Student form state
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    grade: "",
    interests: "",
  });

  // Tutor form state
  const [tutorForm, setTutorForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    education: "",
    subjects: "",
    experience: "",
    hourlyRate: "",
  });

  // Add to the existing state declarations
  const [parentForm, setParentForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    childrenCount: "",
    childrenAges: "",
    subjects: "",
  });

  // Add school form state
  const [schoolForm, setSchoolForm] = useState({
    teacherName: "",
    schoolName: "",
    email: "",
    password: "",
    studentCount: "",
    subjects: "",
  });

  useEffect(() => {
    const role = searchParams.get("role");
    if (
      role === "student" ||
      role === "tutor" ||
      role === "parent" ||
      role === "school"
    ) {
      setUserType(role);
    }
  }, [searchParams]);

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = [];
    if (!studentForm.firstName.trim()) errors.push("First name is required");
    if (!studentForm.lastName.trim()) errors.push("Last name is required");
    if (!studentForm.email.trim()) errors.push("Email is required");
    if (studentForm.password.length < 8)
      errors.push("Password must be at least 8 characters");
    if (!studentForm.grade) errors.push("Grade level is required");
    if (!agreedToTerms) errors.push("You must agree to the Terms of Service");

    if (errors.length > 0) {
      alert(`Please fix the following errors:\n\n• ${errors.join("\n• ")}`);
      return;
    }

    setIsLoading(true);

    // Simulate account creation process
    setTimeout(() => {
      alert(
        `Welcome to DigiEd, ${studentForm.firstName}! 🎉\n\n✅ Account created successfully\n📧 Verification email sent\n🎯 Profile setup complete\n📚 Ready to find tutors\n\nRedirecting to your dashboard...`
      );
      setIsLoading(false);
      router.push("/dashboard/student");
    }, 2000);
  };

  const handleTutorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = [];
    if (!tutorForm.firstName.trim()) errors.push("First name is required");
    if (!tutorForm.lastName.trim()) errors.push("Last name is required");
    if (!tutorForm.email.trim()) errors.push("Email is required");
    if (tutorForm.password.length < 8)
      errors.push("Password must be at least 8 characters");
    if (!tutorForm.education) errors.push("Education level is required");
    if (!tutorForm.subjects.trim())
      errors.push("Teaching subjects are required");
    if (!tutorForm.hourlyRate || Number(tutorForm.hourlyRate) < 10)
      errors.push("Hourly rate must be at least KES 1000");
    if (!agreedToTerms) errors.push("You must agree to the Terms of Service");

    if (errors.length > 0) {
      alert(`Please fix the following errors:\n\n• ${errors.join("\n• ")}`);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(
        `Welcome to DigiEd, ${tutorForm.firstName}! 🎉\n\n✅ Tutor application submitted\n🔍 Background check initiated\n📋 Profile under review\n⏰ Approval within 24-48 hours\n📧 Confirmation email sent\n\nRedirecting to your dashboard...`
      );
      setIsLoading(false);
      router.push("/dashboard/tutor");
    }, 2000);
  };

  // Add the parent submit handler
  const handleParentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = [];
    if (!parentForm.firstName.trim()) errors.push("First name is required");
    if (!parentForm.lastName.trim()) errors.push("Last name is required");
    if (!parentForm.email.trim()) errors.push("Email is required");
    if (parentForm.password.length < 8)
      errors.push("Password must be at least 8 characters");
    if (!parentForm.childrenCount)
      errors.push("Number of children is required");
    if (!parentForm.childrenAges.trim())
      errors.push("Children's ages are required");
    if (!agreedToTerms) errors.push("You must agree to the Terms of Service");

    if (errors.length > 0) {
      alert(`Please fix the following errors:\n\n• ${errors.join("\n• ")}`);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(
        `Welcome to DigiEd, ${parentForm.firstName}! 🎉\n\n✅ Parent account created\n👨‍👩‍👧‍👦 Child profiles set up\n🛡️ Safety features enabled\n📊 Monitoring dashboard ready\n📧 Welcome email sent\n\nRedirecting to your parent dashboard...`
      );
      setIsLoading(false);
      router.push("/dashboard/parent");
    }, 2000);
  };

  // Add the school submit handler
  const handleSchoolSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = [];
    if (!schoolForm.teacherName.trim()) errors.push("Your name is required");
    if (!schoolForm.schoolName.trim()) errors.push("School name is required");
    if (!schoolForm.email.trim()) errors.push("Email is required");
    if (schoolForm.password.length < 8)
      errors.push("Password must be at least 8 characters");
    if (!schoolForm.studentCount) errors.push("Number of students is required");
    if (!agreedToTerms) errors.push("You must agree to the Terms of Service");

    if (errors.length > 0) {
      alert(`Please fix the following errors:\n\n• ${errors.join("\n• ")}`);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(
        `Karibu DigiEd for Schools, ${schoolForm.teacherName}! 🏫\n\n✅ School account created\n👨‍🏫 Teacher profile ready\n🎓 Ready to add students\n📊 CBC dashboard is active\n📧 Welcome email sent\n\nRedirecting to your school dashboard...`
      );
      setIsLoading(false);
      router.push("/dashboard/school");
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (file.size > maxSize) {
        alert("File size must be less than 10MB");
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        alert("Only PDF, DOC, and DOCX files are allowed");
        return;
      }

      alert(
        `Resume uploaded successfully! 📄\n\nFile: ${file.name}\nSize: ${(
          file.size /
          1024 /
          1024
        ).toFixed(2)} MB\nType: ${
          file.type
        }\n\n✅ File validated\n🔍 Virus scan complete\n💾 Securely stored`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo size="xl" href="/" />
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Join DigiEd</CardTitle>
            <CardDescription>
              Create your account and start your learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={userType}
              onValueChange={setUserType}
              className="mb-6"
              defaultValue="student"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="student">I'm a Student</TabsTrigger>
                <TabsTrigger value="tutor">I'm a Tutor</TabsTrigger>
                <TabsTrigger value="parent">I'm a Parent</TabsTrigger>
                <TabsTrigger value="school">For Schools</TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <form onSubmit={handleStudentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="h-11"
                        value={studentForm.firstName}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="h-11"
                        value={studentForm.lastName}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-11"
                      value={studentForm.email}
                      onChange={(e) =>
                        setStudentForm({
                          ...studentForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="h-11 pr-10"
                        value={studentForm.password}
                        onChange={(e) =>
                          setStudentForm({
                            ...studentForm,
                            password: e.target.value,
                          })
                        }
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

                  <div className="space-y-2">
                    <Label htmlFor="grade">Grade Level</Label>
                    <Select
                      value={studentForm.grade}
                      onValueChange={(value) =>
                        setStudentForm({ ...studentForm, grade: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your grade level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">
                          Primary (Grade 1-6)
                        </SelectItem>
                        <SelectItem value="jss">
                          Junior Secondary (Grade 7-9)
                        </SelectItem>
                        <SelectItem value="sss">
                          Senior School (Grade 10-12)
                        </SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="adult">Adult Learner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Learning Interests</Label>
                    <Textarea
                      id="interests"
                      placeholder="What subjects are you interested in learning?"
                      className="min-h-[80px]"
                      value={studentForm.interests}
                      onChange={(e) =>
                        setStudentForm({
                          ...studentForm,
                          interests: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/terms")}
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/privacy")}
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="tutor" className="space-y-4 mt-6">
                <form onSubmit={handleTutorSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tutorFirstName">First Name</Label>
                      <Input
                        id="tutorFirstName"
                        placeholder="Jane"
                        className="h-11"
                        value={tutorForm.firstName}
                        onChange={(e) =>
                          setTutorForm({
                            ...tutorForm,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tutorLastName">Last Name</Label>
                      <Input
                        id="tutorLastName"
                        placeholder="Smith"
                        className="h-11"
                        value={tutorForm.lastName}
                        onChange={(e) =>
                          setTutorForm({
                            ...tutorForm,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tutorEmail">Email</Label>
                    <Input
                      id="tutorEmail"
                      type="email"
                      placeholder="jane@example.com"
                      className="h-11"
                      value={tutorForm.email}
                      onChange={(e) =>
                        setTutorForm({ ...tutorForm, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tutorPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="tutorPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="h-11 pr-10"
                        value={tutorForm.password}
                        onChange={(e) =>
                          setTutorForm({
                            ...tutorForm,
                            password: e.target.value,
                          })
                        }
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

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level</Label>
                    <Select
                      value={tutorForm.education}
                      onValueChange={(value) =>
                        setTutorForm({ ...tutorForm, education: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your highest education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="professional">
                          Professional Certification
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subjects">Subjects You Teach</Label>
                    <Input
                      id="subjects"
                      placeholder="e.g., Mathematics, Kiswahili, Business Studies"
                      className="h-11"
                      value={tutorForm.subjects}
                      onChange={(e) =>
                        setTutorForm({ ...tutorForm, subjects: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Teaching Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Describe your teaching experience and qualifications"
                      className="min-h-[80px]"
                      value={tutorForm.experience}
                      onChange={(e) =>
                        setTutorForm({
                          ...tutorForm,
                          experience: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate (KES)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      placeholder="1500"
                      className="h-11"
                      value={tutorForm.hourlyRate}
                      onChange={(e) =>
                        setTutorForm({
                          ...tutorForm,
                          hourlyRate: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload Resume/CV</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <input
                      type="checkbox"
                      id="tutorTerms"
                      className="rounded"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <Label htmlFor="tutorTerms" className="text-sm">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/terms")}
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/privacy")}
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="parent" className="space-y-4 mt-6">
                <form onSubmit={handleParentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentFirstName">First Name</Label>
                      <Input
                        id="parentFirstName"
                        placeholder="John"
                        className="h-11"
                        value={parentForm.firstName}
                        onChange={(e) =>
                          setParentForm({
                            ...parentForm,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentLastName">Last Name</Label>
                      <Input
                        id="parentLastName"
                        placeholder="Doe"
                        className="h-11"
                        value={parentForm.lastName}
                        onChange={(e) =>
                          setParentForm({
                            ...parentForm,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Email</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="john@example.com"
                      className="h-11"
                      value={parentForm.email}
                      onChange={(e) =>
                        setParentForm({ ...parentForm, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="parentPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="h-11 pr-10"
                        value={parentForm.password}
                        onChange={(e) =>
                          setParentForm({
                            ...parentForm,
                            password: e.target.value,
                          })
                        }
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

                  <div className="space-y-2">
                    <Label htmlFor="childrenCount">Number of Children</Label>
                    <Select
                      value={parentForm.childrenCount}
                      onValueChange={(value) =>
                        setParentForm({ ...parentForm, childrenCount: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 child</SelectItem>
                        <SelectItem value="2">2 children</SelectItem>
                        <SelectItem value="3">3 children</SelectItem>
                        <SelectItem value="4">4+ children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="childrenAges">Children's Ages</Label>
                    <Input
                      id="childrenAges"
                      placeholder="e.g., 12, 14, 16"
                      className="h-11"
                      value={parentForm.childrenAges}
                      onChange={(e) =>
                        setParentForm({
                          ...parentForm,
                          childrenAges: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subjects">Subjects of Interest</Label>
                    <Textarea
                      id="subjects"
                      placeholder="What subjects do your children need help with?"
                      className="min-h-[80px]"
                      value={parentForm.subjects}
                      onChange={(e) =>
                        setParentForm({
                          ...parentForm,
                          subjects: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <input
                      type="checkbox"
                      id="parentTerms"
                      className="rounded"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <Label htmlFor="parentTerms" className="text-sm">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/terms")}
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/privacy")}
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="school" className="space-y-4 mt-6">
                <form onSubmit={handleSchoolSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacherName">Your Full Name</Label>
                      <Input
                        id="teacherName"
                        placeholder="Mwalimu Juma"
                        className="h-11"
                        value={schoolForm.teacherName}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            teacherName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schoolName">
                        School/Institution Name
                      </Label>
                      <Input
                        id="schoolName"
                        placeholder="Sunshine Secondary School"
                        className="h-11"
                        value={schoolForm.schoolName}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            schoolName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolEmail">Work Email</Label>
                    <Input
                      id="schoolEmail"
                      type="email"
                      placeholder="teacher@school.edu"
                      className="h-11"
                      value={schoolForm.email}
                      onChange={(e) =>
                        setSchoolForm({ ...schoolForm, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="schoolPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="h-11 pr-10"
                        value={schoolForm.password}
                        onChange={(e) =>
                          setSchoolForm({
                            ...schoolForm,
                            password: e.target.value,
                          })
                        }
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

                  <div className="space-y-2">
                    <Label htmlFor="studentCount">Number of Students</Label>
                    <Select
                      value={schoolForm.studentCount}
                      onValueChange={(value) =>
                        setSchoolForm({ ...schoolForm, studentCount: value })
                      }
                    >
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select class size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-20">1-20 students</SelectItem>
                        <SelectItem value="21-40">21-40 students</SelectItem>
                        <SelectItem value="41-60">41-60 students</SelectItem>
                        <SelectItem value="60+">60+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schoolSubjects">Primary Subjects</Label>
                    <Textarea
                      id="schoolSubjects"
                      placeholder="What subjects will you be teaching? (e.g., Mathematics, Kiswahili, CRE)"
                      className="min-h-[80px]"
                      value={schoolForm.subjects}
                      onChange={(e) =>
                        setSchoolForm({
                          ...schoolForm,
                          subjects: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2 mb-6">
                    <input
                      type="checkbox"
                      id="schoolTerms"
                      className="rounded"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                    <Label htmlFor="schoolTerms" className="text-sm">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/terms")}
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        onClick={() => router.push("/privacy")}
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Creating Account..."
                      : "Create School Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => router.push(`/login?role=${userType}`)}
                  className="text-primary hover:underline font-medium"
                >
                  Sign in
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
