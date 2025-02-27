import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: './src/index.ts',
  output: [
    {
      name: 'htmlToImage',
      format: 'umd',
      file: 'dist/html-to-image.js',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ declaration: false, module: 'ES6' }),
    sourcemaps(),
    resolve(),
    commonjs(),
    terser(),
    filesize(),
  ],
}
