import { useState } from 'react';

function ChangeTheme() {
    const COLORS = [{ name: 'Red', value: '#f44336' }, { name: 'Purple', value: '#9c27b0' }, { name: 'Indigo', value: '#3f51b5' }, { name: 'Teal', value: '#03a9f4' }, { name: 'Cyan', value: '#00bcd4' }, { name: 'Green', value: '#009688' }, { name: 'Lime', value: '#4caf50' }, { name: 'Yellow', value: '#8bc34a' }, { name: 'Amber', value: '#ffeb3b' }, { name: 'Orange', value: '#ffc107' }, { name: 'Deep Orange', value: '#ff9800' }, { name: 'Brown', value: '#ff5722' },];

    const [theme, setTheme] = useState('#f44336');

    const handleThemeChange = (color) => {
        setTheme(color);
        localStorage.setItem('theme', color);
    }
    const currentColor = COLORS.find((color) => color.value === theme);
    const currentColorName = currentColor ? currentColor.name : 'Unknown';

    return (
        <div>
            <div className=' setting-header py-3 border-b border-slate-200'>

                <h1 className="text-2xl font-bold text-gray-800 mb-4">Change Theme</h1>

            </div>
            <div className='setting-main py-3'>

                <p>your current theme is {currentColorName}. click on button to change theme.</p>
                <div className="grid grid-cols-3 gap-2 py-5">
                    {COLORS.map((color) => (
                        <div key={color.value} className="flex items-center">
                            <button className="h-12 w-12 rounded-full hover:shadow-lg focus:outline-none focus:shadow-outline" style={{ backgroundColor: color.value, border: '1px solid #b8c2cc' }} onClick={() => handleThemeChange(color.value)}>
                                {theme === color.value && <i className="fas fa-check text-white" />}
                            </button>
                            <p className="ml-2 text-xs font-medium text-gray-800" style={{ color: color.value }}>{color.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ChangeTheme