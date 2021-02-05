"use strict";

module.exports = {
    presets: [
        '@twstyled/babel-preset',
        [
            'next/babel',
            {
                'preset-react': {
                    runtime: 'automatic',
                },
            }
        ],
    ],
    plugins: [],
}