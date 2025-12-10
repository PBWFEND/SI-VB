const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Ambil header Authorization
    const authHeader = req.headers['authorization']; // biasanya "Bearer <token>"
    if (!authHeader) return res.status(401).json({ message: 'Unauthenticated.' });

    // Ambil token setelah "Bearer "
    const token = authHeader.split(' ')[1]; 
    if (!token) return res.status(401).json({ message: 'Unauthenticated.' });

    // Verifikasi token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
