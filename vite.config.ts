import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

    const env = loadEnv(mode, process.cwd(), '')

    console.log('api url', env.apiUrl)
    const apiUrl = JSON.stringify(env.apiUrl);

    return {
        plugins: [
            svgr({
                exportAsDefault: true,
            }),
            react(),
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: '/src',
                },
            ],
        },
        define: {
            __IS_DEV__: JSON.stringify(true),
            __API__: apiUrl || JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('frontend'),
        },
    }
});
