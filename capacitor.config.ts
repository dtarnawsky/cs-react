import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.react',
  appName: 'cs-react',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
