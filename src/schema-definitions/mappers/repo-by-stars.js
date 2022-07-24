export const RepoByStars = (data) => data.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    starsCount: item.stargazers_count,
    ownerDetails: {
        id: item.owner.login,
        profileUrl: item.owner.html_url,
        avatarUrl: item.owner.avatar_url,
    }
}))