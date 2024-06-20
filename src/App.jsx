import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowingCard'

const users = [
    {
        userName: 'MikeOHearn',
        name: "Mike Titan O'Hearn",
        isFollowing: true
    },
    {
        userName: 'anadearmasdaily',
        name: "Ana de Armas Daily",
        isFollowing: false
    },
    {
        userName: 'TheRock',
        name: "Dwayne Johnson",
        isFollowing: false
    },
    {
        userName: 'scars_008',
        name: "Scarlett Johanson",
        isFollowing: true
    },
    {
        userName: 'JLawrenceBrsite',
        name: "Jennifer Lawrence BR | Fã Site",
        isFollowing: true
    },
    {
        userName: 'c_bumstead',
        name: "Chris Bumstead",
        isFollowing: false
    }
]

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={userName}
                            name={name}
                            userName={userName}
                            formatUserName={formatUserName}
                            initialIsFollowing={isFollowing}
                        />
                    )
                )
            }
            {/* <TwitterFollowCard
                initialIsFollowing
                formatUserName={formatUserName}
                userName="MikeOHearn"
                name="Mike Titan O'Hearn" />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="TheRock"
                name="Dwayne Johnson" />
            <TwitterFollowCard
                formatUserName={formatUserName}
                userName="scars_008"
                name="Scarlett Johanson" /> */}
        </section>
    )
}
