import { useState } from 'react';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';

import { IGitHubError, IGitHubUser, ILocalGitHubUser } from 'types';

import { extractLocalUser } from 'utils/extract-local-user';
import { isGithubUser } from 'utils/typeguards';
import { defaultUser } from 'mock';

const BASE_URL = 'https://api.github.com/users/';

function App() {
    const [user, setUser] = useState<ILocalGitHubUser | null>(defaultUser);
    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = (await res.json()) as IGitHubUser | IGitHubError;
        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    };

    return (
        <Container>
            <Header />
            <Search hasError={!user} onSubmit={fetchUser} />
            {user && <UserCard {...user} />}
        </Container>
    );
}

export default App;
