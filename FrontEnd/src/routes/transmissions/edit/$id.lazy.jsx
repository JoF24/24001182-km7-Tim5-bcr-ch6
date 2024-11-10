import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/transmissions/edit/$id')({
  component: () => <div>Hello /fuels/edit/id!</div>,
})
