const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//     process.on('SIGTERM', () => {
//         app.close(() => {
//             console.log(`Server terminated.`)
//         })
//     })
// });

// const server = app.listen(3000, () => console.log('Server ready at http://localhost:3000'))
// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('Process terminated')
//   })
// })

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// process.kill(process.pid, 'SIGTERM')
module.exports = { app, server };