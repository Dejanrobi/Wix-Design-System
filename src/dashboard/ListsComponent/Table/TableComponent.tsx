import { AvatarGroup, Badge, Box, Button, Card, Cell, CustomModalLayout, Divider, Dropdown, Heading, Image, Layout, Loader, Page, Pagination, PopoverMenu, Search, Table, TableActionCell, TableToolbar, Text, TextButton, ToggleSwitch } from '@wix/design-system'
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const TableComponent = () => {

    // Structure
    const structureData = Array(5).fill({
        item: 'Data'
    });

    const structureColumns = Array(1).fill({
        title: 'Titlebar',
        render: (row:any) => row.item
    })

    // Skin
    const skinRecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
      const skinColumns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
        },
        {
          title: 'SKU',
          render: (row:any) => row.SKU,
        },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
        },
      ];

    // Row Vertical Padding
    const generateRecords = (item:any)=>[
        { item: item },
        { item: item },
        { item: item },
    ]

    const verticalPaddingColumns = [{ title: 'Vertical padding', render: (row:any) => row.item }]
    
    // Width
    const widthRecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];


      const widthColumns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
        },
        {
          title: 'SKU',
          render: (row:any) => row.SKU,
        },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
        },
      ];

    // Number of columns
    const noOfColumnsrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const twocolumns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
        },
      ];
    
      const fourcolumns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
        },
        {
          title: 'SKU',
          render: (row:any) => row.SKU,
        },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
        },
      ];
    
    

    // Column Alignment
    const columnAlignmentdata = [
        {
          column1: 'Start aligned column',
          column2: 'Center',
          column3: 'End',
        },
        {
          column1: 'Start',
          column2: 'Center aligned column',
          column3: 'End',
        },
        {
          column1: 'Start',
          column2: 'Center',
          column3: 'End aligned column',
        },
      ];
    
      const columnAlignmentcolumns = [
        { title: 'Align', align: 'start', render: (row:any) => row.column1 },
        { title: 'Align', align: 'center', render: (row:any) => row.column2 },
        { title: 'Align', align: 'end', render: (row:any) => row.column3 },
      ];

    //   Column width
    const columnWidthdata = [
        {
          column1: '60%',
          column2: '25%',
          column3: '15%',
        },
        {
          column1: '60%',
          column2: '25%',
          column3: '15%',
        },
        {
          column1: '60%',
          column2: '25%',
          column3: '15%',
        },
      ];
    
      const columnWidthcolumns = [
        { title: 'Column width', width: '60%', render: (row:any) => row.column1 },
        { title: 'Column width', width: '25%', render: (row:any) => row.column2 },
        { title: 'Column width', width: '15%', render: (row:any) => row.column3 },
      ];

    // Column info
    const columnInfodata = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const columnInfocolumns = [
        {
          title: 'Name',
          infoTooltipProps: {
            content: 'Info explaining what this column data is about',
          },
          render: (row:any) => row.name,
        },
        {
          title: 'SKU',
          infoTooltipProps: {
            content: 'Info explaining what this column data is about',
          },
          render: (row:any) => row.SKU,
        },
        {
          title: 'Inventory',
          infoTooltipProps: {
            content: 'Info explaining what this column data is about',
          },
          render: (row:any) => row.inventory,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
        },
      ];
    
    //   Row content
    const recordsExample1 = [
        {
          name: <Box border="1px dotted" height="36px" />,
          SKU: <Box border="1px dotted" height="36px" />,
          price: <Box border="1px dotted" height="36px" />,
          inventory: <Box border="1px dotted" height="36px" />,
        },
        {
          name: <Box border="1px dotted" height="36px" />,
          SKU: <Box border="1px dotted" height="36px" />,
          price: <Box border="1px dotted" height="36px" />,
          inventory: <Box border="1px dotted" height="36px" />,
        },
        {
          name: <Box border="1px dotted" height="36px" />,
          SKU: <Box border="1px dotted" height="36px" />,
          price: <Box border="1px dotted" height="36px" />,
          inventory: <Box border="1px dotted" height="36px" />,
        },
        {
          name: <Box border="1px dotted" height="36px" />,
          SKU: <Box border="1px dotted" height="36px" />,
          price: <Box border="1px dotted" height="36px" />,
          inventory: <Box border="1px dotted" height="36px" />,
        },
      ];
    
      const recordsExample2 = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const recordsExample3 = [
        {
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          visible: (
            <Box verticalAlign="middle" gap="SP2">
              <ToggleSwitch checked />
              <Text size="small" secondary>
                Visible
              </Text>
            </Box>
          ),
        },
        {
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          visible: (
            <Box verticalAlign="middle" gap="SP2">
              <ToggleSwitch checked />
              <Text size="small" secondary>
                Visible
              </Text>
            </Box>
          ),
        },
        {
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          visible: (
            <Box verticalAlign="middle" gap="SP2">
              <ToggleSwitch />
              <Text size="small" secondary>
                Hidden
              </Text>
            </Box>
          ),
        },
        {
          image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          visible: (
            <Box verticalAlign="middle" gap="SP2">
              <ToggleSwitch checked />
              <Text size="small" secondary>
                Visible
              </Text>
            </Box>
          ),
        },
      ];

      const recordsExample4 = [
        {
          role: (
            <Box direction="vertical" gap="3px">
              <Text weight="normal">Account owner</Text>
              <Text size="small" secondary>
                Has full administrative access to the account and can manage all
                sites.
              </Text>
            </Box>
          ),
          members: (
            <AvatarGroup type="condensed" items={[{ name: 'Matt Thompson' }]} />
          ),
        },
        {
          role: (
            <Box direction="vertical" gap="3px">
              <Text weight="normal">Site admin</Text>
              <Text size="small" secondary>
                Has full access to the site but cannot edit the payment info, delete
                or duplicate the site.
              </Text>
            </Box>
          ),
          members: (
            <AvatarGroup
              type="condensed"
              items={[{ name: 'Matt Thompson' }, { name: 'Luke Wheeler' }]}
            />
          ),
        },
        {
          role: (
            <Box direction="vertical" gap="3px">
              <Text weight="normal">Website manager</Text>
              <Text size="small" secondary>
                Can edit the site, manage settings and apps but cannot access Inbox,
                contacts and other sensitive info.
              </Text>
            </Box>
          ),
          members: (
            <AvatarGroup
              type="condensed"
              items={[
                { name: 'Matt Thompson' },
                { name: 'Emma Pike' },
                { name: 'Julia Maria Rogers' },
                { name: 'Margareth Simmons' },
              ]}
            />
          ),
        },
        {
          role: (
            <Box direction="vertical" gap="3px">
              <Text weight="normal">Back-office manager</Text>
              <Text size="small" secondary>
                Can access the Wix Dashboard to manage site settings and apps but
                cannot edit the site.
              </Text>
            </Box>
          ),
          members: <AvatarGroup type="condensed" items={[{ name: 'Emma Pike' }]} />,
        },
      ];

      const rowContentcolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];
    
      const rowContentcolumns2 = [
        { title: '', render: (row:any) => row.image, width: '60px' },
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Visibility', render: (row:any) => row.visible },
        { title: 'Price', render: (row:any) => row.price },
      ];
    
      const rowContentcolumns3 = [
        { title: 'Role', render: (row:any) => row.role, width: '65%' },
        { title: 'Members', render: (row:any) => row.members },
      ];
    
    // Row highlight
    const rowHighlightrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
          highlight: true,
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
          highlight: true,
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
          highlight: false,
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
          highlight: false,
        },
      ];
    
      const rowHighlightcolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];

    // Sorting
    const sortingRecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const sortingColumns = [
        { title: 'Name', render: (row:any) => row.name, sortable: true },
        { title: 'SKU', render: (row:any) => row.SKU, sortable: true },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
          sortable: true,
          sortDescending: false,
        },
        { title: 'Price', render: (row:any) => row.price, sortable: true },
      ];
    
    // Title visibility
    const titleVisibilityrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const titleVisibilitycolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];

    // Horizontal scroll
    const horizontalScrollrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
          items: 24,
          collection: '2021 Winter',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
          items: 190,
          collection: '2021 Winter',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
          items: 12,
          collection: '2021 Winter',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
          items: 0,
          collection: '2021 Winter',
        },
      ];
    
      const columnWidth = 240;
    
      const primaryAction = { text: 'Edit', onClick: () => {} };
    
      const secondaryActions = [
        {
          icon: <Icons.FavoriteSmall />,
          text: 'Mark as favourite',
          onClick: () => {},
        },
      ];
    
      const horizontalScrollcolumns = [
        {
          title: 'Name',
          render: (row:any) => row.name,
          width: columnWidth,
        },
        {
          title: 'SKU',
          render: (row:any) => row.SKU,
          width: columnWidth,
        },
        {
          title: 'Inventory',
          render: (row:any) => row.inventory,
          width: columnWidth,
        },
        {
          title: 'Items left',
          render: (row:any) => row.items,
          width: columnWidth,
        },
        {
          title: 'Collection',
          render: (row:any) => row.collection,
          width: columnWidth,
        },
        {
          title: 'Price',
          render: (row:any) => row.price,
          width: columnWidth,
        },
        {
          render: () => (
            <TableActionCell
              size="small"
              primaryAction={primaryAction}
              secondaryActions={secondaryActions}
              moreActionsTooltipText="More actions"
            />
          ),
          stickyActionCell: true,
          width: 30,
        },
      ];

    // Bulk actions
    const bulkActionsrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const bulkActionscolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];

      const MainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>4 products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };

      const ActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Box height="18px">
                <Divider direction="vertical" />
              </Box>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.UploadExportSmall />}
              >
                Export
              </Button>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );


    //   Multiple Bulk Actions
    const MultipleBulkActionsrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const MultipleBulkActionscolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];
    
      const MultipleBulkActionsMainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>4 products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };
    
      const MultipleBulkActionsActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Box height="18px">
                <Divider direction="vertical" />
              </Box>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.UploadExportSmall />}
              >
                Export
              </Button>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.DuplicateSmall />}
              >
                Duplicate
              </Button>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <PopoverMenu
                textSize="small"
                triggerElement={
                  <Button
                    skin="inverted"
                    size="small"
                    suffixIcon={<Icons.ChevronDownSmall />}
                  >
                    More Actions
                  </Button>
                }
              >
                <PopoverMenu.MenuItem
                  text="Archive"
                  prefixIcon={<Icons.ArchiveSmall />}
                />
                <PopoverMenu.MenuItem
                  text="Delete"
                  prefixIcon={<Icons.DeleteSmall />}
                  skin="destructive"
                />
              </PopoverMenu>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );
    

    // Select all checkbox behaviour
    const SelectAllCheckboxBehaviourrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
      ];
    
      const SelectAllCheckboxBehaviourcolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];
    
      const SelectAllCheckboxBehaviourMainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>4 products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };
    
      const SelectAllCheckboxBehaviourActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Box height="18px">
                <Divider direction="vertical" />
              </Box>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.UploadExportSmall />}
              >
                Export
              </Button>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );

      // Disable selection

      // Just set inventory to: Out of Stock in order to disable the item
      const disableSelectionrecords = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
          unselectable: true,
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
          unselectable: true,
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: (
            <Box direction="vertical">
              <Text size="small">Leather shoes</Text>
              <Text size="tiny" secondary light>
                This item is out of stock
              </Text>
            </Box>
          ),
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
          checkboxTooltipContent: 'This item is out of stock',
        },
      ];
    
      const disableSelectioncolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];
    
      const DisableSelectionMainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>4 products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };
    
      const DisableSelectionActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Box height="18px">
                <Divider direction="vertical" />
              </Box>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.UploadExportSmall />}
              >
                Export
              </Button>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );
    
      // INFINITE SCROLL

      const infiniteScrolltotalProductCount = 50;
      const infiniteScrollfirstContainerRef = React.useRef(null);
      const [infiniteScrollfirstContainer, setinfiniteScrollFirstContainer] = React.useState(null);
      const infiniteScrollsecondContainerRef = React.useRef(null);
      const [infiniteScrollsecondContainer, setinfiniteScrollSecondContainer] = React.useState(null);
    
      const infiniteScrollsdata = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
        {
          name: `Ceramic plant pots`,
          SKU: '00224239',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: `Black table lamp`,
          SKU: '00352464',
          price: '$119.00',
          inventory: 'In stock',
        },
        {
          name: 'Knitted scarf',
          SKU: '00486430',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: 'Home fragrance',
          SKU: '00515642',
          price: '$89.00',
          inventory: 'In stock',
        },
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black table lamp`,
          SKU: '00352464',
          price: '$119.00',
          inventory: 'In stock',
        },
      ];

      const [infiniteScrollfirstExampleRecords, setinfiniteScrollFirstExampleRecords] = React.useState(infiniteScrollsdata);
      const [infiniteScrollsecondExampleRecords, setinfiniteScrollSecondExampleRecords] = React.useState(infiniteScrollsdata);
    
      const infiniteScrollcolumns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price },
      ];

      const fetchMoreFirstTableData = () =>
        new Promise((resolve) => {
          setTimeout(
            () => setinfiniteScrollFirstExampleRecords([...infiniteScrollfirstExampleRecords, ...infiniteScrollsdata]),
            2000,
          );
        });
    
      const fetchMoreSecondTableData = () =>
        new Promise((resolve) => {
          setTimeout(
            () => setinfiniteScrollSecondExampleRecords([...infiniteScrollsecondExampleRecords, ...infiniteScrollsdata]),
            2000,
          );
        });
    
      React.useEffect(() => {
        setinfiniteScrollFirstContainer(infiniteScrollfirstContainerRef);
        setinfiniteScrollSecondContainer(infiniteScrollsecondContainerRef);
      }, []);

      const InfinteScrollMainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>
                  {infiniteScrolltotalProductCount} products
                </TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        );
      };

      const InfiniteScrollActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Box height="18px">
                <Divider direction="vertical" />
              </Box>
            </TableToolbar.Item>
            <TableToolbar.Item layout="button">
              <Button
                skin="inverted"
                size="small"
                prefixIcon={<Icons.UploadExportSmall />}
              >
                Export
              </Button>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );

    // PAGINATION
    const [paginationselectedFirstTablePage, setpaginationSelectedFirstTablePage] = React.useState(1);
    const [paginationselectedSecondTablePage, setpaginationSelectedSecondTablePage] =
      React.useState(1);
  
    const [paginationselected, setpaginationSelected] = React.useState({});

    const paginationdata = [
      {
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
      },
      {
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
      },
      {
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
      },
      {
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock',
      },
      {
        name: `Ceramic plant pots`,
        SKU: '00224239',
        price: '$19.00',
        inventory: 'In stock',
      },
      {
        name: `Black table lamp`,
        SKU: '00352464',
        price: '$119.00',
        inventory: 'In stock',
      },
      {
        name: 'Knitted scarf',
        SKU: '00486430',
        price: '$19.00',
        inventory: 'In stock',
      },
      {
        name: 'Home fragrance',
        SKU: '00515642',
        price: '$89.00',
        inventory: 'In stock',
      },
      {
        name: `Ceramic plant pots`,
        SKU: '00224239',
        price: '$19.00',
        inventory: 'In stock',
      },
      {
        name: `Black table lamp`,
        SKU: '00352464',
        price: '$119.00',
        inventory: 'In stock',
      },
      {
        name: 'Knitted scarf',
        SKU: '00486430',
        price: '$19.00',
        inventory: 'In stock',
      },
      {
        name: 'Home fragrance',
        SKU: '00515642',
        price: '$89.00',
        inventory: 'In stock',
      },
    ];

    const paginationrecords = Array.from(Array(12).keys())
    .map((page) => Array.from(Array(8).keys()).map(() => paginationdata[page]))
    .flat()
    .map((item, index) => ({
      ...item,
      id: `record-${index}`,
    }));

  const [paginationfirstTableRecords, setpaginationFirstTableRecords] = React.useState(
    paginationrecords.slice(0, 8),
  );

  const [paginationsecondTableRecords, setpaginationSecondTableRecords] = React.useState(
    paginationrecords.slice(0, 8),
  );

  const paginationcolumns = [
    { title: 'Name', render: (row:any) => row.name },
    { title: 'SKU', render: (row:any) => row.SKU },
    { title: 'Inventory', render: (row:any) => row.inventory },
    { title: 'Price', render: (row:any) => row.price },
  ];

  const _handleFirstTablePageChange = ({ page, event }:any) => {
    event.preventDefault();
    setpaginationSelectedFirstTablePage(page);
    setpaginationFirstTableRecords(paginationrecords.slice((page - 1) * 8, (page - 1) * 8 + 8));
  };

  const _handleSecondTablePageChange = ({ page, event }:any) => {
    event.preventDefault();
    setpaginationSelectedSecondTablePage(page);
    setpaginationSecondTableRecords(paginationrecords.slice((page - 1) * 8, (page - 1) * 8 + 8));
  };

  const updateSelectedRecords = (props:any) =>
    setpaginationSelected({
      ...paginationselected,
      [`${paginationselectedSecondTablePage}`]: props.filter((p:any) =>
        paginationsecondTableRecords.map(({ id }) => id).includes(p),
      ),
    });
  
    const _renderMainToolbar = () => {
      return (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <Text size="small">
                <b>
                  {(paginationselectedSecondTablePage - 1) * 8 + 1} -
                  {(paginationselectedSecondTablePage - 1) * 8 + 8}
                </b>{' '}
                out of {paginationrecords.length} products
              </Text>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );
    };

    const _renderActionsToolbar = ({ selectedCount, getSelectedIds }:any) => (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <Box gap="12px">
              <Box gap="3px">
                <Text size="small" weight="bold">{`${
                  Object.values(paginationselected).flat().length
                }`}</Text>
                <Text size="small">{`out of ${paginationrecords.length} selected`}</Text>
              </Box>
              <TextButton size="small" weight="normal">
                Select All
              </TextButton>
            </Box>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <Box height="18px">
              <Divider direction="vertical" />
            </Box>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="inverted"
              size="small"
              prefixIcon={<Icons.UploadExportSmall />}
            >
              Export
            </Button>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  
    // No Data Empty State
    const renderTableToolbar = () => (
      <TableToolbar>
        <TableToolbar.Title>Products</TableToolbar.Title>
      </TableToolbar>
    );
  
    const renderEmptyState = () => (
      <Table.EmptyState
        title="Add your first product"
        subtitle="Once you add products, you'll be able to see and manage them here."
        image={
          <Image
            height={120}
            width={120}
            src="https://www.docs.wixdesignsystem.com/EmptyState_Generic1.svg"
            transparent
          />
        }
      >
        <TextButton prefixIcon={<Icons.Add />}>Add Product</TextButton>
      </Table.EmptyState>
    );

  
  // NO SEARCH RESULTS EMPTY STATE
  const [noSearchResultsearchTerm, setnoSearchResultSearchTerm] = React.useState('');
  const [noSearchResultright, setnoSearchResultRight] = React.useState(-440);
  const [noSearchResultdisplay, setnoSearchResultDisplay] = React.useState('none');

  const [noSearchResultrecords, setnoSearchResultRecords] = React.useState([
    {
      name: `Light grey hoodie`,
      SKU: '00224239',
      price: '$59.00',
      inventory: 'In stock',
    },
    {
      name: `Black watch`,
      SKU: '00352464',
      price: '$229.00',
      inventory: 'In stock',
    },
    {
      name: 'Reading glasses',
      SKU: '00486430',
      price: '$69.00',
      inventory: 'In stock',
    },
    {
      name: 'Leather shoes',
      SKU: '00515642',
      price: '$129.00',
      inventory: 'Out of stock',
    },
  ]);

  const noSearchResultcolumns = [
    { title: 'Name', render: (row:any) => row.name },
    { title: 'SKU', render: (row:any) => row.SKU },
    { title: 'Inventory', render: (row:any) => row.inventory },
    { title: 'Price', render: (row:any) => row.price },
  ];

  const _clearSearch = () => {
    setnoSearchResultSearchTerm('');
  };

  const _renderSearch = (expandable:any) => {
    return (
      <Search
        size="small"
        expandable={expandable}
        onChange={(e) => {
          setnoSearchResultSearchTerm(e.target.value);
        }}
        value={noSearchResultsearchTerm}
        onClear={_clearSearch}
      />
    );
  };

  const _getFilteredData = () => {
    let data = noSearchResultrecords;

    if (noSearchResultsearchTerm !== '') {
      data = data.filter((row) =>
        row.name.toUpperCase().includes(noSearchResultsearchTerm.toUpperCase()),
      );
    }

    return data;
  };

  const filteredData = _getFilteredData();

  const _renderEmptyState = () => (
    <Table.EmptyState
      title="No results found"
      subtitle="No items match your search criteria. Try to search by another keyword."
      image={
        <Image
          width="120px"
          height="120px"
          transparent={true}
          src="https://api.lingoapp.com/v4/assets/6F4EC24D-ED41-4136-8050-837D05883F22/preview?size=480&asset_token=SIFGewyrciPVMNHqk6Nw3TI45qyWdJGJ2NOTGxR9FRA&hash=9d772b37ac8c805e780945a422a353b980b28e45&p=complete"
        />
      }
    >
      <TextButton>Clear Search</TextButton>
    </Table.EmptyState>
  );

  // TABLE IN MODAL
  const tableInModaldata = [
    {
      name: `Light grey hoodie`,
      SKU: '00224239',
      price: '$59.00',
      inventory: 'In stock',
    },
    {
      name: `Black watch`,
      SKU: '00352464',
      price: '$229.00',
      inventory: 'In stock',
    },
    {
      name: 'Reading glasses',
      SKU: '00486430',
      price: '$69.00',
      inventory: 'In stock',
    },
    {
      name: 'Leather shoes',
      SKU: '00515642',
      price: '$129.00',
      inventory: 'Out of stock',
    },
    {
      name: `Ceramic plant pots`,
      SKU: '00224239',
      price: '$19.00',
      inventory: 'In stock',
    },
    {
      name: `Black table lamp`,
      SKU: '00352464',
      price: '$119.00',
      inventory: 'In stock',
    },
    {
      name: 'Knitted scarf',
      SKU: '00486430',
      price: '$19.00',
      inventory: 'In stock',
    },
    {
      name: 'Home fragrance',
      SKU: '00515642',
      price: '$89.00',
      inventory: 'In stock',
    },
  ];
  const tableInModalcolumns = [
    { title: 'Name', render: (row:any) => row.name },
    { title: 'SKU', render: (row:any) => row.SKU },
    { title: 'Inventory', render: (row:any) => row.inventory },
    { title: 'Price', render: (row:any) => row.price },
  ];

  // FILTERS
  const [filter, setFilter] = React.useState({
    collection: { id: '0', value: 'All Collections' },
    status: { id: '0', value: 'All Statuses' },
    name: '',
  });

  const filterdata = [
    {
      name: `Light grey hoodie`,
      SKU: '00224239',
      price: '$59.00',
      inventory: 'In stock',
      collection: '2021 Winter',
    },
    {
      name: `Black watch`,
      SKU: '00352464',
      price: '$229.00',
      inventory: 'In stock',
      collection: '2021 Summer',
    },
    {
      name: 'Reading glasses',
      SKU: '00486430',
      price: '$69.00',
      inventory: 'In stock',
      collection: '2021 Autumn',
    },
    {
      name: 'Leather shoes',
      SKU: '00515642',
      price: '$129.00',
      inventory: 'Out of stock',
      collection: '2021 Winter',
    },
    {
      name: 'Leather shoes',
      SKU: '00515642',
      price: '$129.00',
      inventory: 'Out of stock',
      collection: '2021 Spring',
    },
  ];

  const [filterRecords, setfilterRecords] = React.useState(filterdata);

  React.useEffect(() => {
    const dataFilteredByCollection =
      filter.collection.value === 'All Collections'
        ? filterdata
        : filterdata.filter(
            (record) => record.collection === filter.collection.value,
          );

    const dataFilteredByCollectionAndStatus =
      filter.status.value === 'All Statuses'
        ? dataFilteredByCollection
        : dataFilteredByCollection.filter(
            (record) => record.inventory === filter.status.value,
          );

    setfilterRecords(
      dataFilteredByCollectionAndStatus.filter(({ name }) =>
        name.includes(filter.name),
      ),
    );
  }, [filter]);

  const filtercolumns = [
    { title: 'Name', render: (row:any) => row.name },
    { title: 'SKU', render: (row:any) => row.SKU },
    { title: 'Inventory', render: (row:any) => row.inventory },
    { title: 'Collection', render: (row:any) => row.collection },
    { title: 'Price', render: (row:any) => row.price },
  ];


  // ADVANCED FILTERS
  

  // STICK TABLE TOOLBAR
  const StickyTablerecords = [
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample1.jpg" />,
      title: 'Hot to make French toast',
      published: 'Sep 25, 2022',
      category: 'Food · ',
      length: '8 min',
      status: <Badge skin="neutralSuccess">Published</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample2.jpg" />,
      title: 'Homemade pasta',
      published: 'Sep 12, 2022',
      category: 'Food · ',
      length: '11 min',
      status: <Badge skin="neutralSuccess">Published</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample3.jpg" />,
      title: '56 last minute Christmas dinner ideas',
      published: '',
      category: 'Food · ',
      length: '5 min',
      status: <Badge skin="neutralLight">Draft</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample4.jpg" />,
      title: 'Breakfast in 5 minutes',
      published: '',
      category: 'Food · ',
      length: '5 min',
      status: <Badge skin="neutralLight">Draft</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample5.jpg" />,
      title: 'Homemade soup',
      published: '',
      category: 'Food · ',
      length: '2 min',
      status: <Badge skin="neutralLight">Draft</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample1.jpg" />,
      title: 'Hot to make French toast',
      published: 'Sep 25, 2022',
      category: 'Food · ',
      length: '8 min',
      status: <Badge skin="neutralLight">Draft</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample2.jpg" />,
      title: 'Homemade pasta',
      published: 'Sep 12, 2022',
      category: 'Food · ',
      length: '11 min',
      status: <Badge skin="neutralSuccess">Published</Badge>,
    },
    {
      image: <Image width="72px" height="48px" src="https://www.docs.wixdesignsystem.com/FoodExample3.jpg" />,
      title: '56 last minute Christmas dinner ideas',
      published: '',
      category: 'Food · ',
      length: '5 min',
      status: <Badge skin="neutralLight">Draft</Badge>,
    },
  ];

  const stickyTableprimaryAction = {
    text: 'Edit',
    skin: 'standard',
    onClick: () => {},
  };

  const stickyTablesecondaryActions = [
    {
      text: 'Share',
      icon: <Icons.ShareSmall />,
      onClick: () => {},
    },
    {
      text: 'Duplicate',
      icon: <Icons.DuplicateSmall />,
      onClick: () => {},
    },
    {
      text: 'Delete',
      icon: <Icons.DeleteSmall />,
      onClick: () => {},
    },
  ];

  const stickytablecolumns = [
    { title: '', width: '72px', render: (row:any) => row.image },
    {
      title: 'Title',
      render: (row:any) => (
        <Box direction="vertical" gap="3px">
          <Text size="medium" weight="normal">
            {row.title}
          </Text>
          <Text size="tiny" weight="thin" secondary>
            {row.category}
            {row.length}
          </Text>
        </Box>
      ),
      width: '40%',
    },
    { title: 'Publish Date', render: (row:any) => row.published, width: '15%' },
    { title: 'Status', render: (row:any) => row.status, width: '15%' },
    {
      render: (rowData:any) => (
        <TableActionCell
          size="small"
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          numOfVisibleSecondaryActions={1}
          popoverMenuProps={{ appendTo: 'window' }}
          moreActionsTooltipText="More actions"
        />
      ),
    },
  ];


    
    
return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small'>Structure</Heading>

        <Card hideOverflow >
            <Table data={structureData} columns={structureColumns} >
                <TableToolbar>
                    <TableToolbar.Title>Toolbar</TableToolbar.Title>
                </TableToolbar>

                <Table.SubToolbar>
                    <TableToolbar.Label>Subtoolbar</TableToolbar.Label>
                </Table.SubToolbar>

                <Table.Content/>
            </Table>
        </Card>


        <Heading size='small'>Skin</Heading>

        <Box direction='vertical' gap="SP6" >
            <Table skin='standard' data={skinRecords} columns={skinColumns} >
                <Table.Content/>
            </Table>

            <Table skin='neutral' data={skinRecords} columns={skinColumns} >
                <Table.Content/>
            </Table>
        </Box>

        <Heading size='small'>Row Vertical Padding</Heading>
        <Box direction='vertical' gap="SP6" >
            <Table
                rowVerticalPadding='tiny'
                data={generateRecords('Tiny')}
                columns={verticalPaddingColumns}
            >
                <Table.Content/>
            </Table>

            <Table
                rowVerticalPadding='small'
                data={generateRecords('Small (default)')}
                columns={verticalPaddingColumns}
            >
                <Table.Content/>
            </Table>

            <Table
                rowVerticalPadding='medium'
                data={generateRecords('Medium')}
                columns={verticalPaddingColumns}
            >
                <Table.Content/>
            </Table>

            <Table
                rowVerticalPadding='large'
                data={generateRecords('Large')}
                columns={verticalPaddingColumns}
            >
                <Table.Content/>
            </Table>
        </Box>

        <Heading size='small'>Width</Heading>
        <Box direction='vertical' gap="SP6" >
            <Table data={widthRecords} columns={widthColumns} width='100%'  >
                <Table.Content/>
            </Table>

            <Table data={widthRecords} columns={widthColumns} width='80%'  >
                <Table.Content/>
            </Table>
        </Box>

        <Heading size='small'>Number of Columns</Heading>

        <Box direction='vertical' gap="SP6" >
            <Table data={noOfColumnsrecords} columns={twocolumns} >
                <Table.Content/>
            </Table>

            <Table data={noOfColumnsrecords} columns={fourcolumns} >
                <Table.Content/>
            </Table>
        </Box>

        <Heading size='small'>Column Alignment</Heading>

        <Card>
            <Table data={columnAlignmentdata} columns={columnAlignmentcolumns} rowVerticalPadding='medium' >
                <Table.Content/>
            </Table>
        </Card>

        <Heading size='small'>Column Width</Heading>
        <Card>
            <Table data={columnWidthdata} columns={columnWidthcolumns} rowVerticalPadding='medium' >
                <Table.Content/>
            </Table>
        </Card>

        <Heading size='small'>Column Info</Heading>
        <Table data={columnInfodata} columns={columnInfocolumns} rowVerticalPadding='medium' >
            <Table.Content/>
        </Table>

        <Heading size='small'>Row Content</Heading>
        <Box direction='vertical' gap="SP6">
            <Table skin="standard" data={recordsExample1} columns={rowContentcolumns}>
                <Table.Content />
            </Table>
            <Table
                skin="standard"
                data={recordsExample2}
                columns={rowContentcolumns}
                rowVerticalPadding="medium"
            >
                <Table.Content />
            </Table>
            <Table skin="standard" data={recordsExample3} columns={rowContentcolumns2}>
                <Table.Content />
            </Table>
            <Table
                skin="standard"
                data={recordsExample4}
                columns={rowContentcolumns3}
                rowVerticalPadding="medium"
            >
                <Table.Content />
            </Table>
        </Box>

        <Heading size='small'>Row Highlight</Heading>

        <Table
        isRowHighlight={(rowData) => rowData.highlight}
        data={rowHighlightrecords}
        columns={rowHighlightcolumns}
        >
            <Table.Content />
        </Table>

        <Heading size='small'>Sorting</Heading>
        <Table data={sortingRecords} columns={sortingColumns} rowVerticalPadding="medium">
            <Table.Content />
        </Table>

        <Heading size='small'>Column Title Visibility</Heading>

        <Box direction='vertical' gap="SP6" >
        <Card hideOverflow>
            <Table data={titleVisibilityrecords} columns={titleVisibilitycolumns} rowVerticalPadding="medium">
            <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                <TableToolbar.Item>
                    <TableToolbar.Title>Products</TableToolbar.Title>
                </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
            <Table.Content titleBarVisible={true} />
            </Table>
        </Card>
        <Card hideOverflow>
            <Table data={titleVisibilityrecords} columns={titleVisibilitycolumns} rowVerticalPadding="medium">
            <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                <TableToolbar.Item>
                    <TableToolbar.Title>Products</TableToolbar.Title>
                </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
            <Table.Content titleBarVisible={false} />
            </Table>
        </Card>
        </Box>

        <Heading size='small'>Horizontal Scroll</Heading>
{/* 
        <Box direction='vertical' gap="SP6" >
            <Card hideOverflow  >
            <Table
                horizontalScroll
                stickyColumns={1}
                data={horizontalScrollrecords}
                columns={horizontalScrollcolumns}
            >
                <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                    <TableToolbar.Item>
                    <Text size="small">4 products</Text>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
                </TableToolbar>
                <Table.Content />
            </Table>
            </Card>
        </Box> */}

        <Heading size='small'>Bulk Actions</Heading>

        <Box direction='vertical' gap="SP6" >
        <Card>
            <Table data={bulkActionsrecords} columns={bulkActionscolumns} showSelection>
            <Table.ToolbarContainer>
                {(selectionContext) =>
                selectionContext.selectedCount === 0
                    ? MainToolbar()
                    : ActionsToolbar({ ...selectionContext })
                }
            </Table.ToolbarContainer>
            <Table.Content />
            </Table>
        </Card>
        <Card>
            <Table
            data={bulkActionsrecords}
            columns={bulkActionscolumns}
            showSelection
            hideBulkSelectionCheckbox
            >
            <Table.ToolbarContainer>
                {(selectionContext) =>
                selectionContext.selectedCount === 0
                    ? MainToolbar()
                    : ActionsToolbar({ ...selectionContext })
                }
            </Table.ToolbarContainer>
            <Table.Content />
            </Table>
        </Card>
        </Box>

        <Heading size='small'>Multiple Bulk Actions</Heading>
        <Card hideOverflow>
            <Table data={MultipleBulkActionsrecords} columns={MultipleBulkActionscolumns} showSelection>
                <Table.ToolbarContainer>
                {(selectionContext) =>
                    selectionContext.selectedCount === 0
                    ? MultipleBulkActionsMainToolbar()
                    : MultipleBulkActionsActionsToolbar({ ...selectionContext })
                }
                </Table.ToolbarContainer>
                <Table.Content />
            </Table>
        </Card>

        <Heading size='small'>Select All Checkbox Behaviour</Heading>
       <Box  direction='vertical' gap="SP6" >
        <Card>
            <Table
            showSelection
            data={SelectAllCheckboxBehaviourrecords}
            columns={SelectAllCheckboxBehaviourcolumns}
            deselectRowsByDefault={false}
            selectedIds={[0, 1]}
            >
            <Table.ToolbarContainer>
                {(selectionContext) =>
                selectionContext.selectedCount === 0
                    ? SelectAllCheckboxBehaviourMainToolbar()
                    : SelectAllCheckboxBehaviourActionsToolbar({ ...selectionContext })
                }
            </Table.ToolbarContainer>
            <Table.Content />
            </Table>
        </Card>
        <Card>
            <Table
            showSelection
            data={SelectAllCheckboxBehaviourrecords}
            columns={SelectAllCheckboxBehaviourcolumns}
            deselectRowsByDefault={true}
            selectedIds={[0, 1]}
            >
            <Table.ToolbarContainer>
                {(selectionContext) =>
                selectionContext.selectedCount === 0
                    ? SelectAllCheckboxBehaviourMainToolbar()
                    : SelectAllCheckboxBehaviourActionsToolbar({ ...selectionContext })
                }
            </Table.ToolbarContainer>
            <Table.Content />
            </Table>
        </Card>
       </Box>

       <Heading size='small'>Disable Selection</Heading>

       <Card hideOverflow>
        <Table
          showSelection
          data={disableSelectionrecords}
          columns={disableSelectioncolumns}
          selectionDisabled={(rowData:any) => rowData.inventory === 'Out of stock'}
          rowVerticalPadding="medium"
        >
          <Table.ToolbarContainer>
            {(selectionContext) =>
              selectionContext.selectedCount === 0
                ? DisableSelectionMainToolbar()
                : DisableSelectionActionsToolbar({ ...selectionContext })
            }
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>

      <Heading size='small'>Infinite Scroll</Heading>

      <Box direction='vertical' gap="SP6" >
        <div
          style={{ maxHeight: '360px', overflowY: 'scroll' }}
          ref={infiniteScrollfirstContainer}
        >
          <Card stretchVertically={true} hideOverflow>
            <Table
              data={infiniteScrollfirstExampleRecords}
              columns={infiniteScrollcolumns}
              rowVerticalPadding="medium"
              loadMore={fetchMoreFirstTableData}
              infiniteScroll
              hasMore={infiniteScrollfirstExampleRecords.length < infiniteScrolltotalProductCount}
              itemsPerPage={10}
              scrollElement={infiniteScrollfirstContainer && infiniteScrollfirstContainer.current}
              loader={
                <Box align="center" padding="24px 0px">
                  <Loader size="small" />
                </Box>
              }
            >
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <Text size="small">{infiniteScrolltotalProductCount} products</Text>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
              <Table.Content />
            </Table>
          </Card>
        </div>
        <div
          style={{ maxHeight: '360px', overflowY: 'scroll' }}
          ref={infiniteScrollsecondContainer}
        >
          <Card stretchVertically={true}>
            <Table
              showSelection
              data={infiniteScrollsecondExampleRecords}
              columns={infiniteScrollcolumns}
              loadMore={fetchMoreSecondTableData}
              infiniteScroll
              hasMore={infiniteScrollsecondExampleRecords.length < infiniteScrolltotalProductCount}
              itemsPerPage={10}
              totalSelectableCount={infiniteScrolltotalProductCount}
              scrollElement={infiniteScrollsecondContainer && infiniteScrollsecondContainer.current}
              loader={
                <Box align="center" padding="24px 0px">
                  <Loader size="small" />
                </Box>
              }
            >
              <Table.ToolbarContainer>
                {(selectionContext) =>
                  selectionContext.selectedCount === 0
                    ? MainToolbar()
                    : ActionsToolbar({ ...selectionContext })
                }
              </Table.ToolbarContainer>
              <Table.Content />
            </Table>
          </Card>
        </div>
      </Box>

      <Heading size='small'>Pagination</Heading>

      <Box direction='vertical' gap="SP6" >
      <Layout justifyItems="center">
        <Cell>
          <Card hideOverflow>
            <Table
              data={paginationfirstTableRecords}
              columns={paginationcolumns}
              rowVerticalPadding="medium"
            >
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <Text size="small">
                      <b>
                        {(paginationselectedFirstTablePage - 1) * 8 + 1} -
                        {(paginationselectedFirstTablePage - 1) * 8 + 8}
                      </b>{' '}
                      out of {paginationrecords.length} products
                    </Text>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
              <Table.Content />
            </Table>
          </Card>
        </Cell>
        <Cell>
          <Pagination
            currentPage={paginationselectedFirstTablePage}
            totalPages={12}
            onChange={_handleFirstTablePageChange}
          />
        </Cell>
      </Layout>
      <Layout justifyItems="center">
        <Cell>
          <Card hideOverflow>
            <Table
              data={paginationsecondTableRecords}
              columns={paginationcolumns}
              showSelection
              infiniteScroll={false}
              onSelectionChanged={updateSelectedRecords}
              selectedIds={paginationselected[paginationselectedSecondTablePage]}
            >
              <Table.ToolbarContainer>
                {(selectionContext) =>
                  Object.values(paginationselected).flat().length === 0
                    ? _renderMainToolbar()
                    : _renderActionsToolbar({ ...selectionContext })
                }
              </Table.ToolbarContainer>
              <Table.Content />
            </Table>
          </Card>
        </Cell>
        <Cell>
          <Pagination
            currentPage={paginationselectedSecondTablePage}
            totalPages={12}
            onChange={_handleSecondTablePageChange}
          />
        </Cell>
      </Layout>
      </Box>

      <Heading size='small'>No Data Empty State</Heading>
      
      <Card>
        <Table>
          {renderTableToolbar()}
          {renderEmptyState()}
        </Table>
      </Card>

      <Heading size='small'>No Search Results Empty State</Heading>

      <Card hideOverflow>
      <Table data={filteredData} columns={noSearchResultcolumns} rowVerticalPadding="medium">
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>4 products</TableToolbar.Label>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>{_renderSearch(false)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
        {filteredData.length ? <Table.Titlebar /> : _renderEmptyState()}
        <Table.Content titleBarVisible={false} />
      </Table>
      </Card>

      <Heading size='medium'>Common Use Cases</Heading>
      <Heading size='small'>Table in Modal</Heading>

      <Box maxHeight={480}>
      <CustomModalLayout
        removeContentPadding
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        onCloseButtonClick={() => {}}
        title="Add products"
        showFooterDivider
      >
        <Table
          data={tableInModaldata}
          columns={tableInModalcolumns}
          showSelection
          rowVerticalPadding="medium"
        >
          <Table.Content />
        </Table>
      </CustomModalLayout>
    </Box>

    <Heading size='small'>FILTERS</Heading>
    <Box direction='vertical' gap="SP6" >
    <Card hideOverflow>
      <Table data={filterRecords} columns={filtercolumns} rowVerticalPadding="medium">
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <Dropdown
                options={[
                  { id: '0', value: 'All Collections' },
                  { id: '1', value: '2021 Winter' },
                  { id: '2', value: '2021 Autumn' },
                  { id: '3', value: '2021 Summer' },
                  { id: '4', value: '2021 Spring' },
                ]}
                selectedId={filter.collection.id}
                border="round"
                size="small"
                popoverProps={{ appendTo: 'window' }}
                onSelect={(collection) => setFilter({ ...filter, collection })}
                valueParser={({ value }) => value}
              />
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Dropdown
                options={[
                  { id: '0', value: 'All Statuses' },
                  { id: '1', value: 'In stock' },
                  { id: '2', value: 'Out of stock' },
                ]}
                selectedId={filter.status.id}
                border="round"
                size="small"
                onSelect={(status) => setFilter({ ...filter, status })}
                popoverProps={{ appendTo: 'window' }}
              />
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <Search
                size="small"
                onChange={(event) =>
                  setFilter({ ...filter, name: event.target.value })
                }
                onClear={() => setFilter({ ...filter, name: '' })}
              />
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
        <Table.Content />
      </Table>
    </Card>
    </Box>
                

    <Page height="540px">
      <Page.Header title="Blog posts" />
      <Page.Content>
        <Table data={StickyTablerecords} columns={stickytablecolumns}>
          <Page.Sticky>
            <Card>
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <Text size="small">5 items</Text>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
              <Table.Titlebar />
            </Card>
          </Page.Sticky>
          <Card>
            <Table.Content titleBarVisible={false} />
          </Card>
        </Table>
      </Page.Content>
    </Page>
    </Box>
  )
}

export default TableComponent