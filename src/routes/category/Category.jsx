import React, { memo, useMemo, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Container from '../../components/container/Container'
import Nav from '../../components/nav/Nav'
import CardCategory from '../../components/card_categrory/CardCategory'
import { Select, Skeleton } from 'antd'
import { v4 as uuidv4 } from 'uuid';


const Category = () => {
  const loc = useParams()
  const [searchParam, setSearchParam] = useSearchParams()
  const [data, loading] = useFetch(`products/category/${loc.title.split("-").join(" ")}`)
  const [selectValue, setSelectValue] = useState(searchParam.get('sort') || 'all')
  const sortedProducts = useMemo(() => {
    sortProducts(data, selectValue)
  },[selectValue])

  const handleChange = (value) => {
    setSelectValue(value)
    searchParam.set('sort', value)
    setSearchParam(searchParam)
  };

  


  return (
    <>
      <Nav />
      <Container>
        <Select
          placeholder="Select price"
          defaultValue={selectValue}
          style={{

            width: 120,
            marginTop: "100px"
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
        <div className='flex flex-wrap justify-between items-center gap-8 mt-[50px] mb-[100px]' >
          {
            loading
              ?
              Array.from({ length: 6 }).map((_, index) => (
                <div className="flex flex-col gap-5 items-center" key={index}>
                  <Skeleton.Image active style={{ width: "350px", height: "350px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "250px", height: "30px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "200px", height: "20px" }} />
                </div>
              ))
              :

              data?.map(item =>
                <CardCategory key={uuidv4()} item={item} />
              )
          }
        </div>
      </Container>

    </>
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

export default memo(Category)
