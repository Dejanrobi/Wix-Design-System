import { Avatar, Box, Button, Card, Cell, Dropdown, FormField, Heading, Search, Table, TableToolbar, TagList, Text } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const TagListComponent = () => {


    // initially expanded
    const initiallytags = [
        { id: '1', children: 'Tag 1' },
        { id: '2', children: 'Tag 2' },
        { id: '3', children: 'Tag 3' },
        { id: '4', children: 'Tag 4' },
        { id: '5', children: 'Tag 5' },
      ];
    
      const initiallytoggleMore = (amountOfHiddenTags:any, isExpanded:any) => ({
        label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
        tooltipContent: !isExpanded && 'Show More',
      });


    // Applied filters list
    const tags = [
        { id: 1, children: 'In Stock' },
        { id: 2, children: 'Accessories' },
      ];
    
      const initialState = {
        tableData: [],
        selectedInventoryStatusId: 0,
        selectedProductTypeId: 0,
        tags,
        activeSearch: '',
      };
      const [state, setState] = React.useReducer(
        (currentState:any, newState:any) => ({ ...currentState, ...newState }),
        initialState,
      );
    
      const getProductTypeFilterById = (id:any) =>
        productTypeFilter.find((type) => type.id === id);
    
      const getInventoryStatusFilterById = (id:any) =>
        inventoryStatusFilter.find((inventory) => inventory.id === id);
    
      const filterRecords = ({ inventoryStatusId, productTypeId }:any) => {
        const inventoryStatus = getInventoryStatusFilterById(inventoryStatusId);
        const productType = getProductTypeFilterById(productTypeId);
    
        return records.filter((record) => {
          const inventoryStatusFilter =
            !inventoryStatus || record.inventory === inventoryStatus.value;
          const productTypeFilter =
            !productType || record.type === productType.value;
    
          return inventoryStatusFilter && productTypeFilter;
        });
      };
    
      React.useEffect(() => {
        setState({
          tableData: filterRecords({ inventoryStatusId: 1, productTypeId: 1 }),
          selectedInventoryStatusId: 1,
          selectedProductTypeId: 1,
        });
      }, []);
    
      const records = [
        {
          name: `Red Slippers`,
          SKU: '0231664667',
          price: '$14.00',
          inventory: 'In Stock',
          type: 'Accessories',
        },
        {
          name: `Velvet Hat`,
          SKU: '0231664669',
          price: '$23.00',
          inventory: 'In Stock',
          type: 'Accessories',
        },
        {
          name: `Silver Bag`,
          SKU: '0231664667',
          price: '$69.00',
          inventory: 'In Stock',
          type: 'Accessories',
        },
        {
          name: `Orange Socks`,
          SKU: '0231662525',
          price: '$9.00',
          inventory: 'Out of Stock',
          type: 'Accessories',
        },
        {
          name: `Red Socks`,
          SKU: '0231664671',
          price: '$19.00',
          inventory: 'In Stock',
          type: 'Accessories',
        },
        {
          name: `Gold Earrings`,
          SKU: '0231666090',
          price: '$22.00',
          inventory: 'Out of Stock',
          type: 'Accessories',
        },
        {
          name: `Blue Jeans`,
          SKU: '0231664525',
          price: '$59.00',
          inventory: 'In Stock',
          type: 'Clothing',
        },
        {
          name: `Black Jacket`,
          SKU: '0231664000',
          price: '$89.00',
          inventory: 'In Stock',
          type: 'Clothing',
        },
        {
          name: `Black Belt`,
          SKU: '0231664672',
          price: '$19.00',
          inventory: 'In Stock',
          type: 'Accessories',
        },
      ];
    
      const columns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
          width: '25%',
        },
        {
          title: 'SKU',
          render: (row:any) => row.SKU,
          width: '25%',
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
          width: '25%',
        },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
          width: '25%',
        },
      ];
      const inventoryStatusFilter = [
        { id: 1, value: 'In Stock' },
        { id: 2, value: 'Out of Stock' },
      ];
      const productTypeFilter = [
        { id: 1, value: 'Accessories' },
        { id: 2, value: 'Clothing' },
      ];
    
      const clearAll = () =>
        setState({
          tags: [],
          selectedInventoryStatusId: 0,
          selectedProductTypeId: 0,
          tableData: records,
        });
    
      const removeTag = (tagId:any) => {
        const tags = state.tags.filter(({ id }:any) => id !== tagId);
    
        const inventoryStatusId = tags.find((tag:any) => tag.id === 1)
          ? state.selectedInventoryStatusId
          : 0;
        const productTypeId = tags.find((tag:any) => tag.id === 2)
          ? state.selectedProductTypeId
          : 0;
    
        setState({
          tags,
          tableData: filterRecords({
            inventoryStatusId,
            productTypeId,
          }),
          selectedInventoryStatusId: inventoryStatusId,
          selectedProductTypeId: productTypeId,
        });
      };
    
      const onOptionChange = ({
        inventoryStatusId = state.selectedInventoryStatusId,
        productTypeId = state.selectedProductTypeId,
      }) => {
        setState({
          selectedProductTypeId: productTypeId,
          selectedInventoryStatusId: inventoryStatusId,
          tableData: filterRecords({
            inventoryStatusId,
            productTypeId,
          }),
          tags: filterTags({ inventoryStatusId, productTypeId }),
        });
      };
    
      const filterTags = ({ inventoryStatusId, productTypeId }:any) => {
        const inventoryStatus = getInventoryStatusFilterById(inventoryStatusId);
        const productType = getProductTypeFilterById(productTypeId);
        const tags = [];
    
        inventoryStatus && tags.push({ id: 1, children: inventoryStatus.value });
        productType && tags.push({ id: 2, children: productType.value });
    
        return tags;
      };
    
      const getFilteredData = () => {
        if (!state.activeSearch) {
          return state.tableData;
        }
    
        return state.tableData.filter(({ name, sku, price, inventory, type }:any) => {
          const searchData = [name, sku, price, inventory, type]
            .join(' ')
            .toLowerCase();
          const searchQuery = state.activeSearch.trim().toLowerCase();
          return !searchQuery || searchData.indexOf(searchQuery) !== -1;
        });
      };
  return (
    <Box direction='vertical' gap="SP6" >

        <Heading size='small'>Structure</Heading>
        <TagList
            tags={[
                { id: '1', children: 'Tag 1' },
                { id: '2', children: 'Tag 2' },
                { id: '3', children: 'Tag 3' },
                { id: '4', children: 'Tag 4' },
                { id: '5', children: 'Tag 5' },
            ]}
            toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
                label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
                tooltipContent: !isExpanded && 'Show More',
            })}
            actionButton={{ label: 'Action Button' }}
            onTagRemove={() => {}}
        />;

        <Heading size='small'>Size</Heading>

        <Box direction='vertical' gap="SP4" >
            <TagList
                tags={[{ id: '1', children: 'Small' }]}
                actionButton={{ label: 'Small' }}
                onTagRemove={() => {}}
            />

            <TagList
            size="medium"
            tags={[{ id: '1', children: 'Medium' }]}
            actionButton={{ label: 'Medium' }}
            onTagRemove={() => {}}
            />

            <TagList
            size="large"
            tags={[{ id: '1', children: 'Large' }]}
            actionButton={{ label: 'Large' }}
            onTagRemove={() => {}}
            />
        </Box>

        <Heading size='small'>Tag Props</Heading>

        <TagList
        tags={[
            {
            id: '1',
            theme: 'success',
            children: 'theme',
            },
            {
            id: '2',
            children: 'thumb',
            thumb: (
                <Avatar
                imgProps={{
                    src: 'https://www.docs.wixdesignsystem.com/AvatarExample1.jpg',
                }}
                size="size18"
                />
            ),
            },
            {
            id: '3',
            disabled: true,
            children: 'disabled',
            },
            {
            id: '4',
            removable: false,
            children: 'removable',
            },
            {
            id: '5',
            maxWidth: 100,
            children: 'maxWidth',
            },
        ]}
        maxVisibleTags="5"
        onTagRemove={() => {}}
        />;

        <Heading size='small'>Toggle More Button Props</Heading>

        <TagList
            tags={[
                { id: '1', children: 'Tag 1' },
                { id: '2', children: 'Tag 2' },
                { id: '3', children: 'Tag 3' },
                { id: '4', children: 'Tag 4' },
                { id: '5', children: 'Tag 5' },
            ]}
            maxVisibleTags={3}
            actionButton={{ label: 'Action Button' }}
            toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
                label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
                tooltipContent: !isExpanded && 'Show More',
                skin: 'standard',
                priority: 'secondary',
            })}
            onTagRemove={() => {}}
            />;

        <Heading size='small'>Max Visible Tags</Heading>

        <TagList
            tags={[
                { id: '1', children: 'Tag 1' },
                { id: '2', children: 'Tag 2' },
                { id: '3', children: 'Tag 3' },
                { id: '4', children: 'Tag 4' },
                { id: '5', children: 'Tag 5' },
                { id: '6', children: 'Tag 6' },
                { id: '7', children: 'Tag 7' },
                { id: '8', children: 'Tag 8' },
                { id: '9', children: 'Tag 9' },
                { id: '10', children: 'Tag 10' },
                { id: '11', children: 'Tag 11' },
                { id: '12', children: 'Tag 12' },
            ]}
            maxVisibleTags={3}
            toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
                label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
                tooltipContent: !isExpanded && 'Show More',
            })}
            onTagRemove={() => {}}
        />;

        <Heading size='small'>Initially Expanded</Heading>

        <Box direction='vertical' gap="SP4" >
             <Text size="small">Not Initially Expanded</Text>
            <TagList
                tags={initiallytags}
                initiallyExpanded={false}
                toggleMoreButton={initiallytoggleMore}
                onTagRemove={() => {}}
            />
            <Text size="small">Initially Expanded</Text>
            <TagList
                tags={initiallytags}
                initiallyExpanded
                toggleMoreButton={initiallytoggleMore}
                onTagRemove={() => {}}
            />
        </Box>

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Applied filters list</Heading>

        <Card>
        <TableToolbar>
            <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
                <TableToolbar.Title>Products</TableToolbar.Title>
            </TableToolbar.Item>
            </TableToolbar.ItemGroup>
            <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
                <Box gap={2} verticalAlign="middle">
                <Text>Filter by</Text>
                <Dropdown
                    size="small"
                    placeholder="Inventory status"
                    border="round"
                    options={inventoryStatusFilter}
                    selectedId={state.selectedInventoryStatusId}
                    onSelect={(option) =>
                    onOptionChange({ inventoryStatusId: option.id })
                    }
                />
                <Dropdown
                    size="small"
                    placeholder="Type"
                    border="round"
                    options={productTypeFilter}
                    selectedId={state.selectedProductTypeId}
                    onSelect={(option) =>
                    onOptionChange({ productTypeId: option.id })
                    }
                />
                </Box>
            </TableToolbar.Item>
            <TableToolbar.Item>
                <Box width="200">
                <Search
                    value={state.activeSearch}
                    onChange={(e) => setState({ activeSearch: e.target.value })}
                    onClear={() => setState({ activeSearch: '' })}
                />
                </Box>
            </TableToolbar.Item>
            </TableToolbar.ItemGroup>
        </TableToolbar>
        {state.tags.length ? (
            <Table.SubToolbar>
            <Box align="space-between" verticalAlign="middle">
                <Cell>
                <FormField label="Filtered by:" labelPlacement="left">
                    <TagList
                    tags={state.tags}
                    actionButton={{ label: 'Clear All', onClick: clearAll }}
                    onTagRemove={removeTag}
                    />
                </FormField>
                </Cell>
                <Cell>
                <Button
                    size="tiny"
                    skin="inverted"
                    prefixIcon={<Icons.FavoriteSmall />}
                >
                    Save Filter
                </Button>
                </Cell>
            </Box>
            </Table.SubToolbar>
        ) : null}
        <Table data={getFilteredData()} columns={columns}>
            <Table.Content />
        </Table>
        </Card>


    </Box>
)
}

export default TagListComponent