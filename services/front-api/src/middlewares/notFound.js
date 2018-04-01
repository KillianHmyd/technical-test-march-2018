import sendError from 'helpers/sendError';

const notFoundMiddleware = (req, res) => sendError(res, 'Not Found', 404);

export default notFoundMiddleware;
