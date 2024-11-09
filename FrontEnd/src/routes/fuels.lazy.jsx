import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { getFuels } from '../service/fuel' // Update the import
import FuelItem from '../components/Fuel/FuelItem' // Update to FuelItem component
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/fuels')({
  component: Index,
})

function Index() {
  const { token } = useSelector((state) => state.auth)

  const [fuels, setFuels] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFuelData = async () => {
      setIsLoading(true)
      const result = await getFuels()
      if (result.success) {
        setFuels(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getFuelData()
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
        <div className="d-flex justify-content-end mb-3">
          <Button as={Link} to="/fuels/create" variant="primary" size="md">
            + Tambah Data
          </Button>
        </div>
        {!token && (
          <Col>
            <h1 className="text-center">
              Please login first to get fuel data!
            </h1>
          </Col>
        )}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : fuels.length === 0 ? (
          <h1>Fuel data is not found!</h1>
        ) : (
          fuels.length > 0 &&
          fuels.map((fuel) => <FuelItem fuel={fuel} key={fuel?.id} />)
        )}
      </Row>
    </>
  )
}

export default Index