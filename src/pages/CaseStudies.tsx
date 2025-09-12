import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Download, Eye, Calendar, User, Filter, TrendingUp } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  // Mock data for case studies
  const caseStudies = [
    {
      id: 1,
      title: "Cloud Migration Strategy for E-commerce Platform",
      description: "Complete migration from on-premise infrastructure to AWS cloud, resulting in 40% cost reduction and improved scalability.",
      category: "Technology",
      industry: "E-commerce",
      author: "Sarah Chen",
      dateCreated: "2024-08-15",
      readTime: "12 min read",
      tags: ["Cloud Migration", "AWS", "Cost Optimization", "Scalability"],
      downloads: 156,
      views: 1240,
      difficulty: "Advanced",
      keyOutcome: "40% cost reduction, 99.9% uptime achieved"
    },
    {
      id: 2,
      title: "Agile Transformation: From Waterfall to Scrum",
      description: "Step-by-step guide on transforming a traditional development team to agile methodology, improving delivery speed by 60%.",
      category: "Project Management",
      industry: "Software Development",
      author: "Marcus Johnson",
      dateCreated: "2024-07-22",
      readTime: "8 min read",
      tags: ["Agile", "Scrum", "Team Management", "Process Improvement"],
      downloads: 243,
      views: 1890,
      difficulty: "Intermediate",
      keyOutcome: "60% faster delivery, improved team satisfaction"
    },
    {
      id: 3,
      title: "Employee Onboarding Automation Implementation",
      description: "Automated onboarding process reducing new hire setup time from 3 days to 2 hours using workflow automation tools.",
      category: "Human Resources",
      industry: "Technology",
      author: "Emily Rodriguez",
      dateCreated: "2024-09-05",
      readTime: "6 min read",
      tags: ["HR Automation", "Onboarding", "Process Optimization", "Employee Experience"],
      downloads: 189,
      views: 956,
      difficulty: "Beginner",
      keyOutcome: "85% reduction in onboarding time"
    },
    {
      id: 4,
      title: "Data-Driven Marketing Campaign Optimization",
      description: "Using machine learning models to optimize marketing spend and improve ROI by 150% across digital channels.",
      category: "Data & Analytics", 
      industry: "Marketing",
      author: "David Kim",
      dateCreated: "2024-08-30",
      readTime: "15 min read",
      tags: ["Machine Learning", "Marketing Analytics", "ROI Optimization", "Data Science"],
      downloads: 298,
      views: 2156,
      difficulty: "Advanced",
      keyOutcome: "150% improvement in marketing ROI"
    },
    {
      id: 5,
      title: "Remote Work Policy Implementation",
      description: "Comprehensive guide to implementing remote work policies while maintaining productivity and team collaboration.",
      category: "Human Resources",
      industry: "General",
      author: "Emily Rodriguez",
      dateCreated: "2024-06-18",
      readTime: "10 min read",
      tags: ["Remote Work", "Policy Development", "Team Collaboration", "Productivity"],
      downloads: 512,
      views: 3245,
      difficulty: "Intermediate",
      keyOutcome: "Maintained 95% productivity with remote work"
    },
    {
      id: 6,
      title: "API Security Best Practices Implementation",
      description: "Implementing comprehensive API security measures including authentication, rate limiting, and monitoring.",
      category: "Technology",
      industry: "Fintech",
      author: "Sarah Chen",
      dateCreated: "2024-07-10", 
      readTime: "14 min read",
      tags: ["API Security", "Authentication", "Monitoring", "Best Practices"],
      downloads: 167,
      views: 1134,
      difficulty: "Advanced",
      keyOutcome: "Zero security incidents in 12 months"
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "technology", label: "Technology" },
    { value: "project-management", label: "Project Management" },
    { value: "human-resources", label: "Human Resources" },
    { value: "data-analytics", label: "Data & Analytics" },
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Marketing" },
  ];

  const industries = [
    { value: "all", label: "All Industries" },
    { value: "technology", label: "Technology" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "fintech", label: "Fintech" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "general", label: "General" },
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                           study.category.toLowerCase().replace(/\s+/g, '-').includes(selectedCategory);
    
    const matchesIndustry = selectedIndustry === "all" || 
                           study.industry.toLowerCase().includes(selectedIndustry);
    
    return matchesSearch && matchesCategory && matchesIndustry;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Case Studies</h1>
            <p className="text-muted-foreground">
              Learn from real-world implementations and best practices across different domains and industries.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-card">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search case studies by title, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-64">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Category" />
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
                <div className="md:w-64">
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCaseStudies.map((study) => (
              <Card key={study.id} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className={getDifficultyColor(study.difficulty)}>
                      {study.difficulty}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {study.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {study.downloads}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{study.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(study.dateCreated).toLocaleDateString()}</span>
                      </div>
                      <span>{study.readTime}</span>
                    </div>

                    <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">Key Outcome</span>
                      </div>
                      <p className="text-sm text-success">{study.keyOutcome}</p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {study.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {study.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{study.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                        <Badge variant="outline">{study.category}</Badge>
                        <Badge variant="outline">{study.industry}</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <FileText className="h-3 w-3 mr-1" />
                        Read Study
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No case studies found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find relevant case studies.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;