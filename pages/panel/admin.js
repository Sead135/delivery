import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Container } from '../../components/Layout/LayoutComponents'

const Admin = () => {
  return (
    <Layout>
        <Container>
            <AdminBlock>
                <AddNewItems>
                    <AddNew>
                        <AddName></AddName>
                        <AddCategory></AddCategory>
                        <AddPrice></AddPrice>
                        <AddExeption></AddExeption>
                        
                        <AddDesc></AddDesc>
                    </AddNew>
                </AddNewItems>
                <Order></Order>
            </AdminBlock>
        </Container>
    </Layout>
  )
}

export default Admin