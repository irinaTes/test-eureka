import React from 'react';
import Header from '../../Elements/Header';

const Layout = ({ children }) => {
    return (
        <>
            {/* Made a different component for layout because usually there are more components in a layout */}
            <Header />
            { children }
        </>
    );
};

export default Layout;