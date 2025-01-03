export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Science - BS, Mathematics and Computer Science",
  school: "Augsburg University",
  location: "Minneapolis, Minnesota, United States",
  startDate: "2016",
  endDate: "2020",
  gpa: "3.94",
  honors: [
    { name: "Summa Cum Laude" },
    { name: "National Honors" },
    { name: "Departmental Honors" }
  ],
  activities: [
    { name: "NASA Space Grant Recipient" },
    { name: "Member of Pi Mu Epsilon (National Mathematics Honor Society)" },
    { name: "Vice President of Mathematics Unbounded Club" },
    { name: "Vice President of Association for Computing Machinery (ACM)" },
    { name: "Undergraduate Research Opportunity Program (URGO)" }
  ]
}; 