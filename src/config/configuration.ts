interface IConfig {
  app: {
    env: string;
    apiBaseUrl: string;
  };
}

export default (): IConfig => ({
  app: {
    env: import.meta.env.VITE_APP_ENV,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  },
});
