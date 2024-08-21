import { Box, Breadcrumbs, Button, Card, Cell, Checkbox, FormField, Heading, Image, Input, Layout, Page, Pagination, RichTextInputArea, Search, Stepper, Table, TableActionCell, TableToolbar, Text, TextButton, Thumbnail } from '@wix/design-system';
import React from 'react';


// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const PageFooterComponent = () => {

    const ITEMS_PER_PAGE = 6;

    const [activeSearch, setActiveSearch] = React.useState('');
    const [selectedPage, setSelectedPage] = React.useState(1);
  
    const records = [
      {
        name: 'Light grey hoodie',
        sku: 25232564,
        price: '$14.00',
        image: <Image src="ProductExample1.jpg" />,
      },
      {
        name: 'Black watch',
        sku: 35246432,
        price: '$29.00',
        image: <Image src="ProductExample2.jpg" />,
      },
      {
        name: 'Reading glasses',
        sku: 4864310,
        price: '$69.00',
        image: <Image src="ProductExample3.jpg" />,
      },
      {
        name: 'Leather shoes',
        sku: 125156422,
        price: '$7.00',
        image: <Image src="ProductExample4.jpg" />,
      },
      {
        name: 'Light grey hoodie',
        sku: 25232564,
        price: '$14.00',
        image: <Image src="ProductExample1.jpg" />,
      },
      {
        name: 'Black watch',
        sku: 35246432,
        price: '$29.00',
        image: <Image src="ProductExample2.jpg" />,
      },
      {
        name: 'Reading glasses',
        sku: 4864310,
        price: '$69.00',
        image: <Image src="ProductExample3.jpg" />,
      },
      {
        name: 'Leather shoes',
        sku: 125156422,
        price: '$7.00',
        image: <Image src="ProductExample4.jpg" />,
      },
      {
        name: 'Light grey hoodie',
        sku: 25232564,
        price: '$14.00',
        image: <Image src="ProductExample1.jpg" />,
      },
      {
        name: 'Black watch',
        sku: 35246432,
        price: '$29.00',
        image: <Image src="ProductExample2.jpg" />,
      },
      {
        name: 'Reading glasses',
        sku: 4864310,
        price: '$69.00',
        image: <Image src="ProductExample3.jpg" />,
      },
      {
        name: 'Leather shoes',
        sku: 125156422,
        price: '$7.00',
        image: <Image src="ProductExample4.jpg" />,
      },
      {
        name: 'Light grey hoodie',
        sku: 25232564,
        price: '$14.00',
        image: <Image src="ProductExample1.jpg" />,
      },
      {
        name: 'Black watch',
        sku: 35246432,
        price: '$29.00',
        image: <Image src="ProductExample2.jpg" />,
      },
      {
        name: 'Reading glasses',
        sku: 4864310,
        price: '$69.00',
        image: <Image src="ProductExample3.jpg" />,
      },
      {
        name: 'Leather shoes',
        sku: 125156422,
        price: '$7.00',
        image: <Image src="ProductExample4.jpg" />,
      },
    ];
  
    const secondaryAction = [
      {
        icon: <Icons.DuplicateSmall />,
        text: 'Duplicate',
        onClick: () => {},
      },
      {
        icon: <Icons.DeleteSmall />,
        text: 'Delete',
        onClick: () => {},
      },
    ];
  
    const columns = [
      {
        title: 'Name',
        render: (row:any) => row.image,
        width: '60px',
      },
      {
        title: '',
        render: (row:any) => row.name,
        width: '60%',
      },
      {
        title: 'SKU',
        render: (row:any) => row.sku,
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
  
    const getTotalPages = Math.ceil(records.length / ITEMS_PER_PAGE);
  
    const getPaginationData = (count:any) => {
      const trimStart = (selectedPage - 1) * ITEMS_PER_PAGE;
      const trimEnd = trimStart + ITEMS_PER_PAGE;
  
      return records.slice(trimStart, trimEnd);
    };
  
    const getFilteredData = () => {
      return getPaginationData(2).filter(({ name, sku, status, price }:any) => {
        const searchData = [name, sku, status, price].join(' ').toLowerCase();
  
        const searchQuery = activeSearch.trim().toLowerCase();
  
        if (searchQuery && searchData.indexOf(searchQuery) === -1) {
          return false;
        }
  
        return true;
      });
    };
  
    const handleChange = ({ page, event }:any) => {
      event.preventDefault();
      setSelectedPage(page);
    };


    const renderMainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>{records.length}products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
            <TableToolbar.ItemGroup position="end">
              <TableToolbar.Item>
                <Box width="200">
                  <Search
                    value={activeSearch}
                    onChange={(event) => setActiveSearch(event.target.value)}
                  />
                </Box>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };



    //  form actions
    const [formState, setFormState] = React.useState({
        accessoriesCollection: false,
        bestSellersCollection: false,
        showInOnlineStore: true,
      });
    
    //   wizard navigation
    const [selectedItem, setSelectedItem] = React.useState(1);

    const renderThumbnail = ({ title, imageSrc, index }:any) => (
      <Thumbnail
        height="300px"
        title={<Text>{title}</Text>}
        image={<Image src={imageSrc} transparent />}
        selected={selectedItem === index}
        onClick={() => setSelectedItem(index)}
      ></Thumbnail>
    );
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small' >Structure</Heading>

        <Page.Footer>
            <Page.Footer.Start>
                <Box border="1px dotted" align='center' width="100%" >Start</Box>
                
            </Page.Footer.Start>
            <Page.Footer.Center>
                <Box border="1px dotted" align='center' width="100%" >Center</Box>
               
            </Page.Footer.Center>
            <Page.Footer.End>
                <Box border="1px dotted" align='center' width="100%" >End</Box>
                
            </Page.Footer.End>
        </Page.Footer>;

        <Heading size='small' >Divider</Heading>

        <Page.Footer divider>
        <Page.Footer.End>
            
            <Box gap="25px">
                <Button size="medium" skin="inverted">
                    Cancel
                </Button>
                
                <Button size="medium">Save</Button>
            </Box>
            
        </Page.Footer.End>
        </Page.Footer>;

        <Heading size='medium' >Common Use Cases</Heading>
        <Heading size='small' >Pagination</Heading>


        <Page height="70vh">
            <Page.Header
                title="Products"
                actionsBar={<Button prefixIcon={<Icons.Add />}>New Product</Button>}
            />
            <Page.Content>
                <Card>
                <Table data={getFilteredData()} columns={columns} showSelection>
                    <Table.ToolbarContainer>{renderMainToolbar}</Table.ToolbarContainer>
                    <Table.Content />
                </Table>
                </Card>
            </Page.Content>
            <Page.FixedFooter>
                <Page.Footer>
                <Page.Footer.Center>
                    <Box paddingTop="SP4">
                    <Pagination
                        currentPage={selectedPage}
                        totalPages={getTotalPages}
                        onChange={(e) => setSelectedPage(e.page)}
                    />
                    </Box>
                </Page.Footer.Center>
                </Page.Footer>
            </Page.FixedFooter>
        </Page>


        <Heading size='small' >Form Actions</Heading>

        <Page height="70vh">
            <Page.Header
                actionsBar={
                <Box gap="SP2">
                    <Button priority="secondary">Cancel</Button>
                    <Button>Save</Button>
                </Box>
                }
                breadcrumbs={
                <Breadcrumbs
                    activeId="2"
                    items={[
                    { id: '1', value: 'Products' },
                    { id: '2', value: 'Untitled Product' },
                    ]}
                    onClick={() => {}}
                />
                }
                title="Untitled Product"
            />
            <Page.Content>
                <Layout>
                <Cell span={8} rows={3}>
                    <Card>
                    <Card.Header title="Product info" />
                    <Card.Divider />
                    <Card.Content>
                        <Layout>
                        <Cell>
                            <Heading size="tiny">Basic info</Heading>
                        </Cell>
                        <Cell span={6}>
                            <FormField label="Name">
                            <Input />
                            </FormField>
                        </Cell>
                        <Cell span={6}>
                            <FormField label="Ribbon">
                            <Input placeholder="e.g., New Arrival" />
                            </FormField>
                        </Cell>
                        <Cell>
                            <FormField label="Description">
                            <RichTextInputArea minHeight="120px" />
                            </FormField>
                        </Cell>
                        </Layout>
                    </Card.Content>
                    <Card.Divider />
                    <Card.Content>
                        <Layout>
                        <Cell>
                            <Heading size="tiny">Additional info</Heading>
                        </Cell>
                        <Cell>
                            <Text>
                            Share information like return policy or care instructions
                            with your customers
                            </Text>
                        </Cell>
                        <Cell>
                            <TextButton prefixIcon={<Icons.Add />}>
                            Add Info Section
                            </TextButton>
                        </Cell>
                        </Layout>
                    </Card.Content>
                    </Card>
                </Cell>
                <Cell span={4}>
                    <Card>
                    <Card.Header title="Collections" />
                    <Card.Divider />
                    <Card.Content>
                        <Box direction="vertical" gap="SP2">
                        <Box direction="vertical" gap="SP1">
                            <Checkbox checked disabled>
                            All products
                            </Checkbox>
                            <Checkbox
                            checked={formState.accessoriesCollection}
                            onChange={() =>
                                setFormState({
                                ...formState,
                                accessoriesCollection:
                                    !formState.accessoriesCollection,
                                })
                            }
                            >
                            Accessories
                            </Checkbox>
                            <Checkbox
                            checked={formState.bestSellersCollection}
                            onChange={() =>
                                setFormState({
                                ...formState,
                                bestSellersCollection:
                                    !formState.bestSellersCollection,
                                })
                            }
                            >
                            Best sellers
                            </Checkbox>
                        </Box>
                        <TextButton prefixIcon={<Icons.Add />}>
                            Create Collection
                        </TextButton>
                        </Box>
                    </Card.Content>
                    </Card>
                </Cell>
                </Layout>
            </Page.Content>
            <Page.FixedFooter>
                <Page.Footer divider>
                <Page.Footer.End>
                    <Box gap="SP2">
                    <Button priority="secondary">Cancel</Button>
                    <Button>Save</Button>
                    </Box>
                </Page.Footer.End>
                </Page.Footer>
            </Page.FixedFooter>
            </Page>
        
            <Page height="70vh">
      <Page.Header
        breadcrumbs={
          <Stepper
            type="text"
            activeStep={0}
            steps={[
              { text: 'Get Started' },
              { text: 'Template' },
              { text: 'Name' },
              { text: 'Pace' },
              { text: 'Duration' },
            ]}
            onClick={() => {}}
          />
        }
        title="What do you want to create?"
      />
      <Page.Content>
        <Layout>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Online course',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_online_course.svg',
              index: 1,
            })}
          </Cell>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Fitness challenge',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_fitness_challenge.svg',
              index: 2,
            })}
          </Cell>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Personal coaching',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_personal_coaching.svg',
              index: 3,
            })}
          </Cell>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Community project',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_community.svg',
              index: 4,
            })}
          </Cell>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Nutrition plan',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_nutrition_plan.svg',
              index: 5,
            })}
          </Cell>
          <Cell span={4}>
            {renderThumbnail({
              title: 'Something else',
              imageSrc: 'https://www.docs.wixdesignsystem.com/onboarding_something_else.svg',
              index: 6,
            })}
          </Cell>
        </Layout>
      </Page.Content>
      <Page.FixedFooter>
        <Page.Footer divider>
          <Page.Footer.Start>
            <Button
              priority="secondary"
              skin="inverted"
              onClick={() => setSelectedItem(null)}
            >
              Cancel
            </Button>
          </Page.Footer.Start>
          <Page.Footer.End>
            <Button
              suffixIcon={<Icons.ArrowRight />}
              disabled={selectedItem === null}
            >
              Next
            </Button>
          </Page.Footer.End>
        </Page.Footer>
      </Page.FixedFooter>
    </Page>

    </Box>
  )
}

export default PageFooterComponent