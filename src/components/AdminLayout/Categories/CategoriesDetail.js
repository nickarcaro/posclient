import React from 'react'
import { List} from 'antd'


const CategoriesDetails = ({ categories }) => {
    return categories === undefined ? (
        <div> Seleccione una categoria</div>
    ) : (
        <>
            <List
                bordered
                header={<h1>Productos</h1>}
                dataSource={categories.productos}
                renderItem={item => (
                    <List.Item>
                        <div>{item.nombre}</div>
                    </List.Item>
                )}
            />
        </>
    )
}

export default CategoriesDetails
