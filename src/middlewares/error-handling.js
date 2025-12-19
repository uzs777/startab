export function errorHandler(err, _req, res, _next) {
    if(!err?.statusCode) {
        console.log('Xato chiqdi', err)
    };
    const statusCode = err?.statuscode || 500;
    const message = err?.message || 'Internal server error';
    return res.status(statusCode).json({
        statusCode,
        message
    });
}