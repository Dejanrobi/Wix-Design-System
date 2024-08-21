import { AddItem, Badge, Box, Button, Card, Cell, CloseButton, Collapse, Dropdown, EmptyState, FormField, Heading, Image, Input, InputArea, Layout, MarketingLayout, RadioGroup, SectionHeader, Text, TextButton, ToggleSwitch } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const CardComponent = () => {

    const options = [
        { id: 0, value: 'Online Store' },
        { id: 1, value: 'Other' },
      ];

    // collapsible cards
    const [open, setOpen] = React.useState(true);
    const [radio, setRadio] = React.useState(1);

    // custom cards

    const CustomCard = ({ title, suggested = false }:any) => {
        const [hovered, setHovered] = React.useState(false);
        return (
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Card showShadow={hovered}>
              <Layout gap={0}>
                <Cell span={12}>
                  <Box height="18px" marginTop={2} marginLeft={-1}>
                    {suggested && (
                      <Badge size="small" skin="standard">
                        SUGGESTED FOR YOU
                      </Badge>
                    )}
                  </Box>
                </Cell>
                <Cell>
                  <Box height="72px" padding="12px 24px 0 24px">
                    <Heading size="small">{title}</Heading>
                  </Box>
                </Cell>
                <Cell>
                  <Box padding="24px">
                    <Button priority="secondary" size="small">
                      Set Up Automation
                    </Button>
                  </Box>
                </Cell>
              </Layout>
            </Card>
          </div>
        );
      };
  return (
    <Box direction='vertical' gap="SP4">
        <Heading size='small' >Structure</Heading>

        <Card>
            <Card.Header title="Card header"></Card.Header>
            <SectionHeader title="Section header" />
            <Card.Content>
                <Box height="120px" border="1px dotted" >

                </Box>
            </Card.Content>
        </Card>;

        <Heading size='small' >Header</Heading>

        <Card>
            <Card.Header
                title="Title"
                subtitle="Subtitle"
                suffix={<TextButton>Suffix</TextButton>}
            ></Card.Header>
            <Card.Divider />
            <Card.Content>
                <Box height="120px" />
            </Card.Content>
        </Card>;

        <Heading size='small' >Section Header</Heading>

        <Card>
            <Card.Header title="Title" />
            <SectionHeader
                title="Section header title"
                suffix={<TextButton size="small">Suffix</TextButton>}
            ></SectionHeader>
            <Card.Content>
                <Box height="120px" />
            </Card.Content>
        </Card>;

        <Heading size='small' >Content</Heading>

        <Card>
            <Card.Header title="Title" />
            <Card.Divider />
            <Card.Content>
                <Box border="1px dotted" align='center' height="120px" >
                    Content
                </Box>
            </Card.Content>
        </Card>;

        <Heading size='small' >Divider</Heading>

        <Box direction='vertical' gap="SP4" >

            <Card>
                <Card.Header title="Title" />
                <Card.Divider />
                <Card.Content>
                <Box height="120px" />
                </Card.Content>
            </Card>
            <Card>
                <Card.Header title="Title" />
                <Card.Divider />
                <Card.Content>
                <Layout>
                    <Cell span={12}>
                    <Box height="120px" />
                    </Cell>
                    <Cell span={12}>
                    <Card.Divider />
                    </Cell>
                    <Cell span={12}>
                    <Box height="120px" />
                    </Cell>
                </Layout>
                </Card.Content>
            </Card>

        </Box>

        <Heading size='small' >Controls</Heading>

        <Card controls={<CloseButton size="large" skin="dark" />}>
            <Card.Header title="Title" />
            <Card.Divider />
            <Card.Content>
                <Box height="120px" />
            </Card.Content>
        </Card>;

        <Heading size='small' >Hide Overflow</Heading>

        <Layout>
            <Cell>
                <Box height="300px" direction='vertical'>
                <Card hideOverflow={true}>
                    <Card.Header title="Hidden overflow" />
                    <Card.Divider />
                    <Card.Content>
                    <Box height="500px" border="1px dotted"></Box>
                    </Card.Content>
                </Card>

                </Box>
                
               
            </Cell>
        </Layout>;

        <Heading size='small' >Stretch Vertically</Heading>

        <Layout cols={12}>
        <Cell span={12}>
            <Text secondary weight="normal">
            Default
            </Text>
        </Cell>
        <Cell span={12}>
            <Layout cols={12}>
            <Cell span={4}>
                <Card>
                <Card.Content>
                    <Box border="1px dotted"  height="180px"></Box>
                    
                </Card.Content>
                </Card>
            </Cell>
            <Cell span={4}>
                <Card>
                <Card.Content>
                <Box border="1px dotted"  height="120px"></Box>
                </Card.Content>
                </Card>
            </Cell>
            <Cell span={4}>
                <Card>
                <Card.Content>
                <Box border="1px dotted"  height="60px"></Box>
                </Card.Content>
                </Card>
            </Cell>
            </Layout>
        </Cell>
        <Cell span={12}>
            <Text secondary weight="normal">
            With stretchVertically
            </Text>
        </Cell>
        <Cell span={12}>
            <Layout cols={12}>
            <Cell span={4}>
                <Card stretchVertically>
                <Card.Content>
                <Box border="1px dotted"  height="180px"></Box>
                </Card.Content>
                </Card>
            </Cell>
            <Cell span={4}>
                <Card stretchVertically>
                <Card.Content>
                <Box border="1px dotted"  height="120px"></Box>
                </Card.Content>
                </Card>
            </Cell>
            <Cell span={4}>
                <Card stretchVertically>
                <Card.Content>
                <Box border="1px dotted"  height="60px"></Box>
                </Card.Content>
                </Card>
            </Cell>
            </Layout>
        </Cell>
        </Layout>;

        <Heading size='small' >Show Shadow</Heading>

        <Card showShadow>
            <Card.Content>
                <Box height="180px" />
            </Card.Content>
        </Card>;

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Form Layouts</Heading>

        <Card>
      <Card.Header
        title="Profile"
        subtitle="Your profile shows on search results, invoices, chat and more."
      />
      <Card.Divider />
      <Card.Content>
        <Box direction="vertical" gap="4">
          <Layout>
            <Cell span={6}>
              <FormField labelSize="small" label="Business name">
                <Input placeholder="" />
              </FormField>
            </Cell>
            <Cell span={6}>
              <FormField
                labelSize="small"
                label="Which category best matches your business?"
              >
                <Dropdown
                  size="medium"
                  placeholder="Category"
                  options={options}
                  selectedId={0}
                />
              </FormField>
            </Cell>
          </Layout>
          <Layout>
            <Cell span={6}>
              <Box direction="horizontal" gap="3" verticalAlign="middle">
                <FormField labelSize="small" label="Logo">
                  <AddItem theme="image" tooltipContent="Add Logo">
                    Add Item
                  </AddItem>
                </FormField>
                <Box direction="vertical" gap="1">
                  <Text size="small" secondary>
                    For best results, upload a high resolution image.
                  </Text>
                  <TextButton size="small">Add Logo</TextButton>
                </Box>
              </Box>
            </Cell>
            <Cell span={6}>
              <FormField labelSize="small" label="Short description">
                <InputArea
                  placeholder="Add more details about your business."
                  rows={3}
                  hasCounter
                  resizable
                />
              </FormField>
            </Cell>
          </Layout>
        </Box>
      </Card.Content>
    </Card>

        <Heading size='small' >Collapsible Cards</Heading>

        <Card>
      <Card.Header
        title="Set post limits"
        subtitle="You can limit the number of posts members can create in their first week."
        suffix={
          <ToggleSwitch
            onChange={() => setOpen(!open)}
            size="medium"
            checked={open}
          />
        }
      />
      <Collapse open={open}>
        <Card.Divider />
        <Card.Content>
          <RadioGroup value={radio} onChange={setRadio}>
            <RadioGroup.Radio value={1}>20</RadioGroup.Radio>
            <RadioGroup.Radio value={2}>15</RadioGroup.Radio>
            <RadioGroup.Radio value={3}>10</RadioGroup.Radio>
          </RadioGroup>
        </Card.Content>
      </Collapse>
    </Card>

        <Heading size='small' >Widgets</Heading>

        <Layout>
        <Cell span={4}>
            <CustomCard
            suggested
            title="Email customers when a product is back in stock "
            />
        </Cell>
        <Cell span={4}>
            <CustomCard title="Send a coupon to visitors who abandon a cart" />
        </Cell>
        <Cell span={4}>
            <CustomCard title="Ask customers for feedback via email" />
        </Cell>
        </Layout>

        <Heading size='small' >Marketing Layouts</Heading>

        <Card>
        <MarketingLayout
            title="Get found on Google"
            description="Boost your site's SEO with the SEO Wiz. Follow your step-by-step plan."
            actions={<Button size="small">Start Now</Button>}
            size="tiny"
            badge={<Badge size="small">Essential</Badge>}
            image={
            <Box width="100%" align="right">
                <Image
                width="120px"
                src="https://www.docs.wixdesignsystem.com/PromotionalPromoteMarketingHomeSEO.svg"
                transparent
                />
            </Box>
            }
        />
        </Card>;

        <Heading size='small' >Empty States</Heading>

        <Card>
            <Card.Header
                title="New Arrivals collection"
                suffix={
                <Button size="small" prefixIcon={<Icons.Add />}>
                    Add Product
                </Button>
                }
            />
            <Card.Divider />
            <Card.Content>
                <EmptyState
                title="Add your first product"
                subtitle="Bring more attention to new products."
                theme="section"
                >
                <TextButton size="small" prefixIcon={<Icons.Add />}>
                    Add Product
                </TextButton>
                </EmptyState>
            </Card.Content>
            </Card>;
    </Box>
  )
}

export default CardComponent