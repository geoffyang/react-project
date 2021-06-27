import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../store/product";

export default function EditArticleForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const { id } = +useParams();
    const { title: initialTitle,
        shortDescription: initialShortDescription,
        longDescription: initialLongDescription,
        userId: initialUserId } = useSelector(state => state.products[id])
    const [title, setTitle] = useState(initialTitle);
    const [shortDescription, setShortDescription] = useState(initialShortDescription);
    const [longDescription, setLongDescription] = useState(initialLongDescription);
    const [image, setImage] = useState(null);

    const [errors, setErrors] = useState([]);

    // must be logged in to edit
    if (sessionUser !== initialUserId) {
        return history.push(`/products/${id}`)
    }


    const handleSubmit = e => {
        e.preventDefault();
        let newErrors = []
        dispatch(productActions.)


    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Short Description
                <input
                    type="text"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Long Description
                <input
                    type="text"
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                />
            </label>
            <label>
                <input type="file" onChange={updateFile} />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}
