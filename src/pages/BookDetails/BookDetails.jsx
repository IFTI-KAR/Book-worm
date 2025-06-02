import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredDB, addToWishListDB } from '../../utility/addToDB'; // ✅ updated
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookID = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookID);
    
    if (!singleBook) {
        return <div>Book not found</div>;
    }

    const { 
        bookName, 
        image, 
        author, 
        review, 
        totalPages, 
        publisher, 
        yearOfPublishing, 
        rating, 
        tags 
    } = singleBook;

    const handleMarkAsRead = (id) => {
        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        addToStoredDB(parseInt(id));
    };

    const handleAddToWishlist = (id) => {
        addToWishListDB(parseInt(id)); // ✅ wishlist handler
    };

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/3'>
                    <img className='w-full max-w-xs rounded-lg shadow-lg' src={image} alt={bookName} />
                </div>
                
                <div className='w-full md:w-2/3'>
                    <h1 className='text-3xl font-bold mb-2'>{bookName}</h1>
                    <p className='text-lg mb-4'>By: {author}</p>
                    
                    <div className='mb-6'>
                        <span className='bg-gray-200 px-3 py-1 rounded-full text-sm'>{singleBook.category}</span>
                    </div>
                    
                    <div className='mb-6'>
                        <h3 className='font-bold mb-2'>Review:</h3>
                        <p className='text-gray-700'>{review}</p>
                    </div>
                    
                    <div className='flex flex-wrap gap-2 mb-6'>
                        {tags.map((tag, index) => (
                            <span key={index} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
                                #{tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className='border-t border-b border-gray-200 py-4 mb-6'>
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <td className='font-semibold py-2'>Number of Pages:</td>
                                    <td className='text-right'>{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2'>Publisher:</td>
                                    <td className='text-right'>{publisher}</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2'>Year of Publishing:</td>
                                    <td className='text-right'>{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold py-2'>Rating:</td>
                                    <td className='text-right'>{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='flex gap-4'>
                        <button onClick={() => handleMarkAsRead(bookID)} className="btn btn-accent">Mark as Read</button>
                        <button onClick={() => handleAddToWishlist(bookID)} className="btn btn-outline">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
