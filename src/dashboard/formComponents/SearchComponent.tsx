import { Box, Button, Card, Dropdown, FormField, Heading, Search, Table, TableToolbar, Text } from '@wix/design-system'
import React, { useState } from 'react'


// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const SearchComponent = () => {

    const [text, setText] = useState('');
    const options = [
        { value: 'Option 1', id: 0 },
        { value: 'Option 2', id: 1 },
        { value: 'James momago', id: 2 },
        { value: 'Samson Mwita', id: 3 },
        { value: 'Option 5', id: 4 },
    ]

    // Clear Button
    const [clearInputText, setClearInputText] = useState('Click clear button to erase this value.')

    // Debounce
    const [debounceTextInstant, setDebounceTextInstant] = useState('');
    const [debounceTextDelayed, setDebounceTextDelayed] = useState('')

    // Filtering the List
    const [tableFilterBy, setTableFilterBy] = useState('');
    const [tableActiveSearch, setTableActiveSearch] = useState('');


    const tableRecords = [
      {
        name: 'Red slippers',
        sku: 25232564,
        status: 'In stock',
        price: '$14.00',
      },
      { name: 'Velvet hat', sku: 35246432, status: 'In stock', price: '$29.00' },
      {
        name: 'Silver jeans',
        sku: 4864310,
        status: 'Out of stock',
        price: '$69.00',
      },
      {
        name: 'Orange socks',
        sku: 125156422,
        status: 'In stock',
        price: '$7.00',
      },
    ]

    const tableColumns = [
      { title: 'Name', render: (row:any) => row.name },
      { title: 'SKU', render: (row:any) => row.sku },
      { title: 'Status', render: (row:any) => row.status },
      { title: 'Price', render: (row:any) => row.price },
    ];

    const tableFilterOptions = [
      { id: '', value: 'All statuses' },
      { id: 'In stock', value: 'In stock' },
      { id: 'Out of stock', value: 'Out of stock' },
    ];

    const getFilteredData = () =>
      tableRecords.filter(({ name, sku, status, price }) => {
        if (tableFilterBy && status !== tableFilterBy) {
          return false;
        }
  
        const searchData = [name, sku, status, price].join(' ').toLowerCase();
        const searchQuery = tableActiveSearch.trim().toLowerCase();
        if (searchQuery && searchData.indexOf(searchQuery) === -1) {
          return false;
        }
  
        return true;
      });

      
      const MainToolbar = () => {
        return (
          <TableToolbar>
            <TableToolbar.ItemGroup position='start'>
              <TableToolbar.Item>
                <TableToolbar.Title>Products</TableToolbar.Title>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>

            <TableToolbar.ItemGroup position='end' >
              <TableToolbar.Item>
                <TableToolbar.Label>
                  Filter by

                  <Box width="175" >
                    <Dropdown
                      size='small'
                      options={tableFilterOptions}
                      selectedId={tableFilterBy}
                      border='round'
                      onSelect={({ id }:{id:any}) => setTableFilterBy(id)}
                    />
                  </Box>
                </TableToolbar.Label>
              </TableToolbar.Item>

              <TableToolbar.Item>
                <Box width="200" >
                  <Search
                    size='small'
                    value={tableActiveSearch}
                    onChange={(e)=> setTableActiveSearch(e.target.value)}
                    onClear={()=> setTableActiveSearch('')}
                  />
                </Box>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        )
      }


      const ActionsToolbar = ({ selectedCount, getSelectedId }: {selectedCount:any, getSelectedId:any}) => (
        <TableToolbar>
          <TableToolbar.ItemGroup position='start' >
            <TableToolbar.Item>
              <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>

          <TableToolbar.ItemGroup position='end' >
            <TableToolbar.Item layout='button' >
              <Button skin='light' prefixIcon={<Icons.Upload/>} >
                Export
              </Button>
            </TableToolbar.Item>

            <TableToolbar.Item layout='button' >
              <Button skin='light' prefixIcon={<Icons.Duplicate/>} >
                Duplicate
              </Button>
            </TableToolbar.Item>

            <TableToolbar.Item layout='button' >
              <Button skin='light' prefixIcon={<Icons.Edit/>} >
                Edit
              </Button>
            </TableToolbar.Item>

            <TableToolbar.Divider/>

            <TableToolbar.Item>
              <Search
                expandable
                value={tableActiveSearch}
                onChange={(e)=>setTableActiveSearch(e.target.value)}
              />
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>

      )





   

    
  return (
    <Box direction='vertical' gap="SP6">
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Options</Heading>
        </Box>

        <Search
            value={text}
            onChange={(e)=> setText(e.target.value)}
            onClear={()=>setText('')}
            options={options}
            predicate={(option:any) => option.value.indexOf(text) !== -1}
        />

        <Heading size='small'>Option Container Dimensions</Heading>
        <Search
            value={text}
            onChange={(e)=> setText(e.target.value)}
            onClear={()=>setText('')}
            options={options}
            maxHeightPixels="160px"
            minWidthPixels="300px"
            dropdownWidth='auto'
            predicate={(option:any) => option.value.indexOf(text) !== -1}

            popoverProps={{
                placement: 'bottom-start'
            }}
        />

        <Heading size='small'>Size</Heading>
        <Box direction='vertical' gap="SP4" >
            <Search size='large' placeholder='Large' />
            <Search size='medium' placeholder='Medium' />
            <Search size='small' placeholder='Small' />
        </Box>

        <Heading size='small'>Border</Heading>

        <Box direction='vertical' gap="SP4" >
            <Search border='round' placeholder='Search...' />
            <Search border='standard' placeholder='Search...' />
            <Search border='bottomLine' placeholder='Search...' />
            <Search border='none' placeholder='Search...' />
            
        </Box>

        <Heading size='small'>Status</Heading>

        <Box direction='vertical' gap="SP4" >
            <Search status='loading' placeholder='Search...' />
            <Search status='error' placeholder='Search...' />
            <Search status='warning' placeholder='Search...' />
            
        </Box>

        <Heading size='small'>Status Message</Heading>

        <FormField status='loading' statusMessage="This is a loading message." >
            <Search placeholder='See message below' />
        </FormField>

        <Search
            status='loading'
            placeholder='Hover on the loader'
            statusMessage="This is a loading message"
        />

        <Heading size='small'>Read-only and Disabled</Heading>
        <Search readOnly value="Read only" />
        <Search disabled value="Disabled" />

        <Heading size='small'>Clear Button</Heading>
        <Search
            value={clearInputText}
            clearButton
            onChange={(e)=>setClearInputText(e.target.value)}
            onClear={()=> setClearInputText('')}
        />

        <Heading size='small'>Expandable</Heading>

        <Search expandable />
        <Search expandable expandWidth="400px" />

        <Heading size='small'>Debounce</Heading>

        <Box direction='vertical' gap="12px">
            <Search
                placeholder='Search for instant results...'
                value={debounceTextInstant}
                onChange={(e)=> setDebounceTextInstant(e.target.value)}
                onClear={()=>setDebounceTextInstant('')}
            />

            <Text size='tiny'>Results for: </Text>
            <Text size='tiny' weight='bold' skin='primary' >
                {debounceTextInstant}
            </Text>
        </Box>

        <Box direction='vertical' gap="12px">
            <Search
                placeholder='Search for delayed results...'
                debounceMs={250}
                value={debounceTextDelayed}
                onChange={(e)=> setDebounceTextDelayed(e.target.value)}
                onClear={()=>setDebounceTextDelayed('')}
            />

            <Text size='tiny'>Results for: </Text>
            <Text size='tiny' weight='bold' skin='primary' >
                {debounceTextDelayed}
            </Text>
        </Box>

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Filtering the List</Heading>
        

        <Card>
          <Table showSelection data={getFilteredData()} columns={tableColumns} >
            <Table.ToolbarContainer>
              {(selectionContext:any)=>
                selectionContext.selectedCount === 0 
                  ? MainToolbar()
                  : ActionsToolbar({...selectionContext})             
              }
            </Table.ToolbarContainer>

            <Table.Content>
              {
                !tableRecords.length && (
                  <Table.EmptyState
                    subtitle={
                      <Text>
                        {'There are no search results matching'}
                        <Text weight='normal' >{`"${tableActiveSearch}"`}</Text>
                      </Text>
                    }
                  />
                )
              }

              
            </Table.Content>
          </Table>
        </Card>

    </Box>
  )
}

export default SearchComponent