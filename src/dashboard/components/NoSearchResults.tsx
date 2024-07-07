import { Card, Image, Search, Table, TableToolbar, TextButton } from '@wix/design-system';
import React, { useState } from 'react'

const NoSearchResults = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [records, setRecords] = useState([
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
    ])

    const columns = [
        { title: 'Name', render: (row:any)=> row.name },
        { title: 'SKU', render: (row:any)=> row.SKU },
        { title: 'Inventory', render: (row:any)=> row.inventory },
        { title: 'Price', render: (row:any)=> row.price },
    ]

    const _clearSearch = () =>{
        setSearchTerm('');
    }

    const _renderSearch = (expandable:any)=>{
        return (
            <Search
                size='small'
                expandable={expandable}
                onChange={(e)=>{
                    setSearchTerm(e.target.value);
                }}
                value={searchTerm}
                onClear={_clearSearch}
            />
        )
    }

    const _getFilteredData =()=>{
        let data = records;

        if(searchTerm !== ''){
            data = data.filter((row)=>row.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        return data;
    }

    const filteredData = _getFilteredData();

    const _renderEmptyState = ()=>(
        <Table.EmptyState
            title="No results found"
            subtitle="No items match your search criteria. Try to search by another keyword"
            image={
                <Image
                    width="120px"
                    height="120px"
                    transparent={true}
                    src="https://api.lingoapp.com/v4/assets/6F4EC24D-ED41-4136-8050-837D05883F22/preview?size=480&asset_token=SIFGewyrciPVMNHqk6Nw3TI45qyWdJGJ2NOTGxR9FRA&hash=9d772b37ac8c805e780945a422a353b980b28e45&p=complete"

                />
            }
        >
            <TextButton onClick={()=>{_clearSearch()}}>Clear Search</TextButton>

        </Table.EmptyState>
    )
  return (
    <Card hideOverflow>
        <Table data={filteredData} columns={columns} rowVerticalPadding='medium'>
            <TableToolbar>
                <TableToolbar.ItemGroup position='start'>
                    <TableToolbar.Item>
                        <TableToolbar.Label>{filteredData.length}{filteredData.length==1? 'product':'products'}</TableToolbar.Label>
                    </TableToolbar.Item>

                </TableToolbar.ItemGroup>

                <TableToolbar.ItemGroup position='end'>
                    <TableToolbar.Item>{_renderSearch(false)}</TableToolbar.Item>
                </TableToolbar.ItemGroup>
            </TableToolbar>
            {filteredData.length ? <Table.Titlebar/> : _renderEmptyState()}
            <Table.Content titleBarVisible={false} />
        </Table>

    </Card>
  )
}

export default NoSearchResults