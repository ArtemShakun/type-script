export interface ILocalGitHubUser {
    login: string;
    id: number;
    avatar: string;
    name: string;
    company: string | null;
    blog: string | null;
    location: string;
    bio: string;
    twitter: string;
    repos: number;
    followers: number;
    following: number;
    created: string;
}

export interface IGitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string | null;
    blog: string | null;
    location: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

export interface IGitHubError {
    message: string;
    documentation_url: string;
}
