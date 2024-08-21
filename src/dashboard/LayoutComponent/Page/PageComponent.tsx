import { Box, Breadcrumbs, Button, Card, Cell, DropdownBase, EmptyState, Heading, Image, Layout, MediaOverlay, Page, PopoverMenu, Proportion, Table, TableActionCell, TableToolbar, Tabs, Text, TextButton } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const PageComponent = () => {

    const ref = React.createRef(null);
    const [downDisabled, setDownDisabled] = React.useState(false);
    const [upDisabled, setUpDisabled] = React.useState(true);
   
    const onClick = (top:any) => ref.current.scrollTo({ top, behavior: 'smooth' });
    const onScroll = (props:any) => {
      if (props.area.y === 'top') {
        return setDownDisabled(false) & setUpDisabled(true);
      }
      if (props.area.y === 'bottom') {
        return setDownDisabled(true) & setUpDisabled(false);
      }
    };

    // Tabs
    const [activeTabId, setActiveTabId] = React.useState(1);
    
    // Form layout: two-thirds
    const renderCard = ({ title, subtitle }:any) => (
        <Card>
          <Card.Header title={title} subtitle={subtitle} />
          <Card.Divider />
          <Card.Content>
            <Box height="360px" />
          </Card.Content>
        </Card>
      );


    // Table
    const records = [
        {
          name: 'Light grey hoodie',
          sku: 25232564,
          inStock: true,
          price: '$14.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
        },
        {
          name: 'Black watch',
          sku: 35246432,
          inStock: true,
          price: '$29.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
        },
        {
          name: 'Reading glasses',
          sku: 4864310,
          inStock: false,
          price: '$69.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
        },
        {
          name: 'Leather shoes',
          sku: 125156422,
          inStock: true,
          price: '$7.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
        },
        {
          name: 'Light grey hoodie',
          sku: 25232564,
          inStock: true,
          price: '$14.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
        },
        {
          name: 'Black watch',
          sku: 35246432,
          inStock: true,
          price: '$29.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
        },
        {
          name: 'Reading glasses',
          sku: 4864310,
          inStock: false,
          price: '$69.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
        },
        {
          name: 'Leather shoes',
          sku: 125156422,
          inStock: true,
          price: '$7.00',
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
        },
      ];
    
      const Status = ({ isInStock }:any) => (
        <Text size="small" secondary>
          {isInStock ? 'In stock' : 'Out of stock'}
        </Text>
      );
    
      const secondaryAction = [
        {
          icon: <Icons.Duplicate />,
          text: 'Duplicate',
          onClick: () => {},
        },
        {
          icon: <Icons.Delete />,
          text: 'Delete',
          onClick: () => {},
        },
      ];
    
      const columns = [
        {
          title: '',
          render: (row:any) => row.image,
          width: '60px',
        },
        {
          title: 'Name',
          render: (row:any) => row.name,
          width: '30%',
        },
        {
          title: 'SKU',
          render: (row:any) => row.sku,
          width: '20%',
          align: 'start',
        },
        {
          title: 'Stock',
          render: (row:any) => <Status isInStock={row.inStock} />,
          width: '20%',
          align: 'start',
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
          width: '10%',
          align: 'start',
        },
        {
          title: '',
          render: (row:any) => <TableActionCell secondaryActions={secondaryAction} />,
          width: '10%',
        },
      ];

    //   4 Column List
    const renderProductItem = ({ image, title }:any) => (
        <Proportion aspectRatio={1}>
          <MediaOverlay skin="gradient" media={image}>
            <MediaOverlay.Content placement="bottom-start" visible="always">
              <Text weight="normal" light>
                {title}
              </Text>
            </MediaOverlay.Content>
          </MediaOverlay>
        </Proportion>
      );

    //   Dashboard

    const renderDashboardCard = ({ title, height, stretchVertically = false }:any) => (
        <Card stretchVertically={stretchVertically}>
          <Card.Header title={title} />
          <Card.Divider />
          <Card.Content>
            <Box height={height} />
          </Card.Content>
        </Card>
      );
    
      const renderToolsCard = () => (
        <Card>
          <Card.Content>
            <Box height="90px" />
          </Card.Content>
        </Card>
      );
    
  
    return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <Page>
            <Page.Header title="Page Title" />
            <Page.Content>
                <Box border="1px dotted" align='center'>
                    Page content
                </Box>
            </Page.Content>
        </Page>;

        <Heading size='small' >Height</Heading>
        <Page height='50vh'>
            <Page.Header title="Page Title" />
            <Page.Content >
                <Box border="1px dotted" align='center' height="100%">
                    Page content
                </Box>
            </Page.Content>
        </Page>;

        <Heading size='small' >Width</Heading>

        <Box direction='vertical' >
            <Page minWidth={864} maxWidth={1248}>
                <Page.Header
                title="Maximum width"
                subtitle="The maximum width for Business Manager Apps is 1248 pixels."
                />
                <Page.Content>
                <Box height="180px" border="1px dotted"/>
                </Page.Content>
            </Page>
            <Page minWidth={864} maxWidth={864}>
                <Page.Header
                title="Minimum width"
                subtitle="Minimum width for Business Manager Apps  is 864 pixels"
                />
                <Page.Content>
                    <Box height="180px" border="1px dotted"/>
                </Page.Content>
            </Page>
        </Box>

        <Heading size='small' >Side Padding</Heading>

        <Box direction='vertical' gap="SP6" >
            <Page sidePadding={48}>
                <Page.Header
                title="Default padding"
                subtitle="The side padding for Business Manager Apps is 48 pixels."
                />
                <Page.Content>
                <Box height="180px" border="1px dotted" />
                </Page.Content>
            </Page>
            <Page sidePadding={240}>
                <Page.Header title="Custom padding" />
                <Page.Content>
                    <Box height="180px" border="1px dotted" />
                </Page.Content>
            </Page>
        </Box>

        <Heading size='small' >Background Image</Heading>

        <Page backgroundImageUrl="https://www.docs.wixdesignsystem.com/TravelExample1.jpg">
            <Page.Header title="Page with a background image" />
            <Page.Content>
                <Card>
                <Card.Content>
                    <Box height="180px" />
                </Card.Content>
                </Card>
            </Page.Content>
        </Page>;

        <Heading size='small' >Sticky Header</Heading>

        <Page height="40vh">
            <Page.Header title="Scroll to minimize page header" />
            <Page.Content>
                <Box height="600px" border="1px dotted" />
            </Page.Content>
        </Page>;

        <Heading size='small' >Horizontal Scroll</Heading>

        <Page height="40vh" horizontalScroll>
            <Page.Header
                title="Scroll horizontally to view overflow content"
                actionsBar={<Button>Action</Button>}
            />
            <Page.Content>
                <Box width="1800px" height="248px" border="1px dotted">
                    Overflow content
                </Box>
            </Page.Content>
        </Page>;

        <Heading size='small' >Header Tail</Heading>

        <Page height="40vh">
            <Page.Header title="Scroll to view how the tail sticks" />
            <Page.Tail>
                <Box>
                 Tail that sticks to page header on scroll
                </Box>
            </Page.Tail>
            <Page.Content>
                <Box height="1800px" border="1px dotted" />
            </Page.Content>
        </Page>;

        <Heading size='small' >Sticky Areas</Heading>

        <Page height="40vh">
        <Page.Header title="Scroll down to preview sticky area behavior" />
        <Page.Content>
            <Layout>
            <Cell span={8}>
                <Box border="1px dotted" height="3600px" />
            </Cell>
            <Cell span={4}>
                <Page.Sticky>
                <Box height="240px" border="1px dotted">
                    Sticky area
                </Box>
                </Page.Sticky>
            </Cell>
            </Layout>
        </Page.Content>
        </Page>;

        <Heading size='small' >Anchor Links</Heading>

        <Page
            ref={ref}
            height="50vh"
            scrollProps={{ onScrollAreaChanged: onScroll }}
        >
        <Page.Header
            title="Page with anchor links"
            actionsBar={
            <Button onClick={() => onClick(10000)} disabled={downDisabled}>
                Click to Scroll Down
            </Button>
            }
        />
        <Page.Content>
            <Box border="1px dotted" height="10000px" />
        </Page.Content>
        <Page.FixedFooter>
            <Page.Footer divider>
            <Page.Footer.End>
                <Button
                size="medium"
                onClick={() => onClick(0)}
                disabled={upDisabled}
                >
                Click to Scroll Up
                </Button>
            </Page.Footer.End>
            </Page.Footer>
        </Page.FixedFooter>
        </Page>


        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Empty State</Heading>

        <Page>
        <Page.Header
            title="Categories"
            subtitle="Create and manage categories for your events."
            actionsBar={<Button prefixIcon={<Icons.Add />}>Add Category</Button>}
        />
        <Page.Content>
            <EmptyState
            image={<Image width="120px" src="https://www.docs.wixdesignsystem.com/no_categories.png" transparent />}
            title="Add your first category"
            subtitle="Organize your events with categories. You can connect any event with up to 10 categories."
            theme="page"
            >
            <TextButton prefixIcon={<Icons.Add />}>Add Category</TextButton>
            </EmptyState>
        </Page.Content>
        </Page>;

        <Heading size='small' >Tabs</Heading>

        <Page height="60vh">
            <Page.Header
                title="Pricing Plans"
                subtitle="Set up subscriptions, memberships or package plans to sell on your site."
            />
            <Page.Tail>
                <Tabs
                items={[
                    { id: 1, title: 'Active plans' },
                    { id: 2, title: 'Archived plans' },
                ]}
                type="compactSide"
                activeId={activeTabId}
                onClick={(tab:any) => setActiveTabId(tab.id)}
                />
            </Page.Tail>
            <Page.Content>
                <Layout>
                {new Array(8).fill().map(() => (
                    <Cell span={6}>
                    <Card>
                        <Box height="180px" />
                    </Card>
                    </Cell>
                ))}
                </Layout>
            </Page.Content>
        </Page>

        <Heading size='small' >Form Layout: Full width</Heading>
        
        <Page height="60vh">
            <Page.Header
                actionsBar={
                <Box gap="SP2">
                    <Button skin="inverted">Cancel</Button>
                    <Button>Save</Button>
                </Box>
                }
                breadcrumbs={
                <Breadcrumbs
                    activeId="2"
                    items={[
                    { id: '1', value: 'Settings' },
                    { id: '2', value: 'eCommerce Settings' },
                    ]}
                    onClick={() => {}}
                />
                }
                showBackButton
                onBackClicked={() => {}}
                title="eCommerce Settings"
            />

            <Page.Content>
                <Layout>
                <Cell span={8}>
                    {renderCard({
                    title: 'Orders',
                    })}
                </Cell>
                <Cell span={8}>
                    {renderCard({
                    title: 'Checkout',
                    subtitle:
                        'Add the checkout fields you need customers to fill out.',
                    })}
                </Cell>
                <Cell span={8}>
                    {renderCard({
                    title: 'Returns',
                    subtitle: 'Include more info about your return policy.',
                    })}
                </Cell>
                <Cell>
                    <Page.Footer divider>
                    <Page.Footer.End>
                        <Box gap="SP2">
                        <Button priority="secondary">Cancel</Button>
                        <Button>Save</Button>
                        </Box>
                    </Page.Footer.End>
                    </Page.Footer>
                </Cell>
                </Layout>
            </Page.Content>
        </Page>
        
        <Heading size='small' >Table</Heading>

        <Page height="60vh">
            <Page.Header
                title="Products"
                actionsBar={<Button prefixIcon={<Icons.Add />}>Add Product</Button>}
            />
            <Page.Content>
                <Layout>
                <Cell>
                    <Card>
                    <Table data={records} columns={columns}>
                        <Page.Sticky>
                        <Card>
                            <TableToolbar>
                            <TableToolbar.ItemGroup position="start">
                                <TableToolbar.Item>
                                <TableToolbar.Title>Products</TableToolbar.Title>
                                </TableToolbar.Item>
                            </TableToolbar.ItemGroup>
                            </TableToolbar>
                            <Table.Titlebar />
                        </Card>
                        </Page.Sticky>
                        <Table.Content titleBarVisible={false} />
                    </Table>
                    </Card>
                </Cell>
                </Layout>
            </Page.Content>
        </Page>

        <Heading size='small' >2 Column List</Heading>


        <Page height="60vh">
        <Page.Header
            title="SEO Tools"
            subtitle="Optimize your site for search engines so more people can find you online."
            actionsBar={
            <Button skin="inverted" prefixIcon={<Icons.Users />}>
                Hire an SEO Professional
            </Button>
            }
        />
        <Page.Content>
            <Layout>
            <Cell span={6} rows={2}>
                <Card stretchVertically>
                <Card.Content>
                    <Box direction="vertical">
                    <Image height="60px" width="60px" />
                    </Box>
                </Card.Content>
                </Card>
            </Cell>
            {new Array(8).fill().map(() => (
                <Cell span={6}>
                <Card>
                    <Card.Content>
                    <Box verticalAlign="middle" gap="SP3">
                        <Image height="60px" width="60px" />
                    </Box>
                    </Card.Content>
                </Card>
                </Cell>
            ))}
            </Layout>
        </Page.Content>
        </Page>

        <Heading size='small' >4 Column List</Heading>

        <Page height="60vh">
            <Page.Header
                title="Collections"
                actionsBar={<Button prefixIcon={<Icons.Add />}>Add Collection</Button>}
            />
            <Page.Content>
                <Layout>
                <Cell>
                    <Box gap="SP4">
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample1.jpg',
                        title: 'Hoodies',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample2.jpg',
                        title: 'Jewelery and watches',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample3.jpg',
                        title: 'Accessories',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample4.jpg',
                        title: 'Shoes',
                    })}
                    </Box>
                </Cell>
                <Cell>
                    <Box gap="SP4">
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample5.jpg',
                        title: 'Flowers and plants',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample6.jpg',
                        title: 'Home',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample7.jpg',
                        title: 'Winter collection',
                    })}
                    {renderProductItem({
                        image: 'https://www.docs.wixdesignsystem.com/ProductExample8.jpg',
                        title: 'Fragrance',
                    })}
                    </Box>
                </Cell>
                </Layout>
            </Page.Content>
        </Page>

        <Heading size='small' >Dashboard</Heading>

        <Page height="60vh">
            <Page.Header
                title="Facebook Ads"
                actionsBar={
                <PopoverMenu
                    triggerElement={
                    <Button skin="inverted" suffixIcon={<Icons.ChevronDown />}>
                        More Actions
                    </Button>
                    }
                >
                    <PopoverMenu.MenuItem
                    text="Edit campaign"
                    prefixIcon={<Icons.Edit />}
                    />
                    <PopoverMenu.MenuItem
                    text="Change budget"
                    prefixIcon={<Icons.Payment />}
                    />
                    <PopoverMenu.MenuItem
                    text="End campaign"
                    prefixIcon={<Icons.Dismiss />}
                    skin="destructive"
                    />
                </PopoverMenu>
                }
            />
        <Page.Content>
            <Layout>
            <Cell>
                <Card>
                <Box height="120px" />
                </Card>
            </Cell>
            <Cell>
                <Page.Section
                title="Overview"
                showDivider
                actionsBar={
                    <Box gap="SP2">
                    <Text>Time Period:</Text>
                    <DropdownBase
                        selectedId={4}
                        options={[
                        { id: 0, value: 'Last hour' },
                        { id: 1, value: 'Last 24 hours' },
                        { id: 2, value: 'Last 7 days' },
                        { id: 3, value: 'Last 30 days' },
                        { id: 4, value: 'Lifetime' },
                        ]}
                    >
                        {({ toggle, selectedOption = {} }) => (
                        <TextButton
                            onClick={toggle}
                            suffixIcon={<Icons.ChevronDown />}
                        >
                            {selectedOption.value}
                        </TextButton>
                        )}
                    </DropdownBase>
                    </Box>
                }
                />
            </Cell>
            <Cell span={6}>
                {renderCard({
                title: 'Ad engagement',
                height: '240px',
                stretchVertically: true,
                })}
            </Cell>
            <Cell span={6}>
                {renderCard({
                title: 'Ad impact',
                height: '240px',
                })}
            </Cell>
            <Cell>
                {renderCard({
                title: 'Statistics',
                height: '180px',
                })}
            </Cell>
            <Cell span={4}>
                {renderCard({
                title: 'Audience',
                height: '240px',
                })}
            </Cell>
            <Cell span={4}>
                {renderCard({
                title: 'Performance over time',
                height: '240px',
                })}
            </Cell>
            <Cell span={4}>
                {renderCard({
                title: 'Customer funnel',
                height: '240px',
                })}
            </Cell>
            <Cell>
                <Page.Section
                title="Tools"
                showDivider
                actionsBar={
                    <TextButton suffixIcon={<Icons.ChevronRight />}>
                    View All
                    </TextButton>
                }
                />
            </Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            <Cell span={3}>{renderToolsCard()}</Cell>
            </Layout>
        </Page.Content>
    </Page>




    </Box>
  )
}

export default PageComponent
