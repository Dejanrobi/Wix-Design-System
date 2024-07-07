import { Box, Button, Card, Cell, CustomModalLayout, Heading, Image, Layout, Loader, Modal, Page, Table, TableToolbar, Text } from '@wix/design-system'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const LoaderComponent = () => {

    // Load more items
    const containerRef = useRef(null);
    const [container, setContainer] = useState(null);
    const data = Array.from(Array(10).keys()).map(()=>({
        image: <Image width="42px" height="42px" src='https://www.docs.wixdesignsystem.com/ProductExample1.jpg' />
    }))

    const [records, setRecords] = useState(data);

    const columns = [{ title: '', render: (row:any)=>row.image }];

    const fetchMoreData = ()=>
        new Promise((resolve:any) =>{
            setTimeout(()=> setRecords([...records, ...data]), 2000)
        })

    useEffect(()=>{
        setContainer(containerRef)
    },[])


    // Triggering action in process
    const [isLoading, setIsLoading] = useState(false)

    // Save Page Changes
    const [isModalOpened, setModalOpened] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(null);

    const openModal = (screen:any) =>{
        if(isModalOpened){
            return;
        }

        setCurrentScreen(screen);
        setModalOpened(true);

        setTimeout(() => {
            setModalOpened(false)
        }, 2000);

        
    }

    const closeModal = () => setModalOpened(false);

    const renderModalContent = () => <Loader size='large' />

  return (
    <Box direction='vertical' gap="SP6">
        <Box>
            <Heading size='small'>Size</Heading>
        </Box>

        <Box direction='vertical' gap="SP4">
            <Loader size='large' />
            <Loader size='medium' />
            <Loader size='small' />
            <Loader size='tiny' />
        </Box>

        <Box>
            <Heading size='small'>Color</Heading>
        </Box>
        <Box backgroundColor='D80' align='center' padding="SP4" >
            <Loader color='blue' />
        </Box>
        <Box backgroundColor='D10' align='center' padding="SP4" >
            <Loader color='blue' />
        </Box>

        <Box>
            <Heading size='small'>Status Message</Heading>
        </Box>
        <Loader statusMessage='Uploading' />

        <Box>
            <Heading size='small'>Text</Heading>
        </Box>
        <Loader text="Loading..." />

        <Box>
            <Heading size='medium'>Common Use Cases</Heading>
        </Box>
        <Box>
            <Heading size='small'>Load more items</Heading>
        </Box>

        <Box maxHeight="360px" overflowY='scroll' ref={containerRef} >
            <Card stretchVertically={true} hideOverflow >
                <Table
                    data={records}
                    columns={columns}
                    rowVerticalPadding='tiny'
                    loadMore={fetchMoreData}
                    infiniteScroll
                    hasMore={records.length < 226}
                    itemsPerPage={10}
                    scrollElement={container && container.current}
                    loader={
                        <Box align='center' padding="24px 0px">
                            <Loader size='small'/>
                        </Box>
                    }
                >
                    <TableToolbar>
                        <TableToolbar.ItemGroup position='start' >
                            <TableToolbar.Item>
                                <Text size='small'>226 products</Text>
                            </TableToolbar.Item>
                        </TableToolbar.ItemGroup>
                    </TableToolbar>
                    <Table.Content/>

                </Table>
            </Card>
        </Box>

        <Box>
            <Heading size='small'>Triggering Action In Process</Heading>
        </Box>

        <Box direction='vertical' align='center' >
            <CustomModalLayout
                primaryButtonText={isLoading? <Loader size='tiny' /> : 'Add Member'}
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                primaryButtonOnClick={()=>{
                    if(isLoading){
                        return;
                    }
                    setIsLoading(true);
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 2000);
                }}

                title="Add member"
            >
                <Box height="180px" />
            </CustomModalLayout>

        </Box>

        <Box>
            <Heading size='small'>Save Page Changes</Heading>
        </Box>

        <Page height='760px' >
            <Page.Header
                title="Basic Info"
                actionsBar={
                    <Box gap="SP2" >
                        <Button skin='inverted'>Cancel</Button>
                        <Button onClick={()=> openModal('desktop')} >Save</Button>
                    </Box>
                }
            />

            <Page.Content>
                <Modal
                    screen={currentScreen}
                    isOpen={isModalOpened}
                    onRequestClose={closeModal}
                >
                    {renderModalContent()}
                </Modal>

                <Layout>
                    <Cell>
                        <Card>
                            <Card.Header title="Program details" />
                            <Card.Divider/>
                            <Card.Content>
                                <Box height="360px" />
                            </Card.Content>
                        </Card>
                    </Cell>
                    <Cell>
                        <Page.Footer divider >
                            <Page.Footer.End>
                                <Box gap="SP2" >
                                    <Button priority='secondary'>Cancel</Button>
                                    <Button onClick={()=> openModal('desktop')}>Save</Button>
                                </Box>
                            </Page.Footer.End>
                        </Page.Footer>
                    </Cell>
                </Layout>
            </Page.Content>

        </Page>


    </Box>
  )
}

export default LoaderComponent
