import { ProjectDetails } from "./ProjectDetails";

export interface ToolkitUser {
  firstname: string;
  lastname: string;
  affiliation: string;
  auth_id: string;
  email: string;
  role: Role;
  receivedUser: boolean;
  projectDetails: ProjectDetails;
}

/* More roles to come if we are providing specialized services for each role */
export type Role = "PM" | "STUDENT" | "PROFESSOR";