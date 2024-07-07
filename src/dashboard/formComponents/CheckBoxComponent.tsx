import React, { useEffect, useState } from 'react'
// importing css
import '@wix/design-system/styles.global.css';
import { Box, Card, Cell, Checkbox, FieldSet, FormField, Heading, SidePanel, Text, TextButton } from '@wix/design-system';


// Importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const CheckBoxComponent = () => {

    const checkboxesList = [
        {
          id: 'newArrivals',
          label: 'New Arrivals',
          initialState: true,
        },
        {
          id: 'womensClothing',
          label: "Women's clothing",
          initialState: true,
        },
        {
          id: 'mensClothing',
          label: "Men's clothing",
          initialState: false,
        },
        {
          id: 'kids',
          label: 'Kids',
          initialState: false,
        },
        {
          id: 'home',
          label: 'Home',
          initialState: false,
        },
      ];

    const [checkBoxes, setCheckBoxes] = useState(checkboxesList);

    
    const handleCheckboxChange = (id:any)=>{
        setCheckBoxes((prevState)=>
            prevState.map((checkbox)=>
            checkbox.id === id 
            ? {...checkbox, initialState: !checkbox.initialState}
            : checkbox
    )
        )
    }

    const handleAllProductsChange = ()=>{
        const allChecked = checkBoxes.every((checkbox)=>checkbox.initialState)

        setCheckBoxes((prevState)=>
            prevState.map((checkbox)=>({
                ...checkbox, initialState: !allChecked,
            })))
    }

    // container with a label
    const hoveCheckBoxesList = [
        {
            id: 'members',
            label: 'Members',
            description: 'All registered users',
            initialState: true,
        },
        {
            id: 'roles',
            label: 'Roles',
            description: 'Users who are assigned to a special role',
            initialState: false,
        },
        {
            id: 'badges',
            label: 'Badges',
            description: 'Users who have selected badges',
            initialState: false,
        },
    ];

    const [hoverCheckBoxes, setHoverCheckboxes] = useState(hoveCheckBoxesList);

    const handleHoverCheckBoxesChange=(id:any)=>{
        setHoverCheckboxes((prevState)=>
            prevState.map((checkbox)=>
                checkbox.id === id
                ? {...checkbox, initialState: !checkbox.initialState}
                : checkbox
            )
        )
    }

    useEffect(()=>{
        // console.log("Hover checkboxes: ", hoverCheckBoxes)

    }, [hoverCheckBoxes])

    // MANAGE PANEL

    const panelContentList = [      
             {
                name: "Main Elements",
                values: [
                    {
                        id: "categories",
                        name: "Categories",
                        initialState: true
                    },
                    {
                        id: "title",
                        name: "Title",
                        initialState: true
                    },
                    {
                        id: "ratings",
                        name: "Ratings",
                        initialState: true
                    },
                    {
                        id: "tags",
                        name: "Tags",
                        initialState: true
                    },
                    {
                        id: "writers",
                        name: "Writers",
                        initialState: true
                    },
                    {
                        id: "counters",
                        name: "Counters",
                        initialState: true
                    },

                ]
            },
            {
                name: "Metadata",
                values: [
                    {
                        id: "categories",
                        name: "Categories",
                        initialState: true
                    },
                    {
                        id: "writer",
                        name: "Writer",
                        initialState: true
                    },
                    {
                        id: "publishdate",
                        name: "Publish Date",
                        initialState: true
                    },
                    {
                        id: "readingtime",
                        name: "Reading time",
                        initialState: true
                    },
                    {
                        id: "lastupdated",
                        name: "Last Updated",
                        initialState: true
                    },

                ]
            },
            {
                name: "Counters",
                values:[
                    {
                        id: "likes",
                        name: "LIkes",
                        initialState: true
                    },
                    {
                        id: "views",
                        name: "Views",
                        initialState: true
                    },
                    {
                        id: "comments",
                        name: "Comments",
                        initialState: true
                    },

                ]
            }
        

    ]


 

    const [managePanelList, setManagePanelList] = useState(panelContentList)

    

    // const handleCheckBoxChange = (id:string, categoryName:string)=>{

    //     setManagePanelList((prevState)=>
    //         return prevState.map((category)=>{
    //             if(category.name === categoryName){
    //                 return category.values.map((item)=>{
    //                     if(item.id === id){
    //                         return {...item, initialState: !item.initialState}
    //                     }
    //                     return item;
    //                 })
                    
    //             }
    //             return category;
    //         })
    //     })

    // }

    const handleCheckBoxChange = (id:any, categoryName:any) => {


        const newPanelList = managePanelList.map((panel)=>{
            if (panel.name === categoryName) {
                return {
                    ...panel,
                    values: panel.values.map((item) => {
                        if (item.id === id) {
                            // console.log("item matches")
                            return {
                                ...item,
                                initialState: !item.initialState
                            };

                            
                        }
                        // console.log("item does not match")
                        // console.log("id: ", id)
                        // console.log("item id: ", item.id)
                        return item;
                    })
                };
            }
            return panel
        })

        setManagePanelList(newPanelList);

    //    console.log("New panel list: ", newPanelList);
        // setManagePanelList(prevState =>
        //     prevState.map(category => {
        //         if (category.name === categoryName) {
                    
        //         }
        //         return category;
        //     })
        // );
    };

    useEffect(()=>{
        console.log("Manage Panel List: ", managePanelList);

    },[managePanelList])

   
   
  
    return (
    <Box direction='vertical' gap="SP2">
        <Heading size='small'>Forms</Heading>
        <Box paddingTop="SP4">
        </Box>

        <Cell span={6}>
            <Card>
                <Card.Header
                title="Collections"
                subtitle="Assign products to a collection"
                />
                <Card.Divider/>
                <Card.Content>
                    <Box direction='vertical' gap="12px">
                        <Checkbox
                            checked={checkBoxes.every((checkbox)=>checkbox.initialState)}
                            onChange={handleAllProductsChange}
                        >
                            All products
                        </Checkbox>
                        {
                            checkBoxes.map((checkbox)=>(
                                <Checkbox 
                                    checked={checkbox.initialState}
                                    onChange={()=> handleCheckboxChange(checkbox.id)}
                                >
                                    {checkbox.label}
                                </Checkbox>
                            ))
                        }
                        
                        <TextButton prefixIcon={<Icons.Add/>}>
                            Create Collection
                        </TextButton>
                    </Box>
                </Card.Content>
            </Card>

        </Cell>

        
        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>With A Label</Heading>
        </Box>

        <Card>
            <Card.Header title="Permissions" />
            <Card.Divider/>
            <Card.Content>
                <Box direction='vertical'>
                    <FormField label="Who can access this category?">
                        <Box direction='vertical'>
                            {
                                hoverCheckBoxes.map((checkbox)=>(
                                    <Checkbox
                                        checked={checkbox.initialState}
                                        selectionArea='hover'
                                        id={checkbox.id}
                                        onChange={()=>{handleHoverCheckBoxesChange(checkbox.id)}}
                                    >
                                        <Box direction='vertical'>
                                            <Text weight='bold'>{checkbox.label}</Text>
                                            <Text size='small' secondary>{checkbox.description}</Text>
                                        </Box>
                                    </Checkbox>
                                ))
                            }

                        </Box>
                    </FormField>

                </Box>
            </Card.Content>
        </Card>

        <Box paddingTop="SP4" paddingBottom="SP4">
            <Heading size='small'>Manage Panel</Heading>
        </Box>

        <SidePanel
            onCloseButtonClick={()=>{}}
            skin='floating'
            width="288px"
            height="576px"
        >
            <SidePanel.Header title="Widget Elements" />

            <SidePanel.Content noPadding>
                <SidePanel.Field divider={false}>
                    <Text size='small' secondary>
                        Choose which elements to display on Post Header
                    </Text>

                </SidePanel.Field>

                {
                    managePanelList.map((panelList, index)=>(
                        <SidePanel.Field divider={false} >
                            <FieldSet
                                legend={panelList.name}
                                direction='vertical'
                            >
                                {
                                    panelList.values.map((checkbox)=>(
                                        <Checkbox
                                            checked={checkbox.initialState}
                                            onChange={()=>{
                                                handleCheckBoxChange(checkbox.id, panelList.name)
                                            }}
                                        >{checkbox.name}</Checkbox>
                                    ))
                                }

                            </FieldSet>
                           
                                
                            
                           

                        </SidePanel.Field>

                    ))
                }

            </SidePanel.Content>

        </SidePanel>

    </Box>
  )
}

export default CheckBoxComponent