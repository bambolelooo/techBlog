const commentFormHandler = async (event) => {
    event.preventDefault()

    const comment = document.querySelector('#comment').value.trim()
    console.log(comment)
    const url = new URL(window.location.href)
    const postId = url.pathname.split('/').pop()
    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/posts/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ content: comment }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace(window.location.href)
        } else {
            alert(response.statusText)
        }
    }
}

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler)
