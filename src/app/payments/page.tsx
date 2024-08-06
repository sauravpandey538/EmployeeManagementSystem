// import { Payment, columns } from "../../components/homepage/columns"
// import { DataTable } from "../../components/homepage/data-table"

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             "id": "E001",
//             "name": { "name": "John Doe", "facultyType": "The Coding Team" },
//             "holiday": ["Sunday"],
//             "contact": {
//                 "phoneNumber": "1234567890",
//                 "email": "john.doe@example.com"
//             },
//             "info": "A skilled developer with a passion for technology.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E002",
//             "name": { "name": "Jane Smith", "facultyType": "Innovative Solutions" },
//             "holiday": ["Monday"],
//             "contact": {
//                 "phoneNumber": "2345678901",
//                 "email": "jane.smith@example.com"
//             },
//             "info": "Expert in backend development with years of experience.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E003",
//             "name": { "name": "Emily Johnson", "facultyType": "Tech Innovators" },
//             "holiday": ["Tuesday"],
//             "contact": {
//                 "phoneNumber": "3456789012",
//                 "email": "emily.johnson@example.com"
//             },
//             "info": "Creative UI/UX designer with a flair for modern design.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E004",
//             "name": { "name": "Michael Brown", "facultyType": "Digital Pioneers" },
//             "holiday": ["Wednesday"],
//             "contact": {
//                 "phoneNumber": "4567890123",
//                 "email": "michael.brown@example.com"
//             },
//             "info": "Project manager with strong leadership skills.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E005",
//             "name": { "name": "Sarah Davis", "facultyType": "Future Tech" },
//             "holiday": ["Thursday"],
//             "contact": {
//                 "phoneNumber": "5678901234",
//                 "email": "sarah.davis@example.com"
//             },
//             "info": "Full-stack developer with expertise in multiple technologies.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E006",
//             "name": { "name": "David Wilson", "facultyType": "Tech Experts" },
//             "holiday": ["Friday"],
//             "contact": {
//                 "phoneNumber": "6789012345",
//                 "email": "david.wilson@example.com"
//             },
//             "info": "Data scientist with a background in machine learning.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E007",
//             "name": { "name": "Laura Miller", "facultyType": "Digital Innovators" },
//             "holiday": ["Saturday"],
//             "contact": {
//                 "phoneNumber": "7890123456",
//                 "email": "laura.miller@example.com"
//             },
//             "info": "Marketing specialist with a focus on digital strategies.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E008",
//             "name": { "name": "Chris Anderson", "facultyType": "Tech Leaders" },
//             "holiday": ["Sunday", "Monday"],
//             "contact": {
//                 "phoneNumber": "8901234567",
//                 "email": "chris.anderson@example.com"
//             },
//             "info": "Cybersecurity analyst with expertise in threat detection.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E009",
//             "name": { "name": "Olivia Thomas", "facultyType": "Tech Gurus" },
//             "holiday": ["Tuesday", "Wednesday"],
//             "contact": {
//                 "phoneNumber": "9012345678",
//                 "email": "olivia.thomas@example.com"
//             },
//             "info": "Cloud computing specialist with a strong technical background.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E010",
//             "name": { "name": "James Taylor", "facultyType": "Future Innovators" },
//             "holiday": ["Thursday", "Friday"],
//             "contact": {
//                 "phoneNumber": "0123456789",
//                 "email": "james.taylor@example.com"
//             },
//             "info": "AI researcher with a focus on natural language processing.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E011",
//             "name": { "name": "Sophia Martinez", "facultyType": "Tech Visionaries" },
//             "holiday": ["Saturday"],
//             "contact": {
//                 "phoneNumber": "1234567891",
//                 "email": "sophia.martinez@example.com"
//             },
//             "info": "Software engineer with experience in scalable systems.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E012",
//             "name": { "name": "Daniel Harris", "facultyType": "Innovation Leaders" },
//             "holiday": ["Sunday", "Monday"],
//             "contact": {
//                 "phoneNumber": "2345678902",
//                 "email": "daniel.harris@example.com"
//             },
//             "info": "UX researcher with a passion for user-centric design.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E013",
//             "name": { "name": "Ava Clark", "facultyType": "Tech Mavericks" },
//             "holiday": ["Tuesday", "Wednesday"],
//             "contact": {
//                 "phoneNumber": "3456789013",
//                 "email": "ava.clark@example.com"
//             },
//             "info": "Front-end developer with a focus on responsive design.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E014",
//             "name": { "name": "Ethan Lewis", "facultyType": "Digital Masters" },
//             "holiday": ["Thursday"],
//             "contact": {
//                 "phoneNumber": "4567890124",
//                 "email": "ethan.lewis@example.com"
//             },
//             "info": "Database administrator with a knack for optimization.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E015",
//             "name": { "name": "Mia Walker", "facultyType": "Tech Innovators" },
//             "holiday": ["Friday"],
//             "contact": {
//                 "phoneNumber": "5678901235",
//                 "email": "mia.walker@example.com"
//             },
//             "info": "Network engineer with experience in large-scale infrastructures.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E016",
//             "name": { "name": "Liam Hall", "facultyType": "Future Leaders" },
//             "holiday": ["Saturday"],
//             "contact": {
//                 "phoneNumber": "6789012346",
//                 "email": "liam.hall@example.com"
//             },
//             "info": "Systems analyst with a focus on enterprise solutions.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E017",
//             "name": { "name": "Isabella Young", "facultyType": "Tech Experts" },
//             "holiday": ["Sunday", "Monday"],
//             "contact": {
//                 "phoneNumber": "7890123457",
//                 "email": "isabella.young@example.com"
//             },
//             "info": "DevOps engineer with experience in continuous integration.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E018",
//             "name": { "name": "Jacob Allen", "facultyType": "Digital Gurus" },
//             "holiday": ["Tuesday", "Wednesday"],
//             "contact": {
//                 "phoneNumber": "8901234568",
//                 "email": "jacob.allen@example.com"
//             },
//             "info": "Technical writer with a focus on software documentation.",
//             "status": "PART-TIME"
//         },
//         {
//             "id": "E019",
//             "name": { "name": "Charlotte Scott", "facultyType": "Tech Visionaries" },
//             "holiday": ["Thursday"],
//             "contact": {
//                 "phoneNumber": "9012345679",
//                 "email": "charlotte.scott@example.com"
//             },
//             "info": "AI developer with a passion for machine learning.",
//             "status": "FULL-TIME"
//         },
//         {
//             "id": "E020",
//             "name": { "name": "William Wright", "facultyType": "Innovation Masters" },
//             "holiday": ["Friday", "Saturday"],
//             "contact": {
//                 "phoneNumber": "0123456780",
//                 "email": "william.wright@example.com"
//             },
//             "info": "Security consultant with expertise in threat mitigation.",
//             "status": "PART-TIME"
//         }
//     ]
// }

// export default async function DemoPage() {
//     const data = await getData()

//     return (
//         <div className="container mx-auto py-10">
//             <DataTable columns={columns} data={data} />
//         </div>
//     )
// }
