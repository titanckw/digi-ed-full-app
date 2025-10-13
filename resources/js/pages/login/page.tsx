import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/ui/tabs";
import { Logo } from "../../components/logo";
import { Eye, EyeOff } from "lucide-react";
import { router, usePage } from "@inertiajs/react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("student");
    const { props, errors } = usePage().props as any;
    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        const url = new URL(window.location.href);
        const role = url.searchParams.get("role");
        if (role && ["student", "tutor", "parent", "school"].includes(role)) {
            setUserType(role);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.post("/login", form);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Logo size="xl" href="/" />
                </div>

                <Card className="border-0 shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">
                            Sign In to DigiEd
                        </CardTitle>
                        <CardDescription>
                            Welcome back! Please enter your details.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs
                            value={userType}
                            onValueChange={(value) => {
                                setUserType(value);
                                setForm({
                                    email: "",
                                    password: "",
                                    remember: false,
                                });
                                router.get(
                                    `/login?role=${value}`,
                                    {},
                                    { preserveState: true, replace: true }
                                );
                            }}
                            className="mb-6"
                        >
                            <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="student">
                                    Student
                                </TabsTrigger>
                                <TabsTrigger value="tutor">Tutor</TabsTrigger>
                                <TabsTrigger value="parent">Parent</TabsTrigger>
                                <TabsTrigger value="school">School</TabsTrigger>
                            </TabsList>

                            <TabsContent
                                value={userType}
                                className="space-y-4 mt-6"
                            >
                                <form
                                    onSubmit={handleLogin}
                                    className="space-y-4"
                                >
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
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Enter your password"
                                                className="h-11 pr-10"
                                                value={form.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
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
                                                id="remember"
                                                type="checkbox"
                                                className="rounded"
                                                checked={form.remember}
                                                onChange={handleChange}
                                            />
                                            <Label htmlFor="remember">
                                                Remember me
                                            </Label>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                alert(
                                                    "Password reset link sent!"
                                                )
                                            }
                                            className="text-primary hover:underline"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>

                                    {errors.email && (
                                        <div className="text-red-500 text-sm mt-2">
                                            {errors.email}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                                        disabled={props.processing}
                                    >
                                        {props.processing
                                            ? "Signing In..."
                                            : "Sign In"}
                                    </Button>
                                </form>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <button
                                    onClick={() =>
                                        router.get(`/signup?role=${userType}`)
                                    }
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
