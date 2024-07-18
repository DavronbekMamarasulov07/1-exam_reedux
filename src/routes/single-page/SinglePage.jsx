import React, { memo } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Skeleton } from 'antd'
import SingleCardPage from '../../components/single_page/SingleCardPage'
import Container from '../../components/container/Container'
import Nav from '../../components/nav/Nav'

const SinglePage = () => {
  const { id } = useParams()
  const [data, loading] = useFetch(`products/${id}`)



  return (
    <>
      <Nav />
      <Container>
        <div className='my-28'>

          {loading ? <div className="flex gap-16">
            <Skeleton.Image active className="skeloton_img" style={{ width: "550px", height: "580px" }} />
            <div className="flex flex-col gap-8">
              <Skeleton.Input active className="skeloton_input" style={{ width: "500px", height: "50px" }} />
              <div className="flex items-center gap-3">
                <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "50px", height: "30px" }} />
              </div>

              <Skeleton.Input active className="skeloton_input" style={{ width: "700px", height: "110px" }} />
              <div className="flex items-center gap-3">
                <Skeleton.Input active className="skeloton_input" style={{ width: "80px", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "80px", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "70px", height: "30px" }} />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton.Input active className="skeloton_input" style={{ width: "150x", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
              </div>
              <div className="flex items-center gap-3">
                <Skeleton.Input active className="skeloton_input" style={{ width: "150x", height: "30px" }} />
                <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
              </div>
              <div className="flex items-center gap-3 justify-between">
                <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                <div className="flex items-center gap-3">
                  <Skeleton.Input active className="skeloton_input" style={{ width: "150", height: "30px" }} />
                  <Skeleton.Input active className="skeloton_input" style={{ width: "50", height: "30px" }} />
                </div>

              </div>
            </div>

          </div> : <SingleCardPage data={data} />}
        </div>
      </Container>
    </>
  )
}

export default memo(SinglePage)
