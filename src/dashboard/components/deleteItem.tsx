import React, { useEffect, useState } from "react";

import { Box, CustomModalLayout, Modal, Text } from '@wix/design-system';

import '@wix/design-system/styles.global.css';

interface DeleteProductModalProps {
    showDeleteModal: boolean;
    deleteRowId: any;
    toggleDeleteModal: () =>void;
    confirmRowDelete: (rowId:any) => void;

}

export const DeleteProductModal: React.FC<DeleteProductModalProps>=({showDeleteModal, deleteRowId, toggleDeleteModal, confirmRowDelete})=>{

    return (
        <Modal
          isOpen={showDeleteModal}
          shouldCloseOnOverlayClick
          screen='desktop'

        >

            <CustomModalLayout
              theme='destructive'
              primaryButtonText="Delete"
              primaryButtonOnClick={()=>{confirmRowDelete(deleteRowId)}}
              secondaryButtonText="Cancel"
              secondaryButtonOnClick={()=>{toggleDeleteModal()}}
              onCloseButtonClick={()=>{toggleDeleteModal()}}
              title="Sure you want to delete this?"
              content={
                <Box>
                    <Text>Deleting will remove it permanently and can't be reversed</Text>
                  
                </Box>
              }
            />

            
        </Modal>
    )

}