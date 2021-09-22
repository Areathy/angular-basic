type ProjectObjectType = {
    projectID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: string | number;
    active: boolean;
    status: string;
    clientLocationID: number;
    clientLocation: { clientLocationID: number; clientLocationName: string };
  };
  
  type SearchByType = "projectName" | "projectID" | "dateOfStart" | "teamSize" | "countryName";

  export{SearchByType, ProjectObjectType}