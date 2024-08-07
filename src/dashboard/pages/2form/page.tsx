import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';

// every page has to be wrapped inside a wix provider so as to  use useWixModules
import { withProviders } from '../../withProviders';

// import icons
import * as Icons from '@wix/wix-ui-icons-common';
import { Box, Breadcrumbs, Cell, ColorInput, DatePicker, Heading, Layout, Page } from '@wix/design-system';
import AutoCompleteForm from '../../formComponents/AutoComplete';
import CheckBoxComponent from '../../formComponents/CheckBoxComponent';
import ColorInputComponent from '../../formComponents/ColorInputComponent';
import CornerRadiusInputComponent from '../../formComponents/CornerRadiusInputComponent';
import DatePickerComponent from '../../formComponents/DatePickerComponent';
import DropDownComponent from '../../formComponents/DropDownComponent';
import DropZoneComponent from '../../formComponents/DropZoneComponent';
import FieldSetComponent from '../../formComponents/FieldSetComponent';
import RichTextInputAreaComponent from '../../formComponents/RichTextInputAreaComponent';
import SearchComponent from '../../formComponents/SearchComponent';
import ToggleSwitchComponent from '../../formComponents/ToggleSwitchComponent';
import FileUploadComponent from '../../formComponents/FileUploadComponent';
import FormFieldComponent from '../../formComponents/FormFieldComponent';
import InputComponent from '../../formComponents/InputComponent';
import InputAreaComponent from '../../formComponents/InputAreaComponent';
import MultiSelectComponent from '../../formComponents/MultiSelectComponent';
import NumberInputComponent from '../../formComponents/NumberInputComponent';
import RadioComponent from '../../formComponents/RadioComponent';
import SegmentedToggleComponent from '../../formComponents/SegmentedToggleComponent';
import TimeInputComponent from '../../formComponents/TimeInputComponent';






export default withProviders(function FormsPage(){
  
  
  return (
    <Page>
      <Page.Header 
        title="Forms"
        breadcrumbs={
          <Breadcrumbs
            activeId="2"
            items={[
              { id: '1', value: 'Apps', disabled:true },
              { id: '2', value: 'Wix Design System', disabled:true },
              { id: '3', value: 'Form'},
            ]}
          />
        }
      />

      <Page.Content>
        <Layout >
          <Cell>
            <Heading size='medium'>AutoComplete</Heading>
            <Box paddingTop="SP4">
            </Box>
            <AutoCompleteForm/>
          </Cell>

          <Cell>
            <Heading size='medium'>CheckBox Component</Heading>
            <Box paddingTop="SP4">
            </Box>
            <CheckBoxComponent/>
          </Cell>


          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Color Input</Heading>
            </Box>
            <ColorInputComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Corner Radius Input</Heading>
            </Box>
            <CornerRadiusInputComponent/>
          </Cell>


          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Date Picker</Heading>
            </Box>
            <DatePickerComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Dropdown</Heading>
            </Box>
            <DropDownComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Drop Zone</Heading>
            </Box>
            <DropZoneComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Field Set</Heading>
            </Box>
            <FieldSetComponent/>
          </Cell>

          <Cell>
            <Box paddingTop="SP4" paddingBottom="SP4">
              <Heading size='medium'>File Upload</Heading>
            </Box>

            <FileUploadComponent/>
          </Cell>

          <Cell>
            <Box paddingTop="SP4" paddingBottom="SP4">
              <Heading size='medium'>Form Field</Heading>
            </Box>

            <FormFieldComponent/>
          </Cell>

          <Cell>
            <Box paddingTop="SP4" paddingBottom="SP4">
              <Heading size='medium'>Input</Heading>
            </Box>

            <InputComponent/>
          </Cell>

          <Cell>
            <Box paddingTop="SP4" paddingBottom="SP4">
              <Heading size='medium'>Input Area</Heading>
            </Box>

            <InputAreaComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Multi Select</Heading>
            </Box>
            <MultiSelectComponent/>
          </Cell>


          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Number Input</Heading>
            </Box>
            <NumberInputComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Radio</Heading>
            </Box>
            <RadioComponent/>
          </Cell>
      

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Rich Text Input Area</Heading>
            </Box>
            <RichTextInputAreaComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Search</Heading>
            </Box>
            <SearchComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Segmented Toggle</Heading>
            </Box>
            <SegmentedToggleComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Time Input</Heading>
            </Box>
            <TimeInputComponent/>
          </Cell>

          <Cell>
            
            <Box paddingTop="SP4" paddingBottom="SP4">
             <Heading size='medium'>Toggle Switch</Heading>
            </Box>
            <ToggleSwitchComponent/>
          </Cell>

         

          </Layout>  
      </Page.Content>
    </Page>
  )
})