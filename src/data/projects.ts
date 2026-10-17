const images = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

const img = (filename: string): ImageMetadata | undefined =>
  images[`../assets/projects/${filename}`]?.default;

export const projects = [
  {
    title: "AutoDetect.ai",
    description:
      "A personal project I made to learn computer vision, using a mobile app, your phone's camera, and a deep learning model to detect car damage.",
    points: [
      "Built a mobile app using React Native, Expo, and TypeScript that captures photos with the device camera and classifies vehicles as damaged or undamanged.",
      "Fine-tuned a pre-trained MobileNet CNN for binary damage classification, achieving ~94% accuracy on unseen data.",
      "Created a Flask API that preprocesses uploaded images, and returns each prediction with a confidence score.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Python",
      "Flask API",
      "Computer Vision",
    ],
    image: img("autodetect.png"),
    imageAlt: "AutoDetect.ai app screenshot",
    imagePlaceholder: "#c8dde5",
    githubUrl: "https://github.com/marinazjalic/autoDetect.ai",
  },
  {
    title: "Readify",
    description:
      "A social book-tracking app where readers can discover new books, log their progress, and share reviews with friends.",
    points: [
      "Built a full-stack book-tracking platform (Next.js, TypeScript, Prisma, MongoDB) that integrates the Open Library API to let users search, paginate, and browse over 50 million titles by genre.",
      "Designed a social layer with follow/unfollow, ratings and reviews, and a personalized newsfeed displaying reading activity from followed users (reviews, progress, status changes, discussion posts).",
      "Implemented authentication with NextAuth.js, and Google OAuth 2.0 with JWT sessions for login flow.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    image: img("readify.png"),
    imageAlt: "Readify home feed screenshot",
    imagePlaceholder: "#d5c8e5",
    githubUrl: "https://github.com/marinazjalic/readify",
  },
  {
    title: "BookSmart",
    description:
      "A mobile app for managing study room reservations across campus, suggesting next-best options using ML when availability is limited.",
    points: [
      "Built a full-stack mobile app (React Native, Node.js, Express, MongoDB) that lets University of Windsor students find and reserve study rooms across campus.",
      "Implemented REST APIs for handling user accounts, searching rooms based on input parameters (location, capacity, amenities, etc.), and creating and cancelling bookings.",
      "Featured an interactive campus map and booking management screens so students can select buildings visually and manage upcoming reservations.",
      "Trained a TensorFlow classification model on room search parameters to recommend the next-best alternative when no room is available.",
    ],
    tags: [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Machine Learning",
      "TensorFlow",
    ],
    image: img("booksmart_img.png"),
    imageAlt: "BookSmart room booking screenshot",
    imagePlaceholder: "#c5d8c8",
    githubUrl: "https://github.com/marinazjalic",
    // liveUrl: "/",
  },
];
