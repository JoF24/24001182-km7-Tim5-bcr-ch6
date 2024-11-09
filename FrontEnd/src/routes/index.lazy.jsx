import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { getManufacture } from '../service/Manufacture'
import ManufactureItem from '../components/Manufacture/ManufactureItem'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const { token,user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [manufacture, setManufacture] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getManufactureData = async () => {
      setIsLoading(true)
      const result = await getManufacture()
      if (result.success) {
        setManufacture(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getManufactureData()
    }
  }, [token])

  useEffect(() => {
    const successMessage = sessionStorage.getItem('successMessage')
    if (successMessage) {
      toast.success(successMessage)

      sessionStorage.removeItem('successMessage')
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <Row className="mt-4">
        {user?.role_id === 1 && (
          <>
            <div className="d-flex justify-content-end mb-3">
              <Button as={Link} to="/manufacture/create" variant="primary" size="md">
                + Tambah Data
              </Button>
            </div>
          </>                                        
        )}
        
        {!token && (
          navigate({ to: "/login" })
        )}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : manufacture.length === 0 ? (
          <h1>Manufacture data is not found !</h1>
        ) : (
          manufacture.length > 0 &&
          manufacture.map((manufacture) => (
            <ManufactureItem manufacture={manufacture} key={manufacture?.id} />
          ))
        )}
      </Row>
    </>
  )
}
