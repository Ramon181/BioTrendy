const server = require("./src/app.js");
const { conn, User } = require("./src/db.js");
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
    server.listen(port, () => {
        console.log(`%s listening at ${port}`);
    })
}).then(() => {
    createSuperAdmin();
});

const createSuperAdmin = async () => {
    try {
        const existingSuperAdmin = await User.findOne({ where: { isSuperAdmin: true } });
        if (existingSuperAdmin) {
            console.log('Superadmin already exists');
            return;
        }
        const password = '12345';
        const superAdmin = await User.create({
            userName: 'luciano',
            password: password,
            isSuperAdmin: true,
            email: 'lucian@gmail.com',
            name: 'luciano',
            role: 'admin',
        });
        console.log('Superadmin created successfully');
        const tokenPayload = {
            userName: superAdmin.userName
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
        console.log('JWT token:', token);
    } catch (error) {
        console.error('Error creating superadmin:', error);
    }
};