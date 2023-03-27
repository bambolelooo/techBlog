const newFormHandler = async (event) => {
    event.preventDefault()

    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-content').value.trim()

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to create project')
        }
    }
}

const handleRemove = async (event) => {
    if (event.target.hasAttribute('post-id')) {
        const id = event.target.getAttribute('post-id')

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to delete project')
        }
    }
}

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler)

document.querySelector('.del-button').addEventListener('click', handleRemove)
