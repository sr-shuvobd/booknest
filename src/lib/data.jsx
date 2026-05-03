export const allbooks = async () => {
  const res = await fetch("https://booknest-server-q5cs.onrender.com/books");
  const data = await res.json();
  return data;
};

export const categories = async () => {
  const res = await fetch("https://booknest-server-q5cs.onrender.com/bookCategories");
  const data = await res.json();
  return data;
};

export const bookdetails = async (id) => {
  const res = await fetch(`https://booknest-server-q5cs.onrender.com/books/${id}`);
  const data = await res.json();
  return data;
};

export const category = async (id) => {
  const res = await fetch(`https://booknest-server-q5cs.onrender.com/books?category_id=${id}`);
  const data = await res.json();
  return data;
};