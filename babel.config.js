"use strict";

module.exports = {
    presets: [
        'next-linaria-babel/preset',
        [
            'next/babel',
            {
                'preset-react': {
                    runtime: 'automatic',
                },
            }
        ],
    ],
    plugins: ['@twstyled/babel-plugin'],
}