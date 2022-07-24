export const GitHubUsers = (data) => data.map(item => ({
    id: item.id,
    name: item.login,
    followersUrl: item.followers_url,
    ownerDetails: {
        profileUrl: item.html_url,
        avatarUrl: item.avatar_url,
    }
}))