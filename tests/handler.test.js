import { hello } from '../handler';

const event = 'event';
const context = 'context';
const callback = () => {};

test('hello', async () => {
  const response = await hello(event, context, callback);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body)).toEqual({
    message: 'Go Serverless v1.0! Your function executed successfully!',
  });
});