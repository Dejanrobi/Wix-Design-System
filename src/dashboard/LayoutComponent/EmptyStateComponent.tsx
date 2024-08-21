import { Box, Breadcrumbs, Button, Card, Cell, Divider, EmptyState, FormField, Heading, Image, Input, Layout, Page, Search, SidePanel, Table, TableToolbar, Text, TextButton, VerticalTabs } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const EmptyStateComponent = () => {

    // No search results
    const [searchTerm, setSearchTerm] = React.useState('');
  const [display, setDisplay] = React.useState('none');
  const [records, setRecords] = React.useState([
    {
      name: `Ballet shoes`,
      SKU: 'BP063001',
      price: '$78',
      inventory: 16,
    },
    {
      name: `Chelsea boots`,
      SKU: 'BP063001',
      price: '$112',
      inventory: 32,
    },
    {
      name: `Desert boots`,
      SKU: 'BP063001',
      price: '$89',
      inventory: 23,
    },
    {
      name: `Platform shoes`,
      SKU: 'BP063001',
      price: '$45',
      inventory: 102,
    },
    {
      name: `Espadrilles`,
      SKU: 'BP063001',
      price: '$96',
      inventory: 4,
    },
    {
      name: `Moccasins`,
      SKU: 'BP063001',
      price: '$104',
      inventory: 45,
    },
  ]);

  const columns = [
    {
      title: 'Name',
      render: (row:any) => row.name,
      width: '30%',
    },
    {
      title: 'SKU',
      render: (row:any) => row.SKU,
      width: '20%',
    },
    {
      title: 'Price',
      render: (row:any) => row.price,
      width: '20%',
    },
    {
      title: 'Inventory',
      render: (row:any) => row.inventory,
      width: '20%',
    },
  ];

  const clearSearch = () => {
    setSearchTerm('');
  };

  const renderSearch = (expandable:any) => {
    return (
      <Search
        size="small"
        expandable={expandable}
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        onClear={clearSearch}
      />
    );
  };

  const getFilteredData = () => {
    let data = records;

    if (searchTerm !== '') {
      data = data.filter((row) =>
        row.name.toUpperCase().includes(searchTerm.toUpperCase()),
      );
    }

    return data;
  };

  const filteredData = getFilteredData();

  const renderEmptyState = () => (
    <Table.EmptyState
      title="No results found"
      subtitle="No items matched your search. Try searching for something else."
      image={
        <Image
          width="120px"
          height="120px"
          transparent={true}
          src="https://www.docs.wixdesignsystem.com/EmptyState_Generic1.svg"
        />
      }
    >
      <TextButton onClick={clearSearch}>Clear Search</TextButton>
    </Table.EmptyState>
  );

  return (
    <Box direction='vertical' paddingTop="SP4" paddingBottom="SP4" gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <EmptyState
            image={<Image width="120px" height="120px" />}
            title="Title"
            subtitle="Subtitle"
        >
            <Box border="1px dotted">Child container</Box>
        </EmptyState>

        <Heading size='small' >Theme</Heading>
        <Box direction='vertical' gap="48px" >
            <EmptyState
                image={<Image height="120px " width="120px" />}
                theme='page'
                title="Page theme"
                subtitle="A subtitle guides users to their next step."
            />

            <EmptyState
                image={<Image height="120px " width="120px" />}
                theme='page-no-border'
                title="page-no-border theme"
                subtitle="A subtitle guides users to their next step."
            />

            <EmptyState
                image={<Image height="120px " width="120px" />}
                theme='section'
                title="Section theme"
                subtitle="A subtitle guides users to their next step."
            />
        </Box>

        <Heading size='small' >Children</Heading>

        <Box  direction='vertical' gap="SP4">
            <EmptyState
                theme='page-no-border'
                title='Add your first product'
                subtitle="Start adding products so customers can shop your online store."
            >

                <Box border="1px dotted" >
                    Child elements
                </Box>
            </EmptyState>

            <EmptyState
                theme='page-no-border'
                title='Add your first product'
                subtitle="Start adding products so customers can shop your online store."
            >

                <TextButton prefixIcon={<Icons.Add/>} >
                    Add Product
                </TextButton>
            </EmptyState>

            <EmptyState
                theme='page-no-border'
                title='Add your first product'
                subtitle="Start adding products so customers can shop your online store."
            >

                <Box gap="16px">

                <TextButton prefixIcon={<Icons.Add/>} >
                    Add Product
                </TextButton>
                <TextButton prefixIcon={<Icons.DownloadImport/>} >
                    Import Products
                </TextButton>
                </Box>
            </EmptyState>
        </Box>

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >No data on a page</Heading>

        <Page>
            <Page.Header
                title="Tasks and Reminders"
                actionsBar={
                    <Button prefixIcon={<Icons.Add/>} >Add Task</Button>
                }
            />

            <Page.Content>
                <EmptyState
                    theme='page'
                    image={
                        <Image
                            width="120px"
                            height="120px"
                            src='https://www.docs.wixdesignsystem.com/no_categories.png'
                            transparent
                        />
                    }
                    title="Add your first task"
                    subtitle="Manage tasks and reminders for yur site to get more done."
                >
                    {<TextButton prefixIcon={<Icons.Add/>}>Add Task</TextButton>}
                </EmptyState>
            </Page.Content>
        </Page>

        <Heading size='small' >No data in a card</Heading>

        <Page>
            <Page.Header
                title="New Category"
                actionsBar={
                    <Box gap="SP2" >
                        <Button skin='inverted' >Cancel</Button>
                        <Button>Save</Button>
                    </Box>
                }

                breadcrumbs={
                    <Breadcrumbs
                        activeId="3"
                        items={[
                            { id: '1', value: 'Categories' },
                            { id: '2', value: 'New Category0' },
                        ]}
                    />
                }
                showBackButton
                onBackClicked={()=>{}}
            />

            <Page.Content>
                <Layout>
                    <Cell>
                        <Card>
                            <Card.Header title="Category details" />
                            <Card.Divider/>

                            <Card.Content>
                                <Layout>
                                    <Cell span={4} >
                                        <FormField label="Category name" required >
                                            <Input placeholder='e.g., Fitness Classes' />
                                        </FormField>

                                    </Cell>
                                </Layout>
                            </Card.Content>
                        </Card>
                    </Cell>

                    <Cell>
                        <Card>
                            <Card.Header title="Category details" />
                            <Card.Divider/>

                            <Card.Content>
                               <EmptyState
                                title="Add services to this category"
                                subtitle="Choose the services you want included in this category or create new ones."
                               >
                                <TextButton prefixIcon={<Icons.Add/>} >Add Services</TextButton>

                               </EmptyState>
                            </Card.Content>
                        </Card>
                    </Cell>

                    <Cell>
                        <Page.Footer divider >
                            <Page.Footer.End>
                                <Box gap="SP2" >
                                    <Button priority='secondary'>Cancel</Button>
                                    <Button>Save</Button>
                                </Box>
                            </Page.Footer.End>
                        </Page.Footer>
                    </Cell>
                </Layout>
            </Page.Content>
        </Page>

        <Heading size='small' >No Search results</Heading>

        <Card>
            <Table data={filteredData} columns={columns} rowVerticalPadding="medium">
                <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                    <TableToolbar.Item>
                    <Text size="small" weight="normal">
                        6 products
                    </Text>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                <TableToolbar.ItemGroup position="end">
                    <TableToolbar.Item>{renderSearch(false)}</TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
                {filteredData.length ? <Table.Titlebar /> : renderEmptyState()}
                <Table.Content titleBarVisible={false} />
            </Table>
        </Card>

        <Heading size='small' >Failed to load</Heading>

        <Page>
            <Page.Header
                title="Website Widgets"
                subtitle="Widgets let you add features and functionality to your site."
            />
            <Page.Content>
                <EmptyState
                theme="page-no-border"
                image={
                    <Image width="120px" src="https://www.docs.wixdesignsystem.com/EmptyState_ServerError.svg" transparent />
                }
                title="We couldn't load this page"
                subtitle="Looks like there was a technical issue on our end. Wait a few minutes and try again."
                >
                <TextButton prefixIcon={<Icons.Refresh />}>Try Again</TextButton>
                </EmptyState>
            </Page.Content>
        </Page>;

        <Heading size='small' >App Introduction</Heading>

        <SidePanel skin='floating' width="100%" onCloseButtonClick={()=>{}} onHelpButtonClick={()=>{}} >
            <SidePanel.Header title="Blog" />
            <Box height="480px" width="100%" >
                <VerticalTabs size='small' activeTabId={0} onChange={()=>{}} >
                    <VerticalTabs.TabItem id={0} >Main</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={1} >Display</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={2} >Layout</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={3} >Design</VerticalTabs.TabItem>
                    <VerticalTabs.TabItem id={4} >SUpport</VerticalTabs.TabItem>

                </VerticalTabs>

                <Divider direction='vertical' />

                <SidePanel.Content>
                    <EmptyState
                        theme='section'
                        image={
                            <Image
                                width="!20px"
                                height="!20px"
                                src='https://www.docs.wixdesignsystem.com/onboarding_community.svg'
                                transparent
                            />
                        }

                        title="Blog feed"
                        subtitle="Customize the layout and design of your blog feed, or create a post."
                    >
                        <Box gap="SP2" direction='vertical' >
                            <Button size='small'>Create Post</Button>
                            <Button size='small' priority='secondary'>Manage Posts</Button>
                        </Box>
                    </EmptyState>
                </SidePanel.Content>
            </Box>

        </SidePanel>

    </Box>
  )
}

export default EmptyStateComponent