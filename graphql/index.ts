export const getUserQuery = `
    query GetUser($email: string!) {
        user(by: {email: $email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
`

export const createUserMutation = `
    mutation CreateUser($input: USerCreateInput!) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedInUrl
                id
            }
        }
    }
`