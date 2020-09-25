import { terser } from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';


const plugins = [
  nodeResolve(),
  commonjs(),
]

const prodPlugins = plugins.concat(terser());

export default [
  {
    input: 'src/index.js',
    plugins: prodPlugins,
    output: {
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'dojo'
      //format: 'iife' //Immediately Invoked Function Expression)
    }
  },
  {
    input: 'src/index.js',
    plugins,
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'dojo'
      //format: 'iife' //Immediately Invoked Function Expression)
    }
  }
]