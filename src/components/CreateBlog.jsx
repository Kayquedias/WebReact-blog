import { useState } from "react"
import { useHistory } from "react-router-dom"

function CreateBlog() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Kayque')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blogValue = { title, body, author }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blogValue)
        }).then(() => {
            setIsPending(false);
            history.push("/");
        })
    }

    return (
        <div className='new-blog-content'>
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)} // it will take input value when submit, itjust work when a change happens
                />

                <label>Blog body:</label>
                <textarea 
                  required 
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Kayque">Kayque</option>
                    <option value="Romeu">Romeu</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
        </div>
    )
}

export default CreateBlog