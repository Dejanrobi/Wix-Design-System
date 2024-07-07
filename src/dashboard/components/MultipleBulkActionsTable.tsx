import { Box, Button, Card, Divider, PopoverMenu, Table, TableToolbar } from '@wix/design-system';
import React from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common';

const MultipleBulkActionsTable = () => {

    const records = [
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

    const columns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Price', render: (row:any) => row.price }
    ]

    const MainToolbar = () =>{
        return (
            <TableToolbar>
                <TableToolbar.ItemGroup position='start'>
                    <TableToolbar.Item>
                        <TableToolbar.Label>{records.length} products</TableToolbar.Label>
                    </TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
        )
    }

    const ActionsToolbar = ({ selectedCount, getSelectedIds }) =>(
        <TableToolbar>
            <TableToolbar.ItemGroup position='start'>
                <TableToolbar.Item>
                    <TableToolbar.Label>{`${selectedCount} selected`}</TableToolbar.Label>
                </TableToolbar.Item>

                <TableToolbar.Item>
                   <Box height="18px">
                        <Divider direction='vertical'/> 
                   </Box>
                </TableToolbar.Item>

                <TableToolbar.Item layout='button'>
                    <Button
                        skin='inverted'
                        size='small'
                        prefixIcon={<Icons.UploadExportSmall/>}
                    >
                        Export
                    </Button>

                </TableToolbar.Item>
                <TableToolbar.Item layout='button'>
                    <Button
                        skin='inverted'
                        size='small'
                        prefixIcon={<Icons.DuplicateSmall/>}
                    >
                        Duplicate
                    </Button>

                </TableToolbar.Item>

                <TableToolbar.Item layout='button'>
                    <PopoverMenu
                        textSize='small'
                        triggerElement={
                            <Button
                                skin='inverted'
                                size='small'
                                suffixIcon={<Icons.ChevronDownSmall/>}
                            >
                                More Actions
                            </Button>
                        }
                    >

                        <PopoverMenu.MenuItem
                            text="Archive"
                            prefixIcon={<Icons.ArchiveSmall/>}
                        />
                         <PopoverMenu.MenuItem
                            text="Delete"
                            prefixIcon={<Icons.DeleteSmall/>}
                            skin='destructive'
                        />

                    </PopoverMenu>

                </TableToolbar.Item>
            </TableToolbar.ItemGroup>
        </TableToolbar>
    )
    
  return (
    <Card hideOverflow>
        <Table data={records} columns={columns} showSelection>
            <Table.ToolbarContainer>
                {(selectionContext) => selectionContext.selectedCount === 0 ? MainToolbar() : ActionsToolbar({ ...selectionContext })}
            </Table.ToolbarContainer>
            <Table.Content/>

        </Table>

    </Card>
  )
}

export default MultipleBulkActionsTable