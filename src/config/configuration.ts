interface IConfig {
  app: {
    name: string;
    env: string;
    apiBaseUrl: string;
  };
}

export default (): IConfig => ({
  app: {
    name: import.meta.env.VITE_APP_NAME,
    env: import.meta.env.VITE_APP_ENV,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  },
});
