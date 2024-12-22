"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
// Use the dynamic port provided by Railway, or fallback to 3000 for local development
const port = process.env.PORT || 3000;
const resume = {
    name: "John Doe",
    title: "Software Engineer",
    contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890",
        linkedin: "linkedin.com/in/johndoe"
    },
    summary: "Experienced Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
    experience: [
        {
            company: "Tech Company",
            position: "Senior Software Engineer",
            duration: "Jan 2020 - Present",
            responsibilities: [
                "Lead a team of developers to build scalable web applications.",
                "Collaborate with cross-functional teams to define, design, and ship new features."
            ]
        },
        {
            company: "Another Tech Company",
            position: "Software Engineer",
            duration: "Jun 2015 - Dec 2019",
            responsibilities: [
                "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.",
                "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness."
            ]
        }
    ],
    education: [
        {
            institution: "University of Technology",
            degree: "Bachelor of Science in Computer Science",
            graduationYear: 2015
        }
    ],
    skills: ["JavaScript", "TypeScript", "Node.js", "React", "CSS", "HTML"]
};
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(resume, null, 2));
});
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
