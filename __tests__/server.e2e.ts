import { bootstrap, HttpClient } from '@wix/yoshi-flow-bm/test/serverless';
import { NodeWorkshopScalaApp } from '@wix/ambassador-node-workshop-scala-app/rpc';
import { fetchComments } from '../src/api/comments.api';

const serverlessApp = bootstrap();
serverlessApp.beforeAndAfter();
let client: HttpClient;

test('should fetch comments', async () => {
  client = new HttpClient({ baseURL: serverlessApp.getUrl() });
  const commentsStub =
    serverlessApp.ambassador.createStub(NodeWorkshopScalaApp);
  const mockComment = { author: 'Milda', text: 'Labas' };
  commentsStub
    .CommentsService()
    .fetch.when('b5c2d19e-c7d3-4369-913d-9fc106b49784')
    .resolve([mockComment]);
  const response = await client.request(fetchComments());
  expect(response).toEqual([mockComment]);
});
