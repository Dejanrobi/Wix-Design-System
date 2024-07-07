import { Box, Divider, FieldSet, Heading, Modal, Radio, RadioGroup, SidePanel, Text, TextButton } from "@wix/design-system";
import { AlignLeft } from "@wix/wix-ui-icons-common";
import React, {useEffect, useState} from "react";


import '../styles/Sidepanel.css'
import { CollectionToolbarFilters, RadioGroupFilter, Table } from "@wix/patterns";


interface SidePanelModalProps{
    
    closeSidePanel: ()=> void;
}


export const SidePanelModal: React.FC<SidePanelModalProps>=({ closeSidePanel })=>{
    // type filter state

    const [filters, setFilters]= useState({
        typeFilter: 'all',
        lastUpdated: 'all'
    })

    const [noOfFilters, setNoOfFilters] = useState(0);

    

    const handleTypeFilterChange=(value:any)=>{
        setFilters(prev=>({
            ...prev,
            typeFilter: value
        }))

        
    }

    const handleLastUpdated=(value:any)=>{
        setFilters(prev=>({
            ...prev,
            lastUpdated: value
        }))

        
    }

    // COUNT THE NUMBER OF FILTERS
    const countNoOfFilters=(obj:any)=>{
        return Object.keys(obj).filter(key => obj[key] !== 'all').length;
        
    }

    useEffect(()=>{
       const count =  countNoOfFilters(filters);

       setNoOfFilters(count)
       console.log("No of filters: ",count)

    },[filters])

    const clearFilters=()=>{
        setFilters(prev=>({
            ...prev,
            typeFilter: "all",
            lastUpdated: 'all'
        }))
    }
    

    return(

            

                <SidePanel  onCloseButtonClick={()=>{closeSidePanel()}} 
                    className="sticky-side-panel"                   
                >
                    <SidePanel.Header title="Filter"/>
                    <SidePanel.Content noPadding>
                        <SidePanel.Field divider={false}>
                            <Box  paddingBottom="SP3">
                                <Heading size="small" >Type {filters.typeFilter !== 'all'?' (1)':''}</Heading>
                            </Box>                        
                            
                            <Box direction="vertical" gap="SP2">
                            <RadioGroup
                                onChange={handleTypeFilterChange}
                                value={filters.typeFilter}
                            >
                                    <RadioGroup.Radio  value="all">All</RadioGroup.Radio>
                                    <RadioGroup.Radio value="physical">Physical</RadioGroup.Radio>
                                    <RadioGroup.Radio value="digital">Digital</RadioGroup.Radio>
                                    
                                </RadioGroup>                   
                            </Box>
                        </SidePanel.Field>

                        <Box paddingTop="SP2" paddingBottom="SP2">
                            <Divider/>
                        </Box>
                                       

                        <SidePanel.Field divider={false}>
                            <Box  paddingBottom="SP3">
                                <Heading size="small" >Last Updated {filters.lastUpdated !== 'all'?' (1)':''}</Heading>
                            </Box>                        
                            
                            <Box direction="vertical" gap="SP2">

                                <RadioGroup
                                    onChange={handleLastUpdated}
                                    value={filters.lastUpdated}
                                >
                                    <RadioGroup.Radio value="all" >All</RadioGroup.Radio>
                                    <RadioGroup.Radio value="last7days">Last 7 days</RadioGroup.Radio>
                                    <RadioGroup.Radio value="last14days">Last 14 days</RadioGroup.Radio>
                                    <RadioGroup.Radio value="lastmonth">Last month</RadioGroup.Radio>
                                    <RadioGroup.Radio value="custom">Custom</RadioGroup.Radio>
                                    
                                </RadioGroup>
                                
                                               
                            </Box>
                        </SidePanel.Field>
                      
                    </SidePanel.Content>
                    <SidePanel.Footer>
                        <Box direction="horizontal" align="space-between" verticalAlign="middle">
                            <Text weight="bold">
                                 {noOfFilters>0? `${noOfFilters} ${noOfFilters>1?'filters':'filter'} applied`:'No filters applied'}
                            </Text>

                            <TextButton onClick={()=>{clearFilters()}} disabled={noOfFilters>0?false:true} size="small">Clear</TextButton>
                        </Box>
                    </SidePanel.Footer>
                </SidePanel>


                

            
            

        
        
    )

}