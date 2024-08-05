import { Avatar, Box, FormField, Heading, listItemSelectBuilder, MultiSelect, TextButton } from '@wix/design-system'
import React, { useState } from 'react'

import * as Icons from '@wix/wix-ui-icons-common'


interface ActionTagInterface {
  id: any,
  label: any
}


const MultiSelectComponent = () => {


  const options = [
    { id: 1, value: 'tag 1' },
    { id: 2, value: 'tag 2' },
    { id: 3, value: 'tag 3' }
  ]


  const renderMultiSelect = ({ size, tagSize }: any) => {
    const [tags, setTags] = React.useState([
      {
        size: tagSize,
        id: '1',
        label: 'tag 1',
      },
      {
        size: tagSize,
        id: '2',
        label: 'tag 2',
      },
    ]);

    const handleOnSelect = (tag:any) =>
      setTags([...tags, { size: tagSize, id: tag.id, label: tag.value }]);

    const handleOnRemoveTag = (tagId:any) =>
      setTags(tags.filter((currTag) => currTag.id !== tagId));

    return (
      <MultiSelect
        size={size}
        options={options}
        tags={tags}
        onSelect={handleOnSelect}
        onRemoveTag={handleOnRemoveTag}
      />
    );

  };

  // BORDER
  const borderOptions = [
    { value: 'Option 1', id: '1' },
    { value: 'Option 2', id: '2' },
    { value: 'Option 3', id: '3' },
    { value: 'Option 4', id: '4' },
    { value: 'Option 5', id: '5' },
  ]

  // STATUS
  const statusOptions = [
    { value: 'Option 1', id: '1' },
    { value: 'Option 2', id: '1' },
    { value: 'Option 3', id: '1' },
    { value: 'Option 4', id: '4' },
    { value: 'Option 5', id: '5' },
    
  ]

  // STATUS MESSAGE
  const statusMessageOptions = [
    { value: 'Option 1', id: '1' },
    { value: 'Option 2', id: '2' },
    { value: 'Option 3', id: '3' },
    { value: 'Option 4', id: '4' },
    { value: 'Option 5', id: '5' },
  ]
      
  // ACTIONS
  const [actionTags, setActionTags] = useState<ActionTagInterface[]>([]);

  const handleActionOnSelect = (tag: any) => 
    setActionTags([...actionTags, { id: tag.id, label: tag.value }])

  const handleActionsOnRemoveTag = (tagId:any) =>
    setActionTags(actionTags.filter((currTag) => currTag.id !== tagId));


  // MANUAL INPUT
  const [manualTags, setManualTags] = useState<ActionTagInterface[]>([]);

  const handleManualTags = (tag: any) =>
    setManualTags([...manualTags, { id: Math.random(), label: tag[0] }])

  const handleOnRemoveManualTag = (tagId: any) =>
    setManualTags(manualTags.filter((currTag) => currTag.id !== tagId));
  
  
  // Predicate

  const [predicateValue, setPredicateValue] = useState('');
  const [predicateTags, setPredicateTags] = useState<ActionTagInterface[]>([]);

  const predicateOptions = [
    { value: 'Alabama', id: 'AL' },
    { value: 'California', id: 'CA' },
    { value: 'North Carolina', id: 'NC' },
    { value: 'Colorado', id: 'CO' },
    { value: 'Connecticut', id: 'CT' },
  ]

  const predicateOnChange = (event:any) => setPredicateValue(event.target.value);

  const predicate = (option:any) =>
    option.value && option.value.toLowerCase().includes(predicateValue.toLowerCase())


  const handlePredicateOnSelect = (tag:any)=>
    setPredicateTags([...predicateTags, { id: tag.id, label: tag.value }])
  
  const handlePredicateOnRemoveTag = (tagId:any) =>
    setPredicateTags(predicateTags.filter((currTag) => currTag.id !== tagId));


  // Reorder
  const [reorderTags, setReorderTags] = useState([
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
  ])


  // Reorder options
  const reorderOptions = [
    { id: 1, value: 'One' },
    { id: 2, value: 'Two' },
    { id: 3, value: 'Three' },
   
  ]

  const handleReorderOnSelect = (tag: any) =>
    setReorderTags([...reorderTags, { id: tag.id, label: tag.value }]);

  const handleReorderOnRemoveTag = (tagId:any) =>
    setReorderTags(reorderTags.filter((currTag) => currTag.id !== tagId));

  // Common Use Cases

  // Enter contact emails
  const [useCasesValue, setUseCasesValue] = useState('');
  const [useCasesTags, setUseCasesTags] = useState<ActionTagInterface[]>([]);


  const useCasesContacts = [
    { name: 'River Watts', email: 'riverw@wix.com', id: 1 },
    { name: 'Jesse Neimus', email: 'jessen@wix.com', id: 2 },
    { name: 'Morgan James', email: 'morganj@wix.com', id: 3 },
    { name: 'Reese Whiteman', email: 'reesew@wix.com', id: 4 },
  ]

  const useCasesOptions = useCasesContacts.map((contact) => ({
    ...contact,
    ...listItemSelectBuilder({
      prefix: (
        <Avatar
          size="size30"
          imgProps={{ src: `https://www.docs.wixdesignsystem.com/AvatarExample${contact.id}.jpg` }}
        />
      ),
      id: contact.id,
      title: contact.name,
      subtitle: contact.email,
    }),
  }));


  const useCaseHandleOnSelect = ({ name, email, id }: { name: any, email: any, id: any }) =>
    setUseCasesTags([...useCasesTags, { id, label: name ? `${email} (${name})` : email }]);

  const useCaseHandleOnRemoveTag = (tagId:any) =>
    setUseCasesTags(useCasesTags.filter((currTag) => currTag.id !== tagId));

  const useCaseHandleOnChange = (event:any) => setUseCasesValue(event.target.value);

  const useCasepredicate = (option:any) =>
    (option.name + option.email).toLowerCase().includes(useCasesValue.toLowerCase());


  return (
    <Box direction='vertical' gap="SP6">
        <Heading size='small'>Size</Heading>

        <Box direction='vertical' gap="SP4">
          <FormField label="Large" >
            { renderMultiSelect({ size: 'large', tagSize: 'medium' }) }
          </FormField>

          <FormField label="Medium" >
            { renderMultiSelect({ size: 'medium', tagSize: 'small' }) }
          </FormField>

          <FormField label="Small" >
            { renderMultiSelect({ size: 'small', tagSize: 'tiny' }) }
          </FormField>

        </Box>

        <Heading size='small'>Border</Heading>
        <Box direction='vertical' gap="SP4">

          <MultiSelect
            border='standard'
            placeholder='Standard'
            options={borderOptions}
            mode='select'
          />

          <MultiSelect
            border='round'
            placeholder='Round'
            options={borderOptions}
            mode='select'
          />

          <MultiSelect
            border='bottomLine'
            placeholder='Bottom Line'
            options={borderOptions}
            mode='select'
          />

          <MultiSelect
            border='none'
            placeholder='None'
            options={borderOptions}
            mode='select'
          />

        </Box>

        <Heading size='small'>Status</Heading>
        <Box direction='vertical' gap="SP4">
          <MultiSelect status="error" placeholder="Error" options={options} />
          <MultiSelect status="warning" placeholder="Warning" options={options} />
          <MultiSelect status="loading" placeholder="Loading" options={options} />
    
        </Box>

        <Heading size='small'>Status Message</Heading>
        <Box direction='vertical' gap="SP4">
          <FormField
            label="For all default cases:"
            status="error" 
            statusMessage="This is an error message."
          >
            <MultiSelect placeholder="See message below" options={statusMessageOptions} />
          </FormField>

          <FormField
            label="For narrow layouts only:"
            
          >
            <MultiSelect
              status="error"
              placeholder="Hover on status icon"
              statusMessage="This is an error message."
              options={statusMessageOptions}
            />
          </FormField>
        </Box>

        <Heading size='small'>Read-only and disabled</Heading>
        <Box direction='vertical' gap="SP4">
          <MultiSelect value="Read Only" readOnly />
          <MultiSelect
            placeholder="Disabled"
            mode="select"
            options={options}
            disabled
          />
        </Box>

        <Heading size='small'>Action</Heading>

        <MultiSelect
          tags={actionTags}
          options={[
            { id: '1', value: 'tag 1' },
            { id: '2', value: 'tag 2' },
            { id: '3', value: 'tag 3' },
          ]}
          customSuffix={
            <Box>
              <TextButton prefixIcon={<Icons.Add />}>Add Tag</TextButton>
            </Box>
          }
          onSelect={handleActionOnSelect}
          onRemoveTag={handleActionsOnRemoveTag}
        />

        <Heading size='small'>Select Mode</Heading>
        <MultiSelect
          tags={actionTags}
          options={[
            { id: '1', value: 'tag 1' },
            { id: '2', value: 'tag 2' },
            { id: '3', value: 'tag 3' },
          ]}
          mode="select"
          placeholder="Select tags from a list"
          onSelect={handleActionOnSelect}
          onRemoveTag={handleActionsOnRemoveTag}
        />

        <Heading size='small'>Manual Input</Heading>

        <MultiSelect
          tags={manualTags}
          placeholder="Type custom tags and separate them with the Enter key"
          onManuallyInput={handleManualTags}
          onRemoveTag={handleOnRemoveManualTag}
        />

        <Heading size='small'>Predicate</Heading>

        <MultiSelect
          predicate={predicate}
          tags={predicateTags}
          value={predicateValue}
          options={predicateOptions}
          onChange={predicateOnChange}
          placeholder="Start typing a state to find a match"
          onSelect={handlePredicateOnSelect}
          onRemoveTag={handlePredicateOnRemoveTag}
        />

        <Heading size='small'>Reorder</Heading>
        <MultiSelect
          tags={reorderTags}
          options={reorderOptions}
          onReorder={({ addedIndex, removedIndex }) => {
            const nextTags = reorderTags.slice();
            nextTags.splice(addedIndex, 0, ...nextTags.splice(removedIndex, 1));
            setReorderTags(nextTags);
          }}
          onSelect={handleReorderOnSelect}
          onRemoveTag={handleReorderOnRemoveTag}
          />

        <Heading size='medium'>Common Use Cases</Heading>
        <Heading size='small'>Enter contact emails</Heading>

        <MultiSelect
          value={useCasesValue}
          options={useCasesOptions}
          tags={useCasesTags}
          onChange={useCaseHandleOnChange}
          onSelect={useCaseHandleOnSelect}
          onRemoveTag={useCaseHandleOnRemoveTag}
          placeholder="Start typing a name to find a match"
          predicate={useCasepredicate}
        />
    </Box>
  )
}

export default MultiSelectComponent
