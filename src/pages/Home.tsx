import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Search, 
  FileText, 
  Users, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Star
} from "lucide-react";

const Home = () => {
  // Mock data for dashboard stats
  const stats = [
    { label: "Active Requests", value: "24", change: "+3 today", icon: MessageSquare },
    { label: "Available Experts", value: "156", change: "12 online now", icon: Users },
    { label: "Case Studies", value: "89", change: "+2 this week", icon: BookOpen },
    { label: "Avg Response Time", value: "2.4h", change: "-20% this month", icon: Clock },
  ];

  const recentActivity = [
    { type: "request", title: "Cloud migration guidance needed", status: "resolved", time: "2 hours ago" },
    { type: "expert", title: "Sarah Chen updated her availability", status: "available", time: "4 hours ago" },
    { type: "case-study", title: "New Agile transformation case study", status: "published", time: "1 day ago" },
    { type: "request", title: "API security best practices", status: "in-progress", time: "2 days ago" },
  ];

  const popularCategories = [
    { name: "Technology & IT", count: 45, trend: "up" },
    { name: "Project Management", count: 32, trend: "up" },
    { name: "HR & Compliance", count: 28, trend: "stable" },
    { name: "Data & Analytics", count: 19, trend: "up" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Employee Request &{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Knowledge Portal
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Streamline your onboarding journey and get expert guidance. Connect with subject matter experts, 
                access case studies, and submit requests all in one centralized platform.
              </p>
              
              {/* Quick Search */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search experts, case studies, or submit a request..."
                    className="pl-12 h-14 text-lg shadow-elevated"
                  />
                  <Button className="absolute right-2 top-2 bg-gradient-primary hover:opacity-90">
                    Search
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                  <Link to="/request">
                    <FileText className="h-5 w-5 mr-2" />
                    Submit Request
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:shadow-card">
                  <Link to="/knowledge">
                    <Users className="h-5 w-5 mr-2" />
                    Find Expert
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:shadow-card">
                  <Link to="/case-studies">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Browse Cases
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-success">{stat.change}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>
                      Stay updated with the latest requests, expert updates, and new content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="flex-shrink-0">
                            {activity.type === "request" && <MessageSquare className="h-5 w-5 text-primary" />}
                            {activity.type === "expert" && <Users className="h-5 w-5 text-success" />}
                            {activity.type === "case-study" && <BookOpen className="h-5 w-5 text-info" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={
                                activity.status === "resolved" ? "secondary" :
                                activity.status === "available" ? "secondary" :
                                activity.status === "published" ? "secondary" : "outline"
                              } className="text-xs">
                                {activity.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{activity.time}</span>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Popular Categories */}
              <div>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Popular Categories
                    </CardTitle>
                    <CardDescription>
                      Most requested areas of expertise this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularCategories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{category.name}</p>
                            <p className="text-xs text-muted-foreground">{category.count} requests</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className={`h-4 w-4 ${
                              category.trend === "up" ? "text-success" : "text-muted-foreground"
                            }`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="shadow-card mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Quick Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Be specific in your request title for faster routing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Check case studies before submitting similar requests</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Include relevant context and what you've tried</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;