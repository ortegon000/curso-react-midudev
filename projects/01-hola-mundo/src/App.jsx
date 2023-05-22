import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

    const users = [
        { username: 'ortegon000', name: 'Eduardo Ortega', isFollowing: true },
        { username: 'midudev', name: 'Miguel Angel Duran', isFollowing: true },
        { username: 'pheralb', name: 'Pablo Heraldo', isFollowing: false },
    ]

    return (
        <div className="tw-followCard-container">
            {
                users.map(user => {

                    const { username, name, isFollowing } = user

                    return (
                        <TwitterFollowCard
                            key={username}
                            username={username}
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </div>
    )
}