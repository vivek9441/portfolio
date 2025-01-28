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
  startDate: "September 2016",
  endDate: "May 2020",
  gpa: "3.94",
  honors: [
    { name: "2x NASA Space Grant Recipient" },
    { name: "Elected to Pi Mu Epsilon" },
    { name: "Departmental honors" },
    { name: "Summa Cum Laude" },
    { name: "National Honors in Mathematics" },
  ],
  activities: [
    { name: "President of Mathematics Chapter" },
    { name: "President of Association for Computing Machinery Chapter" },
    { name: "Undergraduate Research Opportunity Program (URGO)" },
  ],
};
