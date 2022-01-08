# Getting Started

First, you'll need to register with Spotify to create your client ID. Please see [Create & manage your Spotify integrations dashboard.](https://developer.spotify.com/dashboard/login)

Then follow these steps:

1. Clone this project: `git clone https://github.com/iohcidnal/my-favorite-albums-svelte.git`

2. Run `yarn` to install dependecies

3. Create an `.env` file in the root folder with the following entries:

```
VITE_PUBLIC_CLIENT_ID=your-spotify-client-id
VITE_PUBLIC_REDIRECT_URL=http://localhost:3000
```

Make sure that `VITE_PUBLIC_REDIRECT_URL`'s value matches the `Redirect URI` of your application settings in Spotify. This file should also be in your `.gitignore` for security.

## Developing

Once you've completed the steps above, start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn build
```

> You can preview the built app with `yarn preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
