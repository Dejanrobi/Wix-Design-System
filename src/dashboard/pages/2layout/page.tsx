import { Box, Breadcrumbs, Cell, Heading, Layout, Page } from '@wix/design-system'
import React from 'react'

// importing css
import '@wix/design-system/styles.global.css';
import BoxComponent from '../../LayoutComponent/BoxComponent';
import DividerComponent from '../../LayoutComponent/DividerComponent';
import EmptyStateComponent from '../../LayoutComponent/EmptyStateComponent';
import LayoutComp from '../../LayoutComponent/LayoutComp';
import MarketingLayoutComponent from '../../LayoutComponent/MarketingLayoutComponent';
import SectionHeaderComponent from '../../LayoutComponent/SectionHeaderComponent';
import CardContentComponent from '../../LayoutComponent/Card/CardContentComponent';
import CardDividerComponent from '../../LayoutComponent/Card/CardDividerComponent';
import CardHeaderComponent from '../../LayoutComponent/Card/CardHeaderComponent';
import CardComponent from '../../LayoutComponent/Card/CardComponent';
import PageFooterComponent from '../../LayoutComponent/Page/PageFooterComponent';
import PageHeaderComponent from '../../LayoutComponent/Page/PageHeaderComponent';
import PageSectionComponent from '../../LayoutComponent/Page/PageSectionComponent';
import PageComponent from '../../LayoutComponent/Page/PageComponent';

const page = () => {
  return (
    <Page>
        <Page.Header
            title="Layout"
            breadcrumbs={
                <Breadcrumbs
                    activeId="2"
                    items={[
                        { id: '1', value: 'Apps', disabled: true },
                        { id: '2', value: 'Wix Design System', disabled: true },
                        { id: '3', value: 'Layout' },
                    ]}
                />
            }
        />

        <Page.Content>
            <Layout>
                <Cell span={12} >
                    <Heading size='medium'>Box</Heading>                  
                    <BoxComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Divider</Heading>                  
                    <DividerComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Empty State</Heading>                  
                    <EmptyStateComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Layout</Heading>                  
                    <LayoutComp/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Marketing Layout</Heading>                  
                    <MarketingLayoutComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Section Header</Heading>                  
                    <SectionHeaderComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='large'>Card</Heading>  
                    <Heading size='medium'>Card.Content</Heading>                
                    <CardContentComponent/>              
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Card.Divider</Heading>                  
                    <CardDividerComponent/>                   
                </Cell> 
                
                <Cell span={12} >
                    <Heading size='medium'>Card.Header</Heading>                  
                    <CardHeaderComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Card</Heading>                  
                    <CardComponent/>                   
                </Cell> 

                <Cell span={12} >
                    <Heading size='medium'>Page</Heading>    
                    <Heading size='medium'>Page Footer Component</Heading>                
                    <PageFooterComponent/>                   
                </Cell> 

                <Cell span={12} >                  
                    <Heading size='medium'>Page Header</Heading>                
                    <PageHeaderComponent/>                   
                </Cell> 

                <Cell span={12} >                  
                    <Heading size='medium'>Page Section</Heading>                
                    <PageSectionComponent/>                   
                </Cell> 

                <Cell span={12} >                  
                    <Heading size='medium'>Page</Heading>                
                    <PageComponent/>                   
                </Cell> 

                
            </Layout>
        </Page.Content>
    </Page>
  )
}

export default page