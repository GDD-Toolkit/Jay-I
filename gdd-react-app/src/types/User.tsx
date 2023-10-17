export interface ToolkitUser {
    firstname: string;
    lastname: string;
    region: string;
    affiliation: string;
    auth_id: string;
    email: string;
    type: Role;
  }
  
  /* More roles to come if we are providing specialized services for each role */
  export type Role = 'ADMIN' | 'USER';