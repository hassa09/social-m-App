export default {
    name: 'Post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            //this capture the cation 
            name: 'caption',
            title: 'Caption',
            type:'string'
        },
        {
            //this will capture the video file
            name: 'video',
            title: 'video',
            type: 'file',
            option: {
                hotpsot: true,
            },
        },
        {
            //user information
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        {
            //specific user that posted
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            //the likes recived to each post
            name: 'Likes',
            title: 'Likes',
            type: 'array',
           of: [
               {
                   type: 'reference',
                   to: [{ type: 'user'}],
                }
            ],
        },
        {
             //comments in the video
            name: 'comment',
            title: 'Comment',
             type: 'array',
            of: [{type: 'comment'}],
        },
          {
            name: 'topic',
            title: 'Topic',
            type: 'string',
        },
        
    ]

} 