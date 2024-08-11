import { Avatar, Box, Card, CustomModalLayout, EmptyState, Heading, Image, SelectorList, Text, TextButton, Tooltip } from '@wix/design-system'
import React, { useState } from 'react'

// importing icons
import * as Icons from '@wix/wix-ui-icons-common';

const SelectorListComponent = () => {
    const data = (searchQuery:any, offset:any, limit:any)=>
        new Promise((resolve:any)=>
            setTimeout(()=>{
                const items = [
                    {
                        id: 0,
                        title: `Item`
                    },
                    {
                        id: 1,
                        title: `Item`
                    },
                    {
                        id: 2,
                        title: `Item`
                    }
                ];

                const filtered  = items.filter(({ title }) =>
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                );

                resolve({
                    items: filtered.slice(offset, offset + limit),
                    totalCount: filtered.length
                });
            }, 2000)
        )
    
    // Item Structure
    const plainData = [
        {
          id: 0,
          title: `Title`,
        },
        {
          id: 1,
          title: `Title`,
        },
        {
          id: 2,
          title: `Title`,
        },
      ];

      const dataWithImage = [
        {
          id: 0,
          title: `Title`,
          subtitle: 'Subtitle',
          extraNode: (
            <Box border="1px dotted">
                 Extra node
            </Box>
             
           
          ),
          image: <Image width="100%" height="100%" />,
          subtitleNode: (
            <Box border="1px dotted">
                    Extra node
            </Box>
          ),
        },
        {
          id: 1,
          title: `Title`,
          subtitle: 'Subtitle',
          extraNode: (
            <Box border="1px dotted">
                    Extra node
            </Box>
          ),
          image: <Image width="100%" height="100%" />,
          subtitleNode: (
            <Box border="1px dotted">
                    Extra node
            </Box>
          ),
        },
        {
          id: 2,
          title: `Title`,
          subtitle: 'Subtitle',
          extraNode: (
            <Box border="1px dotted">
                    Extra node
            </Box>
          ),
          image: <Image width="100%" height="100%" />,
          subtitleNode: (
            <Box border="1px dotted">
                    Extra node
            </Box>
          ),
        },
      ];
    
      const dataWithNode = [
        {
          id: 0,
          title: `Coffee shop 1`,
          subtitle: 'Main street 1',
          extraNode: <Text secondary>2 tables available</Text>,
          image: <Image width="100%" height="100%" src="https://www.docs.wixdesignsystem.com/FoodExample4.jpg" />,
          subtitleNode: (
            <Box direction="horizontal" gap="1" paddingTop="SP1" color="D30">
              <Tooltip content="Table seating">
                <Icons.TableReservationSmall />
              </Tooltip>
              <Tooltip content="Bar">
                <Icons.BarSmall />
              </Tooltip>
            </Box>
          ),
        },
        {
          id: 1,
          title: `Coffee shop 2`,
          subtitle: 'Main street 2',
          extraNode: <Text secondary>7 tables available</Text>,
          image: <Image width="100%" height="100%" src="https://www.docs.wixdesignsystem.com/FoodExample1.jpg" />,
          subtitleNode: (
            <Box direction="horizontal" gap="1" paddingTop="SP1" color="D30">
              <Tooltip content="Table seating">
                <Icons.TableReservationSmall />
              </Tooltip>
            </Box>
          ),
        },
        {
          id: 2,
          title: `Coffee shop 3`,
          subtitle: 'Main street 2',
          extraNode: <Text secondary>1 table available</Text>,
          image: <Image width="100%" height="100%" src="https://www.docs.wixdesignsystem.com/FoodExample5.jpg" />,
          subtitleNode: (
            <Box direction="horizontal" gap="1" paddingTop="SP1" color="D30">
              <Tooltip content="Table seating">
                <Icons.TableReservationSmall />
              </Tooltip>
              <Tooltip content="Bar">
                <Icons.BarSmall />
              </Tooltip>
            </Box>
          ),
        },
      ];

      const getDataSource = (data:any) => (searchQuery:any, offset:any, limit:any) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const filtered = data.filter(({ title }:any) =>
              title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
    
            resolve({
              items: filtered.slice(offset, offset + limit),
              totalCount: filtered.length,
            });
          }, 2000),
        );
    
    // Image Shape
    const rectangularData = [
        {
          id: 0,
          title: `Rectangular (default)`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 1,
          title: `Rectangular (default)`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 2,
          title: `Rectangular (default)`,
          image: <Image weight="100%" height="100%" />,
        },
      ];

    const circleData = [
        {
            id: 0,
            title: `Circle`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 1,
            title: `Circle`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 2,
            title: `Circle`,
            image: <Image weight="100%" height="100%" />,
        },
    ];

    const getShapeDataSource = (data:any) => (searchQuery:any, offset:any, limit:any) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const filtered = data.filter(({ title }:any) =>
              title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
    
            resolve({
              items: filtered.slice(offset, offset + limit),
              totalCount: filtered.length,
            });
          }, 2000),
        );
    
    // Image Size
    const tinyImageData = [
        {
          id: 0,
          title: `Tiny`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 1,
          title: `Tiny`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 2,
          title: `Tiny`,
          image: <Image weight="100%" height="100%" />,
        },
      ];
    
    const smallImageData = [
        {
            id: 0,
            title: `Small`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 1,
            title: `Small`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 2,
            title: `Small`,
            image: <Image weight="100%" height="100%" />,
        },
    ];

    const largeImageData = [
        {
            id: 0,
            title: `Large (default)`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 1,
            title: `Large (default)`,
            image: <Image weight="100%" height="100%" />,
        },
        {
            id: 2,
            title: `Large (default)`,
            image: <Image weight="100%" height="100%" />,
        },
    ];

    const portraitImageData = [
        {
          id: 0,
          title: `Portrait`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 1,
          title: `Portrait`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 2,
          title: `Portrait`,
          image: <Image weight="100%" height="100%" />,
        },
    ];

    const cinemaImageData = [
        {
          id: 0,
          title: `Cinema`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 1,
          title: `Cinema`,
          image: <Image weight="100%" height="100%" />,
        },
        {
          id: 2,
          title: `Cinema`,
          image: <Image weight="100%" height="100%" />,
        },
    ];


    // Height
    const heightData = (searchQuery:any, offset:any, limit:any) =>
        new Promise((resolve) =>
          setTimeout(() => {
            const items = [
              {
                id: 0,
                title: `Item`,
              },
              {
                id: 1,
                title: `Item`,
              },
              {
                id: 3,
                title: `Item`,
              },
              {
                id: 4,
                title: `Item`,
              },
              {
                id: 5,
                title: `Item`,
              },
              {
                id: 6,
                title: `Item`,
              },
              {
                id: 7,
                title: `Item`,
              },
              {
                id: 8,
                title: `Item`,
              },
              {
                id: 9,
                title: `Item`,
              },
              {
                id: 10,
                title: `Item`,
              },
            ];
    
            const filtered = items.filter(({ title }) =>
              title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
    
            resolve({
              items: filtered.slice(offset, offset + limit),
              totalCount: filtered.length,
            });
          }, 2000),
        );

    // Disabled Item
    const disabledData = (searchQuery:any, offset:any, limit:any) =>
      new Promise ((resolve:any)=>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Item`
            },
            {
              id: 1,
              title: `Disabled item`,
              disabled: true
            },
            {
              id: 2,
              title: `Item`
            }
          ]

          const filtered = items.filter(({ title }: any)=>
            title.toLowerCase().includes(searchQuery.toLowerCase())
          )

          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length
          })          
        }, 2000)
      )

    
    // Subtitle data
    const subtitleData = (searchQuery:any, offset:any, limit:any) =>
      new Promise ((resolve:any)=>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Item`
            },
            {
              id: 1,
              title: `Item`,
              
            },
            {
              id: 2,
              title: `Item`
            }
          ]

          const filtered = items.filter(({ title }: any)=>
            title.toLowerCase().includes(searchQuery.toLowerCase())
          )

          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length
          })          
        }, 2000)
      )


    // Below Node Data
    const belowNodedata = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Item`,
              belowNode: (
                <Box border="1px dotted" align='center' >
                  Below Node
                </Box>
              ),
              showBelowNodeOnSelect: true,
              selected: true,
            },
            {
              id: 1,
              title: `Item`,
              belowNode: (
                <Box border="1px dotted" align='center' >
                  Below Node
                </Box>
              ),
              showBelowNodeOnSelect: true,
            },
            {
              id: 2,
              title: `Item`,
              belowNode: (
                <Box border="1px dotted" align='center' >
                  Below Node
                </Box>
              ),
              showBelowNodeOnSelect: true,
            },
          ];
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),
      );

    // No items empty state
    const noItemsEmptyStateData = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items: any[] = [];
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),
      );

    const [ searchQuery, setSearchQuery] = useState('');

    // No Search results
    const noSearchResultsData = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Item`,
            },
            {
              id: 1,
              title: `Item`,
            },
            {
              id: 2,
              title: `Item`,
            },
          ];
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),
      );

    
    const handleClearSearch = () => {
      setSearchQuery('');
    };


    // Number of items to Load
    const noOfItemsToLoadData = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items = Array(50)
            .fill(0)
            .map((_, i) => ({
              id: i,
              title: `Item ${i + 1}`,
            }));
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),
      );

    // Single Selection Data
    const singleSelectionData = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Training`,
              subtitle: `3 posts`,
              extraNode: <Text secondary>Current category</Text>,
              disabled: true,
            },
            {
              id: 1,
              title: `Championships`,
              subtitle: `3 posts`,
            },
            {
              id: 3,
              title: `Inventory`,
              subtitle: `21 post`,
            },
            {
              id: 4,
              title: `Trainers`,
              subtitle: `18 posts`,
            },
            {
              id: 5,
              title: `Teams`,
              subtitle: `2 posts`,
            },
          ];
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),
      );

    // multiple selection data
    const multipleSelectionData = (searchQuery:any, offset:any, limit:any) =>
      new Promise((resolve) =>
        setTimeout(() => {
          const items = [
            {
              id: 0,
              title: `Science Expert`,
              subtitle: `Monaco, Monaco`,
              extraNode: <Text secondary>$77/h</Text>,
              image: (
                <Avatar
                  name="Science Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 1,
              title: `Yoga Expert`,
              subtitle: `New Delhi, India`,
              extraNode: <Text secondary>$78/h</Text>,
              image: (
                <Avatar
                  name="Yoga Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 3,
              title: `History Expert`,
              subtitle: `Singapore, Singapore`,
              extraNode: <Text secondary>$52/h</Text>,
              image: (
                <Avatar
                  name="History Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 4,
              title: `Statistics Expert`,
              subtitle: `Abidjan, Ivory Coast`,
              extraNode: <Text secondary>$80/h</Text>,
              image: (
                <Avatar
                  name="Statistics Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 5,
              title: `Soccer Expert`,
              subtitle: `Tokyo, Japan`,
              extraNode: <Text secondary>$200/h</Text>,
              image: (
                <Avatar
                  name="Soccer Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 6,
              title: `Culinary Expert`,
              subtitle: `Sydney, Australia`,
              extraNode: <Text secondary>$102/h</Text>,
              image: (
                <Avatar
                  name="Culinary Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 7,
              title: `Design Expert`,
              subtitle: `Baku, Azerbaijan`,
              extraNode: <Text secondary>$75/h</Text>,
              image: (
                <Avatar
                  name="Design Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 8,
              title: `SEO Expert`,
              subtitle: `San Francisco, United States`,
              extraNode: <Text secondary>$115/h</Text>,
              image: (
                <Avatar
                  name="SEO Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 9,
              title: `Painting Expert`,
              subtitle: `Seoul, South Korea`,
              extraNode: <Text secondary>$65/h</Text>,
              image: (
                <Avatar
                  name="Painting Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 10,
              title: `Health Expert`,
              subtitle: `Paris, France`,
              extraNode: <Text secondary>$160/h</Text>,
              image: (
                <Avatar
                  name="Health Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 11,
              title: `Writing Expert`,
              subtitle: `Oklahoma City, United States`,
              extraNode: <Text secondary>$90/h</Text>,
              image: (
                <Avatar
                  name="Writing Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 12,
              title: `Painting Expert`,
              subtitle: `Phoenix, Arizona, United States`,
              extraNode: <Text secondary>$80/h</Text>,
              image: (
                <Avatar
                  name="Painting Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 13,
              title: `Meditation Expert`,
              subtitle: `Belgrade, Serbia`,
              extraNode: <Text secondary>$64/h</Text>,
              image: (
                <Avatar
                  name="Meditation Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 14,
              title: `Career Expert`,
              subtitle: `Tokyo, Japan`,
              extraNode: <Text secondary>$130/h</Text>,
              image: (
                <Avatar
                  name="Career Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
            {
              id: 15,
              title: `Sales Expert`,
              subtitle: `Bangkok, Thailand`,
              extraNode: <Text secondary>$75/h</Text>,
              image: (
                <Avatar
                  name="Sales Expert"
                  size="size60"
                  imgProps={{ src: 'NotFoundImage.jpg' }}
                />
              ),
            },
          ];
  
          const filtered = items.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
  
          resolve({
            items: filtered.slice(offset, offset + limit),
            totalCount: filtered.length,
          });
        }, 2000),

      );
    
  return (
    <Box direction='vertical' gap="SP6"  >
        <Heading size='small'>Type</Heading>

        <SelectorList dataSource={data}/>

        <SelectorList dataSource={data} multiple/>

        <Heading size='small'>Item Structure</Heading>

        <SelectorList dataSource={getDataSource(plainData)} />
        <SelectorList dataSource={getDataSource(dataWithImage)} />
        <SelectorList dataSource={getDataSource(dataWithNode)} />

        <Heading size='small'>Image Shape</Heading>

        <SelectorList dataSource={getShapeDataSource(rectangularData)} />
        <SelectorList
            dataSource={getShapeDataSource(circleData)}
            imageShape="circle"
        />

        <Heading size='small'>Image Size</Heading>

        <SelectorList
            dataSource={getDataSource(tinyImageData)}
            imageSize="tiny"
        />
        <SelectorList
            dataSource={getDataSource(smallImageData)}
            imageSize="small"
        />
        <SelectorList
            dataSource={getDataSource(largeImageData)}
            imageSize="large"
        />
        <SelectorList
            dataSource={getDataSource(portraitImageData)}
            imageSize="portrait"
        />
        <SelectorList
            dataSource={getDataSource(cinemaImageData)}
            imageSize="cinema"
        />

        <Heading size='small'>Height</Heading>
        <Box gap="SP6" >
            <SelectorList dataSource={heightData} height="240px"></SelectorList>
            <SelectorList dataSource={heightData} maxHeight="360px"></SelectorList>
        </Box>

        <Heading size='small'>Disabled Item</Heading>
        <SelectorList dataSource={disabledData} />

        <Heading size='small'>Subtitle</Heading>
        <SelectorList
          dataSource={subtitleData}
          subtitle={
            <Box border="1px dotted" align='center'>
              Subtitle
            </Box>
          }
        />

        <Heading size='small'>Search</Heading>

        <Box direction='vertical' gap="SP4">
          <SelectorList dataSource={subtitleData} withSearch={false} />
          <SelectorList dataSource={subtitleData} searchPlaceholder="Custom placeholder" />
        </Box>

        <Heading size='small'>Select or Desellect All</Heading>

        <Box direction='vertical' gap="SP6" >
          <SelectorList
           dataSource={subtitleData}
           multiple
          >
            {({ renderList, renderToggleAllCheckbox, selectedItems }:any)=>(
              <CustomModalLayout
                title="Import items"
                primaryButtonText="Import"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                removeContentPadding
                showFooterDivider
                showHeaderDivider
                sideActions={
                  <Box paddingLeft="1">{renderToggleAllCheckbox()}</Box>
                }
              >
                {renderList()}
              </CustomModalLayout>
            )}

          </SelectorList>

          <SelectorList
            dataSource={subtitleData}
            multiple
            selectAllText="Select all"
            deselectAllText="Deselect all from importing"
          >
            {({ renderList, renderToggleAllCheckbox, selectedItems }) => (
              <CustomModalLayout
                title="Import items"
                primaryButtonText="Import"
                secondaryButtonText="Cancel"
                onCloseButtonClick={() => {}}
                removeContentPadding
                showFooterDivider
                showHeaderDivider
                sideActions={<Box paddingLeft="1">{renderToggleAllCheckbox()}</Box>}
              >
                {renderList()}
              </CustomModalLayout>
            )}
          </SelectorList>

        </Box>

        <Heading size='small'>Below Node</Heading>
        <SelectorList dataSource={belowNodedata} />

        <Heading size='small'>No items Empty State</Heading>
        
        <Box direction='vertical' gap="SP6" >
          <SelectorList 
            dataSource={noItemsEmptyStateData}
            imageSize='small'
            emptyState={
              <Box height="280px" align='center' verticalAlign='="middle'>
                <EmptyState
                  image="https://www.docs.wixdesignsystem.com/EmptyState_Generic1.svg"
                  title="Add your first meal"
                  subtitle="Start getting orders by adding meals to your menu"
                >
                  <TextButton prefixIcon={<Icons.Add/>} >Add Meal</TextButton>
                </EmptyState>
              </Box>
            }
          >
            {({ renderList })=>(
              <CustomModalLayout
                title="Edit menu"
                primaryButtonText="Save"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                removeContentPadding
                showFooterDivider
                showHeaderDivider
              >
                {renderList()}
              </CustomModalLayout>
            )}

          </SelectorList>

        </Box>

        <Heading size='small'>No Search Results Empty State</Heading>
        <Box direction='vertical' gap="SP6" >
          <SelectorList
            dataSource={noSearchResultsData}
            multiple
            renderNoResults={()=>(
              <Box height="280px" align='center' verticalAlign="middle" >
                <EmptyState
                  image="https://www.docs.wixdesignsystem.com/EmptyState_Generic2.svg"
                  title="No results found"
                  subtitle="No items match your search criteria. Try to search by another keyword."
                >
                  <TextButton >Clear Search</TextButton>
                </EmptyState>

              </Box>
            )}
          >
            {({ renderList })=>(
              <CustomModalLayout
                title="Import items"
                primaryButtonText="Import"
                secondaryButtonText="Cancel"
                onCloseButtonClick={()=>{}}
                removeContentPadding
                showFooterDivider
                showHeaderDivider
              >
                {renderList()}
              </CustomModalLayout>
            )}

          </SelectorList>
        </Box>

        <Heading size='medium'>Developer Examples</Heading>
        <Heading size='small'>Number of items to Load</Heading>

        <Box direction='vertical' gap="SP6" >
          <CustomModalLayout
            height="480px"
            title="Select item"
            primaryButtonText="Select"
            secondaryButtonText="Cancel"
            onCloseButtonClick={()=>{}}
            removeContentPadding
            showFooterDivider
            showHeaderDivider
          >
            <SelectorList
              itemsPerPage={15}
              initialAmountToLoad={10}
              dataSource={noOfItemsToLoadData}
            />

          </CustomModalLayout>

        </Box>

        <Heading size='medium'>Common use cases</Heading>
        <Heading size='small'>Single selection</Heading>

        <Box direction='vertical' gap="SP6" >
          <CustomModalLayout
            primaryButtonText="Move Post"
            secondaryButtonText="Cancel"
            // onCloseButtonClick={() => setShown(false)}
            title="Move post to a category"
            removeContentPadding
            showFooterDivider
            showHeaderDivider
            width="600px"
          >
            <SelectorList dataSource={singleSelectionData} withSearch={false} />
          </CustomModalLayout>
        </Box>

        <Heading size='small'>Multiple selection</Heading>
        
        <Box direction='vertical' gap="SP6" >
        <SelectorList itemsPerPage={10} dataSource={multipleSelectionData} multiple>
          {({ renderList, renderToggleAllCheckbox, selectedItems }) => (
            <CustomModalLayout
              width="600px"
              height="480px"
              title="Select experts"
              primaryButtonText="Select"
              secondaryButtonText="Cancel"
              onCloseButtonClick={() => {}}
              removeContentPadding
              showFooterDivider
              showHeaderDivider
              sideActions={<Box paddingLeft="1">{renderToggleAllCheckbox()}</Box>}
            >
              {renderList()}
            </CustomModalLayout>
          )}
        </SelectorList>
        </Box>

        
          


          
      </Box>
  )
}

export default SelectorListComponent