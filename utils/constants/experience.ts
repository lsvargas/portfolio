import IExperience from "../../types/experience.type";

const experience: IExperience[] = [
  {
    jobTitle: "Fullstack Software Engineer",
    companyName: "Papinotas",
    jobDuration: "Dec 2018 - March 2021",
    imageUrl: "/papinotas.png",
    technologiesIcons: [
      "/react.png",
      "/rails.png",
      "/javascript.png",
      "/graphql.png",
    ],
    summaryPoints: [
      "Built and helped design the architecture of the Library service. It provided the schools a software to help register and handle books and items of their library.",
      "Built and helped design the architecture of the Enrollment service. It provided the schools a software to handle the students enrollment process in an easy, optimized and intuitive way",
      "Worked developing new features for the Grades application, that handles all the students grades."
    ]
  },
  {
    jobTitle: "CTO / Lead Software Engineer",
    companyName: "Neural Games",
    jobDuration: "Apr 2021 - March 2022",
    imageUrl: "/neuralgames.png",
    technologiesIcons: [
      "/react.png",
      "/rails.png",
      "/javascript.png",
      "/graphql.png",
      "/fastapi.jpeg",
      "/tensorflow.png",
      "/python.png",
      "/docker.png",
    ],
    summaryPoints: [
      "Built full stack application using Docker environment that provides a solution to the end user with machine learning",
      "Built CI and CD pipeline using Github Actions.",
      "Deployed a production Machine Learning Model using Tensorflow and Tensorflow Serving.",
      "Built python service (MVP version) that connects to OBS Studio(Video Broadcaster Software) via UDP connection, receives a live video streaming and predicts (using our machine learning model) a result taking a video segment as an input"
    ]
  },
  {
    jobTitle: "Fullstack Software Engineer",
    companyName: "Saludtech",
    jobDuration: "Jun 2021 - Present",
    imageUrl: "/saludtech.png",
    technologiesIcons: [
      "/rails.png",
      "/javascript.png",
      "/docker.png",
      "/tailwindcss.png",
    ],
    summaryPoints: [
      "Integrated Google Sign-in and Sign-Up to a full stack application built in Ruby on Rails using Stimulus.",
      "Worked on the generation of a responsive pdf from html when creating medical prescriptions",
      "Integrated data schema and views for ordering exams from a particular laboratory"
    ]
  },
  {
    jobTitle: "Front-end Software Engineer",
    companyName: "Kibernum",
    jobDuration: "March 2022 - Present",
    imageUrl: "/kibernum.png",
    technologiesIcons: [
      "/react.png",
      "/typescript.png",
      "/javascript.png",
      "/graphql.png",
    ],
    summaryPoints: [
      "Built Inbound and Outbound front-end module for Daylight Transport using React, Typescript and GraphQL",
    ]
  },

];

export { experience };
