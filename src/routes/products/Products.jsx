import React, { useMemo, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Nav from '../../components/nav/Nav'
import  Container  from '../../components/container/Container'
import { Select, Skeleton } from 'antd'
import AllProducts from '../../components/all_products/AllProducts'
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom'

const Products = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [selectValue, setSelectValue] = useState('all')
  const [data, loading] = useFetch(`products/?sort=${selectValue}`)
  const sortedProducts = useMemo(() => {
    sortProducts(data, selectValue)
  },[selectValue])

  const handleChange = (value) => {
    setSelectValue(value)
    searchParam.set('sort', value)
    setSearchParam(searchParam)
  };

  return (
    <div>
       <Nav />
      <Container>
         
          <Select
          defaultValue={"all"}
          style={{

            width: 120,
            marginTop: "100px",
            marginLeft: "50px"
          }}
          onChange={handleChange}
          options={[
            {
              value: 'all',
              label: 'All',
            },
            {
              value: 'cheap',
              label: 'Cheap',
            },
            {
              value: 'expensive',
              label: 'Expensive',
            }
          ]}
        />
         <h2 className='text-3xl font-bold mt-[30px] text-center '>All Products</h2>
        <div className='flex flex-wrap justify-around items-center gap-8 mt-[50px] mb-[100px]' >
          {
            loading 
            ?
            Array.from({ length: 6 }).map((_, index) => (
              <div className="flex flex-col gap-5 items-center" key={index}>
                   <Skeleton.Image active style={{ width: "350px" , height: "350px"}} />
                   <Skeleton.Input active className="skeloton_input"  style={ {width: "250px", height: "30px"} }  />
                   <Skeleton.Input active className="skeloton_input"  style={ {width: "200px", height: "20px"} } />
              </div>
          ))
            :
            data.map(item =>
              <AllProducts key={uuidv4()} item={item} />
            )
          }
        </div>
      </Container>

    </div>
  )
}

const sortProducts  = (product, selectValue) => {
  if(!selectValue){
    return product
  }
  else if  (selectValue === 'cheap'){
    return product.sort((a, b) => a.price - b.price)
  }
  else{
    return product.sort((a, b) => b.price - a.price)
  }
}

export default Products
