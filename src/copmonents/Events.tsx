import React, { FC, useState } from "react";

export const Events: FC = () => {
    const [value, setValue] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent) => {
        console.log(value)
        setValue('')
    }
    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} />
            <button onClick={clickHandler} > click</button>
        </div>
    )
}
