import { Box, Button, Card, Heading, IconButton, NestableList, PopoverMenu, SectionHelper, SidePanel, Text, TextButton } from '@wix/design-system'
import React from 'react'

import * as Icons from '@wix/wix-ui-icons-common'

const NestableListComponent = () => {

  // COMMENT One Nestable List content before using the other.

  // Nestable List
  // const CollapseIcon = ({ id, allItems }: any) => {
  //   const onCollapse = () => {
  //     setItems(
  //       allItems.map((item:any) =>
  //         item.id === id ? { ...item, isCollapsed: !item.isCollapsed } : item,
  //       ),
  //     );
  //   };
  //   const { isCollapsed } = allItems.filter((item:any) => item.id === id)[0];

  //   return (
  //     <Box align="right">
  //       <IconButton skin="light" onClick={onCollapse}>
  //         {isCollapsed ? <Icons.ChevronDown /> : <Icons.ChevronUp />}
  //       </IconButton>
  //     </Box>
  //   );
  // };

  // const [items, setItems] = React.useState([
  //   {
  //     id: 'item-1',
  //     options: [{ value: <Text size="small">Item 1</Text> }],
  //   },
  //   {
  //     id: 'item-2',
  //     isCollapsed: true,
  //     options: [{ value: <Text size="small">Show and hide children</Text> }],
  //     children: [
  //       {
  //         id: 'item-2-child-1',
  //         options: [{ value: <Text size="small">Child 1</Text> }],
  //       },
  //       {
  //         id: 'item-2-child-2',
  //         options: [{ value: <Text size="small">Child 2</Text> }],
  //       },
  //       {
  //         id: 'item-2-child-3',
  //         options: [{ value: <Text size="small">Child 3</Text> }],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'item-3',
  //     options: [{ value: <Text size="small">Item 3</Text> }],
  //   },
  // ]);

  // const itemsWithUpdatedControls = items.map((item) => {
  //   return {
  //     ...item,
  //     options: item.children
  //       ? [
  //           item.options[0],
  //           {
  //             value: <CollapseIcon id={item.id} allItems={items} />,
  //           },
  //         ]
  //       : [item.options[0]],
  //   };
  // });

  
  // Sort items into subcategories
  // const CollapseIcon = ({ id, allItems }:any) => {
  //   const onCollapse = () => {
  //     setItems(
  //       allItems.map((item:any) =>
  //         item.id === id ? { ...item, isCollapsed: !item.isCollapsed } : item,
  //       ),
  //     );
  //   };
  //   const { isCollapsed } = allItems.filter((item:any) => item.id === id)[0];

  //   return (
  //     <Box align="right">
  //       <IconButton skin="light" onClick={onCollapse}>
  //         {isCollapsed ? <Icons.ChevronDown /> : <Icons.ChevronUp />}
  //       </IconButton>
  //     </Box>
  //   );
  // };

  // const ItemText = ({ title, description }:any) => (
  //   <Box direction="vertical">
  //     <Text weight="normal">{title}</Text>
  //     {description && (
  //       <Text size="small" secondary>
  //         {description}
  //       </Text>
  //     )}
  //   </Box>
  // );

  // const [items, setItems] = React.useState([
  //   {
  //     id: 'item-1',
  //     addItemLabel: 'Add Step',
  //     options: [
  //       {
  //         value: <ItemText title="Step 1" description="Research" />,
  //       },
  //     ],
  //     children: [
  //       {
  //         id: 'item-1-child-1',
  //         options: [{ value: <ItemText title="Collect data" /> }],
  //       },
  //       {
  //         id: 'item-1-child-2',
  //         options: [{ value: <ItemText title="Analyze data" /> }],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'item-2',
  //     isCollapsed: true,
  //     addItemLabel: 'Add Step',
  //     options: [
  //       {
  //         value: <ItemText title="Step 2" description="Plan" />,
  //       },
  //     ],
  //     children: [
  //       {
  //         id: 'item-2-child-1',
  //         options: [{ value: <ItemText title="Consult experts" /> }],
  //       },
  //       {
  //         id: 'item-2-child-2',
  //         options: [{ value: <ItemText title="Create plan" /> }],
  //       },
  //     ],
  //   },
  //   {
  //     id: 'item-3',
  //     isCollapsed: true,
  //     addItemLabel: 'Add Step',
  //     options: [
  //       {
  //         value: <ItemText title="Step 3" description="Launch" />,
  //       },
  //     ],
  //     children: [
  //       {
  //         id: 'item-3-child-1',
  //         options: [{ value: <ItemText title="Start with a soft launch" /> }],
  //       },
  //     ],
  //   },
  // ]);

  // const itemsWithUpdatedControls = items.map((item) => {
  //   return {
  //     ...item,
  //     options: item.children
  //       ? [
  //           item.options[0],
  //           {
  //             value: <CollapseIcon id={item.id} allItems={items} />,
  //           },
  //         ]
  //       : [item.options[0]],
  //   };
  // });

  // IN PANELS
  const commonItemProps = {
    verticalPadding: 'tiny',
    dragHandleSize: 'small',
    horizontalPadding: 'small',
  };

  const Value = ({ children }:any) => {
    return (
      <Box gap="6px">
        <Icons.FolderSmall />
        <Text size="small">{children}</Text>
      </Box>
    );
  };

  const [items, setItems] = React.useState([
    {
      ...commonItemProps,
      id: 'item-1',
      options: [{ value: <Value>Item 1</Value> }],
    },
    {
      ...commonItemProps,
      id: 'item-2',
      isCollapsed: true,
      options: [{ value: <Value>Show and hide children</Value> }],
      children: [
        {
          ...commonItemProps,
          id: 'item-2-child-1',
          options: [{ value: <Value>Child 1</Value> }],
        },
        {
          ...commonItemProps,
          id: 'item-2-child-2',
          options: [{ value: <Value>Child 2</Value> }],
          children: [
            {
              ...commonItemProps,
              id: 'item-2-child-2-child-1',
              options: [{ value: <Value>Child 3</Value> }],
            },
          ],
        },
      ],
    },
    {
      ...commonItemProps,
      id: 'item-3',
      options: [{ value: <Value>Item 3</Value> }],
    },
  ]);

  const updateItemsWithControls = (items:any) => {
    return items.map((item:any) => {
      const newItem = {
        ...item,
        expandable: !!item.children,
        onClickExpand: () => onCollapse(item.id),
      };
      if (item.children) {
        newItem.children = updateItemsWithControls(item.children);
      }
      return newItem;
    });
  };

  const onCollapse = (id:any) => {
    setItems((allItems:any) =>
      allItems.map((item:any) =>
        item.id === id
          ? {
              ...item,
              isCollapsed: !item.isCollapsed,
              isExpanded: !item.isExpanded,
            }
          : {
              ...item,
              children: item.children
                ? toggleChildrenCollapse(item.children, id)
                : item.children,
            },
      ),
    );
  };

  const toggleChildrenCollapse = (children:any, id:any) => {
    return children.map((child:any) =>
      child.id === id
        ? {
            ...child,
            isCollapsed: !child.isCollapsed,
            isExpanded: !child.isExpanded,
          }
        : {
            ...child,
            children: child.children
              ? toggleChildrenCollapse(child.children, id)
              : child.children,
          },
    );
  };


  const itemsWithUpdatedControls = updateItemsWithControls(items);



  return ( 
   <Box direction='vertical' gap="SP6" >
        <Heading size='small'>Add items</Heading>

       <NestableList
        addItemLabel='Add item to level 1'
        items={[
          {
            id: 1,
            options: [{ value: <Text size='small'>Item 1</Text> }],
            addItemLabel: <Text size='small'>Add item to level 2</Text>,
            children: [
              { id: 2, options: [{ value: <Text size='small'>Item 2</Text> }] }
            ]
          }
        ]}
       />

      <Heading size='small'>Maximum Depth</Heading>
      
      <Box direction='vertical' gap="SP6">
        <Text size='small'>Maximum depth of 3 levels</Text>
        <NestableList
          maxDepth={3}
          items={[
            {
              id: '1',
              options: [
                {
                  value: <Text size='small'>Item 1</Text>
                }
              ],
              children: [
                {
                  id: '2',
                  options: [
                    {
                      value: <Text size='small'>Item 2</Text>
                    }
                  ],
                  children: [
                    {
                      id: '3',
                      options: [
                        {
                          value: <Text size='small'>Item 3</Text>
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]}

          onChange={()=>{}}
        />

        <Text size='small'>Maximum depth of 2 levels</Text>
        {/* You can add the item manually to level 3 but it can't be dragged automatically */}
        <NestableList 
          maxDepth={2}
          items={[
            {
              id: '4',
              options: [
                {
                  value: <Text size='small'>Item 1</Text>
                }
              ],
              children: [
                {
                  id: '5',
                  options: [
                    {
                      value: <Text size='small'>Item 2</Text>
                    }
                  ],
                  children: [
                    {
                      id: '7',
                      options: [
                        {
                          value: <Text size='small'>Item 7</Text>
                        }
                      ]
                    }
                  ]
                },
                {
                  id: '6',
                  options: [
                    {
                      value: (
                        <Text>This item can't be moved to level 3</Text>
                      )
                    }
                  ]
                }
              ]
            }
          ]}

          onChange={()=>{}}
        />

        


        </Box>

      <Heading size='small'>Indent Size</Heading>

      <Box direction='vertical' gap="SP6">
        <NestableList
          indentSize = "small"
          readOnly={true}
          items={[
            {
              id: 1,
              options: [{value: <Text size='small'>Item 1</Text>}],
              children: [
                { id: 2, options: [{ value: <Text size='small'>Item 2</Text> }] },
                { id: 2, options: [{ value: <Text size='small'>Item 3</Text> }] }
              ]
            }
          ]}

          onChange={()=>{}}
        />

        <NestableList
          indentSize="medium"
          readOnly={true}
          items={[
            {
              id: 1,
              options: [{ value: <Text size='small'>Item 1</Text> }],
              children: [
                { id: 2, options: [{ value: <Text size='small'>Item 2</Text> }] },
                { id: 3, options: [{ value: <Text size='small'>Item 3</Text> }] },
              ]
            }
          ]}
          onChange={()=>{}}
        />

        <NestableList
          indentSize="large"
          readOnly={true}
          items={[
            {
              id: 1,
              options: [{
                value: <Text size='small'>Item 1</Text>
              }],
              children: [
                { id: 2, options: [{ value: <Text size='small'>Item 2</Text> }] },
                { id: 3, options: [{ value: <Text size='small'>Item 3</Text> }] },
              ]
            }
          ]}
          onChange={()=>{}}
        />
      </Box>

      <Heading size='small'>Dividers</Heading>
      <NestableList
        indentSize="medium"
        
        dividers={false}
        readOnly={true}
        items={[
          {
            id: 1,
            options: [{ value: <Text size='small'>Item 1</Text> }],
            children: [
              { id: 2, options: [{ value: <Text size='small'>Item 2</Text> }] },
              { id: 3, options: [{ value: <Text size='small'>Item 3</Text> }] },
            ]
          }
        ]}

        onChange={()=>{}}
      />

      <Heading size='small'>Prevent Changing Depth</Heading>
      <NestableList
        preventChangeDepth={true}
        items={[
          {
            id: 1,
            options: [
              { value: <Text size="small">This item can only move in level 1</Text> },
            ],
            children: [
              {
                id: 2,
                options: [
                  {
                    value: (
                      <Text size="small">This item can only move in level 2</Text>
                    ),
                  },
                ],
              },
              {
                id: 3,
                options: [
                  {
                    value: (
                      <Text size="small">This item can only move in level 2</Text>
                    ),
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            options: [
              { value: <Text size="small">This item can only move in level 1</Text> },
            ],
            children: [
              {
                id: 5,
                options: [
                  {
                    value: (
                      <Text size="small">This item can only move in level 2</Text>
                    ),
                  },
                ],
              },
            ],
          },
        ]}
        onChange={() => {}}
      />;

      <Heading size='small'>Lock Dragging</Heading>
      <NestableList
          items={[
            {
              id: 1,
              options: [
                { value: <Text size="small">This item can't be dragged</Text> },
              ],
              draggable: false,
              children: [
                {
                  id: 2,
                  options: [
                    { value: <Text size="small">This item can't be dragged</Text> },
                  ],
                  draggable: false,
                },
                {
                  id: 3,
                  options: [
                    { value: <Text size="small">This item can be moved freely</Text> },
                  ],
                },
              ],
            },
            {
              id: 4,
              options: [
                { value: <Text size="small">This item can be moved freely</Text> },
              ],
              children: [
                {
                  id: 5,
                  options: [
                    { value: <Text size="small">This item can be moved freely</Text> },
                  ],
                },
              ],
            },
          ]}
          onChange={() => {}}
        />;

      <Heading size='small'>Collapsible items</Heading>

      {/* <NestableList
        items={itemsWithUpdatedControls}
        onChange={(onChangeData:any) => setItems(onChangeData.items)}
      /> */}

      <Heading size='small'>Bottom Border</Heading>
      <Box direction='vertical' gap="SP6">
        <NestableList
          items={[
            {
              id: 1,
              options: [{ value: <Text size="small">Item 1</Text> }],
            },
            {
              id: 2,
              options: [{ value: <Text size="small">Item 2</Text> }],
            },
            {
              id: 3,
              options: [
                { value: <Text size="small">No bottom border (default)</Text> },
              ],
            },
          ]}
          onChange={() => {}}
        />

        <NestableList
            withBottomBorder
            items={[
              {
                id: 4,
                options: [{ value: <Text size="small">Item 1</Text> }],
              },
              {
                id: 5,
                options: [{ value: <Text size="small">Item 2</Text> }],
              },
              {
                id: 6,
                options: [{ value: <Text size="small">With bottom border</Text> }],
              },
            ]}
            onChange={() => {}}
          />
      </Box>

      <Heading size='large'>Common Use Cases</Heading>

      <Heading size='small'>Sort items into sub categories</Heading>

      <Card>
        <Card.Header
          title="Starting a business"
          suffix={
            <PopoverMenu
              triggerElement={
                <Button
                  priority='secondary'
                  prefixIcon={<Icons.Add/>}
                  size='small'
                >
                  Add
                </Button>
              }
            >
              <PopoverMenu.MenuItem text="Add Step" />
              <PopoverMenu.MenuItem text="Add Section" />
            </PopoverMenu>
          }
        />

        <Card.Divider/>
        <Box minHeight="1px" />

        {/* <NestableList
          items={itemsWithUpdatedControls}
          onChange={(onChangeData:any) => setItems(onChangeData.items)}
          addItemLabel="Add Section"
        /> */}
      </Card>

      <Heading size='small'>Rearrange the Order of items</Heading>

      <SidePanel>
        <SidePanel.Header title="Site pages" />
        <Box
          gap="SP1"
          direction='vertical'
          height="582px"
        >
          <Box
            margin="SP4 SP4 0 SP4"
          >
            <SectionHelper
              title="Manage menus"
              onClose={()=>{}}
              appearance='standard'
            >
              Go to any menu to customize which pages and links are displayed.

              <TextButton skin='dark' size='small' underline='always'>
                More on menus
              </TextButton>

            </SectionHelper>

          </Box>

          <NestableList
            withBottomBorder
            items={[
              {
                id: 1,
                options: [{ value: <Text size='small'>Home</Text> }]
              },
              {
                id: 2,
                options: [{ value: <Text size='small'>About</Text> }]
              },
              {
                id: 3,
                options: [{ value: <Text size='small'>Shop</Text> }]
              },
              {
                id: 4,
                options: [{ value: <Text size='small'>Contact</Text> }]
              }
            ]}

            onChange={()=>{}}
          />

        </Box>

        <SidePanel.Footer>
          <Box align='right' >
            <Button prefixIcon={<Icons.Add/>} >Add Page</Button>
          </Box>
        </SidePanel.Footer>
      </SidePanel>

      <Heading size='small'>In Panels</Heading>

      <SidePanel
        onCloseButtonClick={()=>{}}
        skin='floating'
        width="288px"
        height="576px"
      >
        <SidePanel.Header title="Manage List" />
        <SidePanel.Content noPadding>
            <NestableList
              dividers={false}
              items={itemsWithUpdatedControls}
              onChange={(onChangeData:any)=>setItems(onChangeData.items)}
            />
        </SidePanel.Content>
        <SidePanel.Footer>
          <Box direction='vertical' align='center' >
            <Button size='small'>Add Item</Button>
          </Box>
        </SidePanel.Footer>

      </SidePanel>
    </Box>
  )
}

export default NestableListComponent