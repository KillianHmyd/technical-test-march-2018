export default (res, error, statusCode = 400) => {
  res.status(statusCode);
  res.json({ error });
};
