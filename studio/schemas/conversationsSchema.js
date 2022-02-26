export const conversationsSchema = {
    name: 'conversations',
    type: 'document',
    title: 'Conversations',
    fields: [
        {
            name: 'roomName',
            title: 'Room Name',
            type: 'string',
        },
        {
            name: 'roomId',
            title: 'Room Id',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'isDM',
            title: 'Is this a DM?',
            type: 'boolean'
        },
        {
            name: 'userReference',
            to: [{ type: 'users' }],
            type: 'reference'
        }
    ]
}