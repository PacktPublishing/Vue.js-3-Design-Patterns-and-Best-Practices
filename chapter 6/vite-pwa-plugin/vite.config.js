import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: 'auto',
            devOptions: { enabled: true },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            includeAssets: ['fonts/*.ttf', 'images/*.png', 'css/*.css'],
            manifest: {
                "short_name": "PWA Example",
                "name": "Chapter 6 - Progressive Web Application Example",
                "start_url": "/",
                "display": "standalone",
                "theme_color": "#333333",
                "background_color": "#000000",
                "orientation": "portrait",
                "icons": [
                    {
                        "src": "/images/chapter_6_icon_192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/images/chapter_6_icon.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    },
                    {
                        "src": "/images/chapter_6_icon.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose":"maskable"
                    }
                ],
                "prefer_related_applications": false
            }
        })]
})
