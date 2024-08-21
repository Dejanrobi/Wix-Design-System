import { AddItem, Box, Button, Card, Cell, Checkbox, Collapse, DatePicker, Dropdown, FormField, Heading, IconButton, InfoIcon, Layout, Page, Text, TextButton, TimeInput, ToggleSwitch } from '@wix/design-system'
import React, { useState } from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const CardHeaderComponent = () => {

    // suffix
    const [toggleChecked, setToggleChecked] = useState(true);

    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(1);
    const [checked, setChecked] = React.useState(false);
  
    const timezoneOptions = [
      { id: 1, value: '(GMT +02:00) Vilnius' },
      { id: 2, value: '(GMT +01:00) Warsaw' },
      { id: 3, value: '(GMT +00:00) London' },
    ];
  
    const infoIconText =
      'Not sure when your event is taking place? Show the time as To Be Determined (TBD).';
  
    const ActionArea = () => {
      return (
        <Box align="center" verticalAlign="middle" gap={1}>
          <Text size="small">Time is TBD</Text>
          <InfoIcon content={infoIconText} />
          <ToggleSwitch checked={!open} onChange={() => setOpen(!open)} />
        </Box>
      );
    };
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <Card>
            <Card.Header
                title="Title"
                subtitle="Subtitle"
                suffix={
                    <Box border="1px dotted" >
                        Suffix
                    </Box>
                }
            />
        </Card>

        <Heading size='small' >Title and Subtitle</Heading>

        

        <Card>
            <Card.Header title="Title" subtitle="Subtitle" />
        </Card>;

        <Heading size='small' >Suffix</Heading>

        <Box direction='vertical' gap="SP4" > 
        <Card>
        <Card.Header
          title="Title"
          suffix={
            <Button size="small" priority="secondary">
              Suffix
            </Button>
          }
        />
      </Card>
      <Card>
        <Card.Header
          title="Title"
          suffix={
            <TextButton size="small" priority="secondary">
              Suffix
            </TextButton>
          }
        />
      </Card>
      <Card>
        <Card.Header
          title="Title"
          suffix={
            <IconButton size="small" priority="secondary">
              <Icons.MoreSmall />
            </IconButton>
          }
        />
      </Card>
      <Card>
        <Card.Header
          title="Title"
          suffix={
            <ToggleSwitch
              checked={toggleChecked}
              onChange={() => setToggleChecked(!toggleChecked)}
              size="medium"
            />
          }
        />
      </Card>

        </Box>
        
        <Heading size='medium' >Accessibility Considerations</Heading>
        <Heading size='small' >Controlling heading hierarchy</Heading>

        <Page>
        <Page.Header title="Page title as H1" />
        <Page.Content>
            <Layout>
            <Cell span={8}>
                <Card stretchVertically={false}>
                <Card.Header
                    title={
                    <Heading size="medium" as="h2">
                        Card title as H2
                    </Heading>
                    }
                />
                <Card.Divider />
                <Card.Content>
                   <Box height="120px" border="1px dotted"></Box>
                </Card.Content>
                </Card>
            </Cell>
            <Cell span={4}>
                <Card stretchVertically={true}>
                <Card.Header
                    title={
                    <Heading size="medium" as="h2">
                        Card title as H2
                    </Heading>
                    }
                />
                <Card.Divider />
                <Card.Content>
                    <Box height="120px" border="1px dotted"></Box>
                </Card.Content>
                </Card>
            </Cell>
            </Layout>
        </Page.Content>
        </Page>;
        

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Collapsible Cards</Heading>
        
        <Card>
      <Card.Header title="Date and time" suffix={<ActionArea />} />
      <Collapse open={open}>
        <Card.Divider />
        <Card.Content>
          <Layout alignItems="end">
            <Cell>
              <Layout alignItems="end">
                <Cell span={5}>
                  <FormField label="Date">
                    <DatePicker value={new Date()} width="100%" />
                  </FormField>
                </Cell>
                <Cell span={3}>
                  <FormField label="Time">
                    <TimeInput width="auto" />
                  </FormField>
                </Cell>
                <Cell span={4}>
                  <Box height="36px">
                    <AddItem size="tiny">Add End Time</AddItem>
                  </Box>
                </Cell>
              </Layout>
            </Cell>
            <Cell>
              <Layout alignItems="end">
                <Cell span={5}>
                  <FormField label="Timezone">
                    <Dropdown
                      selectedId={selected}
                      placeholder="Select a timezone"
                      options={timezoneOptions}
                      onSelect={(option) => setSelected(option.id)}
                    />
                  </FormField>
                </Cell>
                <Cell span={4}>
                  <Box gap={1} height="36px" verticalAlign="middle">
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    >
                      Display timezone
                    </Checkbox>
                    <InfoIcon content="Timezone will be shown next to the event time." />
                  </Box>
                </Cell>
              </Layout>
            </Cell>
            <Cell>
              <Text size="small">
                To change the date and time format for all events, go to
                <a>Regional Settings</a>.
              </Text>
            </Cell>
          </Layout>
        </Card.Content>
      </Collapse>
    </Card>

        <Heading size='small' >Subtitle Links</Heading>

        <Card>
            <Card.Header
                title="FAQ buttons"
                subtitle={
                <Box direction="horizontal" gap="1">
                    <Text secondary>
                    Add questions and answers that show in the chatbox on your site.
                    </Text>
                    <TextButton underline="always">Learn more</TextButton>
                </Box>
                }
            />
            <Card.Divider />
            <Card.Content>
                <Box height={180} />
            </Card.Content>
        </Card>;

    </Box>
  )
}

export default CardHeaderComponent