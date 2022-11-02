import IProject from "../../types/project.type";

const projects: IProject[] = [
  {
    imageUrl: '/smashit.png',
    title: 'Smashit',
    description: 'Smashit is project that gets all the available time slots of all Chilean Padel clubs',
    technologiesIcons: [
      "/react.png",
      "/typescript.png",
      "/javascript.png",
      "/next.png",
    ]
  },
  {
    imageUrl: '/wildvoley.png',
    title: 'Wildvoley app',
    description: 'Wildvoley is a project that looks to automatize the attendance and payment process of the volleyball club',
    technologiesIcons: [
      "/react.png",
      "/typescript.png",
      "/apollo.png",
      "/graphql.png",
    ]
  },
];



export { projects };
