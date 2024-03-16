export const getUser = async()=>{
    try {
        const url = "http://127.0.0.1:8000/user_detail";
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzAwNzgwLCJpYXQiOjE3MTA2Mjg3ODAsImp0aSI6IjY0NzE4NDc5ZDE0ZTQ2YTc4MGY4NGNiYTAwNzNjMTY5IiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.cjWCbODBFT6m8cGREOLM1TTLKuIJgfx8CtqfeambTeQ';
        const response = await fetch(url, {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
        });
        
        if (!response.ok) {
            const errorMessage = await response.text(); // Get error message from response body
            throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
        }

        const data = await response.json();
        console.log('Response Data:', data);

        return data;
    } catch (error) {
        console.error('Error :', error);
        return null;
    }
}
