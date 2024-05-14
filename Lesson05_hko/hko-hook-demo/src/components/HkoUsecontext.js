import React, { createContext, useContext, useState } from 'react';

// Khai báo biến ThemeContext một lần duy nhất
export const ThemeContext = createContext();

export default function HkoUseContext() {
    // Khai báo state để lưu trữ giá trị theme và hàm setter
    const [theme, setTheme] = useState('red');
    const hkoHandlechange = ()=>{
        setTheme(theme==='red'?)
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h2>Demo useContext</h2>
                <HkoUseContext1/>
                <button onClick ={ hkoHandlechange}>changer color</button>
            </div>
        </ThemeContext.Provider>
    );
}
