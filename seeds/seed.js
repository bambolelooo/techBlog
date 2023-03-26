const sequelize = require('../config/connection')
const { User, Post, Comment } = require('../models')
async function seedDatabase() {
    await sequelize.sync({ force: true })
    const postData = [
        {
            title: 'First Post',
            content: 'This is my first post.',
            user_id: 1,
        },
        {
            title: 'Second Post',
            content: 'This is my second post.',
            user_id: 2,
        },
        {
            title: 'Third Post',
            content: 'This is my third post.',
            user_id: 3,
        },
    ]
    const user1 = await User.create({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
    })

    const user2 = await User.create({
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        password: 'password456',
    })

    const user3 = await User.create({
        name: 'Bob Johnson',
        email: 'bobjohnson@example.com',
        password: 'password789',
    })

    console.log('Users created')
    await Post.bulkCreate(postData)
    console.log('Posts created')
    process.exit(0)
}

seedDatabase()
