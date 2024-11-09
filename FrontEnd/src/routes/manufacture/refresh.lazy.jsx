import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/manufacture/refresh')({
  component: () => RefreshManufacture(),
})

function RefreshManufacture(){
    const navigate = useNavigate();
    navigate({ to: "/" });
    return;
}
