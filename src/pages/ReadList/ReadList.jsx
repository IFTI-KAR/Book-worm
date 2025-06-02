import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishList } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [originalReadList, setOriginalReadList] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    // Read List
    const storedReadData = getStoredBook();
    const readIds = storedReadData.map(id => parseInt(id));
    const myReadList = data.filter(book => readIds.includes(book.bookId));
    setReadList(myReadList);
    setOriginalReadList(myReadList); // keep original list for re-sorting

    // Wish List
    const storedWishData = getStoredWishList();
    const wishIds = storedWishData.map(id => parseInt(id));
    const myWishList = data.filter(book => wishIds.includes(book.bookId));
    setWishList(myWishList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    let sorted = [];
    if (type === "pages") {
      sorted = [...originalReadList].sort((a, b) => a.totalPages - b.totalPages);
    } else if (type === "ratings") {
      sorted = [...originalReadList].sort((a, b) => b.rating - a.rating); // descending for better ratings
    }

    setReadList(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <details className="dropdown mx-auto mb-4">
        <summary className="btn m-1">Sort by: {sort ? sort.charAt(0).toUpperCase() + sort.slice(1) : "None"}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a onClick={() => handleSort("pages")}>Pages</a></li>
          <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
        </ul>
      </details>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">📚 My Book Tracker</h1>
        <Tabs selectedTabClassName="border-b-2 border-indigo-500 font-semibold text-indigo-600">
          <TabList className="flex gap-4 border-b mb-6 text-lg">
            <Tab className="cursor-pointer pb-2 transition hover:text-indigo-600">Read Book List</Tab>
            <Tab className="cursor-pointer pb-2 transition hover:text-indigo-600">My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              ✅ Books I Have Read ({readList.length})
            </h2>
            {readList.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {readList.map(b => (
                  <Book key={b.bookId} singleBook={b} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No books in your read list yet.</p>
            )}
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              🌟 Books I Wish to Read ({wishlist.length})
            </h2>
            {wishlist.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {wishlist.map(b => (
                  <Book key={b.bookId} singleBook={b} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">Your wishlist is currently empty.</p>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
