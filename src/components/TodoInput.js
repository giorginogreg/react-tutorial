import React,  { Component, useState } from 'react'

export default function TodoInput() {
    const [fname, setFname] = useState("")

    return (
        <div>
            <input type="text" name="todoInput" id="todoInput" />
        </div>
    )
}


