import { Box, Button, Card, CustomModalLayout, Dropdown, FormField, Heading, MessageModalLayout, Modal, Text, TextButton } from '@wix/design-system'
import React, { useState } from 'react'

// import icons
import * as Icons from '@wix/wix-ui-icons-common'

const ModalComponent = () => {

    // structure modal
    const [structureModal, setStructureModal] = useState(false)

    const openStructureModal = () => setStructureModal(true);
    const closeStructureModal = () => setStructureModal(false)

    const renderStructureModalContent = () =>(
        <Box width="600px" height="600px"
            direction='vertical'
            align='center'
            verticalAlign='middle'
        >
            <Box
                direction='vertical'
                align='center'
                verticalAlign='middle'
            >   
                <Text light>Modal content goes here</Text>
                <TextButton onClick={closeStructureModal} underline='always' skin='light' >
                    Close Modal
                </TextButton>

            </Box>
        </Box>
    )


    // Side Margins
    const [sideMarginModal, setSideMarginModal] = useState(false)
    const [currentScreen, setCurrentScreen] = useState(null)

    const openSideMarginModal = (screen:any)=>{
        setCurrentScreen(screen)
        setSideMarginModal(true)
    }

    const closeSideMarginModal = () => setSideMarginModal(false)

    const renderSideMarginContent = () => (
        <Box  >
           
                <TextButton onClick={closeSideMarginModal} underline='always' skin='light' >
                    Close Modal
                </TextButton>
           
        </Box>
    )

    // Navigation controls

    const navigationContent = [
        {
            title: 'Title (Item 1)',
            body: 'Body content (Item 1).',
        },
        {
            title: 'Title (Item 2)',
            body: 'Body content (Item 2).',
        },
        {
            title: 'Title (Item 3)',
            body: 'Body content (Item 3).',
        },
    ]

    const [navigationModal, setNavigationModal] = useState(false);

    const [currentContent, setCurrentContent] = useState(0);

    const openNavigationModal = () => setNavigationModal(true);
    const closeNavigationModal = () => setNavigationModal(false);

    const renderNavigationModalContent = () =>{
        const { title, body } = navigationContent[currentContent]

        return (
            <MessageModalLayout
                onCloseButtonClick={()=> closeNavigationModal()}
                primaryButtonOnClick={()=> closeNavigationModal()}
                secondaryButtonOnClick={()=> closeNavigationModal()}
                primaryButtonText="Save"
                secondaryButtonText='Cancel'
                title={title}
            >
                <Text>{body}</Text>
            </MessageModalLayout>
        )
    }

    // Allow using coupons
    const [useCoupons, setUseCoupons] = useState(false)

    return (
    <Box direction='vertical' gap="SP6">

        <Heading size='small'>Structure</Heading>

        <Button onClick={openStructureModal} prefixIcon={<Icons.OpenModal/>} >
            Open Modal
        </Button>

        <Modal
            isOpen={structureModal}
            onRequestClose={closeStructureModal}
        >
            {renderStructureModalContent()}
        </Modal>

        <Heading size='small'>Side Margins</Heading>

        <Box gap="SP6">
            <Button
                prefixIcon={<Icons.FullScreen/>}
                onClick={()=> openSideMarginModal('full')}
            >
                Full
            </Button>

            <Button
                prefixIcon={<Icons.Mobile/>}
                onClick={()=> openSideMarginModal('desktop')}
            >
                Desktop
            </Button>

            <Button
                prefixIcon={<Icons.Mobile/>}
                onClick={()=> openSideMarginModal('mobile')}
            >
                Mobile
            </Button>

            <Modal
                screen="full"
                isOpen={sideMarginModal}
                onRequestClose={closeSideMarginModal}
            >
                {renderSideMarginContent()}
            </Modal>
        </Box>

        <Heading size='small'>Navigation Controls</Heading>

        <Box>
            <Button onClick={openNavigationModal} prefixIcon={<Icons.OpenModal/>} >
                Open Modal
            </Button>

            <Modal
                isOpen={navigationModal}
                onRequestClose={closeNavigationModal}
                showNavigationPreviousButton
                showNavigationNextButton
                navigationPreviousLabel='Previous'
                navigationNextLabel='Next'
                onNavigationClickPrevious={()=>
                    setCurrentContent(
                        (currentContent > 0 ? currentContent: navigationContent.length) - 1
                    )
                }

                onNavigationClickNext={()=>
                    setCurrentContent(
                       (currentContent + 1) % navigationContent.length
                    )
                }
            >
                { renderNavigationModalContent() }

            </Modal>
        </Box>

        <Heading size='medium'>Common Use Cases</Heading>

        <Heading size='small'>Desktop modal with popover elements</Heading>
        
        <Card>
            <Card.Header
                title="Allow using coupons"
                subtitle="Let visitors use coupons to get discounts & special deals."
                suffix={
                    <Button
                        size='small'
                        priority='secondary'
                        onClick={()=> setUseCoupons(true)}
                    >
                        Apply Coupon
                    </Button>
                }
            />

            <Modal
                isOpen={useCoupons}
                onRequestClose={()=> setUseCoupons(false)}
                shouldCloseOnOverlayClick
                screen='desktop'
            >
                <CustomModalLayout
                    primaryButtonText="Apply"
                    primaryButtonOnClick={()=> setUseCoupons(false)}
                    secondaryButtonText="Cancel"
                    secondaryButtonOnClick={()=> setUseCoupons(false)}
                    onCloseButtonClick={()=> setUseCoupons(false)}
                    title="Apply a coupon"
                    overflowY='none'
                    content={
                        <FormField
                            label="Select coupon"
                        >
                            <Dropdown
                                popoverProps={{
                                    appendTo: 'scrollParent',
                                    dynamicWidth: 'true'
                                }}

                                options={[
                                    { id: 0, value: 'None' },
                                    { id: 1, value: 'SUMMER15' },
                                    { id: 2, value: 'BACKTOSCHOOL' },
                                    { id: 3, value: 'AUGUTS10' },
                                    { id: 4, value: 'OUTWITHTHEOLD' },
                                ]}

                                placeholder='Select from the list'
                            />

                        </FormField>
                    }
                />

            </Modal>
        </Card>
    </Box>
  )
}

export default ModalComponent
