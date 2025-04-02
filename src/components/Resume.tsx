
import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Resume = () => {
  const educationItems = [
    {
      institution: "Hindustan College of Science and Technology, Farah Mathura",
      degree: "B.Tech in Computer Science",
      grade: "CGPA: 6.4/10",
      period: "October 2020 - July 2024",
      location: "Agra, Uttar Pradesh",
    },
    {
      institution: "Lifeline Public School",
      degree: "Higher Secondary Education",
      grade: "CGPA: 8.1/10",
      period: "March 2020",
      location: "Agra, Uttar Pradesh",
    },
    {
      institution: "Holy Public School",
      degree: "Secondary Education",
      grade: "CGPA: 8.3/10",
      period: "March 2018",
      location: "Agra, Uttar Pradesh",
    },
  ];

  const experienceItems = [
    {
      company: "INDUTECH IT SOLUTIONS PVT LTD",
      position: "Internship in Web Development",
      period: "November 2024 - Ongoing",
      location: "Agra, Uttar Pradesh",
      description:
        "Currently gaining hands-on experience in front-end development, working with technologies like HTML, CSS, and JavaScript to build responsive and user-friendly websites.",
    },
    {
      company: "InsuranceDekho",
      position: "B2C Sales Executive Trainee",
      period: "August 2024- October2024",
      location: "Gurgaon, Haryana",
      description:
        "As a B2C Life Insurance Sales Customer Advisor, I assist clients in selecting suitable insurance policies, provide expert guidance, and build strong customer relationships to drive sales and ensure customer satisfaction.",
    },
    {
      company: "Inari Shine Jewels",
      position: "Campus Ambassador Internship",
      period: "2023",
      location: "Remote",
      description:
        "Promoted company activities and events on campus, developing communication and marketing skills while representing the brand to the student community.",
    },
  ];

  const certificationItems = [
    {
      title: "Core Java Certificate",
      issuer: "CodeWithDDSingh",
      date: "July 2023",
    },
    {
      title: "45 Days Summer Training in Web Development",
      issuer: "BCS Infallible Technology",
      date: "November 2023",
    },
    {
      title: "Python Certificate",
      issuer: "PreGrad Company",
      date: "October 2022",
    },
    {
      title: "Campus Ambassador Internship Certificate",
      issuer: "Inari Shine Jewels",
      date: "2023",
    },
  ];

  return (
    <>
    <section id="resume" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto">
        <h2 className="section-title">Resume</h2>

        <div className="flex justify-center mb-10">
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
            <a href="/resume.pdf" download>
              Download Full Resume
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14v10"
                />
              </svg>
              Education
            </h3>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-portfolio-primary">
                  <CardHeader className="pb-2">
                    <h4 className="text-lg font-semibold">{item.institution}</h4>
                    <p className="text-sm text-gray-500">
                      {item.period} | {item.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-portfolio-secondary font-medium">
                      {item.degree}
                    </p>
                    <p className="text-sm text-gray-700">{item.grade}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold my-8 text-portfolio-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Certifications
            </h3>

            <div className="space-y-4">
              {certificationItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-portfolio-secondary"
                >
                  <h4 className="font-medium text-portfolio-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.issuer} | {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Experience
            </h3>

            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-portfolio-primary">
                  <CardHeader className="pb-2">
                    <h4 className="text-lg font-semibold">{item.company}</h4>
                    <p className="text-sm text-gray-500">
                      {item.period} | {item.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-portfolio-secondary font-medium">
                      {item.position}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold my-8 text-portfolio-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Programming Languages
                </h4>
                <p className="text-sm text-gray-600">
                  C, Java, HTML, CSS, JavaScript
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Web Technologies
                </h4>
                <p className="text-sm text-gray-600">
                  HTML, CSS, JavaScript, React
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Database Systems
                </h4>
                <p className="text-sm text-gray-600">MySQL</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Soft Skills
                </h4>
                <p className="text-sm text-gray-600">
                  Teamwork, Adaptability, Focused
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Working Tools
                </h4>
                <p className="text-sm text-gray-600">Visual Studio Code</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-portfolio-primary mb-2">
                  Languages
                </h4>
                <p className="text-sm text-gray-600">Hindi, English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Resume;
