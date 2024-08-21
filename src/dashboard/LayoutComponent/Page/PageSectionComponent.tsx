import { Box, Button, Card, Cell, Heading, Layout, Page, PageSection, TextButton } from '@wix/design-system'
import React from 'react'

const PageSectionComponent = () => {
  return (
    <Box direction='vertical' gap={6} >
        <Heading size='small'>Structure</Heading>

        <PageSection
            title="Section title"
            actionsBar={
                <Box width="300px" border="1px dotted" align='center'>
                    Actions bar
                </Box>
            }
        />;

        <Heading size='small'>Subtitle</Heading>

        <PageSection
            title="Marketing tools"
            subtitle="Check out just a few of the marketing apps you can use to grow your business"
        />;

        <Heading size='small'>Divider</Heading>

        <PageSection title="Automations" showDivider />;

        <Heading size='small'>Text Overflow</Heading>

        <PageSection
            title="Track your workflows on simple boards"
            subtitle="Manage any work process from start to finish. Track leads, contacts & orders on a simple board."
            actionsBar={<TextButton>Go to Workflows</TextButton>}
        />;

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Content grouping</Heading>

        <Page>
        <Page.Header
            title="Marketing Integrations"
            subtitle="Use these tools to make your marketing more effective."
            actionsBar={<Button skin="premium">Upgrade</Button>}
        ></Page.Header>
        <Page.Content>
            <Layout>
            <Cell>
                <Layout>
                    <Cell span={6}>
                        <Card>
                        <Box height="120px" />
                        </Card>
                    </Cell>
                    <Cell span={6}>
                        <Card>
                        <Box height="120px" />
                        </Card>
                    </Cell>
                    <Cell span={6}>
                        <Card>
                        <Box height="120px" />
                        </Card>
                    </Cell>
                    <Cell span={6}>
                        <Card>
                        <Box height="120px" />
                        </Card>
                    </Cell>
                </Layout>
            </Cell>
            <Cell>
                <Layout>
                <Cell>
                    <Page.Section
                        title="Marketing tools from the App Market"
                        subtitle="Check out just a few of the marketing apps you can use to grow your business"
                        showDivider
                        actionsBar={<TextButton>Manage Your Apps</TextButton>}
                    />
                </Cell>
                <Cell span={3}>
                    <Card>
                    <Box height="160px" />
                    </Card>
                </Cell>
                <Cell span={3}>
                    <Card>
                    <Box height="160px" />
                    </Card>
                </Cell>
                <Cell span={3}>
                    <Card>
                    <Box height="160px" />
                    </Card>
                </Cell>
                <Cell span={3}>
                    <Card>
                    <Box height="160px" />
                    </Card>
                </Cell>
                </Layout>
            </Cell>
            </Layout>
        </Page.Content>
        </Page>;
    </Box>
  )
}

export default PageSectionComponent
