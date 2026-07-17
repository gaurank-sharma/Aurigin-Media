// Curated Unsplash direct-CDN placeholders (b/w, editorial tone to match brand feel).
// Swap any of these for real agency photography whenever it's ready —
// each key below maps 1:1 to a single image slot in the UI.
const unsplash = (id, w = 1200, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}&sat=-100`;

export const heroImage = unsplash("1500648767791-00dcc994a43e", 1600);

export const workImages = {
  luminary: unsplash("1544005313-94ddf0286df2", 1600),
  "syntax-digital": unsplash("1544947950-fa07a98d237f", 1600),
  "nova-collective": unsplash("1518998053901-5348d3961a04", 1600),
  aurum: unsplash("1571019613454-1cb2f99b2d8b", 1600),
};

export const teamPhotos = {
  "Vikram Arora": unsplash("1507003211169-0a1dd7228f2d", 800),
  "Ananya Iyer": unsplash("1519085360753-af0119f7cbe7", 800),
  "Priya Mehta": unsplash("1524504388940-b1c1722653e1", 800),
  "Meera Nair": unsplash("1541961017774-22349e4a1262", 800),
  "Rohan Singhania": unsplash("1506794778202-cad84cf45f1d", 800),
  "Sneha Kapoor": unsplash("1534528741775-53994a69daeb", 800),
  "Zara Khan": unsplash("1573497019940-1c28c88b4f3e", 800),
  "Aditya Kumar": unsplash("1522075469751-3a6694fb2f61", 800),
};

export const storyImage = unsplash("1487412720507-e7ab37603c6f", 1200);
