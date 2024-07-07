import React, { ReactNode, useEffect, useState } from 'react'
import {
  AutoComplete,
  Card,
  Cell,
  Divider,
  Layout,
  Page,
  Button,

  Table,
  Image,
  TableActionCell,
  Box,
  Search,
  TableToolbar,
  Pagination,
  MessageModalLayout,
  Modal,
  CustomModalLayout,
  Breadcrumbs,
  Heading,
  SidePanel,
  Accordion,
  accordionItemBuilder,
  Checkbox,
  RadioGroup,
  Slider,
  TextButton,
  Text,
  
} from '@wix/design-system';
import '@wix/design-system/styles.global.css';

// import './styles.global.css';

import { withProviders } from '../../withProviders'

// import Wix SDKs
import { useWixModules } from '@wix/sdk-react';
import { products } from '@wix/stores';
import { useQuery } from 'react-query';

// import the dashboard module
import { dashboard } from '@wix/dashboard-react'





// importing icons
import * as Icons from '@wix/wix-ui-icons-common';
import { DeleteProductModal } from '../../components/deleteItem';
import { SidePanelModal } from '../../components/sidePanel';
import { CreateProductModal } from '../../components/create-products';
import AdvancedTableFilters from '../../components/AdvancedTableFilters';
import TwoTableFilters from '../../components/TwoTableFilters';
import NoSearchResults from '../../components/NoSearchResults';
import MultipleBulkActionsTable from '../../components/MultipleBulkActionsTable';
import PaginationAndSelection from '../../components/PaginationAndSelection';


interface Record {
  id: number;
  name: string;
  sku: number;
  price: string;
  image: ReactNode;
}

type ToastType = 'success' | 'error' | 'warning';




export default withProviders(function ProductsPage(){

  // making use of the dashboard module
  const { showToast } = useWixModules(dashboard)

  const [showSidePanel, setShowSidePanel] = useState(-440);

  const [selectedTableItems, setSelectedTableItems] = useState([])

  
  // Items per page
  const ITEMS_PER_PAGE = 6;

  // searching for items in the table
  const [activeSearch, setActiveSearch] = useState('');
  const [selectedPage, setSelectedPage] = useState(1);

  // open delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [deleteRowId, setDeleteRowId] = useState<any>(0);

  // Create product modal
  const [createProductModalOpen, setCreateProductModalOpen] = useState(false);

  // ADVANCED FILTERS SIDEPANEL
  const data = [
    {
        name: `Light grey hoodie`,
        SKU: '00224239',
        price: 59.0,
        inventory: 'In Stock',
        items: 24,
        collection: '2021 Winter',
      },
      {
        name: `Black watch`,
        SKU: '00352464',
        price: 229.0,
        inventory: 'In Stock',
        items: 190,
        collection: '2021 Fall',
      },
      {
        name: 'Reading glasses',
        SKU: '00486430',
        price: 69.0,
        inventory: 'In Stock',
        items: 12,
        collection: '2021 Spring',
      },
      {
        name: 'Leather shoes',
        SKU: '00515642',
        price: 129.0,
        inventory: 'Out of Stock',
        items: 0,
        collection: '2021 Summer',
      },
      {
        name: `Ceramic plant pots`,
        SKU: '00224239',
        price: 19.0,
        inventory: 'In Stock',
        items: 34,
        collection: '2021 Winter',
      },
      {
        name: `Black table lamp`,
        SKU: '00352464',
        price: 119.0,
        inventory: 'Out of Stock',
        items: 0,
        collection: '2021 Winter',
      },
      {
        name: 'Knitted scarf',
        SKU: '00486430',
        price: 19.0,
        inventory: 'In Stock',
        items: 233,
        collection: '2021 Fall',
      },
      {
        name: 'Home fragrance',
        SKU: '00515642',
        price: 89.0,
        inventory: 'In Stock',
        items: 56,
        collection: '2021 Winter',
      },
]
  

  const price ={
      0: '0',
      1: '40',
      2: '80',
      3: '300'
  }

  const [recordsAdvanced, setRecords] = useState(data);

  const getPriceTagUserFriendlyValue = (value: [0 | 1 | 2 | 3, 0 | 1 | 2 | 3])=> 
    value[0] === value[1] 
        ? `$${price[value[0]]}`
        :`$${price[value[1]]}`

  const [right, setRight] = useState(-440);

  const closePanel = ()=>{
      setRight(-440);
      // setDisplay('none')
  }

  const openPanel = ()=>{
    setRight(0);
    // setDisplay('block');

  }

  const collections =[
      'All Collections',
      '2021 Winter',
      '2021 Spring',
      '2021 Summer',
      '2021 Fall'
  ]

  const initialTags = [
    {
        type: 'collection',
        value: 'All Collections',
        id: Date.now() + Math.random(),
        children: 'All Collections',
    },
    {
        type: 'inventory',
        value: 'All Statuses',
        id: Date.now() + Math.random(),
        children: 'All Statuses',
        removable: false,
    },
    {
        type: 'price',
        value: [0, 3],
        id: Date.now() + Math.random(),
        children: getPriceTagUserFriendlyValue([0, 3]),
        removable: false
    }
];


  const [tags, setTags] = useState(initialTags);

  
  const tagExists = (tagDet:any) => {
      const { type, value } = tagDet
      return tags.some((tag:any)=> tag.type === type && tag.value === value)
  }


  const toggleTag = ({type, value})=>{
      if(tagExists({type, value})){
          setTags(tags.filter((tag)=>tag.type !== type || tag.value !== value));
      }else {
          setTags([...tags, {type, value, children:value, id:Date.now()}])
      }
  };

  const getInventoryTagValue = ()=> tags.find(({type})=>type === 'inventory')?.value;
  
  const handleInventoryTag = (value)=>{
      const tagsWithNoInventory = tags.filter(({type}) => type !== 'inventory');

      setTags([
          ...tagsWithNoInventory,
          {
              type: 'inventory',
              value,
              children: value,
              id: Date.now(),
              removable: false
          }
      ])
  }

  const handlePriceTag = (value)=>{
      const tagsWithNoPrice = tags.filter(({type}) => type !== 'price');

      setTags([
          ...tagsWithNoPrice,
          {
              type: 'price',
              value,
              children: getPriceTagUserFriendlyValue(value),
              id: Date.now(),
              removable: false
          }
      ])
  };

  const getPriceTagValue = ()=> tags.find(({type})=> type === 'price')?.value;
  
  
  useEffect(()=>{

    const recordsFilteredByCollection = tagExists({
            type: 'collection',
            value: 'All Collections',
        }) || tags.filter((tagDet:any)=> tagDet.type === 'collection').length === 0 ?  data : data.filter((dataDet:any)=>tagExists({type: 'collection', value: dataDet.collection}),
    );


const recordsFilteredByInventory = tagExists({
    type: 'inventory',
    value: 'All Statuses'
}) ? recordsFilteredByCollection : recordsFilteredByCollection.filter((recordDet:any)=> 
    tagExists({ type: 'inventory', value: recordDet.inventory }),
);

const priceTag = tags.find((priceDet:any)=> priceDet.type === 'price');

type PriceTagValue = 0 | 1 | 2 | 3;

const recordsFilteredByPrice = recordsFilteredByInventory.filter((tag: any) => {
    if (
        priceTag !== undefined &&
        Array.isArray(priceTag.value) &&
        priceTag.value.length >= 2
    ) {
        const [minPriceTag, maxPriceTag] = priceTag.value as PriceTagValue[];
        const minPrice = price[minPriceTag];
        const maxPrice = price[maxPriceTag];

        return tag.price >= minPrice && tag.price <= maxPrice;
    }
        return false;
    });

    setRecords(recordsFilteredByPrice);

},[tags])


const removeTag = (tagId:any)=>{
  const newTags = tags.filter(({id})=> id!== tagId)
  setTags(newTags);
}

const changeTags=(initialTags:any)=>{
  setTags(initialTags)
}
  
  // Toggle create product moda

  const toggleCreateProductModal=()=>{
    setCreateProductModalOpen(prevValue => !prevValue)
  }

  const records = [
    {
      id: 10001,
      name: 'Light grey hoodie',
      sku: 25232564,
      price: '$14.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
    },
    {
      id: 10002,
      name: 'Black watch',
      sku: 35246432,
      price: '$29.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
    },
    {
      id: 10003,
      name: 'Reading glasses',
      sku: 4864310,
      price: '$69.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
    },
    {
      id: 10004,
      name: 'Leather shoes',
      sku: 125156422,
      price: '$7.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
    },
    {
      id: 10005,
      name: 'Light grey hoodie',
      sku: 25232564,
      price: '$14.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
    },
    {
      id: 10006,
      name: 'Black watch',
      sku: 35246432,
      price: '$29.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
    },
    {
      id: 10007,
      name: 'Reading glasses',
      sku: 4864310,
      price: '$69.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
    },
    {
      id: 10008,
      name: 'Leather shoes',
      sku: 125156422,
      price: '$7.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
    },
    {
      id: 10009,
      name: 'Light grey hoodie',
      sku: 25232564,
      price: '$14.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
    },
    {
      id: 10010,
      name: 'Black watch',
      sku: 35246432,
      price: '$29.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
    },
    {
      id: 10015,
      name: 'Reading glasses',
      sku: 4864310,
      price: '$69.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample3.jpg" />,
    },
    {
      id: 10011,
      name: 'Leather shoes',
      sku: 125156422,
      price: '$7.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
    },
    {
      id: 10012,
      name: 'Light grey hoodie',
      sku: 25232564,
      price: '$14.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample1.jpg" />,
    },
    {
      id: 10013,
      name: 'Black watch',
      sku: 35246432,
      price: '$29.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample2.jpg" />,
    },
    {
      id: 10014,
      name: 'Reading glasses',
      sku: 4864310,
      
      price: '$7.00',
      image: <Image src="https://www.docs.wixdesignsystem.com/ProductExample4.jpg" />,
    },
  ];

  const [finalRecords, setFinalRecords] = useState(records);


  // SIDE PANEL MODAL
  // make side panel visible
  

  // selected items
  


  // close side panel
  const closeSidePanel=()=>{
    setShowSidePanel(-440)
  }

  // openSidePanel
  const openSidePanel=()=>{
    setShowSidePanel(0)
  }




  const secondaryAction=(rowId:any) => [
    {
      icon: <Icons.DuplicateSmall />,
      text: 'Duplicate',
      onClick: () => {handleDuplicate(rowId)},
    },
    {
      icon: <Icons.DeleteSmall />,
      text: 'Delete',
      onClick: () => {confirmRowToDeleteFn(rowId)},
    },
  ];

  const confirmRowToDeleteFn=(rowId:any)=>{
    setDeleteRowId(rowId)
    setShowDeleteModal(true)

  }

  // Display the dashboard toast
  const displayDashboardToast=(message:string, typeMessage:string)=>{
    

    // Your code
    let typeFinalM: ToastType = 'success';
    if (typeMessage == 'success') {
      typeFinalM = 'success';
    } else if (typeMessage == 'error') {
      typeFinalM = 'error';
    } else if (typeMessage == 'warning') {
      typeFinalM = 'warning';
    }

    showToast({
      message: message,
      type: typeFinalM,
    })

  }

  const handleDuplicate=(rowId:any)=>{
    console.log("Duplicate id: ", rowId)

    // find the item
    const singleRec:any = finalRecords.find(rec=> rec.id === rowId)

    // find the items index
    const index = finalRecords.findIndex(rec=> rec.id === rowId)

    const newFinalRecords = [
      ...finalRecords.slice(0, index + 1),
      singleRec,
      ...finalRecords.slice(index + 1)
    ];
    
    
    setFinalRecords(newFinalRecords);

    displayDashboardToast(`${singleRec?.name} Duplicated successfully`, 'success');
    // console.log("Final records: ", newFinalRecords);


  }

  // Deleting an item
  



  

  const handleDelete =(deleteRowId: any)=>{

    const DeletedItem = finalRecords.find(item=>item.id === deleteRowId)

    const newFinalRecords = finalRecords.filter(record => record.id !== deleteRowId)

    setFinalRecords(newFinalRecords);

    displayDashboardToast(`${DeletedItem?.name} Deleted successfully`, 'success');

    console.log("New Deleted Final Records", newFinalRecords);
    
  }


  const columns = [
    {
      title: '',
      render: (row:any) => row.image,
      width: '60px',
    },
    {
      title: 'Name',
      render: (row:any) => row.name,
      width: '60%',
    },
    {
      title: 'SKU',
      render: (row:any) => row.sku,
      width: '20%',
      align: 'start',
    },
    {
      title: 'Price',
      render: (row:any) => row.price,
      width: '10%',
      align: 'start',
    },
    {
      title: '',
      render: (row:any) => <TableActionCell secondaryActions={secondaryAction(row.id)} />,
      width: '10%',
    },
  ];




  // Rendering the main toolbar
  const renderMainToolbar =()=>{
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position='start'>
          <TableToolbar.Item>
            {selectedTableItems.length>0?
            (
              <Box direction='horizontal' align='space-between'gap="SP4">
                <TableToolbar.Label><strong>{selectedTableItems.length}</strong>out of{finalRecords.length}products selected</TableToolbar.Label>

                <Button
                  priority='secondary'
                  
                  size='small'

                  onClick={()=>{deleteSelectedTableItems()}}
                >Delete</Button>
              </Box>
            
            
            ):(<TableToolbar.Label>{finalRecords.length} products</TableToolbar.Label>)}
            
          </TableToolbar.Item>

        </TableToolbar.ItemGroup>

        <TableToolbar.ItemGroup position='end'>
          <TableToolbar.Item>
            <Button
              priority='secondary'
              prefixIcon={<Icons.ContentFilterSmall />}
              size='small'

              onClick={()=>{openSidePanel()}}
            >Filter</Button>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <Box >
              <Search
              size='small'
                value={activeSearch}
                onChange={(e)=>setActiveSearch(e.target.value)}
              />

            </Box>
          </TableToolbar.Item>

        </TableToolbar.ItemGroup>
      </TableToolbar>
    )
  }

  // Setting the pagination
  const getTotalPages = Math.ceil(finalRecords.length/ITEMS_PER_PAGE);

  const getPaginationData = ()=>{
    const trimStart = (selectedPage - 1) * ITEMS_PER_PAGE;
    const trimEnd = trimStart + ITEMS_PER_PAGE;

    return finalRecords.slice(trimStart, trimEnd);
  }

  // filter data
  const getFilteredData=()=>{
    return getPaginationData().filter(({name, sku, price})=>{
      const searchData = [name, sku, price].join(' ').toLowerCase();

      // preparing the active search for searching
      const searchQuery = activeSearch.trim().toLowerCase();

      // checking if search query is contained in the table data
      if(searchQuery && searchData.indexOf(searchQuery) === -1){
        return false;
      }
      return true;

    })
  }

  // close modal

  const toggleDeleteModal=()=>{
    setShowDeleteModal(false);
  }

  const confirmRowDelete=(deleteRowId:any)=>{
    setShowDeleteModal(false);

    handleDelete(deleteRowId);

  }


  // TABLE SELECTIONS

  // handler for selection change
  const handleTableSelections=(selectedIds:any)=>{
    setSelectedTableItems(selectedIds)
    
    
    console.log("Selected items: ",selectedIds)
  }

  const deleteSelectedTableItems=()=>{
    const updateRecords = finalRecords.filter(record=> !selectedTableItems.includes(record?.id))

    console.log("Update records: ",updateRecords)

    const deleteItems = selectedTableItems;

    displayDashboardToast(`${deleteItems.length > 1?'Products': 'Product'} deleted successfully`, 'success')

    setFinalRecords(updateRecords);
    setSelectedTableItems([]);


    
    
  }

 
  useEffect(()=>{

    
    // console.log("Selected table items: ", selectedTableItems)

  },[finalRecords])

  

  // add a product 

  const saveAddedProduct=(product:any)=>{

    setFinalRecords(prevDetails=>([product, ...prevDetails]))

    displayDashboardToast(`${product.name} Added Successfully`, 'success')

  }


  return(

    <div style={{ display: 'block', overflow: 'hidden', position: 'relative' }}>
            
            
            <Page>
              <Page.Header 
                title="Products"
                actionsBar={<Button onClick={()=>{toggleCreateProductModal()}} prefixIcon={<Icons.Add/>}>Add Product</Button>}
                breadcrumbs={
                  <Breadcrumbs
                    activeId="2"
                    items={[
                      {id: '1', value: 'Apps', disabled:true},
                      {id: '2', value: 'Products'},
                    ]}

                    onClick={()=>{}}
                  />
                }
              
              />


              <Page.Content>

                {/* MODALS */}

                {/* delete modal */}
                <DeleteProductModal
                  showDeleteModal={showDeleteModal}
                  deleteRowId={deleteRowId}
                  toggleDeleteModal={toggleDeleteModal}
                  confirmRowDelete={confirmRowDelete}

                />

                {/* SidePanel Modal */}

                {/* Create Product modal */}
                <CreateProductModal
                  showModal={createProductModalOpen}
                  onSave={saveAddedProduct}
                  closeModal={toggleCreateProductModal}
                  displayDashboardToast={displayDashboardToast}
                />
                




                  
                <Layout>
                  <Cell>

                    
                    <Card>
                      <Table 
                        data={getFilteredData()} 
                        columns={columns} 
                        showSelection
                        onSelectionChanged={handleTableSelections}
                        selectedIds={selectedTableItems}
                        
                        >
                        <Table.ToolbarContainer>
                          {renderMainToolbar}
                        </Table.ToolbarContainer>
                        
                        <Table.Content/>

                        <Card.Divider/>
                        
                        <Box align='center' paddingTop="SP4" paddingBottom="SP4">
                          <Pagination
                            currentPage={selectedPage}
                            totalPages={getTotalPages}
                            onChange={(e)=>setSelectedPage(e.page)}
                          />

                        </Box>

                      </Table>
                      
                      
                    </Card>
                  </Cell>

                  <Divider  />

                  <Cell>

                    <Heading size='extraLarge'>Advanced filters</Heading>
                    <Box paddingTop="SP4" ></Box>
                    <AdvancedTableFilters
                      price={price}
                      getPriceTagUserFriendlyValue={getPriceTagUserFriendlyValue}
                      right={right}
                      closePanel={closePanel}
                      openPanel={openPanel}
                      collections={collections}
                      initialTags={initialTags}
                      tags={tags}
                      tagExists={tagExists}
                      toggleTag={toggleTag}
                      getInventoryTagValue={getInventoryTagValue}
                      handleInventoryTag={handleInventoryTag}
                      getPriceTagValue={getPriceTagValue}
                      removeTag={removeTag}
                      changeTags={changeTags}
                      data={data}
                      handlePriceTag={handlePriceTag}
                      records={recordsAdvanced}

                    />
                    
                  </Cell>

                  <Cell>
                    <Box paddingTop="SP4" paddingBottom="SP4" direction='vertical' gap="SP4" >
                      <Heading size='extraLarge'>Two Table Filters</Heading>
                      <TwoTableFilters/>

                    </Box>

                  </Cell>

                  <Cell>
                    <Box paddingTop="SP4" paddingBottom="SP4" direction='vertical' gap="SP4" >
                      <Heading size='extraLarge'>No Search Results (Empty State)</Heading>
                      
                      <NoSearchResults/>
                    </Box>

                  </Cell>

                  <Cell>
                  <Box paddingTop="SP4" paddingBottom="SP4" direction='vertical' gap="SP4" >
                      <Heading size='extraLarge'>Multiple Bulk Actions</Heading>
                      <MultipleBulkActionsTable/>
                      
                    </Box>
                  </Cell>

                  <Cell>
                  <Box paddingTop="SP4" paddingBottom="SP4" direction='vertical' gap="SP4" >
                      <Heading size='extraLarge'>Pagination and Selection</Heading>
                      <PaginationAndSelection/>
                      
                    </Box>
                  </Cell>
                </Layout>
              </Page.Content>
            </Page>

            <div
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                
                right: `${showSidePanel}px`,
                height: '100vh',
                boxShadow:
                  '0 3px 24px 0 rgba(22, 45, 61, 0.18), 0 8px 8px 0 rgba(22, 45, 61, 0.12)',
                transition: 'right 0.4s ease 0s',
                zIndex: 1000,
              }}
            >

            <SidePanelModal
                  
                  closeSidePanel={closeSidePanel}
                />
              
            </div>

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
                                        {collections.map((collection)=>(
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

           
    </div>


  )

})