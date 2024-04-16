import React, { useState } from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import "./Createpost.css"

const Createpost = () => {
    const user = JSON.parse(localStorage.getItem("bloguser"));

    const [formData, setFormData] = useState({
        title: '',
        image: null,
        blog: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const { isLoading, handleCreatepost } = useCreatePost();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files[0]) {
            const file = files[0];
            if (file.size > 4 * 1024 * 1024) {
                setErrorMessage('Image size should be less than 4MB');
            } else if (!['image/jpeg', 'image/png'].includes(file.type)) {
                setErrorMessage('Please select a JPG or PNG image.');
            } else {
                setFormData((prevData) => ({ ...prevData, [name]: file }));
                setErrorMessage('');
            }
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, image, blog } = formData;
        // Perform validation checks before submitting
        if (!title.trim()) {
            setErrorMessage('Please enter a title.');
            return;
        }
        if (!image) {
            setErrorMessage('Please select an image.');
            return;
        }
        if (!blog.trim()) {
            setErrorMessage('Please enter your thoughts.');
            return;
        }
        // If all validations pass, submit the form
        console.log('Submitting form...');
        handleCreatepost(formData.image, {
             blog: formData.blog,
              title: formData.title, 
              createdAt:Date.now(),
              createdBy: user.uid,
              likes:[],
              comment:[],
            });

        // Reset fields after submission
        // setFormData({ title: '', image: null, blog: '' });
        // setErrorMessage('');
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className='box34'>
                <h1>Create Your Blog</h1>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/jpeg, image/png "
                    onChange={handleChange}
                />
                <label htmlFor="blog">Blog</label>
                <textarea
                    id="blog"
                    name="blog"
                    cols="30"
                    rows="10"
                    placeholder="Your thoughts..."
                    value={formData.blog}
                    onChange={handleChange}
                ></textarea>
                <br />
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default Createpost;
