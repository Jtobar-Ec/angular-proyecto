const { Router } = require('express');


const router = Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');




router.get('/api', async (req, res) => {
    try {
        // Busca todos los usuarios
        const users = await User.find();
        // Responde con la lista de usuarios
        res.json(users);
    } catch (error) {
        // Maneja los errores
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({ token });
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("El correo no existe");
    if (user.password !== password) return res.status(401).send('Clave erronea');

    const token = jwt.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({ token });
});

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211z"
        },{
            _id: 2,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211z"
        },{
            _id: 3,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211z"
        },
        // Otros objetos de tareas
    ]);
});

router.get('/private-tasks', verifyToken,async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
      }
   
});

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
});


    
    

module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Failed to authenticate token.');
        }

        req.userId = decoded._id;
        next();
    });
}
