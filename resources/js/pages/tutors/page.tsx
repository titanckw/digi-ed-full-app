"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Slider } from "../../components/ui/slider";
import { Logo } from "../../components/logo";
import {
  Star,
  MapPin,
  Clock,
  Filter,
  Search,
  Heart,
  MessageCircle,
  Calendar,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TutorsPage() {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const tutors = [
    {
      id: 1,
      name: "Dr. Grace Wanjiru",
      subjects: ["Mathematics", "Physics", "KCSE Prep"],
      rating: 4.9,
      reviews: 127,
      hourlyRate: 2500,
      location: "Nairobi, KE",
      experience: "8 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["Top Rated", "Quick Responder"],
      description:
        "PhD in Mathematics from UoN with 8+ years of teaching experience. Specializes in KCSE preparation.",
      availability: "Available today",
      responseTime: "Usually responds in 1 hour",
    },
    {
      id: 2,
      name: "Prof. David Ochieng",
      subjects: ["Computer Studies", "Programming", "ICT"],
      rating: 4.8,
      reviews: 89,
      hourlyRate: 3000,
      location: "Mombasa, KE",
      experience: "10 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["Expert", "Industry Professional"],
      description:
        "Former iHub developer with extensive experience in software development and ICT.",
      availability: "Available tomorrow",
      responseTime: "Usually responds in 30 minutes",
    },
    {
      id: 3,
      name: "Faith Chebet",
      subjects: ["Kiswahili", "CRE", "Fasihi"],
      rating: 4.9,
      reviews: 156,
      hourlyRate: 1800,
      location: "Nakuru, KE",
      experience: "6 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["Top Rated", "Patient Teacher"],
      description:
        "Master's in Kiswahili. Helps students improve their writing and analytical skills for KCSE.",
      availability: "Available now",
      responseTime: "Usually responds in 15 minutes",
    },
    {
      id: 4,
      name: "Peter Otieno",
      subjects: ["Chemistry", "Biology", "Agriculture"],
      rating: 4.7,
      reviews: 73,
      hourlyRate: 2200,
      location: "Kisumu, KE",
      experience: "5 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["Lab Expert", "Exam Specialist"],
      description:
        "MSc in Chemistry with hands-on laboratory experience. Great at simplifying complex concepts.",
      availability: "Available this week",
      responseTime: "Usually responds in 2 hours",
    },
    {
      id: 5,
      name: "Amina Yusuf",
      subjects: ["Business Studies", "Accounting", "Commerce"],
      rating: 4.8,
      reviews: 94,
      hourlyRate: 2000,
      location: "Eldoret, KE",
      experience: "4 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["CPA-K", "Business Expert"],
      description:
        "Certified Public Accountant (CPA-K). Makes business studies and accounting practical and fun.",
      availability: "Available today",
      responseTime: "Usually responds in 45 minutes",
    },
    {
      id: 6,
      name: "Samuel Kariuki",
      subjects: ["History", "Geography", "Social Studies"],
      rating: 4.6,
      reviews: 62,
      hourlyRate: 1900,
      location: "Nyeri, KE",
      experience: "7 years",
      avatar: "/placeholder.svg?height=80&width=80",
      badges: ["CBC Specialist", "Engaging Teacher"],
      description:
        "Former high school teacher specializing in CBC curriculum. Makes history and geography come alive!",
      availability: "Available this weekend",
      responseTime: "Usually responds in 1 hour",
    },
  ];

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) =>
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesPrice =
      tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1];

    const matchesSubject =
      !selectedSubject ||
      tutor.subjects.some((subject) =>
        subject.toLowerCase().includes(selectedSubject.toLowerCase())
      );

    const matchesRating =
      !selectedRating || tutor.rating >= Number.parseFloat(selectedRating);

    return matchesSearch && matchesPrice && matchesSubject && matchesRating;
  });

  const sortedTutors = [...filteredTutors].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.hourlyRate - b.hourlyRate;
      case "price-high":
        return b.hourlyRate - a.hourlyRate;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const handleFavorite = (tutorId: number) => {
    const tutor = tutors.find((t) => t.id === tutorId);
    const isFavorited = favorites.includes(tutorId);

    setFavorites((prev) =>
      isFavorited ? prev.filter((id) => id !== tutorId) : [...prev, tutorId]
    );

    if (tutor) {
      const action = isFavorited ? "removed from" : "added to";
      alert(
        `${tutor.name} ${action} your favorites!\n\n${
          isFavorited ? "💔" : "❤️"
        } ${isFavorited ? "Removed from" : "Added to"} favorites\n📱 You'll ${
          isFavorited ? "no longer" : "now"
        } receive notifications about their availability\n⭐ ${
          isFavorited ? "Unfavorited" : "Favorited"
        } tutor`
      );
    }
  };

  const handleMessage = (tutorId: number) => {
    const tutor = tutors.find((t) => t.id === tutorId);
    if (tutor) {
      alert(
        `Starting conversation with ${tutor.name}:\n\n💬 Send your first message\n📚 Ask about their teaching style\n📅 Inquire about availability\n💰 Discuss rates and packages\n🎯 Share your learning goals\n\nMessage interface opening...`
      );
    }
  };

  const handleBook = (tutorId: number) => {
    const tutor = tutors.find((t) => t.id === tutorId);
    if (tutor) {
      alert(
        `Booking session with ${tutor.name}:\n\n📚 Subject: ${tutor.subjects[0]}\n💰 Rate: KES ${tutor.hourlyRate}/hour\n⭐ Rating: ${tutor.rating}/5\n📍 Location: ${tutor.location}\n\nNext steps:\n1. Choose date and time\n2. Select session duration\n3. Add session notes\n4. Confirm payment method (M-Pesa available)\n\nBooking interface opening...`
      );
    }
  };

  const handleApplyFilters = () => {
    const activeFilters = [];
    if (searchQuery) activeFilters.push(`Search: "${searchQuery}"`);
    if (selectedSubject) activeFilters.push(`Subject: ${selectedSubject}`);
    if (selectedRating) activeFilters.push(`Rating: ${selectedRating}+ stars`);
    if (selectedAvailability)
      activeFilters.push(`Availability: ${selectedAvailability}`);
    activeFilters.push(`Price: KES ${priceRange[0]}-KES ${priceRange[1]}/hour`);

    alert(
      `Filters applied successfully!\n\n🔍 Active filters:\n• ${activeFilters.join(
        "\n• "
      )}\n\n📊 Found ${sortedTutors.length} matching tutors\n✨ Results updated`
    );
  };

  const handleLoadMore = () => {
    alert(
      "Loading more tutors...\n\n🔍 Searching our database\n👨‍🏫 Finding qualified tutors\n📊 Applying your filters\n⭐ Sorting by relevance\n\n+12 more tutors will be added to the list!"
    );
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedSubject("");
    setSelectedAvailability("");
    setSelectedRating("");
    setPriceRange([1000, 5000]);
    setSortBy("");
    alert(
      "All filters cleared!\n\n🔄 Showing all available tutors\n📊 Results reset to default\n🔍 You can now apply new filters"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="xl" />
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => router.push("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with expert tutors who can help you achieve your learning
            goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Subject or tutor name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Select
                    value={selectedSubject}
                    onValueChange={setSelectedSubject}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All subjects</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="computer-science">
                        Computer Science
                      </SelectItem>
                      <SelectItem value="languages">Languages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Price Range: KES {priceRange[0]} - {priceRange[1]}/hour
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={8000}
                    min={500}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Availability</label>
                  <Select
                    value={selectedAvailability}
                    onValueChange={setSelectedAvailability}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any time</SelectItem>
                      <SelectItem value="now">Available now</SelectItem>
                      <SelectItem value="today">Available today</SelectItem>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minimum Rating</label>
                  <Select
                    value={selectedRating}
                    onValueChange={setSelectedRating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any rating</SelectItem>
                      <SelectItem value="4.5">4.5+ stars</SelectItem>
                      <SelectItem value="4.0">4.0+ stars</SelectItem>
                      <SelectItem value="3.5">3.5+ stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary"
                  onClick={handleApplyFilters}
                >
                  Apply Filters
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tutors Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {sortedTutors.length} tutors found
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="rating">Highest rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to high</SelectItem>
                  <SelectItem value="price-high">Price: High to low</SelectItem>
                  <SelectItem value="reviews">Most reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedTutors.map((tutor) => (
                <Card
                  key={tutor.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={tutor.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {tutor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">
                            {tutor.name}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium ml-1">
                                {tutor.rating}
                              </span>
                              <span className="text-sm text-gray-500 ml-1">
                                ({tutor.reviews})
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {tutor.location}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleFavorite(tutor.id)}
                        className={
                          favorites.includes(tutor.id) ? "text-red-500" : ""
                        }
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(tutor.id) ? "fill-current" : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {tutor.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Subjects */}
                    <div>
                      <p className="text-sm font-medium mb-2">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {tutor.subjects.map((subject, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600">{tutor.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-400 mr-2" />
                        <span>{tutor.experience} experience</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-accent">
                          {tutor.availability}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      {tutor.responseTime}
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          KES {tutor.hourlyRate}
                        </span>
                        <span className="text-sm text-gray-500">/hour</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMessage(tutor.id)}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-primary to-secondary"
                          onClick={() => handleBook(tutor.id)}
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          Book
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Tutors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
