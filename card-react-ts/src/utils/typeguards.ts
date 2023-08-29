 import { IGitHubUser } from "types";

 export const isGithubUser = (user: any): user is IGitHubUser => 'id' in user;