//middleware logger - must always include 'next' to call the next function, must be last
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
module.exports = logger;