import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default [
    {
        input: 'src/components/ChatWidget.tsx',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                exports: 'auto'
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm'
            }
        ],
        external: ['react', 'react-dom'],
        plugins: [url(), postcss(), typescript()]
    },
    {
        input: 'src/components/ChatWidget.tsx',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts()]
    }
];
