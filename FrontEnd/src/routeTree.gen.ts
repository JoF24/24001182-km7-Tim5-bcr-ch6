/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TypeLazyImport = createFileRoute('/type')()
const TransmissionsLazyImport = createFileRoute('/transmissions')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const ModelsLazyImport = createFileRoute('/models')()
const LoginLazyImport = createFileRoute('/login')()
const FuelsLazyImport = createFileRoute('/fuels')()
const CarsLazyImport = createFileRoute('/cars')()
const IndexLazyImport = createFileRoute('/')()
const TypesRefreshLazyImport = createFileRoute('/types/refresh')()
const TypesCreateLazyImport = createFileRoute('/types/create')()
const TransmissionRefreshLazyImport = createFileRoute('/transmission/refresh')()
const TransmissionCreateLazyImport = createFileRoute('/transmission/create')()
const ModelRefreshLazyImport = createFileRoute('/model/refresh')()
const ModelCreateLazyImport = createFileRoute('/model/create')()
const ManufactureRefreshLazyImport = createFileRoute('/manufacture/refresh')()
const ManufactureCreateLazyImport = createFileRoute('/manufacture/create')()
const FuelRefreshLazyImport = createFileRoute('/fuel/refresh')()
const FuelCreateLazyImport = createFileRoute('/fuel/create')()
const CarRefreshLazyImport = createFileRoute('/car/refresh')()
const CarCreateLazyImport = createFileRoute('/car/create')()
const TypesEditIdLazyImport = createFileRoute('/types/edit/$id')()
const TransmissionEditIdLazyImport = createFileRoute('/transmission/edit/$id')()
const ModelEditIdLazyImport = createFileRoute('/model/edit/$id')()
const ManufactureEditIdLazyImport = createFileRoute('/manufacture/edit/$id')()
const FuelEditIdLazyImport = createFileRoute('/fuel/edit/$id')()
const CarEditIdLazyImport = createFileRoute('/car/edit/$id')()

// Create/Update Routes

const TypeLazyRoute = TypeLazyImport.update({
  id: '/type',
  path: '/type',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/type.lazy').then((d) => d.Route))

const TransmissionsLazyRoute = TransmissionsLazyImport.update({
  id: '/transmissions',
  path: '/transmissions',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/transmissions.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const ModelsLazyRoute = ModelsLazyImport.update({
  id: '/models',
  path: '/models',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/models.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const FuelsLazyRoute = FuelsLazyImport.update({
  id: '/fuels',
  path: '/fuels',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/fuels.lazy').then((d) => d.Route))

const CarsLazyRoute = CarsLazyImport.update({
  id: '/cars',
  path: '/cars',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TypesRefreshLazyRoute = TypesRefreshLazyImport.update({
  id: '/types/refresh',
  path: '/types/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/refresh.lazy').then((d) => d.Route))

const TypesCreateLazyRoute = TypesCreateLazyImport.update({
  id: '/types/create',
  path: '/types/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types/create.lazy').then((d) => d.Route))

const TransmissionRefreshLazyRoute = TransmissionRefreshLazyImport.update({
  id: '/transmission/refresh',
  path: '/transmission/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmission/refresh.lazy').then((d) => d.Route),
)

const TransmissionCreateLazyRoute = TransmissionCreateLazyImport.update({
  id: '/transmission/create',
  path: '/transmission/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmission/create.lazy').then((d) => d.Route),
)

const ModelRefreshLazyRoute = ModelRefreshLazyImport.update({
  id: '/model/refresh',
  path: '/model/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/model/refresh.lazy').then((d) => d.Route))

const ModelCreateLazyRoute = ModelCreateLazyImport.update({
  id: '/model/create',
  path: '/model/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/model/create.lazy').then((d) => d.Route))

const ManufactureRefreshLazyRoute = ManufactureRefreshLazyImport.update({
  id: '/manufacture/refresh',
  path: '/manufacture/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufacture/refresh.lazy').then((d) => d.Route),
)

const ManufactureCreateLazyRoute = ManufactureCreateLazyImport.update({
  id: '/manufacture/create',
  path: '/manufacture/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufacture/create.lazy').then((d) => d.Route),
)

const FuelRefreshLazyRoute = FuelRefreshLazyImport.update({
  id: '/fuel/refresh',
  path: '/fuel/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/fuel/refresh.lazy').then((d) => d.Route))

const FuelCreateLazyRoute = FuelCreateLazyImport.update({
  id: '/fuel/create',
  path: '/fuel/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/fuel/create.lazy').then((d) => d.Route))

const CarRefreshLazyRoute = CarRefreshLazyImport.update({
  id: '/car/refresh',
  path: '/car/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/car/refresh.lazy').then((d) => d.Route))

const CarCreateLazyRoute = CarCreateLazyImport.update({
  id: '/car/create',
  path: '/car/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/car/create.lazy').then((d) => d.Route))

const TypesEditIdLazyRoute = TypesEditIdLazyImport.update({
  id: '/types/edit/$id',
  path: '/types/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types/edit/$id.lazy').then((d) => d.Route),
)

const TransmissionEditIdLazyRoute = TransmissionEditIdLazyImport.update({
  id: '/transmission/edit/$id',
  path: '/transmission/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmission/edit/$id.lazy').then((d) => d.Route),
)

const ModelEditIdLazyRoute = ModelEditIdLazyImport.update({
  id: '/model/edit/$id',
  path: '/model/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/model/edit/$id.lazy').then((d) => d.Route),
)

const ManufactureEditIdLazyRoute = ManufactureEditIdLazyImport.update({
  id: '/manufacture/edit/$id',
  path: '/manufacture/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufacture/edit/$id.lazy').then((d) => d.Route),
)

const FuelEditIdLazyRoute = FuelEditIdLazyImport.update({
  id: '/fuel/edit/$id',
  path: '/fuel/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/fuel/edit/$id.lazy').then((d) => d.Route))

const CarEditIdLazyRoute = CarEditIdLazyImport.update({
  id: '/car/edit/$id',
  path: '/car/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/car/edit/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/cars': {
      id: '/cars'
      path: '/cars'
      fullPath: '/cars'
      preLoaderRoute: typeof CarsLazyImport
      parentRoute: typeof rootRoute
    }
    '/fuels': {
      id: '/fuels'
      path: '/fuels'
      fullPath: '/fuels'
      preLoaderRoute: typeof FuelsLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/models': {
      id: '/models'
      path: '/models'
      fullPath: '/models'
      preLoaderRoute: typeof ModelsLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions': {
      id: '/transmissions'
      path: '/transmissions'
      fullPath: '/transmissions'
      preLoaderRoute: typeof TransmissionsLazyImport
      parentRoute: typeof rootRoute
    }
    '/type': {
      id: '/type'
      path: '/type'
      fullPath: '/type'
      preLoaderRoute: typeof TypeLazyImport
      parentRoute: typeof rootRoute
    }
    '/car/create': {
      id: '/car/create'
      path: '/car/create'
      fullPath: '/car/create'
      preLoaderRoute: typeof CarCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/car/refresh': {
      id: '/car/refresh'
      path: '/car/refresh'
      fullPath: '/car/refresh'
      preLoaderRoute: typeof CarRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/fuel/create': {
      id: '/fuel/create'
      path: '/fuel/create'
      fullPath: '/fuel/create'
      preLoaderRoute: typeof FuelCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/fuel/refresh': {
      id: '/fuel/refresh'
      path: '/fuel/refresh'
      fullPath: '/fuel/refresh'
      preLoaderRoute: typeof FuelRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufacture/create': {
      id: '/manufacture/create'
      path: '/manufacture/create'
      fullPath: '/manufacture/create'
      preLoaderRoute: typeof ManufactureCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufacture/refresh': {
      id: '/manufacture/refresh'
      path: '/manufacture/refresh'
      fullPath: '/manufacture/refresh'
      preLoaderRoute: typeof ManufactureRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/model/create': {
      id: '/model/create'
      path: '/model/create'
      fullPath: '/model/create'
      preLoaderRoute: typeof ModelCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/model/refresh': {
      id: '/model/refresh'
      path: '/model/refresh'
      fullPath: '/model/refresh'
      preLoaderRoute: typeof ModelRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmission/create': {
      id: '/transmission/create'
      path: '/transmission/create'
      fullPath: '/transmission/create'
      preLoaderRoute: typeof TransmissionCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmission/refresh': {
      id: '/transmission/refresh'
      path: '/transmission/refresh'
      fullPath: '/transmission/refresh'
      preLoaderRoute: typeof TransmissionRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/create': {
      id: '/types/create'
      path: '/types/create'
      fullPath: '/types/create'
      preLoaderRoute: typeof TypesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/refresh': {
      id: '/types/refresh'
      path: '/types/refresh'
      fullPath: '/types/refresh'
      preLoaderRoute: typeof TypesRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/car/edit/$id': {
      id: '/car/edit/$id'
      path: '/car/edit/$id'
      fullPath: '/car/edit/$id'
      preLoaderRoute: typeof CarEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/fuel/edit/$id': {
      id: '/fuel/edit/$id'
      path: '/fuel/edit/$id'
      fullPath: '/fuel/edit/$id'
      preLoaderRoute: typeof FuelEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufacture/edit/$id': {
      id: '/manufacture/edit/$id'
      path: '/manufacture/edit/$id'
      fullPath: '/manufacture/edit/$id'
      preLoaderRoute: typeof ManufactureEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/model/edit/$id': {
      id: '/model/edit/$id'
      path: '/model/edit/$id'
      fullPath: '/model/edit/$id'
      preLoaderRoute: typeof ModelEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmission/edit/$id': {
      id: '/transmission/edit/$id'
      path: '/transmission/edit/$id'
      fullPath: '/transmission/edit/$id'
      preLoaderRoute: typeof TransmissionEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types/edit/$id': {
      id: '/types/edit/$id'
      path: '/types/edit/$id'
      fullPath: '/types/edit/$id'
      preLoaderRoute: typeof TypesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/models': typeof ModelsLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/type': typeof TypeLazyRoute
  '/car/create': typeof CarCreateLazyRoute
  '/car/refresh': typeof CarRefreshLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/fuel/refresh': typeof FuelRefreshLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/model/create': typeof ModelCreateLazyRoute
  '/model/refresh': typeof ModelRefreshLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/types/refresh': typeof TypesRefreshLazyRoute
  '/car/edit/$id': typeof CarEditIdLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/model/edit/$id': typeof ModelEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/models': typeof ModelsLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/type': typeof TypeLazyRoute
  '/car/create': typeof CarCreateLazyRoute
  '/car/refresh': typeof CarRefreshLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/fuel/refresh': typeof FuelRefreshLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/model/create': typeof ModelCreateLazyRoute
  '/model/refresh': typeof ModelRefreshLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/types/refresh': typeof TypesRefreshLazyRoute
  '/car/edit/$id': typeof CarEditIdLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/model/edit/$id': typeof ModelEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/cars': typeof CarsLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/models': typeof ModelsLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/type': typeof TypeLazyRoute
  '/car/create': typeof CarCreateLazyRoute
  '/car/refresh': typeof CarRefreshLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/fuel/refresh': typeof FuelRefreshLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/model/create': typeof ModelCreateLazyRoute
  '/model/refresh': typeof ModelRefreshLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/types/create': typeof TypesCreateLazyRoute
  '/types/refresh': typeof TypesRefreshLazyRoute
  '/car/edit/$id': typeof CarEditIdLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/model/edit/$id': typeof ModelEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
  '/types/edit/$id': typeof TypesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cars'
    | '/fuels'
    | '/login'
    | '/models'
    | '/profile'
    | '/register'
    | '/transmissions'
    | '/type'
    | '/car/create'
    | '/car/refresh'
    | '/fuel/create'
    | '/fuel/refresh'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/model/create'
    | '/model/refresh'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/types/create'
    | '/types/refresh'
    | '/car/edit/$id'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/model/edit/$id'
    | '/transmission/edit/$id'
    | '/types/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cars'
    | '/fuels'
    | '/login'
    | '/models'
    | '/profile'
    | '/register'
    | '/transmissions'
    | '/type'
    | '/car/create'
    | '/car/refresh'
    | '/fuel/create'
    | '/fuel/refresh'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/model/create'
    | '/model/refresh'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/types/create'
    | '/types/refresh'
    | '/car/edit/$id'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/model/edit/$id'
    | '/transmission/edit/$id'
    | '/types/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/cars'
    | '/fuels'
    | '/login'
    | '/models'
    | '/profile'
    | '/register'
    | '/transmissions'
    | '/type'
    | '/car/create'
    | '/car/refresh'
    | '/fuel/create'
    | '/fuel/refresh'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/model/create'
    | '/model/refresh'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/types/create'
    | '/types/refresh'
    | '/car/edit/$id'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/model/edit/$id'
    | '/transmission/edit/$id'
    | '/types/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CarsLazyRoute: typeof CarsLazyRoute
  FuelsLazyRoute: typeof FuelsLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ModelsLazyRoute: typeof ModelsLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  TransmissionsLazyRoute: typeof TransmissionsLazyRoute
  TypeLazyRoute: typeof TypeLazyRoute
  CarCreateLazyRoute: typeof CarCreateLazyRoute
  CarRefreshLazyRoute: typeof CarRefreshLazyRoute
  FuelCreateLazyRoute: typeof FuelCreateLazyRoute
  FuelRefreshLazyRoute: typeof FuelRefreshLazyRoute
  ManufactureCreateLazyRoute: typeof ManufactureCreateLazyRoute
  ManufactureRefreshLazyRoute: typeof ManufactureRefreshLazyRoute
  ModelCreateLazyRoute: typeof ModelCreateLazyRoute
  ModelRefreshLazyRoute: typeof ModelRefreshLazyRoute
  TransmissionCreateLazyRoute: typeof TransmissionCreateLazyRoute
  TransmissionRefreshLazyRoute: typeof TransmissionRefreshLazyRoute
  TypesCreateLazyRoute: typeof TypesCreateLazyRoute
  TypesRefreshLazyRoute: typeof TypesRefreshLazyRoute
  CarEditIdLazyRoute: typeof CarEditIdLazyRoute
  FuelEditIdLazyRoute: typeof FuelEditIdLazyRoute
  ManufactureEditIdLazyRoute: typeof ManufactureEditIdLazyRoute
  ModelEditIdLazyRoute: typeof ModelEditIdLazyRoute
  TransmissionEditIdLazyRoute: typeof TransmissionEditIdLazyRoute
  TypesEditIdLazyRoute: typeof TypesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CarsLazyRoute: CarsLazyRoute,
  FuelsLazyRoute: FuelsLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ModelsLazyRoute: ModelsLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  TransmissionsLazyRoute: TransmissionsLazyRoute,
  TypeLazyRoute: TypeLazyRoute,
  CarCreateLazyRoute: CarCreateLazyRoute,
  CarRefreshLazyRoute: CarRefreshLazyRoute,
  FuelCreateLazyRoute: FuelCreateLazyRoute,
  FuelRefreshLazyRoute: FuelRefreshLazyRoute,
  ManufactureCreateLazyRoute: ManufactureCreateLazyRoute,
  ManufactureRefreshLazyRoute: ManufactureRefreshLazyRoute,
  ModelCreateLazyRoute: ModelCreateLazyRoute,
  ModelRefreshLazyRoute: ModelRefreshLazyRoute,
  TransmissionCreateLazyRoute: TransmissionCreateLazyRoute,
  TransmissionRefreshLazyRoute: TransmissionRefreshLazyRoute,
  TypesCreateLazyRoute: TypesCreateLazyRoute,
  TypesRefreshLazyRoute: TypesRefreshLazyRoute,
  CarEditIdLazyRoute: CarEditIdLazyRoute,
  FuelEditIdLazyRoute: FuelEditIdLazyRoute,
  ManufactureEditIdLazyRoute: ManufactureEditIdLazyRoute,
  ModelEditIdLazyRoute: ModelEditIdLazyRoute,
  TransmissionEditIdLazyRoute: TransmissionEditIdLazyRoute,
  TypesEditIdLazyRoute: TypesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/cars",
        "/fuels",
        "/login",
        "/models",
        "/profile",
        "/register",
        "/transmissions",
        "/type",
        "/car/create",
        "/car/refresh",
        "/fuel/create",
        "/fuel/refresh",
        "/manufacture/create",
        "/manufacture/refresh",
        "/model/create",
        "/model/refresh",
        "/transmission/create",
        "/transmission/refresh",
        "/types/create",
        "/types/refresh",
        "/car/edit/$id",
        "/fuel/edit/$id",
        "/manufacture/edit/$id",
        "/model/edit/$id",
        "/transmission/edit/$id",
        "/types/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/cars": {
      "filePath": "cars.lazy.jsx"
    },
    "/fuels": {
      "filePath": "fuels.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/models": {
      "filePath": "models.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/transmissions": {
      "filePath": "transmissions.lazy.jsx"
    },
    "/type": {
      "filePath": "type.lazy.jsx"
    },
    "/car/create": {
      "filePath": "car/create.lazy.jsx"
    },
    "/car/refresh": {
      "filePath": "car/refresh.lazy.jsx"
    },
    "/fuel/create": {
      "filePath": "fuel/create.lazy.jsx"
    },
    "/fuel/refresh": {
      "filePath": "fuel/refresh.lazy.jsx"
    },
    "/manufacture/create": {
      "filePath": "manufacture/create.lazy.jsx"
    },
    "/manufacture/refresh": {
      "filePath": "manufacture/refresh.lazy.jsx"
    },
    "/model/create": {
      "filePath": "model/create.lazy.jsx"
    },
    "/model/refresh": {
      "filePath": "model/refresh.lazy.jsx"
    },
    "/transmission/create": {
      "filePath": "transmission/create.lazy.jsx"
    },
    "/transmission/refresh": {
      "filePath": "transmission/refresh.lazy.jsx"
    },
    "/types/create": {
      "filePath": "types/create.lazy.jsx"
    },
    "/types/refresh": {
      "filePath": "types/refresh.lazy.jsx"
    },
    "/car/edit/$id": {
      "filePath": "car/edit/$id.lazy.jsx"
    },
    "/fuel/edit/$id": {
      "filePath": "fuel/edit/$id.lazy.jsx"
    },
    "/manufacture/edit/$id": {
      "filePath": "manufacture/edit/$id.lazy.jsx"
    },
    "/model/edit/$id": {
      "filePath": "model/edit/$id.lazy.jsx"
    },
    "/transmission/edit/$id": {
      "filePath": "transmission/edit/$id.lazy.jsx"
    },
    "/types/edit/$id": {
      "filePath": "types/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
