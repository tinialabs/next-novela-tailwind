"use strict";

module.exports = {
    presets: [
        '@twstyled/next/preset',
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