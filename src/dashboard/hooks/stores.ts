// Creating hooks to create and delete products

// Accessing products from the stores 
import { products } from '@wix/stores'

// importing useWixModules to authenticate and access wix modules
import { useWixModules } from '@wix/sdk-react';
import { useCallback } from 'react';
import { CollectionOptimisticActions } from '@wix/patterns';

export function useCreateProduct(optimisticActions: CollectionOptimisticActions<products.Product, {}>){

    // accessing the create product hook
    const { createProduct } = useWixModules(products);

    return useCallback((productName: string)=>{
        // new product schema

        const newProduct: products.Product ={
            _id: Date().toString(),
            name: productName,
            _createdDate: new Date(),
            lastUpdated: new Date(),
            productType: products.ProductType.physical,
            description: 'New Product Description',
            priceData: {
                currency: 'USD',
                price: 10,
            }
        }

        optimisticActions.createOne(newProduct, {
            submit: async (products: products.Product[])=>{
                // we add the product to the beginning of the array
                const createdProduct= products[0]
                const response = await createProduct(createdProduct);
                return response.product ? [response.product]: [];
            },

            // executing a success toast after the product has been createdt
            successToast: {
                message: `${newProduct.name} was successfully created`,
                type: 'SUCCESS',
            },

            // creating an error toast
            errorToast: ()=> 'Failed to create product'
        })
    }, [optimisticActions, createProduct])
}


// delete product function by the name: useDeleteProducts
export function useDeleteProducts(optimisticActions: CollectionOptimisticActions<products.Product, {}>){

    // accessing the delete product hook
    const { deleteProduct } = useWixModules(products);

    return useCallback((productsToDelete: products.Product[]) =>{
        optimisticActions.deleteMany(productsToDelete, {
            submit: async(deletedProducts: products.Product[]) =>(
                await Promise.all(
                    deletedProducts.map((product)=> deleteProduct(product._id!))
                )
            ),

            // a success toast after a product is deleted successfully

            successToast: {
                message: `${
                    productsToDelete.length > 1 ? 'Products': 'Product'
                } deleted successfully`,
                type: 'SUCCESS'
            },

            errorToast: ()=> `Failed to delete ${
                productsToDelete.length > 1 ? 'Products': 'Product'
            }`,
        });
    }, [optimisticActions, deleteProduct])
}

