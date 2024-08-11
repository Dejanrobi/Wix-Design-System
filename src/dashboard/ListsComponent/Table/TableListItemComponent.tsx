import { Badge, Box, Heading, Image, TableActionCell, TableListHeader, TableListItem, Text } from '@wix/design-system'
import React from 'react'

import * as Icons from '@wix/wix-ui-icons-common';

const TableListItemComponent = () => {

    const structureOptions = [
        {
            value: (
              <Box border="1px dotted" >
                Column 1
              </Box>
            ),
          },
          {
            value: (
                <Box border="1px dotted" >
                    Column 2
                </Box>
            ),
          },
          {
            value: (
                <Box border="1px dotted" >
                    Column 3
                </Box>
            ),
          },
          {
            value: (
                <Box border="1px dotted" >
                    Column 4
                </Box>
            ),
          },
    ]

    // expandable
    const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <Box direction='vertical' gap="SP6" >
        <Heading size='small'>Structure</Heading>

        <TableListItem
            options={structureOptions}
        />

        <Heading size='small'>Padding</Heading>

        <Box direction='vertical' gap="SP6" >
            <TableListItem
                horizontalPadding="xxTiny"
                verticalPadding="xxTiny"
                options={[{ value: <Text>xxTiny</Text> }]}
            />
            <TableListItem
                horizontalPadding="xTiny"
                verticalPadding="xTiny"
                options={[{ value: <Text>xTiny</Text> }]}
            />
            <TableListItem
                horizontalPadding="tiny"
                verticalPadding="tiny"
                options={[{ value: <Text>Tiny</Text> }]}
            />
            <TableListItem
                horizontalPadding="small"
                verticalPadding="small"
                options={[{ value: <Text>Small (default)</Text> }]}
            />
            <TableListItem
                horizontalPadding="medium"
                verticalPadding="medium"
                options={[{ value: <Text>Medium</Text> }]}
            />
            <TableListItem
                horizontalPadding="large"
                verticalPadding="large"
                options={[{ value: <Text>Large</Text> }]}
            />
        </Box>

        <Heading size='small'>Drag Handle Size</Heading>

        <Box direction='vertical' gap="SP6" >
        <TableListItem
            draggable
            dragHandleSize="large"
            showDivider
            verticalPadding="tiny"
            options={[
            {
                value: <Text size="medium">Large drag handle (default)</Text>,
            },
            ]}
        />
        <TableListItem
            draggable
            dragHandleSize="small"
            showDivider
            horizontalPadding="tiny"
            verticalPadding="xTiny"
            options={[
            { width: 'auto' },
            {
                value: <Text size="small">Small drag handle</Text>,
            },
            ]}
        />
        </Box>

        <Heading size='small'>Draggable Item Indication</Heading>

        <Box direction='vertical' gap="SP6" >
        <TableListItem draggable options={[{ value: <Text>Draggable</Text> }]} />
        <TableListItem
            draggable
            dragging
            options={[{ value: <Text>Draggable active</Text> }]}
        />
        <TableListItem
            draggable
            dragDisabled
            options={[{ value: <Text>Draggable disabled</Text> }]}
        />
        </Box>

        <Heading size='small'>Border</Heading>
        <Box direction='vertical' gap="SP6" >
        <TableListItem
            showDivider
            verticalPadding="tiny"
            options={[
            {
                value: <Text size="small">No border (default)</Text>,
            },
            ]}
        />

        <TableListItem
            border={true}
            showDivider
            verticalPadding="tiny"
            options={[
            {
                value: <Text size="small">Border</Text>,
            },
            ]}
        />
        </Box>

        <Heading size='small'>Expandable</Heading>
        <Box direction='vertical' >
            <TableListItem
                expanded={isExpanded}
                expandable
                draggable
                dragHandleSize="small"
                showDivider
                horizontalPadding="tiny"
                verticalPadding="xTiny"
                onClickExpand={() => setIsExpanded(!isExpanded)}
                options={[
                {
                    value: <Text size="small">Expandable</Text>,
                },
                ]}
            />
            {isExpanded && (
                <Box border="1px dotted" >
                <Box verticalAlign="middle" align="center">
                    <Text size="small">Content</Text>
                </Box>
                </Box>
            )}
        </Box>

        <Heading size='small'>Selectable</Heading>
       
        <Box direction='vertical' gap="SP4" >
            <TableListItem checkbox options={[{ value: <Text>Checkbox</Text> }]} />
            <TableListItem
                checkbox
                checked
                options={[{ value: <Text>Selected checkbox</Text> }]}
            />
            <TableListItem
                checkbox
                checkboxDisabled
                options={[{ value: <Text>Disabled checkbox</Text> }]}
            />
        </Box>

        <Heading size='small'>Divider</Heading>

        <Box direction='vertical' gap="SP4" >
            <Box direction='vertical' gap={0} >
                <TableListItem options={[{ value: <Text>Divider off</Text> }]} />
                <TableListItem options={[{ value: <Text>Divider off</Text> }]} />
                <TableListItem options={[{ value: <Text>Divider off</Text> }]} />
            </Box>
            <Box direction='vertical' gap={0} >
                <TableListItem showDivider options={[{ value: <Text>Divider on</Text> }]} />
                <TableListItem showDivider options={[{ value: <Text>Divider on</Text> }]} />
                <TableListItem options={[{ value: <Text>Divider off</Text> }]} />
            </Box>

        </Box>

        <Heading size='small'>Column Width</Heading>

        <TableListItem
            options={[
                {
                value: (
                    <Box border="1px dotted">
                        Width depends on content
                    </Box>
                ),
                width: 'max-content',
                },
                {
                value: (
                    <Box border="1px dotted">
                        Fills available space
                    </Box>
                ),
                width: '1fr',
                },
            ]}
        />;

        <Heading size='small'>Column Alignment</Heading>

        <Box direction='vertical' gap={0} >
        <TableListItem
            showDivider
            options={[
            {
                value: <Text>Left</Text>,
                align: 'left',
            },
            {
                value: <Text>Center</Text>,
                align: 'center',
            },
            {
                value: <Text>Right</Text>,
                align: 'right',
            },
            ]}
        />
        <TableListItem
            options={[
            {
                value: <Text>Left with longer text</Text>,
                align: 'left',
            },
            {
                value: <Text>Center with longer text</Text>,
                align: 'center',
            },
            {
                value: <Text>Right with longer text</Text>,
                align: 'right',
            },
            ]}
        />
        </Box>

        <Heading size='small'>Actionable</Heading>

        <TableListItem
            onClick={() => {}}
            options={[
                { value: <Text>Actionable item</Text> },
                {
                value: (
                    <TableActionCell
                    primaryAction={{
                        text: 'Click me',
                        onClick: () => {},
                    }}
                    />
                ),
                align: 'right',
                },
            ]}
        />;

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Grouped List</Heading>

        <Box direction='vertical' >
            <TableListHeader options={[{ value: 'In review' }]} />
            <TableListItem
                showDivider
                verticalPadding="tiny"
                onClick={() => {}}
                options={[
                {
                    value: <Image width="90px" height="60px" src="https://www.docs.wixdesignsystem.com/TravelExample1.jpg" />,
                    width: 'auto',
                },
                {
                    value: (
                    <Box direction="vertical">
                        <Text weight="normal">Weekend by the Lake Como</Text>
                        <Text size="small" secondary>
                        Sep 23, 2022
                        </Text>
                    </Box>
                    ),
                },
                {
                    value: <Badge skin="warningLight">In review</Badge>,
                    width: 'auto',
                },
                {
                    value: (
                    <TableActionCell
                        size="small"
                        primaryAction={{
                        text: 'View',
                        skin: 'standard',
                        onClick: () => {},
                        }}
                        secondaryActions={[
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
                            text: 'Delete',
                            icon: <Icons.DeleteSmall />,
                            onClick: () => {},
                        },
                        ]}
                        numOfVisibleSecondaryActions={0}
                    />
                    ),
                    width: 'auto',
                },
                ]}
            />
            <TableListItem
                verticalPadding="tiny"
                onClick={() => {}}
                options={[
                {
                    value: <Image width="90px" height="60px" src="https://www.docs.wixdesignsystem.com/TravelExample2.jpg" />,
                    width: 'auto',
                },
                {
                    value: (
                    <Box direction="vertical">
                        <Text weight="normal">Top 10 Restaurants in London Chinatown</Text>
                        <Text size="small" secondary>
                        Jun 1, 2022
                        </Text>
                    </Box>
                    ),
                },
                {
                    value: <Badge skin="warningLight">In review</Badge>,
                    width: 'auto',
                },
                {
                    value: (
                    <TableActionCell
                        size="small"
                        primaryAction={{
                        text: 'View',
                        skin: 'standard',
                        onClick: () => {},
                        }}
                        secondaryActions={[
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
                            text: 'Delete',
                            icon: <Icons.DeleteSmall />,
                            onClick: () => {},
                        },
                        ]}
                        numOfVisibleSecondaryActions={0}
                    />
                    ),
                    width: 'auto',
                },
                ]}
            />
            <TableListHeader options={[{ value: 'Approved' }]} />
            <TableListItem
                showDivider
                verticalPadding="tiny"
                onClick={() => {}}
                options={[
                {
                    value: <Image width="90px" height="60px" src="https://www.docs.wixdesignsystem.com/TravelExample7.jpg" />,
                    width: 'auto',
                },
                {
                    value: (
                    <Box direction="vertical">
                        <Text weight="normal">Bucket List: Indonesia</Text>
                        <Text size="small" secondary>
                        Apr 13, 2022
                        </Text>
                    </Box>
                    ),
                },
                {
                    value: <Badge skin="neutralSuccess">Approved</Badge>,
                    width: 'auto',
                },
                {
                    value: (
                    <TableActionCell
                        size="small"
                        primaryAction={{
                        text: 'View',
                        skin: 'standard',
                        onClick: () => {},
                        }}
                        secondaryActions={[
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
                            text: 'Delete',
                            icon: <Icons.DeleteSmall />,
                            onClick: () => {},
                        },
                        ]}
                        numOfVisibleSecondaryActions={0}
                    />
                    ),
                    width: 'auto',
                },
                ]}
            />
            <TableListItem
                showDivider
                verticalPadding="tiny"
                onClick={() => {}}
                options={[
                {
                    value: <Image width="90px" height="60px" src="https://www.docs.wixdesignsystem.com/TravelExample4.jpg" />,
                    width: 'auto',
                },
                {
                    value: (
                    <Box direction="vertical">
                        <Text weight="normal">A weekend in a desert</Text>
                        <Text size="small" secondary>
                        May 19, 2022
                        </Text>
                    </Box>
                    ),
                },
                {
                    value: <Badge skin="neutralSuccess">Approved</Badge>,
                    width: 'auto',
                },
                {
                    value: (
                    <TableActionCell
                        size="small"
                        primaryAction={{
                        text: 'View',
                        skin: 'standard',
                        onClick: () => {},
                        }}
                        secondaryActions={[
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
                            text: 'Delete',
                            icon: <Icons.DeleteSmall />,
                            onClick: () => {},
                        },
                        ]}
                        numOfVisibleSecondaryActions={0}
                    />
                    ),
                    width: 'auto',
                },
                ]}
            />
            <TableListItem
                showDivider
                verticalPadding="tiny"
                onClick={() => {}}
                options={[
                {
                    value: <Image width="90px" height="60px" src="https://www.docs.wixdesignsystem.com/TravelExample5.jpg" />,
                    width: 'auto',
                },
                {
                    value: (
                    <Box direction="vertical">
                        <Text weight="normal">Top places to visit in Portugal</Text>
                        <Text size="small" secondary>
                        Mar 30, 2022
                        </Text>
                    </Box>
                    ),
                },
                {
                    value: <Badge skin="neutralSuccess">Approved</Badge>,
                    width: 'auto',
                },
                {
                    value: (
                    <TableActionCell
                        size="small"
                        primaryAction={{
                        text: 'View',
                        skin: 'standard',
                        onClick: () => {},
                        }}
                        secondaryActions={[
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
                            text: 'Delete',
                            icon: <Icons.DeleteSmall />,
                            onClick: () => {},
                        },
                        ]}
                        numOfVisibleSecondaryActions={0}
                    />
                    ),
                    width: 'auto',
                },
                ]}
            />
        </Box>

    </Box>
  )
}

export default TableListItemComponent