import { Box, Card, Heading, Image, Search, Table, TableActionCell, TableListItem, TableToolbar, Text } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const TableActionCellComponent = () => {

    // Visible Secondary Action
    const visiblesecondaryActions = [
        {
          text: 'Star',
          icon: <Icons.Favorite />,
          onClick: () => {},
        },
        {
          text: 'Download',
          icon: <Icons.DownloadImport />,
          onClick: () => {},
        },
        {
          text: 'Duplicate',
          icon: <Icons.DuplicateSmall />,
          onClick: () => {},
        },
        {
          text: 'Print',
          icon: <Icons.PrintSmall />,
          onClick: () => {},
        },
      ];

    // Divider
    const dividersecondaryActions = [
        {
          text: 'Star',
          icon: <Icons.FavoriteSmall />,
          onClick: () => {},
        },
        {
          text: 'Download',
          icon: <Icons.DownloadImportSmall />,
          onClick: () => {},
        },
        {
          text: 'Duplicate',
          icon: <Icons.DuplicateSmall />,
          onClick: () => {},
        },
        {
          divider: true,
        },
        {
          text: 'Delete',
          icon: <Icons.DeleteSmall />,
          onClick: () => {},
        },
      ];

    // Disabled
    const disabledprimaryAction = {
        text: 'Edit',
        disabled: true,
      };
    
      const disabledsecondaryActions = [
        {
          text: 'Star',
          icon: <Icons.Star />,
          onClick: () => {},
          disabled: true,
          disabledDescription:
            'Message that explains why user cannot access this action',
        },
        {
          text: 'Download',
          icon: <Icons.Download />,
          onClick: () => {},
          disabled: true,
          disabledDescription:
            'Message that explains why user cannot access this action',
        },
        {
          text: 'Duplicate',
          icon: <Icons.DuplicateSmall />,
          onClick: () => {},
          disabled: true,
        },
        {
          text: 'Print',
          icon: <Icons.PrintSmall />,
          onClick: () => {},
          disabled: true,
        },
      ];

    // Pop over menu
    const popoverMenusecondaryActions = [
        {
          text: 'Mark as favorite',
          icon: <Icons.FavoriteSmall />,
          onClick: () => {},
        },
        {
          text: 'Download',
          icon: <Icons.DownloadImportSmall />,
          onClick: () => {},
        },
        {
          text: 'Duplicate',
          icon: <Icons.DuplicateSmall />,
          onClick: () => {},
        },
        {
          divider: true,
        },
        {
          text: 'Delete',
          icon: <Icons.DeleteSmall />,
          onClick: () => {},
        },
      ];

    
    //   Row actions
    const rowactionsrecords = [
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

    
  const rowactionscolumns = [
    { title: 'Name', render: (row:any) => row.name },
    { title: 'SKU', render: (row:any) => row.SKU },
    { title: 'Inventory', render: (row:any) => row.inventory },
    { title: 'Price', render: (row:any) => row.price },
    {
      render: () => (
        <TableActionCell
          onClick={() => {}}
          primaryAction={{
            text: 'Edit',
          }}
          secondaryActions={[
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
          ]}
        />
      ),
    },
  ];

    //   Groups Data
    const groupsdata = [
    {
      imageSrc: 'https://www.docs.wixdesignsystem.com/TravelExample1.jpg',
      title: 'Weekend by the Lake Como',
      subtitle: 'Jun 1, 2020 • Matthew W.',
      translations: 'English, Lithuanian',
    },
    {
      imageSrc: 'https://www.docs.wixdesignsystem.com/TravelExample2.jpg',
      title: 'Top 10 Restaurants in London Chinatown',
      subtitle: 'Jun 1, 2020 • Matthew W.',
      translations: 'English',
    },
    {
      imageSrc: 'https://www.docs.wixdesignsystem.com/TravelExample7.jpg',
      title: 'Bucket List: Indonesia',
      subtitle: 'Jun 1, 2020 • Matthew W.',
      translations: 'English',
    },
  ];

  const [activeSearch, setActiveSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(groupsdata);

  const renderDescription = (title:any, subtitle:any) => (
    <Box direction="vertical" verticalAlign="middle">
      <Text size="medium" weight="normal">
        {title}
      </Text>
      <Text size="tiny" secondary>
        {subtitle}
      </Text>
    </Box>
  );

  const records = filteredData.map(
    ({ imageSrc, title, subtitle, translations }) => ({
      image: <Image width="90px" height="60px" src={imageSrc} />,
      name: (
        <Box direction="vertical" verticalAlign="middle">
          <Text size="medium" weight="normal">
            {title}
          </Text>
          <Text size="tiny" secondary>
            {subtitle}
          </Text>
        </Box>
      ),
      translations,
    }),
  );

  const findFilteredData = (activeSearch:any) => {
    setFilteredData(
      groupsdata.filter(({ title, subtitle, translations }) => {
        const searchData = [title, subtitle, translations]
          .join(' ')
          .toLowerCase();

        const searchQuery = activeSearch.trim().toLowerCase();

        if (searchQuery && searchData.indexOf(searchQuery) === -1) {
          return false;
        }

        return true;
      }),
    );

    setActiveSearch(activeSearch);
  };

  const groupscolumns = [
    { title: '', width: '90px', render: (row:any) => row.image },
    { title: 'Name', width: '40%', render: (row:any) => row.name },
    { title: 'Translations', render: (row:any) => row.translations },
    {
      render: () => (
        <TableActionCell
          onClick={() => {}}
          popoverMenuProps={{
            maxWidth: 'max-content',
          }}
          secondaryActions={[
            {
              text: 'View post',
              icon: <Icons.VisibleSmall />,
              onClick: () => {},
            },
            {
              text: 'Share post',
              icon: <Icons.ShareSmall />,
              onClick: () => {},
            },
            {
              text: 'View post report',
              icon: <Icons.StatisticsSmall />,
              onClick: () => {},
            },
            {
              divider: true,
            },
            {
              text: 'Add to a subscription plan',
              icon: <Icons.PaymentSmall />,
              onClick: () => {},
            },
            {
              text: 'Translate post',
              icon: <Icons.LanguagesSmall />,
              onClick: () => {},
            },
            {
              text: 'Change language',
              icon: <Icons.ReplaceSmall />,
              onClick: () => {},
            },
            {
              divider: true,
            },
            {
              text: 'Duplicate post',
              icon: <Icons.DuplicateSmall />,
              onClick: () => {},
            },
            {
              text: 'Revert to draft',
              icon: <Icons.RefreshSmall />,
              onClick: () => {},
            },
            {
              text: 'Move to trash',
              icon: <Icons.DeleteSmall />,
              onClick: () => {},
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small' >Size</Heading>

        <Box direction='vertical' gap="SP64"  >
            <TableListItem
                onClick={()=>{}}
                options={[
                    {
                        value: (
                            <TableActionCell
                                size='medium'
                                primaryAction={{
                                    text: 'Medium'
                                }}
                            />
                        )
                    }
                ]}
            />

          
            <TableListItem
                onClick={()=>{}}
                options={[
                    {
                        value: (
                            <TableActionCell
                                size='medium'
                                primaryAction={{
                                    text: 'Small'
                                }}
                            />
                        )
                    }
                ]}
            />

        </Box>

        <Heading size='small' >Primary Action</Heading>

        <TableListItem
            onClick={() => {}}
            options={[
                {
                value: (
                    <TableActionCell
                    primaryAction={{
                        text: 'Primary Action',
                    }}
                    />
                ),
                },
            ]}
        />;

        <Heading size='small' >Primary Action Visibility</Heading>

        <Box direction='vertical' gap="SP6" >
        <TableListItem
            onClick={() => {}}
            options={[
            {
                value: (
                <TableActionCell
                    primaryAction={{
                    text: 'On Hover',
                    visibility: 'onHover',
                    }}
                />
                ),
            },
            ]}
        />
        <TableListItem
            onClick={() => {}}
            options={[
            {
                value: (
                <TableActionCell
                    primaryAction={{
                    text: 'Always',
                    visibility: 'always',
                    }}
                />
                ),
            },
            ]}
        />
        </Box>

        <Heading size='small' >Primary Action Icon Affix</Heading>

        <Box direction='vertical' gap="SP6" >
            <TableListItem
                onClick={() => {}}
                options={[
                {
                    value: (
                    <TableActionCell
                        primaryAction={{
                        text: 'Add Members',
                        prefixIcon: <Icons.UserAdd />,
                        }}
                    />
                    ),
                },
                ]}
            />
            <TableListItem
                onClick={() => {}}
                options={[
                {
                    value: (
                    <TableActionCell
                        primaryAction={{
                        text: 'View',
                        suffixIcon: <Icons.ChevronRight />,
                        }}
                    />
                    ),
                },
                ]}
            />
        </Box>

        <Heading size='small' >Secondary Actions</Heading>
        <TableListItem
            onClick={() => {}}
            options={[
                {
                value: (
                    <TableActionCell
                    secondaryActions={[
                        {
                        text: 'Star',
                        icon: <Icons.FavoriteSmall />,
                        onClick: () => {},
                        },
                        {
                        text: 'Download',
                        icon: <Icons.DownloadImportSmall />,
                        onClick: () => {},
                        },
                        {
                        text: 'Duplicate',
                        icon: <Icons.DuplicateSmall />,
                        onClick: () => {},
                        },
                        {
                        text: 'Print',
                        icon: <Icons.PrintSmall />,
                        onClick: () => {},
                        },
                    ]}
                    moreActionsTooltipText="More actions"
                    />
                ),
                },
            ]}
            />;

        <Heading size='small' >No of Visible Secondary Actions</Heading>

        <Box direction='vertical' gap="SP6" >
                <TableListItem
                onClick={() => {}}
                options={[
                {
                    value: (
                    <TableActionCell
                        secondaryActions={visiblesecondaryActions}
                        numOfVisibleSecondaryActions={2}
                    />
                    ),
                },
                ]}
            />
            <TableListItem
                onClick={() => {}}
                options={[
                {
                    value: (
                    <TableActionCell
                        secondaryActions={visiblesecondaryActions}
                        numOfVisibleSecondaryActions={2}
                        alwaysShowSecondaryActions
                    />
                    ),
                },
                ]}
            />
        </Box>

        <Heading size='small' >Divider</Heading>
        
        <TableListItem
            onClick={() => {}}
            options={[
                {
                 value: <TableActionCell secondaryActions={dividersecondaryActions} />,
                },
            ]}
        />

        <Heading size='small' >Disabled</Heading>
        
        <TableListItem
            onClick={() => {}}
            options={[
                {
                value: (
                    <TableActionCell
                    primaryAction={disabledprimaryAction}
                    secondaryActions={disabledsecondaryActions}
                    numOfVisibleSecondaryActions={2}
                    />
                ),
                },
            ]}
        />

        <Heading size='small' >Popover Menu</Heading>
        
        <TableListItem
            onClick={() => {}}
            options={[
                {
                value: (
                    <TableActionCell
                    popoverMenuProps={{
                        placement: 'bottom',
                        showArrow: false,
                        textSize: 'small',
                        maxWidth: '90px',
                        ellipsis: true,
                    }}
                    secondaryActions={popoverMenusecondaryActions}
                    />
                ),
                },
            ]}
        />

        <Heading size='large' >Common Use Cases</Heading>

        <Heading size='small' >Row Actions</Heading>

        <Card>
            <Table data={rowactionsrecords} columns={rowactionscolumns} onRowClick={() => {}}>
                <TableToolbar>
                <TableToolbar.Title>Products</TableToolbar.Title>
                </TableToolbar>
                <Table.Content />
            </Table>
        </Card>

        <Heading size='small' >Groups</Heading>
        
        <Card>
        <Table data={records} columns={groupscolumns}>
            <TableToolbar>
            <TableToolbar.ItemGroup>
                <TableToolbar.Item>
                <Text size="small" secondary>
                    3 posts
                </Text>
                </TableToolbar.Item>
            </TableToolbar.ItemGroup>
            <TableToolbar.ItemGroup>
                <TableToolbar.Item>
                <Search
                    size="small"
                    value={activeSearch}
                    onChange={(event) => findFilteredData(event.target.value)}
                />
                </TableToolbar.Item>
            </TableToolbar.ItemGroup>
            </TableToolbar>
            <Table.Content />
        </Table>
        </Card>


    </Box>
  )
}

export default TableActionCellComponent