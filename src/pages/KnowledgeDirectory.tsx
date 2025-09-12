import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Users, Mail, Phone, MapPin, Star, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const KnowledgeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for SMEs
  const experts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Solutions Architect",
      department: "Technology",
      email: "sarah.chen@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      expertise: ["Cloud Architecture", "Microservices", "DevOps", "AWS"],
      rating: 4.9,
      responseTime: "< 2 hours",
      availability: "Available",
      bio: "10+ years experience in cloud architecture and distributed systems. Specializes in helping teams migrate to cloud-native solutions."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Project Management Director",
      department: "Operations",
      email: "marcus.johnson@company.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      expertise: ["Agile Methodology", "Scrum", "Change Management", "Risk Assessment"],
      rating: 4.8,
      responseTime: "< 4 hours",
      availability: "Busy",
      bio: "Certified PMP with 12+ years managing complex enterprise projects. Expert in agile transformation and team optimization."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "HR Business Partner",
      department: "Human Resources",
      email: "emily.rodriguez@company.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      expertise: ["Employee Relations", "Compliance", "Benefits", "Talent Management"],
      rating: 4.9,
      responseTime: "< 3 hours",
      availability: "Available",
      bio: "SHRM-certified HR professional with expertise in employee lifecycle management and regulatory compliance."
    },
    {
      id: 4,
      name: "David Kim",
      title: "Data Science Lead",
      department: "Analytics",
      email: "david.kim@company.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      expertise: ["Machine Learning", "Data Analytics", "Python", "SQL", "Tableau"],
      rating: 4.7,
      responseTime: "< 6 hours",
      availability: "Available",
      bio: "PhD in Statistics with 8+ years building ML models and data pipelines. Helps teams leverage data for business insights."
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology & IT" },
    { value: "operations", label: "Project Management" },
    { value: "hr", label: "Human Resources" },
    { value: "analytics", label: "Data & Analytics" },
    { value: "finance", label: "Finance & Accounting" },
    { value: "legal", label: "Legal & Compliance" },
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         expert.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           expert.department.toLowerCase().includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "text-success";
      case "Busy": return "text-warning";
      case "Away": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Directory</h1>
            <p className="text-muted-foreground">
              Find subject matter experts and get the help you need across different domains.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, expertise, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredExperts.map((expert) => (
              <Card key={expert.id} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {expert.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{expert.name}</CardTitle>
                        <CardDescription>{expert.title}</CardDescription>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground">{expert.department}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-warning text-warning" />
                            <span className="text-sm font-medium">{expert.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant={expert.availability === "Available" ? "secondary" : "outline"} 
                           className={getAvailabilityColor(expert.availability)}>
                      {expert.availability}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{expert.bio}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {expert.expertise.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {expert.expertise.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{expert.expertise.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{expert.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>{expert.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{expert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>Responds in {expert.responseTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">Contact Expert</Button>
                    <Button size="sm" variant="outline">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredExperts.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No experts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find the right expert.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeDirectory;