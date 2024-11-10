/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TransmissionsLazyImport = createFileRoute('/transmissions')()
const StudentLazyImport = createFileRoute('/student')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const FuelsLazyImport = createFileRoute('/fuels')()
const IndexLazyImport = createFileRoute('/')()
const TransmissionRefreshLazyImport = createFileRoute('/transmission/refresh')()
const TransmissionCreateLazyImport = createFileRoute('/transmission/create')()
const StudentsCreateLazyImport = createFileRoute('/students/create')()
const StudentsIdLazyImport = createFileRoute('/students/$id')()
const ManufactureRefreshLazyImport = createFileRoute('/manufacture/refresh')()
const ManufactureCreateLazyImport = createFileRoute('/manufacture/create')()
const FuelCreateLazyImport = createFileRoute('/fuel/create')()
const TransmissionEditIdLazyImport = createFileRoute('/transmission/edit/$id')()
const StudentsEditIdLazyImport = createFileRoute('/students/edit/$id')()
const ManufactureEditIdLazyImport = createFileRoute('/manufacture/edit/$id')()
const FuelEditIdLazyImport = createFileRoute('/fuel/edit/$id')()

// Create/Update Routes

const TransmissionsLazyRoute = TransmissionsLazyImport.update({
  id: '/transmissions',
  path: '/transmissions',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/transmissions.lazy').then((d) => d.Route))

const StudentLazyRoute = StudentLazyImport.update({
  id: '/student',
  path: '/student',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/student.lazy').then((d) => d.Route))

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

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

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

const StudentsCreateLazyRoute = StudentsCreateLazyImport.update({
  id: '/students/create',
  path: '/students/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/students/create.lazy').then((d) => d.Route),
)

const StudentsIdLazyRoute = StudentsIdLazyImport.update({
  id: '/students/$id',
  path: '/students/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/students/$id.lazy').then((d) => d.Route))

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

const FuelCreateLazyRoute = FuelCreateLazyImport.update({
  id: '/fuel/create',
  path: '/fuel/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/fuel/create.lazy').then((d) => d.Route))

const TransmissionEditIdLazyRoute = TransmissionEditIdLazyImport.update({
  id: '/transmission/edit/$id',
  path: '/transmission/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/transmission/edit/$id.lazy').then((d) => d.Route),
)

const StudentsEditIdLazyRoute = StudentsEditIdLazyImport.update({
  id: '/students/edit/$id',
  path: '/students/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/students/edit/$id.lazy').then((d) => d.Route),
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
    '/student': {
      id: '/student'
      path: '/student'
      fullPath: '/student'
      preLoaderRoute: typeof StudentLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmissions': {
      id: '/transmissions'
      path: '/transmissions'
      fullPath: '/transmissions'
      preLoaderRoute: typeof TransmissionsLazyImport
      parentRoute: typeof rootRoute
    }
    '/fuel/create': {
      id: '/fuel/create'
      path: '/fuel/create'
      fullPath: '/fuel/create'
      preLoaderRoute: typeof FuelCreateLazyImport
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
    '/students/$id': {
      id: '/students/$id'
      path: '/students/$id'
      fullPath: '/students/$id'
      preLoaderRoute: typeof StudentsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/students/create': {
      id: '/students/create'
      path: '/students/create'
      fullPath: '/students/create'
      preLoaderRoute: typeof StudentsCreateLazyImport
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
    '/students/edit/$id': {
      id: '/students/edit/$id'
      path: '/students/edit/$id'
      fullPath: '/students/edit/$id'
      preLoaderRoute: typeof StudentsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/transmission/edit/$id': {
      id: '/transmission/edit/$id'
      path: '/transmission/edit/$id'
      fullPath: '/transmission/edit/$id'
      preLoaderRoute: typeof TransmissionEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/student': typeof StudentLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/students/edit/$id': typeof StudentsEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/student': typeof StudentLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/students/edit/$id': typeof StudentsEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/fuels': typeof FuelsLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/student': typeof StudentLazyRoute
  '/transmissions': typeof TransmissionsLazyRoute
  '/fuel/create': typeof FuelCreateLazyRoute
  '/manufacture/create': typeof ManufactureCreateLazyRoute
  '/manufacture/refresh': typeof ManufactureRefreshLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
  '/transmission/create': typeof TransmissionCreateLazyRoute
  '/transmission/refresh': typeof TransmissionRefreshLazyRoute
  '/fuel/edit/$id': typeof FuelEditIdLazyRoute
  '/manufacture/edit/$id': typeof ManufactureEditIdLazyRoute
  '/students/edit/$id': typeof StudentsEditIdLazyRoute
  '/transmission/edit/$id': typeof TransmissionEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/fuels'
    | '/login'
    | '/profile'
    | '/register'
    | '/student'
    | '/transmissions'
    | '/fuel/create'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/students/$id'
    | '/students/create'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/students/edit/$id'
    | '/transmission/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/fuels'
    | '/login'
    | '/profile'
    | '/register'
    | '/student'
    | '/transmissions'
    | '/fuel/create'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/students/$id'
    | '/students/create'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/students/edit/$id'
    | '/transmission/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/fuels'
    | '/login'
    | '/profile'
    | '/register'
    | '/student'
    | '/transmissions'
    | '/fuel/create'
    | '/manufacture/create'
    | '/manufacture/refresh'
    | '/students/$id'
    | '/students/create'
    | '/transmission/create'
    | '/transmission/refresh'
    | '/fuel/edit/$id'
    | '/manufacture/edit/$id'
    | '/students/edit/$id'
    | '/transmission/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  FuelsLazyRoute: typeof FuelsLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  StudentLazyRoute: typeof StudentLazyRoute
  TransmissionsLazyRoute: typeof TransmissionsLazyRoute
  FuelCreateLazyRoute: typeof FuelCreateLazyRoute
  ManufactureCreateLazyRoute: typeof ManufactureCreateLazyRoute
  ManufactureRefreshLazyRoute: typeof ManufactureRefreshLazyRoute
  StudentsIdLazyRoute: typeof StudentsIdLazyRoute
  StudentsCreateLazyRoute: typeof StudentsCreateLazyRoute
  TransmissionCreateLazyRoute: typeof TransmissionCreateLazyRoute
  TransmissionRefreshLazyRoute: typeof TransmissionRefreshLazyRoute
  FuelEditIdLazyRoute: typeof FuelEditIdLazyRoute
  ManufactureEditIdLazyRoute: typeof ManufactureEditIdLazyRoute
  StudentsEditIdLazyRoute: typeof StudentsEditIdLazyRoute
  TransmissionEditIdLazyRoute: typeof TransmissionEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  FuelsLazyRoute: FuelsLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  StudentLazyRoute: StudentLazyRoute,
  TransmissionsLazyRoute: TransmissionsLazyRoute,
  FuelCreateLazyRoute: FuelCreateLazyRoute,
  ManufactureCreateLazyRoute: ManufactureCreateLazyRoute,
  ManufactureRefreshLazyRoute: ManufactureRefreshLazyRoute,
  StudentsIdLazyRoute: StudentsIdLazyRoute,
  StudentsCreateLazyRoute: StudentsCreateLazyRoute,
  TransmissionCreateLazyRoute: TransmissionCreateLazyRoute,
  TransmissionRefreshLazyRoute: TransmissionRefreshLazyRoute,
  FuelEditIdLazyRoute: FuelEditIdLazyRoute,
  ManufactureEditIdLazyRoute: ManufactureEditIdLazyRoute,
  StudentsEditIdLazyRoute: StudentsEditIdLazyRoute,
  TransmissionEditIdLazyRoute: TransmissionEditIdLazyRoute,
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
        "/fuels",
        "/login",
        "/profile",
        "/register",
        "/student",
        "/transmissions",
        "/fuel/create",
        "/manufacture/create",
        "/manufacture/refresh",
        "/students/$id",
        "/students/create",
        "/transmission/create",
        "/transmission/refresh",
        "/fuel/edit/$id",
        "/manufacture/edit/$id",
        "/students/edit/$id",
        "/transmission/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/fuels": {
      "filePath": "fuels.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/student": {
      "filePath": "student.lazy.jsx"
    },
    "/transmissions": {
      "filePath": "transmissions.lazy.jsx"
    },
    "/fuel/create": {
      "filePath": "fuel/create.lazy.jsx"
    },
    "/manufacture/create": {
      "filePath": "manufacture/create.lazy.jsx"
    },
    "/manufacture/refresh": {
      "filePath": "manufacture/refresh.lazy.jsx"
    },
    "/students/$id": {
      "filePath": "students/$id.lazy.jsx"
    },
    "/students/create": {
      "filePath": "students/create.lazy.jsx"
    },
    "/transmission/create": {
      "filePath": "transmission/create.lazy.jsx"
    },
    "/transmission/refresh": {
      "filePath": "transmission/refresh.lazy.jsx"
    },
    "/fuel/edit/$id": {
      "filePath": "fuel/edit/$id.lazy.jsx"
    },
    "/manufacture/edit/$id": {
      "filePath": "manufacture/edit/$id.lazy.jsx"
    },
    "/students/edit/$id": {
      "filePath": "students/edit/$id.lazy.jsx"
    },
    "/transmission/edit/$id": {
      "filePath": "transmission/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
