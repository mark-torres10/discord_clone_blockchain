export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'walletAddress',
            title: 'Wallet Address',
            type: 'string'
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'string'
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'string'
        }
    ]
}