/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ApiImport } from './routes/_api'
import { Route as IndexImport } from './routes/index'
import { Route as ErrorCodeImport } from './routes/error/$code'
import { Route as ApiLoginImport } from './routes/_api/login'
import { Route as ApiSearchIndexImport } from './routes/_api/search/index'
import { Route as ApiPlayerIndexImport } from './routes/_api/player/index'
import { Route as ApiHomeIndexImport } from './routes/_api/home/index'
import { Route as ApiFavoriteIndexImport } from './routes/_api/favorite/index'
import { Route as SetupServerListImport } from './routes/setup/server.list'
import { Route as SetupServerErrorImport } from './routes/setup/server.error'
import { Route as SetupServerAddImport } from './routes/setup/server.add'
import { Route as ApiSeriesIdImport } from './routes/_api/series/$id'
import { Route as ApiPlaylistIdImport } from './routes/_api/playlist/$id'
import { Route as ApiPlayerPhotosImport } from './routes/_api/player/photos'
import { Route as ApiPlayerAudioImport } from './routes/_api/player/audio'
import { Route as ApiPersonIdImport } from './routes/_api/person/$id'
import { Route as ApiLoginManualImport } from './routes/_api/login/manual'
import { Route as ApiLoginListImport } from './routes/_api/login/list'
import { Route as ApiLibraryIdImport } from './routes/_api/library/$id'
import { Route as ApiItemIdImport } from './routes/_api/item/$id'
import { Route as ApiEpisodeIdImport } from './routes/_api/episode/$id'
import { Route as ApiBoxsetIdImport } from './routes/_api/boxset/$id'
import { Route as ApiArtistIdImport } from './routes/_api/artist/$id'
import { Route as ApiAlbumIdImport } from './routes/_api/album/$id'
import { Route as ApiLoginUserIdUserNameImport } from './routes/_api/login/$userId.$userName'

// Create/Update Routes

const ApiRoute = ApiImport.update({
  id: '/_api',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ErrorCodeRoute = ErrorCodeImport.update({
  id: '/error/$code',
  path: '/error/$code',
  getParentRoute: () => rootRoute,
} as any)

const ApiLoginRoute = ApiLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => ApiRoute,
} as any)

const ApiSearchIndexRoute = ApiSearchIndexImport.update({
  id: '/search/',
  path: '/search/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlayerIndexRoute = ApiPlayerIndexImport.update({
  id: '/player/',
  path: '/player/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiHomeIndexRoute = ApiHomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => ApiRoute,
} as any)

const ApiFavoriteIndexRoute = ApiFavoriteIndexImport.update({
  id: '/favorite/',
  path: '/favorite/',
  getParentRoute: () => ApiRoute,
} as any)

const SetupServerListRoute = SetupServerListImport.update({
  id: '/setup/server/list',
  path: '/setup/server/list',
  getParentRoute: () => rootRoute,
} as any)

const SetupServerErrorRoute = SetupServerErrorImport.update({
  id: '/setup/server/error',
  path: '/setup/server/error',
  getParentRoute: () => rootRoute,
} as any)

const SetupServerAddRoute = SetupServerAddImport.update({
  id: '/setup/server/add',
  path: '/setup/server/add',
  getParentRoute: () => rootRoute,
} as any)

const ApiSeriesIdRoute = ApiSeriesIdImport.update({
  id: '/series/$id',
  path: '/series/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlaylistIdRoute = ApiPlaylistIdImport.update({
  id: '/playlist/$id',
  path: '/playlist/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlayerPhotosRoute = ApiPlayerPhotosImport.update({
  id: '/player/photos',
  path: '/player/photos',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPlayerAudioRoute = ApiPlayerAudioImport.update({
  id: '/player/audio',
  path: '/player/audio',
  getParentRoute: () => ApiRoute,
} as any)

const ApiPersonIdRoute = ApiPersonIdImport.update({
  id: '/person/$id',
  path: '/person/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginManualRoute = ApiLoginManualImport.update({
  id: '/manual',
  path: '/manual',
  getParentRoute: () => ApiLoginRoute,
} as any)

const ApiLoginListRoute = ApiLoginListImport.update({
  id: '/list',
  path: '/list',
  getParentRoute: () => ApiLoginRoute,
} as any)

const ApiLibraryIdRoute = ApiLibraryIdImport.update({
  id: '/library/$id',
  path: '/library/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiItemIdRoute = ApiItemIdImport.update({
  id: '/item/$id',
  path: '/item/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiEpisodeIdRoute = ApiEpisodeIdImport.update({
  id: '/episode/$id',
  path: '/episode/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiBoxsetIdRoute = ApiBoxsetIdImport.update({
  id: '/boxset/$id',
  path: '/boxset/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiArtistIdRoute = ApiArtistIdImport.update({
  id: '/artist/$id',
  path: '/artist/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiAlbumIdRoute = ApiAlbumIdImport.update({
  id: '/album/$id',
  path: '/album/$id',
  getParentRoute: () => ApiRoute,
} as any)

const ApiLoginUserIdUserNameRoute = ApiLoginUserIdUserNameImport.update({
  id: '/$userId/$userName',
  path: '/$userId/$userName',
  getParentRoute: () => ApiLoginRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_api': {
      id: '/_api'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ApiImport
      parentRoute: typeof rootRoute
    }
    '/_api/login': {
      id: '/_api/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof ApiLoginImport
      parentRoute: typeof ApiImport
    }
    '/error/$code': {
      id: '/error/$code'
      path: '/error/$code'
      fullPath: '/error/$code'
      preLoaderRoute: typeof ErrorCodeImport
      parentRoute: typeof rootRoute
    }
    '/_api/album/$id': {
      id: '/_api/album/$id'
      path: '/album/$id'
      fullPath: '/album/$id'
      preLoaderRoute: typeof ApiAlbumIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/artist/$id': {
      id: '/_api/artist/$id'
      path: '/artist/$id'
      fullPath: '/artist/$id'
      preLoaderRoute: typeof ApiArtistIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/boxset/$id': {
      id: '/_api/boxset/$id'
      path: '/boxset/$id'
      fullPath: '/boxset/$id'
      preLoaderRoute: typeof ApiBoxsetIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/episode/$id': {
      id: '/_api/episode/$id'
      path: '/episode/$id'
      fullPath: '/episode/$id'
      preLoaderRoute: typeof ApiEpisodeIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/item/$id': {
      id: '/_api/item/$id'
      path: '/item/$id'
      fullPath: '/item/$id'
      preLoaderRoute: typeof ApiItemIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/library/$id': {
      id: '/_api/library/$id'
      path: '/library/$id'
      fullPath: '/library/$id'
      preLoaderRoute: typeof ApiLibraryIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/list': {
      id: '/_api/login/list'
      path: '/list'
      fullPath: '/login/list'
      preLoaderRoute: typeof ApiLoginListImport
      parentRoute: typeof ApiLoginImport
    }
    '/_api/login/manual': {
      id: '/_api/login/manual'
      path: '/manual'
      fullPath: '/login/manual'
      preLoaderRoute: typeof ApiLoginManualImport
      parentRoute: typeof ApiLoginImport
    }
    '/_api/person/$id': {
      id: '/_api/person/$id'
      path: '/person/$id'
      fullPath: '/person/$id'
      preLoaderRoute: typeof ApiPersonIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/player/audio': {
      id: '/_api/player/audio'
      path: '/player/audio'
      fullPath: '/player/audio'
      preLoaderRoute: typeof ApiPlayerAudioImport
      parentRoute: typeof ApiImport
    }
    '/_api/player/photos': {
      id: '/_api/player/photos'
      path: '/player/photos'
      fullPath: '/player/photos'
      preLoaderRoute: typeof ApiPlayerPhotosImport
      parentRoute: typeof ApiImport
    }
    '/_api/playlist/$id': {
      id: '/_api/playlist/$id'
      path: '/playlist/$id'
      fullPath: '/playlist/$id'
      preLoaderRoute: typeof ApiPlaylistIdImport
      parentRoute: typeof ApiImport
    }
    '/_api/series/$id': {
      id: '/_api/series/$id'
      path: '/series/$id'
      fullPath: '/series/$id'
      preLoaderRoute: typeof ApiSeriesIdImport
      parentRoute: typeof ApiImport
    }
    '/setup/server/add': {
      id: '/setup/server/add'
      path: '/setup/server/add'
      fullPath: '/setup/server/add'
      preLoaderRoute: typeof SetupServerAddImport
      parentRoute: typeof rootRoute
    }
    '/setup/server/error': {
      id: '/setup/server/error'
      path: '/setup/server/error'
      fullPath: '/setup/server/error'
      preLoaderRoute: typeof SetupServerErrorImport
      parentRoute: typeof rootRoute
    }
    '/setup/server/list': {
      id: '/setup/server/list'
      path: '/setup/server/list'
      fullPath: '/setup/server/list'
      preLoaderRoute: typeof SetupServerListImport
      parentRoute: typeof rootRoute
    }
    '/_api/favorite/': {
      id: '/_api/favorite/'
      path: '/favorite'
      fullPath: '/favorite'
      preLoaderRoute: typeof ApiFavoriteIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/home/': {
      id: '/_api/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof ApiHomeIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/player/': {
      id: '/_api/player/'
      path: '/player'
      fullPath: '/player'
      preLoaderRoute: typeof ApiPlayerIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/search/': {
      id: '/_api/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof ApiSearchIndexImport
      parentRoute: typeof ApiImport
    }
    '/_api/login/$userId/$userName': {
      id: '/_api/login/$userId/$userName'
      path: '/$userId/$userName'
      fullPath: '/login/$userId/$userName'
      preLoaderRoute: typeof ApiLoginUserIdUserNameImport
      parentRoute: typeof ApiLoginImport
    }
  }
}

// Create and export the route tree

interface ApiLoginRouteChildren {
  ApiLoginListRoute: typeof ApiLoginListRoute
  ApiLoginManualRoute: typeof ApiLoginManualRoute
  ApiLoginUserIdUserNameRoute: typeof ApiLoginUserIdUserNameRoute
}

const ApiLoginRouteChildren: ApiLoginRouteChildren = {
  ApiLoginListRoute: ApiLoginListRoute,
  ApiLoginManualRoute: ApiLoginManualRoute,
  ApiLoginUserIdUserNameRoute: ApiLoginUserIdUserNameRoute,
}

const ApiLoginRouteWithChildren = ApiLoginRoute._addFileChildren(
  ApiLoginRouteChildren,
)

interface ApiRouteChildren {
  ApiLoginRoute: typeof ApiLoginRouteWithChildren
  ApiAlbumIdRoute: typeof ApiAlbumIdRoute
  ApiArtistIdRoute: typeof ApiArtistIdRoute
  ApiBoxsetIdRoute: typeof ApiBoxsetIdRoute
  ApiEpisodeIdRoute: typeof ApiEpisodeIdRoute
  ApiItemIdRoute: typeof ApiItemIdRoute
  ApiLibraryIdRoute: typeof ApiLibraryIdRoute
  ApiPersonIdRoute: typeof ApiPersonIdRoute
  ApiPlayerAudioRoute: typeof ApiPlayerAudioRoute
  ApiPlayerPhotosRoute: typeof ApiPlayerPhotosRoute
  ApiPlaylistIdRoute: typeof ApiPlaylistIdRoute
  ApiSeriesIdRoute: typeof ApiSeriesIdRoute
  ApiFavoriteIndexRoute: typeof ApiFavoriteIndexRoute
  ApiHomeIndexRoute: typeof ApiHomeIndexRoute
  ApiPlayerIndexRoute: typeof ApiPlayerIndexRoute
  ApiSearchIndexRoute: typeof ApiSearchIndexRoute
}

const ApiRouteChildren: ApiRouteChildren = {
  ApiLoginRoute: ApiLoginRouteWithChildren,
  ApiAlbumIdRoute: ApiAlbumIdRoute,
  ApiArtistIdRoute: ApiArtistIdRoute,
  ApiBoxsetIdRoute: ApiBoxsetIdRoute,
  ApiEpisodeIdRoute: ApiEpisodeIdRoute,
  ApiItemIdRoute: ApiItemIdRoute,
  ApiLibraryIdRoute: ApiLibraryIdRoute,
  ApiPersonIdRoute: ApiPersonIdRoute,
  ApiPlayerAudioRoute: ApiPlayerAudioRoute,
  ApiPlayerPhotosRoute: ApiPlayerPhotosRoute,
  ApiPlaylistIdRoute: ApiPlaylistIdRoute,
  ApiSeriesIdRoute: ApiSeriesIdRoute,
  ApiFavoriteIndexRoute: ApiFavoriteIndexRoute,
  ApiHomeIndexRoute: ApiHomeIndexRoute,
  ApiPlayerIndexRoute: ApiPlayerIndexRoute,
  ApiSearchIndexRoute: ApiSearchIndexRoute,
}

const ApiRouteWithChildren = ApiRoute._addFileChildren(ApiRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof ApiRouteWithChildren
  '/login': typeof ApiLoginRouteWithChildren
  '/error/$code': typeof ErrorCodeRoute
  '/album/$id': typeof ApiAlbumIdRoute
  '/artist/$id': typeof ApiArtistIdRoute
  '/boxset/$id': typeof ApiBoxsetIdRoute
  '/episode/$id': typeof ApiEpisodeIdRoute
  '/item/$id': typeof ApiItemIdRoute
  '/library/$id': typeof ApiLibraryIdRoute
  '/login/list': typeof ApiLoginListRoute
  '/login/manual': typeof ApiLoginManualRoute
  '/person/$id': typeof ApiPersonIdRoute
  '/player/audio': typeof ApiPlayerAudioRoute
  '/player/photos': typeof ApiPlayerPhotosRoute
  '/playlist/$id': typeof ApiPlaylistIdRoute
  '/series/$id': typeof ApiSeriesIdRoute
  '/setup/server/add': typeof SetupServerAddRoute
  '/setup/server/error': typeof SetupServerErrorRoute
  '/setup/server/list': typeof SetupServerListRoute
  '/favorite': typeof ApiFavoriteIndexRoute
  '/home': typeof ApiHomeIndexRoute
  '/player': typeof ApiPlayerIndexRoute
  '/search': typeof ApiSearchIndexRoute
  '/login/$userId/$userName': typeof ApiLoginUserIdUserNameRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof ApiRouteWithChildren
  '/login': typeof ApiLoginRouteWithChildren
  '/error/$code': typeof ErrorCodeRoute
  '/album/$id': typeof ApiAlbumIdRoute
  '/artist/$id': typeof ApiArtistIdRoute
  '/boxset/$id': typeof ApiBoxsetIdRoute
  '/episode/$id': typeof ApiEpisodeIdRoute
  '/item/$id': typeof ApiItemIdRoute
  '/library/$id': typeof ApiLibraryIdRoute
  '/login/list': typeof ApiLoginListRoute
  '/login/manual': typeof ApiLoginManualRoute
  '/person/$id': typeof ApiPersonIdRoute
  '/player/audio': typeof ApiPlayerAudioRoute
  '/player/photos': typeof ApiPlayerPhotosRoute
  '/playlist/$id': typeof ApiPlaylistIdRoute
  '/series/$id': typeof ApiSeriesIdRoute
  '/setup/server/add': typeof SetupServerAddRoute
  '/setup/server/error': typeof SetupServerErrorRoute
  '/setup/server/list': typeof SetupServerListRoute
  '/favorite': typeof ApiFavoriteIndexRoute
  '/home': typeof ApiHomeIndexRoute
  '/player': typeof ApiPlayerIndexRoute
  '/search': typeof ApiSearchIndexRoute
  '/login/$userId/$userName': typeof ApiLoginUserIdUserNameRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_api': typeof ApiRouteWithChildren
  '/_api/login': typeof ApiLoginRouteWithChildren
  '/error/$code': typeof ErrorCodeRoute
  '/_api/album/$id': typeof ApiAlbumIdRoute
  '/_api/artist/$id': typeof ApiArtistIdRoute
  '/_api/boxset/$id': typeof ApiBoxsetIdRoute
  '/_api/episode/$id': typeof ApiEpisodeIdRoute
  '/_api/item/$id': typeof ApiItemIdRoute
  '/_api/library/$id': typeof ApiLibraryIdRoute
  '/_api/login/list': typeof ApiLoginListRoute
  '/_api/login/manual': typeof ApiLoginManualRoute
  '/_api/person/$id': typeof ApiPersonIdRoute
  '/_api/player/audio': typeof ApiPlayerAudioRoute
  '/_api/player/photos': typeof ApiPlayerPhotosRoute
  '/_api/playlist/$id': typeof ApiPlaylistIdRoute
  '/_api/series/$id': typeof ApiSeriesIdRoute
  '/setup/server/add': typeof SetupServerAddRoute
  '/setup/server/error': typeof SetupServerErrorRoute
  '/setup/server/list': typeof SetupServerListRoute
  '/_api/favorite/': typeof ApiFavoriteIndexRoute
  '/_api/home/': typeof ApiHomeIndexRoute
  '/_api/player/': typeof ApiPlayerIndexRoute
  '/_api/search/': typeof ApiSearchIndexRoute
  '/_api/login/$userId/$userName': typeof ApiLoginUserIdUserNameRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/error/$code'
    | '/album/$id'
    | '/artist/$id'
    | '/boxset/$id'
    | '/episode/$id'
    | '/item/$id'
    | '/library/$id'
    | '/login/list'
    | '/login/manual'
    | '/person/$id'
    | '/player/audio'
    | '/player/photos'
    | '/playlist/$id'
    | '/series/$id'
    | '/setup/server/add'
    | '/setup/server/error'
    | '/setup/server/list'
    | '/favorite'
    | '/home'
    | '/player'
    | '/search'
    | '/login/$userId/$userName'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/error/$code'
    | '/album/$id'
    | '/artist/$id'
    | '/boxset/$id'
    | '/episode/$id'
    | '/item/$id'
    | '/library/$id'
    | '/login/list'
    | '/login/manual'
    | '/person/$id'
    | '/player/audio'
    | '/player/photos'
    | '/playlist/$id'
    | '/series/$id'
    | '/setup/server/add'
    | '/setup/server/error'
    | '/setup/server/list'
    | '/favorite'
    | '/home'
    | '/player'
    | '/search'
    | '/login/$userId/$userName'
  id:
    | '__root__'
    | '/'
    | '/_api'
    | '/_api/login'
    | '/error/$code'
    | '/_api/album/$id'
    | '/_api/artist/$id'
    | '/_api/boxset/$id'
    | '/_api/episode/$id'
    | '/_api/item/$id'
    | '/_api/library/$id'
    | '/_api/login/list'
    | '/_api/login/manual'
    | '/_api/person/$id'
    | '/_api/player/audio'
    | '/_api/player/photos'
    | '/_api/playlist/$id'
    | '/_api/series/$id'
    | '/setup/server/add'
    | '/setup/server/error'
    | '/setup/server/list'
    | '/_api/favorite/'
    | '/_api/home/'
    | '/_api/player/'
    | '/_api/search/'
    | '/_api/login/$userId/$userName'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ApiRoute: typeof ApiRouteWithChildren
  ErrorCodeRoute: typeof ErrorCodeRoute
  SetupServerAddRoute: typeof SetupServerAddRoute
  SetupServerErrorRoute: typeof SetupServerErrorRoute
  SetupServerListRoute: typeof SetupServerListRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ApiRoute: ApiRouteWithChildren,
  ErrorCodeRoute: ErrorCodeRoute,
  SetupServerAddRoute: SetupServerAddRoute,
  SetupServerErrorRoute: SetupServerErrorRoute,
  SetupServerListRoute: SetupServerListRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_api",
        "/error/$code",
        "/setup/server/add",
        "/setup/server/error",
        "/setup/server/list"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_api": {
      "filePath": "_api.tsx",
      "children": [
        "/_api/login",
        "/_api/album/$id",
        "/_api/artist/$id",
        "/_api/boxset/$id",
        "/_api/episode/$id",
        "/_api/item/$id",
        "/_api/library/$id",
        "/_api/person/$id",
        "/_api/player/audio",
        "/_api/player/photos",
        "/_api/playlist/$id",
        "/_api/series/$id",
        "/_api/favorite/",
        "/_api/home/",
        "/_api/player/",
        "/_api/search/"
      ]
    },
    "/_api/login": {
      "filePath": "_api/login.tsx",
      "parent": "/_api",
      "children": [
        "/_api/login/list",
        "/_api/login/manual",
        "/_api/login/$userId/$userName"
      ]
    },
    "/error/$code": {
      "filePath": "error/$code.tsx"
    },
    "/_api/album/$id": {
      "filePath": "_api/album/$id.tsx",
      "parent": "/_api"
    },
    "/_api/artist/$id": {
      "filePath": "_api/artist/$id.tsx",
      "parent": "/_api"
    },
    "/_api/boxset/$id": {
      "filePath": "_api/boxset/$id.tsx",
      "parent": "/_api"
    },
    "/_api/episode/$id": {
      "filePath": "_api/episode/$id.tsx",
      "parent": "/_api"
    },
    "/_api/item/$id": {
      "filePath": "_api/item/$id.tsx",
      "parent": "/_api"
    },
    "/_api/library/$id": {
      "filePath": "_api/library/$id.tsx",
      "parent": "/_api"
    },
    "/_api/login/list": {
      "filePath": "_api/login/list.tsx",
      "parent": "/_api/login"
    },
    "/_api/login/manual": {
      "filePath": "_api/login/manual.tsx",
      "parent": "/_api/login"
    },
    "/_api/person/$id": {
      "filePath": "_api/person/$id.tsx",
      "parent": "/_api"
    },
    "/_api/player/audio": {
      "filePath": "_api/player/audio.tsx",
      "parent": "/_api"
    },
    "/_api/player/photos": {
      "filePath": "_api/player/photos.tsx",
      "parent": "/_api"
    },
    "/_api/playlist/$id": {
      "filePath": "_api/playlist/$id.tsx",
      "parent": "/_api"
    },
    "/_api/series/$id": {
      "filePath": "_api/series/$id.tsx",
      "parent": "/_api"
    },
    "/setup/server/add": {
      "filePath": "setup/server.add.tsx"
    },
    "/setup/server/error": {
      "filePath": "setup/server.error.tsx"
    },
    "/setup/server/list": {
      "filePath": "setup/server.list.tsx"
    },
    "/_api/favorite/": {
      "filePath": "_api/favorite/index.tsx",
      "parent": "/_api"
    },
    "/_api/home/": {
      "filePath": "_api/home/index.tsx",
      "parent": "/_api"
    },
    "/_api/player/": {
      "filePath": "_api/player/index.tsx",
      "parent": "/_api"
    },
    "/_api/search/": {
      "filePath": "_api/search/index.tsx",
      "parent": "/_api"
    },
    "/_api/login/$userId/$userName": {
      "filePath": "_api/login/$userId.$userName.tsx",
      "parent": "/_api/login"
    }
  }
}
ROUTE_MANIFEST_END */
