import React from 'react';
import { useState } from 'react';
import opt from "../OptionsData"

export default function OptionsDropdown(props) {
    const [open, setOpen] = useState(false);
    const optArr = opt.data.options;
    return (
        <div className="container">
            <button type="button" class="button" onClick={() => setOpen(!open)}>
                ☰
            </button>
            {open && <div class="dropdown" onMouseLeave={() => setOpen(false)}>
                <ul >
                    {optArr.map(item => (
                        <li  key={item.id}><a href={item.link} target="_blank">{item.name}</a></li>
                    ))}
                </ul>
            </div>}
        </div>
    )

}