export const projects = [
  {
    title: "AutoDetect.ai",
    description:
      "A mobile app that uses your phone's camera and a deep learning model to determine whether a car is damaged — built as a personal project to explore computer vision.",
    points: [
      "Built a cross-platform mobile app using React Native, Expo, and TypeScript that captures photos with the device camera and classifies vehicles as damaged or undamanged.",
      "Fine-tuned a pre-trained MobileNet CNN for binary damage classification, achieving ~94% accuracy on unseen data.",
      "Created a Flask API that preprocessed uploaded images, and returned each prediction with a confidence score.",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Python",
      "Flask",
      "TensorFlow",
      "Computer Vision",
    ],
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
      "REST APIs",
    ],
    imagePlaceholder: "#d5c8e5",
    githubUrl: "https://github.com/marinazjalic/readify",
  },
  {
    title: "BookSmart",
    description:
      "A mobile app for managing study room reservations across campus, suggesting next-best options using ML when availability is limited.",
    points: [
      "Built a full-stack mobile app (React Native, Node.js, Express, MongoDB) that lets University of Windsor students find and reserve study rooms across campus.",
      "Implemented backend REST APIs for handling user accounts, searching rooms based on input parameters (location, capacity, amenities, etc), and creating and cancelling bookings.",
      "Featured an interactive campus map and booking management screens so students can select buildings visually and view or cancel upcoming reservations.",
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
    imagePlaceholder: "#c5d8c8",
    githubUrl: "https://github.com/marinazjalic",
    // liveUrl: "/",
  },
];
