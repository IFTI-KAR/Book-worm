import React from 'react';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearofpublishing,
    publisher
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`} className="block">
      <div className="w-80 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
        
        {/* Book Image */}
        <div className="bg-gray-100 flex justify-center items-center h-64 p-4">
          <img src={image} alt={bookName} className="h-full object-contain" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-3 px-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">{bookName}</h2>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
              {yearofpublishing}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">Book by {publisher}</p>

          {/* Category and Rating */}
          <div className="flex justify-between items-center">
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              {category}
            </span>
            <span className="flex items-center gap-1 text-sm text-yellow-500 font-medium">
              <IoIosStar className="text-lg" /> {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
