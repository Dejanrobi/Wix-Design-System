import { Box, Card, Dropdown, Search, Table, TableToolbar } from '@wix/design-system'
import React, { useEffect, useState } from 'react'


// importing the styles
import '@wix/design-system/styles.global.css';

const TwoTableFilters = () => {

    const [filter, setFilter] = useState({
        collection: { id: '0', value:'All Collections' },
        status: { id: '0', value: 'All Statuses' },
        name: '' 
    })

    const data = [
      {
        id: '1001',
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: '$59.00',
        inventory: 'In stock',
        collection: '2021 Winter',
      },
      {
        id: '1002',
        name: `Black watch`,
        SKU: '00352464',
        price: '$229.00',
        inventory: 'In stock',
        collection: '2021 Summer',
      },
      {
        id: '1003',
        name: 'Reading glasses',
        SKU: '00486430',
        price: '$69.00',
        inventory: 'In stock',
        collection: '2021 Autumn',
      },
      {
        id: '1004',
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock',
        collection: '2021 Winter',
      },
      {
        id: '1005',
        name: 'Leather shoes',
        SKU: '00515642',
        price: '$129.00',
        inventory: 'Out of stock',
        collection: '2021 Spring',
      },
    ];

    const [ records, setRecords ] = useState(data);
    
    useEffect(()=>{
      // console.log("Filters: ", filter);

      const dataFilteredByCollection = filter.collection.value === 'All Collections'? data : data.filter((record)=>record.collection === filter.collection.value)

      const dataFilteredByCollectionAndStatus = filter.status.value === 'All Statuses'? dataFilteredByCollection : dataFilteredByCollection.filter((record)=> record.inventory === filter.status.value)

      setRecords(
        // when we loop through the data using filter, we get an object with a single record, 
        // you then destructure that particular record and obtain the name property, 
        // then check if the filtered data's name includes the value entered in the search bar.
        dataFilteredByCollectionAndStatus.filter(({ name }) => name.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase()))       
      )
    },[filter])

    const columns = [
      { title: 'Name', render: (row:any) => row.name },
      { title: 'SKU', render: (row:any) => row.SKU },
      { title: 'Price', render: (row:any) => row.price },
      { title: 'Inventory', render: (row:any) => row.inventory },
      { title: 'Collection', render: (row:any) => row.collection },
    ]
  

  return (
    <Card hideOverflow>
      <Table data={records} columns={columns} rowVerticalPadding='medium' >
        <TableToolbar>
          <TableToolbar.ItemGroup position='start' >
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
                border='round'
                size='small'
                popoverProps={{ appendTo: 'window' }}
                onSelect={(collection)=>{
                  // here, we are passing the collection name and the collection value.
                  // This replaces the current collection value in the filter state
                  setFilter({...filter, collection})

                  
                }}
                valueParser={({ value }) => value}
              >

              </Dropdown>
            </TableToolbar.Item>

            <TableToolbar.Item>
              <Dropdown
                options={[
                  { id: '0', value: 'All Statuses' },
                  { id: '1', value: 'In stock' },
                  { id: '2', value: 'Out of stock' }
                ]}

                selectedId={filter.status.id}
                border='round'
                size='small'
                onSelect={(status)=>setFilter({...filter, status})}

                popoverProps={{ appendTo: 'window' }}
              />
            </TableToolbar.Item>

          </TableToolbar.ItemGroup>

          <TableToolbar.ItemGroup position='end'>
            <TableToolbar.Item>
              <Search
                size='small'
                onChange={(event)=>setFilter({...filter, name: event.target.value})}

                onClear={()=> setFilter({...filter, name: ''})}
              />
            </TableToolbar.Item>

          </TableToolbar.ItemGroup>
        </TableToolbar>
        <Table.Content/>

      </Table>
        

    </Card>
  )
}

export default TwoTableFilters