export const getPopularScholarshipList = async () => {
  const res = await fetch(`${process.env.SERVER_API_URL}/home/announcements`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
