import { Accordion, Box, Button, Card, Checkbox, RadioGroup, Search, SidePanel, Slider, Table, TableToolbar, TagList, Text, TextButton, accordionItemBuilder } from '@wix/design-system'
import React, { useEffect, useState } from 'react'
import * as Icons from '@wix/wix-ui-icons-common';


interface AdvancedFiltersTableProps {
    price: any,
    getPriceTagUserFriendlyValue: (value:any)=> void;
    right: any,
    closePanel:()=>void;
    openPanel: ()=>void;
    collections: any;
    initialTags: any,
    tags: any,
    tagExists: (tagDet:any)=>void;
    toggleTag:(tagTog:any)=>void;
    getInventoryTagValue:()=>any;
    handleInventoryTag:(value:any)=>void;
    getPriceTagValue:()=>any;
    removeTag:(tagId:any)=>void;
    changeTags:(initialTags:any)=>void;
    data: any;
    handlePriceTag:(value:any)=>void;
    records: any;
    



}





const AdvancedTableFilters: React.FC<AdvancedFiltersTableProps> = ({ price, getPriceTagUserFriendlyValue, right, closePanel, openPanel, collections, initialTags, tags, tagExists, toggleTag, getInventoryTagValue, handleInventoryTag, getPriceTagValue, removeTag, changeTags, data,handlePriceTag, records  }) => {
    



    

    

    


    
    
    const [display, setDisplay] = useState('none');
    

    const columns = [
        { title: 'Name', render: (row:any) => row.name },
        { title: 'SKU', render: (row:any) => row.SKU },
        { title: 'Inventory', render: (row:any) => row.inventory },
        { title: 'Items left', render: (row:any) => row.items },
        { title: 'Collection', render: (row:any) => row.collection },
        { title: 'Price', render: (row:any) => row.price }
    ]



    

    

    

    

    // SIDE PANEL
    

    

    

    

    
  return (
    <Box>
        <div style={{ display: 'block', overflow: 'hidden', position: 'relative' }}>
        <Card hideOverflow>
            <Table data={records} columns={columns} rowVerticalPadding='medium'>
                <TableToolbar>
                    <TableToolbar.ItemGroup position='start'>
                        <TableToolbar.Item>
                            <TableToolbar.Label>8 products</TableToolbar.Label>
                        </TableToolbar.Item>

                    </TableToolbar.ItemGroup>

                    <TableToolbar.ItemGroup position='end'>
                        <TableToolbar.Item>
                            <Button
                                size='small'
                                priority='secondary'
                                prefixIcon={<Icons.ContentFilterSmall/>}
                                onClick={openPanel}
                            >
                                Filter (3)
                            </Button>
                        </TableToolbar.Item>
                        <TableToolbar.Item>
                            <Search size='small'/>
                        </TableToolbar.Item>

                    </TableToolbar.ItemGroup>
                </TableToolbar>

                <Table.SubToolbar>
                    <Box verticalAlign='middle' width="100%" align='space-between'>
                        <Box gap="12px" verticalAlign='middle'>
                            <Text size='small'>Filtered by: </Text>
                            <TagList
                                tags={tags}
                                actionButton={{
                                    label: 'Clear All',
                                    onClick: ()=>changeTags(initialTags)
                                }}
                                onTagRemove={removeTag}
                            />
                        </Box>

                        <Button
                            skin='inverted'
                            size='tiny'
                            prefixIcon={<Icons.FavoriteSmall/>}
                        >
                            Save Filter
                        </Button>

                    </Box>
                </Table.SubToolbar>
               
               
               
               <Table.Content/>

            </Table>

        </Card>

        <Box>
        
            
        
            <div
                

                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    
                    right: `${right}px`,
                    height: '100vh',
                    boxShadow:
                      '0 3px 24px 0 rgba(22, 45, 61, 0.18), 0 8px 8px 0 rgba(22, 45, 61, 0.12)',
                    transition: 'right 0.4s ease 0s',
                    zIndex: 1000,
                  }}
            >

                <SidePanel onCloseButtonClick={closePanel}>

                    <SidePanel.Header title="Filter"/>

                    <Accordion
                        skin='light'
                        hideShadow
                        size='small'
                        items={[
                            accordionItemBuilder({
                                title: 'Collection',
                                children: (
                                    <Box direction='vertical' gap="12px">
                                        {collections.map((collection:any)=>(
                                            <Checkbox
                                                checked={tagExists({
                                                    type: 'collection',
                                                    value: collection
                                                })}

                                                onChange={()=> toggleTag({type: 'collection', value: collection,})}
                                            >
                                                {collection}
                                            </Checkbox>
                                        ))}

                                    </Box>
                                )
                            }),

                            accordionItemBuilder({
                                title: 'Inventory',
                                children: (
                                    <RadioGroup
                                        value={getInventoryTagValue()}
                                        onChange={handleInventoryTag}
                                    >
                                        <RadioGroup.Radio value="All Statuses">
                                            All Statuses
                                        </RadioGroup.Radio>

                                        <RadioGroup.Radio value="In Stock">
                                            In Stock
                                        </RadioGroup.Radio>
                                        <RadioGroup.Radio value="Out of Stock">
                                            Out of Stock
                                        </RadioGroup.Radio>

                                    </RadioGroup>
                                )
                            }),

                            accordionItemBuilder({
                                title: 'Price',
                                children: (
                                    <Slider
                                        marks={{
                                            0: `$${price[0]}`,
                                            1: `$${price[1]}`,
                                            2: `$${price[2]}`,
                                            3: `$${price[3]}`,
                                        }}

                                        min={0}
                                        max={3}
                                        value={[0, 3]}
                                        onChange={handlePriceTag}
                                        value={getPriceTagValue()}
                                    />
                                )
                            })
                        ]}
                    />

                    <SidePanel.Footer>
                        <Box gap="12px" paddingBottom="SP4">
                            <Text size='small'>3 filters applied</Text>
                            <TextButton size='small'>Clear</TextButton>
                        </Box>

                        <Button priority='secondary' onClick={closePanel} fullWidth>
                            Close

                        </Button>
                    </SidePanel.Footer>
                </SidePanel>

            </div>
        </Box>
        </div>

        

    </Box>
  )
}

export default AdvancedTableFilters;

 