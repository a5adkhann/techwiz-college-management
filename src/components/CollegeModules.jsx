import React from "react";
import "../assets/css/collegeModules.css";

const modules = [
  {
    title: "Admission Management",
    items: [
      "Online Student Registration",
      "Student Course Selection",
      "Merit List Generation",
      "Live Tracking of Admission Status",
      "Online Fees Payment",
    ],
    icon: "📋",
  },
  {
    title: "Student Records Management",
    items: [
      "Attendance Management",
      "Centralized Data Storage",
      "Easy Data Search and Retrieve",
      "Student Performance Record",
      "Easy Communication among Departments",
    ],
    icon: "📑",
  },
  {
    title: "Attendance Management",
    items: [
      "Automatic Attendance Record",
      "Integration with Biometric and RFID device",
      "Laptop and Mobile Application",
      "Easy Report Generation",
      "Automatic email/SMS Notifications",
    ],
    icon: "🗓️",
  },
  {
    title: "Fees Management",
    items: [
      "UPI, Credit/Debit card Payments",
      "Safe Transactions",
      "E-receipt Generation",
      "Notifications for Pending Fees",
      "Fee Structure Allocation",
    ],
    icon: "💰",
  },
  {
    title: "Assessment/Exam Management",
    items: [
      "Enables MCQ/Descriptive type Questions",
      "Online Question Paper creation",
      "Runtime Student Monitoring",
      "Student Outcome Calculation",
      "Verification of Student’s Identity",
    ],
    icon: "📝",
  },
  {
    title: "HRMS",
    items: [
      "Faculty Recruitment",
      "Leave Management",
      "Service Books and Record Management",
      "Salary Calculation",
      "Maintenance of Faculty Profile",
    ],
    icon: "👨‍🏫",
  },
  {
    title: "Payroll Management",
    items: [
      "Leave and Incentive Calculation",
      "Increment Cycle Information",
      "MIS Report Generation",
      "Integration with HRMS",
      "Automated Salary Credit",
    ],
    icon: "💵",
  },
  {
    title: "Library Management",
    items: [
      "Books Tracking and Issuing",
      "Automatic Email/SMS reminder",
      "Maintenance of Vendor Information",
      "Calculation of Late Fees",
      "Book Search using Keywords",
    ],
    icon: "📚",
  },
];

const CollegeModules = () => {
  return (
    <section className="modulesSection">
      <h2 className="sectionTitle" data-aos="fade-up" data-aos-duration="2000">Modules Of College <span>Management System</span></h2>
      <div className="modulesGrid">
        {modules.map((mod, index) => (
          <div className="moduleCard" key={index} data-aos="fade-up" data-aos-duration="2000">
            <div className="moduleIcon">{mod.icon}</div>
            <h3 className="moduleTitle">{mod.title}</h3>
            <ul className="moduleList">
              {mod.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="moduleArrow">➔</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeModules;