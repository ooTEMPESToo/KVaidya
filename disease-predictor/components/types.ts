// components/types.ts
export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  degree: string;
  location: string;
  image: string;
  contactEmail: string;
  availability: string;
  fee: number;
};

export type UserQuery = {
  id: string;
  doctorName: string;
  userEmail: string;
  userName: string;
  message: string;
  timestamp: string;
  status: 'Sent' | 'Delivered' | 'Read' | 'Doctor Replied (Simulated)' | 'Error'; // Example statuses
  doctorReply?: string; // Optional field for simulated reply
};


export const initialDoctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    degree: "MD - Cardiology & Interventional Cardiology",
    location: "Atlanta, GA",
    image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360&h=360&fit=crop&crop=top",
    contactEmail: "itswaytonik200@gmail.com",
    availability: "Mon, Wed, Fri (9 AM - 5 PM)",
    fee: 50,
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Hematology",
    degree: "MD - Hematology & Medical Oncology",
    location: "Savannah, GA",
    image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=360&h=360&fit=crop&crop=top",
    contactEmail: "michael.c.contact@ourplatform.com",
    availability: "Tue, Thu (10 AM - 6 PM)",
    fee: 65,
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pulmonology",
    degree: "MD - Pulmonary Disease & Critical Care",
    location: "Augusta, GA",
    image: "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-laptop-computer-medical-office_1301-7807.jpg?w=360&h=360&fit=crop&crop=top",
    contactEmail: "emily.r.contact@ourplatform.com",
    availability: "Mon - Thu (8 AM - 4 PM)",
    fee: 55,
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    degree: "MD - Cardiovascular Disease & Internal Medicine",
    location: "Macon, GA",
    image: "https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-male-nurse-blue-scrubs-show-thumbs-up-recommend-clinic-service-guarantee-quality-assurance_1258-57360.jpg?w=360&h=360&fit=crop&crop=top",
    contactEmail: "james.w.contact@ourplatform.com",
    availability: "By Appointment Only",
    fee: 70,
  },
  {
    id: "5",
    name: "Dr. Linda Miller",
    specialty: "Pediatrics",
    degree: "MD - General Pediatrics",
    location: "Columbus, GA",
    image: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-standing-with-crossed-arms-isolated-pink-wall_141793-10065.jpg?w=360&h=360&fit=crop&crop=top",
    contactEmail: "linda.m.contact@ourplatform.com",
    availability: "Mon - Fri (9 AM - 3 PM)",
    fee: 45,
  }
];