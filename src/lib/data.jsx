export const allbooks = async () => {
  const les = await fetch("https://booknest-server-q5cs.onrender.com/books");
  const data = await les.json();
  return data;
};

export const categories = async () => {
  const les = await fetch("https://booknest-server-q5cs.onrender.com/bookCategories");
  const data = await les.json();
  return data;
};

export const bookdetails = async (id) => {
  const les = await fetch(`https://booknest-server-q5cs.onrender.com/books/${id}`);
  const data = await les.json();
  return data;
};