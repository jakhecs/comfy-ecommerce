// domain/.netlify/functions/hello
const items = [
  { id: 1, name: "john" },
  { id: 2, name: "susane" },
];
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
