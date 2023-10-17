import { projectsData } from "./lib/data";

// Because the data is as const we need to give the the typeof the imported dated with an index of number for any number, then we set it as props and destructure the data given
export type ProjectProps = (typeof projectsData)[number];
