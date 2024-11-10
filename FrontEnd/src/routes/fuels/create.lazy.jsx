import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/fuels/create')({
  component: () => <div>Hello /fuels/create!</div>,
})