import { IGitHubUser, ILocalGitHubUser } from 'types';

export const extractLocalUser = (user: IGitHubUser): ILocalGitHubUser => ({
    login: user.login,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    bio: user.bio,
    twitter: user.twitter_username,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at,
});
