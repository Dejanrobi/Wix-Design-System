import { Box, Breadcrumbs, Button, Card, Cell, Dropdown, EditableTitle, FormField, Heading, IconButton, Layout, Page, PopoverMenu, Search, StatisticsWidget, TableToolbar, Text, TextButton } from '@wix/design-system'
import React from 'react'


import * as Icons from '@wix/wix-ui-icons-common'

const PageHeaderComponent = () => {
  return (
    <Box direction='vertical' gap="SP6" >

        <Heading size='small' >Structure</Heading>

            <Page.Header
            title="Page Title"
            subtitle="Subtitle"
            actionsBar={
                <Box border="1px dotted" align='center' width="300px">
                    Action bar (optional)
                </Box>
            }
            />;

            <Heading size='small' >Action Bar</Heading>

            <Box direction='vertical' gap="SP4" >
                <Page.Header
                  title="Form Pages"
                  actionsBar={
                      <Box gap="12px" >
                    
                      <PopoverMenu
                        triggerElement={
                          <IconButton skin="inverted">
                            <Icons.More />
                          </IconButton>
                        }
                      >
                        <PopoverMenu.MenuItem
                          text="Duplicate"
                          prefixIcon={<Icons.Duplicate />}
                        />
                        <PopoverMenu.MenuItem text="Delete" prefixIcon={<Icons.Delete />} />
                      </PopoverMenu>
                      <Button priority="secondary" skin="inverted">
                        Cancel
                      </Button>
                      <Button>Save</Button>
                  
                  </Box>
                    
                  }
                />



                <Page.Header
                  title="Display Pages"
                  actionsBar={
                      <Box gap="12px" >

                      <PopoverMenu
                        triggerElement={
                          <Button skin="inverted" suffixIcon={<Icons.ChevronDown />}>
                            More Actions
                          </Button>
                        }
                      >
                        <PopoverMenu.MenuItem
                          text="Export to CSV "
                          prefixIcon={<Icons.DownloadImport />}
                        />
                        <PopoverMenu.MenuItem
                          text="View analytics"
                          prefixIcon={<Icons.Statistics />}
                        />
                      </PopoverMenu>
                      <Button prefixIcon={<Icons.Add />}>Create New</Button>
                      </Box>
                    

                    
                  }
                />
            </Box>

            <Heading size='small' >Breadcrumbs</Heading>

            <Page.Header
              breadcrumbs={
                <Breadcrumbs
                  activeId="4"
                  items={[
                    { id: '1', value: 'Page' },
                    { id: '2', value: 'Page' },
                    { id: '3', value: 'Page' },
                    { id: '4', value: 'Current Page' },
                  ]}

                  onClick={()=>{}}
                />
              }

              title="Current Page"
            />

            <Heading size='small' >Back Button</Heading>

            <Page.Header
              breadcrumbs={
                <Breadcrumbs
                  activeId="4"
                  items={[
                    { id: '1', value: 'Page' },
                    { id: '1', value: 'Page' },
                    { id: '1', value: 'Page' },
                    { id: '1', value: 'Current Page' },
                  ]}

                  onClick={()=>{}}
                />
              }

              showBackButton
              onBackClicked={()=>{}}
              title="Current Page"
            />

            <Heading size='small' >Inverted</Heading>

            <Box direction='vertical' gap="SP6" >

              <Page.Header
                actionsBar={
                  <Box gap={12} >
                    <Button skin='inverted' >Secondary Action</Button>
                    <Button>Main Action</Button>
                  </Box>

                }

                breadcrumbs={
                  <Breadcrumbs
                    activeId="3"
                    items={[
                      { id: '1', value: 'Page' },
                      { id: '2', value: 'Page' },
                      { id: '3', value: 'Standard Page Header' },
                      
                    ]}

                    onClick={()=>{}}
                  />
                }

                onBackClicked={()=>{}}
                showBackButton
                title="Standard Page Header"
                subtitle="Use the standard page header on white and light and gray backgrounds."
              />

              <Box backgroundColor='D10' >
                <Page.Header
                      actionsBar={
                        <Box gap={12}>
                          <Button skin="light" priority="secondary">
                            Secondary Action
                          </Button>
                          <Button skin="light">Main Action</Button>
                          </Box>
                      }
                      breadcrumbs={
                        <Breadcrumbs
                          activeId="3"
                          items={[
                            { id: '1', value: 'Page' },
                            { id: '2', value: 'Page' },
                            { id: '3', value: 'Inverted Page Header' },
                          ]}
                          onClick={() => {}}
                        />
                      }
                      hasBackgroundImage
                      onBackClicked={() => {}}
                      showBackButton
                      title="Inverted Page Header"
                      subtitle="Use an inverted header on image or dark colored backgrounds."
                />
              </Box>

            </Box>


            <Heading size='small' >Editable</Heading>

            <Page.Header
              title={<EditableTitle initialValue='Click to edit this page title' />}
            />

            <Heading size='small' >Overflow Text</Heading>

            <Page.Header
              title="This is a long page title which exceeds the limit of a single line"
              subtitle="This is an explanatory subtitle which exceeds the limit of two lines. Text that is longer than two lines will be hidden and can be previewed in a tooltip message only. Avoid long descriptions. If two lines are not enough, maybe this description should be part of the content instead."
            />

            <Heading size='small' >Minimized</Heading>

            <Box direction='vertical' gap="SP6" >
              <Page.Header
                title="Minimized Page Title"
                minimized
                actionsBar={<Button>Action</Button>}
              />  

              <Page.Header
                  title="Minimized Page Title with Breadcrumbs"
                  breadcrumbs={
                    <Breadcrumbs
                      activeId="3"
                      items={[
                        { id: '1', value: 'Page' },
                        { id: '2', value: 'Page' },
                        { id: '3', value: 'Minimized Page Title with Breadcrumbs' },
                      ]}
                      onClick={() => {}}
                    />
                  }
                  minimized
                  actionsBar={<Button>Action</Button>}
                />
            </Box>

            <Heading size='medium' >Common Use Cases</Heading>
            <Heading size='small' >Sticky Header</Heading>

            <Page height='60vh' >
              <Page.Header
                title="Subscriptions"
                subtitle="Manage all recurring payments coming to you from Pricing Plans, Stores & Invoices."
                actionsBar={<Button prefixIcon={<Icons.Add/>}>Sell Pricing Plan</Button>}
              />

              <Page.Content>
                <Layout>
                  <Cell span={12} >
                    <Card>
                      <Card.Header title="Statistics" ></Card.Header>
                      <Card.Divider/>

                      <Card.Content>
                        <StatisticsWidget
                          size='large'
                          items={[
                            {
                              value: '1',
                              description: 'Total subscriptions',
                            },

                            {
                              value: '_',
                              description: 'Active subscriptions',
                            },
                          ]}
                        />
                      </Card.Content>
                    </Card>

                  </Cell>

                  <Cell span={12} >
                    <Card>
                      <TableToolbar>
                        <TableToolbar.ItemGroup position='start' >
                            <TableToolbar.Item>
                              <FormField labelPlacement='left' label="Type" >
                                <Dropdown
                                  size='small'
                                  border='round'
                                  options={[
                                    { id: 0, value: 'All types' },
                                    { id: 1, value: 'Pricing Plans' },
                                    { id: 2, value: 'Invoices' },
                                    { id: 3, value: 'Product Subscriptions' }
                                  ]}

                                  initialSelectedId={0}
                                  roundInput
                                  
                                />

                              </FormField>
                            </TableToolbar.Item>


                            <TableToolbar.Item>
                            <FormField labelPlacement="left" label="Status">
                              <Dropdown
                                size="small"
                                border="round"
                                options={[
                                  { id: 0, value: 'All statuses' },
                                  { id: 1, value: 'Paid' },
                                  { id: 2, value: 'Unpaid' },
                                  { id: 3, value: 'Failed payment' },
                                ]}
                                initialSelectedId={0}
                                roundInput
                              />
                            </FormField>
                          </TableToolbar.Item>
                        </TableToolbar.ItemGroup>


                        <TableToolbar.ItemGroup position="end">
                        <TableToolbar.Item>
                          <Search size="small" />
                        </TableToolbar.Item>
                      </TableToolbar.ItemGroup>
                      </TableToolbar>


                      <Card.Divider />
                      <Card.Content>
                        <Box height="320px"></Box>
                      </Card.Content>
                    </Card>

                  </Cell>
                </Layout>
              </Page.Content>

            </Page>

            <Heading size='small' >Subtitle links</Heading>

            <Page.Header
              title="Pricing Plans"
              subtitle={
                <Text secondary>
                  Set up subscriptions, memberships or package plans to sell on your site.
                  <Box inline paddingLeft="SP1">
                    <TextButton>Learn more</TextButton>
                  </Box>
                </Text>
              }
              actionsBar={
                <Box gap="12px">
                  <PopoverMenu
                    minWidth="max-content"
                    triggerElement={
                      <Button skin="inverted" suffixIcon={<Icons.ChevronDown />}>
                        More Actions
                      </Button>
                    }
                  >
                    <PopoverMenu.MenuItem
                      text="Sell Plan Offline"
                      prefixIcon={<Icons.PaidPlansSell />}
                    />
                    <PopoverMenu.MenuItem
                      text="Purchased Plans"
                      prefixIcon={<Icons.PaidPlans />}
                    />
                    <PopoverMenu.Divider />
                    <PopoverMenu.MenuItem
                      text="Payments & Tax"
                      prefixIcon={<Icons.Payment />}
                    />
                    <PopoverMenu.MenuItem
                      text="Manage Invoices"
                      prefixIcon={<Icons.Invoice />}
                    />
                    <PopoverMenu.MenuItem
                      text="Manage Automations"
                      prefixIcon={<Icons.Automations />}
                    />
                  </PopoverMenu>
                  <Button prefixIcon={<Icons.Add />}>Create Plan</Button>
                </Box>
              }
            />;

            <Heading size='small' >Inverted Header</Heading>

            <Page backgroundImageUrl="TravelExample3.jpg" height="60vh">
            <Page.Header
              title="Get Started with Your Forum"
              subtitle="Preview your site to navigate your forum. This is where you go to add, edit and delete posts and comments."
              actionsBar={
                <Box gap="SP2">
                  <Button skin="light" priority="secondary">
                    Cancel
                  </Button>
                  <Button skin="light">Save</Button>
                </Box>
              }
              showBackButton
              onBackClicked={() => {}}
              breadcrumbs={
                <Breadcrumbs
                  activeId="2"
                  items={[
                    { id: '1', value: 'Categories' },
                    { id: '2', value: 'Get Started with Your Forum' },
                  ]}
                  onClick={() => {}}
                />
              }
            />
            <Page.Content>
              <Layout>
                <Cell span={12}>
                  <Card>
                    <Card.Header title="Category info"></Card.Header>
                    <Card.Divider />
                    <Card.Content>
                      <Box height="180px"></Box>
                    </Card.Content>
                  </Card>
                </Cell>
              </Layout>
            </Page.Content>
          </Page>;
    </Box>
  )
}

export default PageHeaderComponent