const methodHandler = (method, { req, res }) => {
  switch (method) {
    case 'GET':
      getHandler({ req, res });
    case 'POST':
      postHandler({ req, res });
    case 'PUT':
      putHandler({ req, res });
    case 'DELETE':
      deleteHandler({ req, res });
    default:
      unknownHandler({ req, res });
  }
}