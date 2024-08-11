import { Box, Card, Heading, SortableListBase, TableListHeader, TableListItem, Text } from '@wix/design-system'
import React from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common'

const TableListHeaderComponent = () => {

    const indexToColumn = {
        0: 'fieldName',
        1: 'type',
        2: 'appliesTo',
      };

    const [headerOptions, setHeaderOptions] = React.useState([
        {
            value: 'Field name',
            width: '3fr',
            sortable: true,
            sortDescending: true,
        },
        {
            value: 'Type',
            width: '3fr',
            sortable: true,
            sortDescending: true,
        },
        {
            value: 'Applies to',
            width: '2fr',
            sortable: true,
            sortDescending: true,
        },
    ]);

    const [items, setItems] = React.useState([
        { id: 0, text: 'Display info', isHeading: true },
        {
          id: 1,
          fieldName: 'Title',
          type: 'Public',
          appliesTo: 'All members',
        },
        {
          id: 2,
          text: 'Account',
          isHeading: true,
        },
        {
          id: 3,
          fieldName: 'First name',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 4,
          fieldName: 'Last name',
          type: 'Public',
          appliesTo: 'All members',
        },
        {
          id: 5,
          fieldName: 'Email',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 6,
          fieldName: 'Phone',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 7,
          fieldName: 'Company',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 8,
          text: 'Address',
          isHeading: true,
        },
        {
          id: 9,
          fieldName: 'Street',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 10,
          fieldName: 'City',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 11,
          fieldName: 'Zip code',
          type: 'Private',
          appliesTo: 'All members',
        },
        {
          id: 12,
          fieldName: 'Country',
          type: 'Private',
          appliesTo: 'All members',
        },
      ]);

    const itemStyleProps = {
        common: {
            boxSizing: 'border-box',
            width: '100%',
            height: '50px',
            backgroundColor: 'WHITE',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'B20',
            borderRadius: '6px',
            verticalAlign: 'middle',
            paddingLeft: '12px',
            marginBottom: '0px',
        },
        placeholder: {
            borderStyle: 'none',
            backgroundColor: 'B50',
        },
    };

    const handleDrop = ({ removedIndex, addedIndex }:any) => {
        const nextItems = [...items];
        nextItems.splice(addedIndex, 0, ...nextItems.splice(removedIndex, 1));
        setItems(nextItems);
      };
    
      const renderItem = ({ isPlaceholder, isPreview, item }:any) => {
        return (
          <div>
            {item.isHeading && (
              <Card.Subheader
                title={<Text size="small">{item.text}</Text>}
                // skin="neutral"
              />
            )}
            {!item.isHeading && isPlaceholder && (
              <Box {...itemStyleProps.common} {...itemStyleProps.placeholder}></Box>
            )}
            {!item.isHeading && !isPlaceholder && (
              <TableListItem
                draggable
                showDivider
                onClick={() => {}}
                options={[
                  { value: <Text>{item.fieldName}</Text>, width: '3fr' },
                  {
                    value: (
                      <Box gap="SP1" color="D30">
                        <Icons.LockLockedSmall />
                        <Text secondary size="small">
                          {item.type}
                        </Text>
                      </Box>
                    ),
                    width: '3fr',
                  },
                  {
                    value: (
                      <Text secondary skin="primary" size="small">
                        {item.appliesTo}
                      </Text>
                    ),
                    width: '2fr',
                  },
                ]}
              />
            )}
          </div>
        );
      };


      const canDrag = ({ item }:any) => {
        return !item.isHeading;
      };
    
      const sortItems = (index:any, sortDescending:any) => {
        const sortedItems = items
          .reduce((array, currentItem) => {
            if (currentItem.isHeading || array[array.length - 1][0].isHeading) {
              array.push([currentItem]);
            } else {
              array[array.length - 1].push(currentItem);
            }
    
            return array;
          }, [])
          .map((itemsArray) => {
            const returnValueWhenPreviousBigger = sortDescending ? 1 : -1;
            return itemsArray.sort((a, b) => {
              if (a[indexToColumn[index]] < b[indexToColumn[index]]) {
                return -returnValueWhenPreviousBigger;
              }
    
              if (a[indexToColumn[index]] > b[indexToColumn[index]]) {
                return returnValueWhenPreviousBigger;
              }
    
              return 0;
            });
          })
          .flat();
    
        setItems(sortedItems);
      };
    
      const handleSort = (index) => {
        const sortDescending = headerOptions[index].sortDescending;
        const nextHeaderOptions = [...headerOptions];
        nextHeaderOptions[index].sortDescending = !sortDescending;
        setHeaderOptions(nextHeaderOptions);
    
        sortItems(index, !sortDescending);
      };
    
    
    
  return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small'>Structure</Heading>

        <Box  direction='vertical' gap="SP4" >
            <TableListHeader
                options={[
                    { value: <Box border="1px dotted" height="30px" width="150px" /> },
                    { value: <Box border="1px dotted" height="30px" width="150px" /> },
                    { value: <Box border="1px dotted" height="30px" width="150px" /> },
                    { value: <Box border="1px dotted" height="30px" width="150px" /> }
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Name' },
                    { value: 'Email' },
                    { value: 'Phone' },
                    { value: 'Company' },
                ]}
            />
        </Box>

        <Heading size='small'>Number of Columns</Heading>

        <Box direction='vertical' gap="SP4" >
            <TableListHeader
                options={[
                    { value: 'Name', width: '1fr' }
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Name', width: '1fr' },
                    { value: 'Email', width: '1fr' }
                    
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Name', width: '1fr' },
                    { value: 'Email', width: '1fr' },
                    { value: 'Phone', width: '1fr' }
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Name', width: '1fr' },
                    { value: 'Email', width: '1fr' },
                    { value: 'Phone', width: '1fr' },
                    { value: 'Company', width: '1fr' }
                ]}
            />

        </Box>

        <Heading size='small'>Column Width</Heading>

        <Box direction='vertical' gap="SP4" >
            <TableListHeader
                options={[
                { value: 'Name', width: '25%' },
                { value: 'Email', width: '25%' },
                ]}
            />
            <TableListHeader
                options={[
                { value: 'Name', width: '1fr' },
                { value: 'Email', width: '1fr' },
                ]}
            />
        </Box>

        <Heading size='small'>Column Alignment</Heading>

        <Box direction='vertical' gap="SP4" >
            <TableListHeader
                options={[
                    { value: 'Align: Left', align: 'left' }
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Align: Center', align: 'center' }
                ]}
            />

            <TableListHeader
                options={[
                    { value: 'Align: Right', align: 'right' }
                ]}
            />
        </Box>

        <Heading size='small'>Column Info</Heading>

        <Box direction='vertical' gap="SP4" >
        <TableListHeader
            options={[
                {
                value: 'Name',
                infoTooltipProps: {
                    content: 'Add additional info to explain this column value here',
                },
                },
                {
                value: 'Email',
                infoTooltipProps: {
                    content: 'Add additional info to explain this column value here',
                },
                },
                { value: 'Phone' },
                {
                value: 'Company',
                infoTooltipProps: {
                    content: 'Add additional info to explain this column value here',
                },
                },
            ]}
        />;
        </Box>

        <Heading size='small'>Selectable</Heading>

        <Box direction='vertical' gap="SP4" >
            <TableListHeader
                options={[{ value: 'Hidden (default)' }]}
                checkboxState="hidden"
            />

            <TableListHeader
                options={[{ value: 'Normal' }]}
                checkboxState="normal"
                onCheckboxChange={() => {}}
            />

            <TableListHeader
                options={[{ value: 'Checked' }]}
                checkboxState="checked"
                onCheckboxChange={() => {}}
            />

            <TableListHeader
                options={[{ value: 'Indeterminate' }]}
                checkboxState="indeterminate"
                onCheckboxChange={() => {}}
            />

            <TableListHeader
                options={[{ value: 'Has error' }]}
                checkboxState="hasError"
                onCheckboxChange={() => {}}
            />
        </Box>
        
        <Heading size='small'>Sortable</Heading>

        <TableListHeader
            onSortChange={() => {}}
            options={[
                { value: 'Name', sortable: true, sortDescending: true },
                { value: 'Email', sortable: true },
                { value: 'Phone', sortable: true },
                { value: 'Company', sortable: true },
        ]}
        />;

        <Heading size='medium'>Common Use Cases</Heading>

        <Heading size='small'>Table with sections</Heading>

        <Card hideOverflow>
            <Card.Header
                title="Customize form"
                subtitle="Set up fields and decide what info appears on public profile pages"
            />
            <Box direction="vertical">
                <TableListHeader onSortChange={handleSort} options={headerOptions} />
                <SortableListBase
                    items={items}
                    renderItem={renderItem}
                    onDrop={handleDrop}
                    canDrag={canDrag}
                />
            </Box>
        </Card>

    </Box>
  )
}

export default TableListHeaderComponent