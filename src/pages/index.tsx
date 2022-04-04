import React, { FC } from 'react';
import { useAppLoaded, useRequest } from '@wix/yoshi-flow-bm';
import { Page, Layout, Cell, Card, Text, Heading } from 'wix-style-react';
import { fetchComments } from '../api/comments.api';

const Index: FC = () => {
  useAppLoaded({ auto: true });

  const { data } = useRequest(fetchComments());
  console.log('data', data);

  return (
    <Page>
      <Page.Header title="Comments" />
      <Page.Content>
        <Layout>
          <Cell>
            <Card>
              <Card.Content>
                {data ? (
                  data?.map((comment, index) => {
                    return (
                      <Cell>
                        <Heading key={index} appearance="H6">
                          {comment?.author}
                        </Heading>
                        <Text weight="thin" size="medium">
                          {comment?.text}
                        </Text>
                      </Cell>
                    );
                  })
                ) : (
                  <div>oi</div>
                )}
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Page.Content>
    </Page>
  );
};

export default Index;
