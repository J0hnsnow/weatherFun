// Helper to centralize access to client-side env variables.
// NOTE: Any `VITE_` prefixed variable is embedded into the client bundle
// and is therefore public. Only use this helper for non-sensitive values
// or during development. For private keys, use server-side env vars.
export const apikey = import.meta.env.VITE_OPENWEATHER_API_KEY as string | undefined;

export default {
  apikey,
};
