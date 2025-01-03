import React from 'react';

export default function RenderItemConditionally({ item, children }) {
    return (
        <>
            {item && children}
        </>
    );
}
