import React from 'react'
import { Form } from 'react-router-dom';

export default function NoteAuthor() {
  return (
    <div className='pages note-author'>
        <div className="header">
            <button>
                click
            </button>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <Form method='post'>
            <input 
                type="text"
                name="title" 
                placeholder="title"
                aria-label='note tile'
                required
            />
            <textarea 
                name="content" 
                cols="30" rows="10" 
                aria-label='note-content'
                placeholder="content" 
            />
        </Form>
        <div className="footer">
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>
                Edited 2:16 PM
            </span>
            <span>
                
            </span>
        </div>
    </div>
  )
}
