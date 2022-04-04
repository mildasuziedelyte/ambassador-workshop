import { method } from '@wix/yoshi-flow-bm/serverless';
import { NodeWorkshopScalaApp } from '@wix/ambassador-node-workshop-scala-app/rpc';

const CommentsService = NodeWorkshopScalaApp().CommentsService();

export const fetchComments = method(async function () {
  const comments = CommentsService(this.context.aspects);
  const result = await comments.fetch('b5c2d19e-c7d3-4369-913d-9fc106b49784');

  return result;
});
