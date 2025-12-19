export function succesRes(res, message, statusCode = 200) {
    return res.status(statusCode).json({
        statusCode,
        message: 'success',
        data
    })
};