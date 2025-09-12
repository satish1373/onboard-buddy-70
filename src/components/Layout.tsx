import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User, FileText, Users, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-foreground">Employee Portal</span>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/request" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/request') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Submit Request
                </Link>
                <Link 
                  to="/knowledge" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/knowledge') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Knowledge Base
                </Link>
                <Link 
                  to="/case-studies" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/case-studies') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Case Studies
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="w-64 pl-9"
                />
              </div>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/request" className="hover:text-primary">Submit Request</Link></li>
                <li><Link to="/knowledge" className="hover:text-primary">Find Expert</Link></li>
                <li><Link to="/case-studies" className="hover:text-primary">Browse Cases</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Technology</li>
                <li>HR & Compliance</li>
                <li>Project Management</li>
                <li>Business Process</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Contact Support</li>
                <li>Training Resources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company Portal</h3>
              <p className="text-sm text-muted-foreground">
                Streamlining employee onboarding and knowledge sharing across the organization.
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Employee Request Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};