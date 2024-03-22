import React from 'react'
import { Form } from 'react-router-dom';

export default function LabelAuthor() {
  return (
    <div className='pages label-author'>
        <div className="header">
            <button>
                back
            </button>
            <span>
                Edit Labels
            </span>
        </div>
        <Form method='post'>
            <span>
                <button></button>
            </span>
            <input 
                type="text" 
                placeholder='create new label'
                aria-label='create new label'
                required
            />
            <span>
                <button></button>
            </span>
        </Form>
        <ul className="label-list">
            <li>
                <Form method='post'>
                    <span>
                        <button></button>
                    </span>
                    <input 
                        type="text" 
                        placeholder='create new label'
                        aria-label='create new label'
                        required
                    />
                    <span>
                        <button></button>
                    </span>
                </Form>
            </li>
        </ul>
    </div>
  )
}
