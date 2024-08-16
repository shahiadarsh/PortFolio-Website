import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel([
            'Portfolio.css',
            'Protfolio.html',
        ]),
    ],
});

