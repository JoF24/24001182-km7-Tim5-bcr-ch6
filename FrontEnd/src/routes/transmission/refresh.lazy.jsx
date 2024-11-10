import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/transmission/refresh')({
  component: () => RefreshTransmission(),
})

function RefreshTransmission() {
  const navigate = useNavigate()
  navigate({ to: '/transmissions' })
  return
}
