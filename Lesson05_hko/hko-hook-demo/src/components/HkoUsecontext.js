import React, { createContext, useContext, useState } from 'react';

// Khai báo biến ThemeContext một lần duy nhất
export const ThemeContext = createContext();

export default function HkoUseContext() {
    // Khai báo state để lưu trữ giá trị theme và hàm setter
    const [theme, setTheme] = useState('red');

    // hàm xu lí 1 node nhav 
    const hkoHandleChange = () => {
        setTheme(theme === 'red' ? 'blue' : 'red');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2>Demo useContext</h2>
                <HkoUseContext1 />
                <button onClick={hkoHandleChange}>Change color</button>
            </div>
        </ThemeContext.Provider>
    );
}

function HkoUseContext1() {
    // Sử dụng useContext để lấy giá trị của theme từ ThemeContext
    const theme = useContext(ThemeContext);
    return (
        <div style={{ color: theme }}>
            The current theme is {theme}.
        </div>
    );
}
