import { AddressInput, Box, Card, Cell, Divider, FormField, Heading, Input, InputArea, Layout, Page, Text, TextButton } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const HeadingComponent = () => {

  // children
  const renderHeadingWithDifferentColor = () => (
    <Box marginLeft="SP1" color="D40" inline>
      5
    </Box>
  );

  // content hierarchy
  const [address, setAddress] = React.useState('');

  const renderProfile = () => {
    return (
      <Cell>
        <Layout>
          <Cell>
            <Page.Section title="Main info" showDivider />
          </Cell>
          <Cell span={12}>
            <Card>
              <Card.Header title={<Heading size="medium">Profile</Heading>} />
              <Card.Divider />
              <Card.Content>
                <Layout>
                  <Cell span={8}>
                    <FormField label="Business name">
                      <Input placeholder="" />
                    </FormField>
                  </Cell>
                  <Cell span={8}>
                    <FormField label="Description">
                      <InputArea
                        placeholder="Use short, catchy text to tell people what your business offers."
                        minHeight={120}
                      />
                    </FormField>
                  </Cell>
                </Layout>
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Cell>
    );
  };
  const renderLocationAndAddress = () => (
    <>
      <Cell span={12}>
        <Heading size="tiny">Location</Heading>
        <Text size="small" secondary>
          Let customers know where your business is based. You can add one or
          multiple locations.
        </Text>
      </Cell>
      <Cell span={8}>
        <FormField label="Address">
          <AddressInput
            value={address}
            border="standard"
            onChange={(event) => setAddress(event.target.value)}
            onClear={() => setAddress('')}
          />
        </FormField>
      </Cell>
    </>
  );

  const renderContactInfo = () => (
    <>
      <Cell span={12}>
        <Heading size="tiny">Contact info</Heading>
        <Text size="small" secondary>
          Add your business details so people can get in touch easily.
        </Text>
      </Cell>
      <Cell span={4}>
        <FormField label="Email">
          <Input placeholder="" />
        </FormField>
      </Cell>
      <Cell span={4}>
        <FormField label="Phone">
          <Input placeholder="" />
        </FormField>
      </Cell>
    </>
  );

  const renderBusinessHours = () => (
    <>
      <Cell span={12}>
        <Heading size="tiny">Business hours</Heading>
        <Text size="small" secondary>
          Tell customers when your business is open.
        </Text>
      </Cell>
      <Cell span={8}>
        <Box
          padding="SP3 SP4"
          border="1px solid #c1e4fe"
          borderRadius="6px"
          verticalAlign="middle"
          align="space-between"
        >
          <Box direction="vertical" gap="3px">
            <Text size="small" weight="bold">
              Everyday
            </Text>
            <Text size="small" secondary>
              6:00AM - 8:00PM
            </Text>
          </Box>
          <Box>
            <TextButton size="small" prefixIcon={<Icons.EditSmall />}>
              Edit
            </TextButton>
          </Box>
        </Box>
      </Cell>
    </>
  );

  const renderLocationAndContactInfo = () => {
    return (
      <Cell>
        <Layout>
          <Cell>
            <Page.Section
              title="Location and contact info"
              showDivider
              actionsBar={
                <TextButton prefixIcon={<Icons.Add />}>Add Location</TextButton>
              }
            />
          </Cell>
          <Cell span={12}>
            <Card>
              <Card.Header
                title={<Heading size="medium">Default info</Heading>}
              />
              <Card.Divider />
              <Card.Content>
                <Layout>
                  {renderLocationAndAddress()}
                  <Cell span={12}>
                    <Divider />
                  </Cell>
                  {renderContactInfo()}
                  <Cell span={12}>
                    <Divider />
                  </Cell>
                  {renderBusinessHours()}{' '}
                </Layout>
              </Card.Content>
            </Card>
          </Cell>
        </Layout>
      </Cell>
    );
  };

  return (
   <Box direction='vertical' gap="SP6" width="100%" >
      <Heading size='small' >Size</Heading>

      <Box direction='vertical' gap="SP4" >
        <Heading size="extraLarge">XL - Page Title (e.g., Contact List)</Heading>
        <Heading size="large">L - Modal title (e.g., Create a new contact)</Heading>
        <Heading size="medium">M - Card title (e.g., Subscribers)</Heading>
        <Heading size="small">S - Page section title (e.g., Contact info)</Heading>
        <Heading size="tiny">T - Card section title (e.g., Notes)</Heading>
        <Heading size="extraTiny">XT - Caption (e.g., Last activity)</Heading>
      </Box>

      <Heading size='small' >Light</Heading>

      <Box direction='vertical' gap="SP4" padding="20px" backgroundColor='D10' width="100%" >
          <Heading size="extraLarge" light>
            XL - Page Title (e.g., Contact List)
          </Heading>
          <Heading size="large" light>
            L - Modal title (e.g., Create a new contact)
          </Heading>
          <Heading size="medium" light>
            M - Card title (e.g., Subscribers)
          </Heading>
          <Heading size="small" light>
            S - Page section title (e.g., Contact info)
          </Heading>
          <Heading size="tiny" light>
            T - Card section title (e.g., Notes)
          </Heading>
          <Heading size="extraTiny" light>
            XT - Caption (e.g., Last activity)
          </Heading>
      </Box>

      <Heading size='small' >Ellipsis</Heading>

      <Heading ellipsis>A sentence is a combination of words put together to convey an idea, a fact, a question, a thought, a request or a command. Does that mean that you can assemble words in any order?</Heading>

      <Heading size='small' >Children</Heading>

      <Heading>
        Contact List
        {renderHeadingWithDifferentColor()}
      </Heading>

      <Heading size='small' >Custom HTML Tag</Heading>

      <Heading size="medium" as="h1">
        Medium size heading that appears as the main page header h1
      </Heading>

      <Heading size='medium' >Accessibility Considerations</Heading>
      <Heading size='small' >Heading Structure</Heading>

      <Page>
        <Page.Header title="H1" />

        <Page.Content>
          <Layout>
            <Cell span={8} >
              <Card stretchVertically={false} >
                <Card.Header
                  title={
                    <Heading size='medium' as='h2' >
                      Card title rendered as H2
                    </Heading>
                  }
                />

                <Card.Divider/>

                <Card.Content>
                  <Box height="120px" direction='vertical' gap="12px">
                    <Heading size='tiny' as="h3" >
                      Card section title rendered as H3
                    </Heading>

                    <Box align='center' border="1px dotted" >
                      <Heading size='tiny' as="h3" >
                        H3
                      </Heading>
                    </Box>

                  </Box>
                </Card.Content>
              </Card>
            </Cell>

            <Cell span={4} >
              <Card stretchVertically={true} >
                  <Card.Header
                    title={
                      <Heading size='medium' as='h2' >
                        H2
                      </Heading>
                    }
                  />

                  <Card.Divider/>
                  <Card.Content>
                    <Box border="1px dotted" height="120px" />
                  </Card.Content>
              </Card>

            </Cell>
          </Layout>
        </Page.Content>
      </Page>

      <Heading size='medium' >Common use cases</Heading>
      <Heading size='small' >Content hierarchy</Heading>

      <Page>
      <Page.Header title="Business Info"></Page.Header>
      <Page.Content>
        <Layout>
          {renderProfile()}
          {renderLocationAndContactInfo()}
        </Layout>
      </Page.Content>
    </Page>

   </Box>
  )
}

export default HeadingComponent
