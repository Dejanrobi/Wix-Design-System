
// Creating a modal to be used to create a product
import React, { useEffect, useState } from "react";

import {
    Modal,
    CustomModalLayout,
    FormField,
    Input,
    Box
} from '@wix/design-system';

// importing the styles
import '@wix/design-system/styles.global.css';


// an interface to create a product
interface CreateProductModalProps {
    showModal: boolean;
    onSave: (name: any) => void;
    closeModal: () => void;
    displayDashboardToast:(message:any, success:any)=>void;
}

// A react component to create a product, passing in props that will be used to create a product
export const CreateProductModal: React.FC<CreateProductModalProps> =({ showModal, onSave, closeModal, displayDashboardToast })=>{

    // useState hook to hold the product name

    const [productDetails, setProductDetails] = useState({
        id: new Date().getTime(),
        name: '',
        sku: '',
        price: '',
    });
   
    // toggle Modal by closing it and setting the product name

    const toggleModal =()=>{
        closeModal();
        
        setProductDetails({
            id: new Date().getTime(),
            name: '',
            sku: '',
            price: '',
        });
    }

    const checkForEmptyValues = ()=>{

        const { name, sku, price } = productDetails;

        const isEmpty = !name || !sku || !price

        return isEmpty;
    }

    const handleProductDetailsChange =(productDet:any, productCont:any)=>{
        setProductDetails(prevDet=>({
            ...prevDet,[productDet]:productCont
        }))

    }

    return(
        <Modal
            isOpen={showModal}
            onRequestClose={toggleModal}
            shouldCloseOnOverlayClick
            screen="desktop"
        >
            <CustomModalLayout
                title="Create Product"
                // set the Save button to disabled if there is no product name
                primaryButtonProps={{
                    disabled: checkForEmptyValues(),
                    children: 'Save'
                }}

                // execution when the primary button is clicked
                // we execute the onSave function, passing in the product name
                // then set the product name to an empty string
                primaryButtonOnClick={()=>{
                    onSave(productDetails)
                    // checkForEmptyValues()
                    
                    // setProductDetails({
                    //     id: new Date(),
                    //     name: '',
                    //     sku: '',
                    //     price: '',
                    // });

                    toggleModal()
                }}

                secondaryButtonText="Cancel"
                secondaryButtonOnClick={toggleModal}
                onCloseButtonClick={toggleModal}

                content={

                    <Box direction="vertical" gap="SP3">

                        <FormField label="Name">
                            <Input
                                value={productDetails.name}
                                onChange={(e)=>handleProductDetailsChange('name', `${e.target.value}`)}                            />

                        </FormField>

                        <FormField label="SKU">
                            <Input
                                value={productDetails.price}
                                onChange={(e)=>handleProductDetailsChange('price', `${e.target.value}`)}
                            />
                        </FormField>

                        <FormField label="Price">
                            <Input
                                
                                value={productDetails.sku}
                                onChange={(e)=>handleProductDetailsChange('sku', `${e.target.value}`)}
                            />
                        </FormField>

                    </Box>

                    
                }
            />

        </Modal>
    )
}