
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

const Admin: React.FC = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  
  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (in a real app, use proper auth)
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin panel content when authenticated
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Portfolio Admin Panel</h1>
      
      <Tabs defaultValue="resume" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
        </TabsList>
        
        {/* Resume Tab */}
        <TabsContent value="resume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Update Resume</CardTitle>
              <CardDescription>Upload a new version of your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <Button>Select PDF File</Button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    PDF file up to 5MB
                  </p>
                </div>
                <Button>Upload Resume</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manage Projects</CardTitle>
              <CardDescription>Add, edit, or remove projects from your portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Project Form */}
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="projectTitle">Project Title</Label>
                    <Input id="projectTitle" placeholder="Enter project title" />
                  </div>
                  <div>
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea id="projectDescription" placeholder="Describe your project" />
                  </div>
                  <div>
                    <Label htmlFor="projectTools">Tools Used</Label>
                    <Input id="projectTools" placeholder="HTML, CSS, JavaScript, etc." />
                  </div>
                  <div>
                    <Label htmlFor="projectImage">Project Image</Label>
                    <Input id="projectImage" type="file" />
                  </div>
                  <Button>Add Project</Button>
                </div>
                
                {/* Project List (placeholder) */}
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Current Projects</h3>
                  <ul className="space-y-2">
                    <li className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                      <span>Organic Revival</span>
                      <div>
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                      </div>
                    </li>
                    <li className="p-3 bg-gray-50 rounded-md flex justify-between items-center">
                      <span>Double Layer Encryption</span>
                      <div>
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Update Contact Details</CardTitle>
              <CardDescription>Update your contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="nandinigupta048@gmail.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+91-8057529335" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Agra, Uttar Pradesh - 282003, India" />
                </div>
                <Button>Update Contact Info</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Skills & Experience Tab */}
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Experience</CardTitle>
              <CardDescription>Manage your skills and work experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Add/Edit Skills</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="skillName">Skill Name</Label>
                      <Input id="skillName" placeholder="JavaScript" />
                    </div>
                    <div>
                      <Label htmlFor="skillType">Skill Type</Label>
                      <Input id="skillType" placeholder="Programming Language, Tool, etc." />
                    </div>
                    <Button>Add Skill</Button>
                  </div>
                  
                  {/* Skills list placeholder */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Current Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                        HTML <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-2">×</Button>
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                        CSS <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-2">×</Button>
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                        JavaScript <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-2">×</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Add/Edit Work Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Company Name" />
                    </div>
                    <div>
                      <Label htmlFor="position">Position</Label>
                      <Input id="position" placeholder="Job Title" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" type="date" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="jobDescription">Description</Label>
                      <Textarea id="jobDescription" placeholder="Job responsibilities and achievements" />
                    </div>
                    <Button>Add Experience</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
