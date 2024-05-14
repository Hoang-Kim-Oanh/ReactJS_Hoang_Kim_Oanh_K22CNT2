import React, { useContext } from 'react'
import { ThemeContext } from './HkoUsecontext'

export default function HkoUseContext2() {
    const theme = useContext(ThemeContext);
  return (

    <div className={theme + 'm-3'}>
        <h2>HkoUseContext2</h2>
        <p>
            <b>
                2210900053
            </b>
            <b>Hoàng Kim Oanh</b>
            <i>K22NT2</i>
        </p>
    </div>
  )
}
