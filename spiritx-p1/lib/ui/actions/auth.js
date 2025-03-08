export async function signup(formData) {
    try {
        const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        });
    
        if (!response.ok) {
        throw new Error(response.statusText);
        }
    
        return await response.json();
    } catch (error) {
        console.error('Error signing up:', error);
    }
}