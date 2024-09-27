const courses = [
  {
    url: "https://www.google.co.in/books/edition/Basics_of_Drawing/jl-1EAAAQBAJ?hl=en&gbpv=1&dq=drawing%20essentials%20for%20beginners&pg=PP1&printsec=frontcover",
    // url:"https://www.google.co.in/books/edition/How_to_Draw_What_You_See/4HqJnf_fZokC?hl=en&gbpv=1&pg=PP1&printsec=frontcover"
    title: "Drawing Essentials",
    thumbnail: "/images/course1.png",
    category: "Art",
    description: "Learn to draw and color with the extensive course.",
    price: "99.99",
    duration: "12",
  },
  {
    url: "https://books.google.co.in/books?id=v5UvEAAAQBAJ&newbks=1&newbks_redir=0&lpg=PR1&dq=Internet%20of%20things&pg=PR1#v=onepage&q=Internet%20of%20things&f=false",
    title: "Internet of things",
    thumbnail: "/images/course6.png",
    category: "technology",
    description: "Integration and implementation of internt of things.",
    price: "101",
    duration: "10",
  },

  {
    url: "https://books.google.co.in/books?id=6S1BK1VRHVgC&newbks=1&newbks_redir=0&lpg=PA1&dq=graphic%20design&pg=PA1#v=onepage&q=graphic%20design&f=false",
    title: "Graphic designing",
    category: "Design",
    thumbnail: "/images/course5.png",
    description: "The elements of graphic design:Understand the building blocks.",
    price: "119.99",
    duration: "4",
  },
  {
    url: "https://books.google.co.in/books?id=gUWPBQAAQBAJ&newbks=1&newbks_redir=0&lpg=PP1&dq=design&pg=PP1#v=onepage&q=design&f=false",
    title: "Design Masterclass",
    category: "Design",
    thumbnail: "/images/course2.png",
    description: "Learn the basic theories behind excellent designs.",
    price: "119.99",
    duration: "4",
  },

  {
    url: "https://www.google.co.in/books/edition/The_Essence_of_Artificial_Intelligence/fkd1RMKCXCsC?hl=en&gbpv=1&dq=the%20best%20sources%20on%20how%20ai%20works&pg=PP1&printsec=frontcover",
    title: "How AI Works?",
    category: "Technology",
    thumbnail: "/images/course3.png",
    description:
      "This course is for those who are interested in getting started with AI.",
    price: "149.99",
    duration: "10",
  },

  {
    url: "https://books.google.co.in/books?id=vvd6DwAAQBAJ&newbks=1&newbks_redir=0&lpg=PR1&dq=full%20stack%20web%20development&pg=PR1#v=onepage&q=full%20stack%20web%20development&f=false",
    title: "Full stack web-development",
    category: "technology",
    thumbnail: "images/course4.png",
    description: "Learn how to use Adobe XD to create stunning websites.",
    price: "99.99",
    duration: "8.5",
  },
];

const coursesContainer = document.querySelector(".courses-container");

const displayCourse = (
  urlValue,
  titleValue,
  categoryValue,
  thumbnailValue,
  descriptionValue,
  priceValue,
  durationValue
) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const a = document.createElement("a");
  a.setAttribute("href", urlValue);

  const category = document.createElement("div");
  category.classList.add("category");
  category.innerHTML = categoryValue;

  const img = document.createElement("img");
  img.setAttribute("src", thumbnailValue);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleValue;

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionValue;

  const info = document.createElement("div");
  info.classList.add("info");

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerHTML =priceValue; 

  const duration = document.createElement("div");
  duration.classList.add("duration");

  const timeIcon = document.createElement("div");
  timeIcon.classList.add("time-icon");
  timeIcon.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
    clip-rule="evenodd"
  />
</svg>`;

  const value = document.createElement("div");
  value.classList.add("value");
  value.innerHTML = durationValue;

  //   Appending Elements

  coursesContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(category);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);
  a.appendChild(info);

  info.appendChild(price);
  info.appendChild(duration);

  duration.appendChild(timeIcon);
  duration.appendChild(value);
};

const generateCourseData = () => {
  courses.forEach((c) => {
    displayCourse(
      c.url,
      c.title,
      c.category,
      c.thumbnail,
      c.description,
      c.price,
      c.duration
    );
  });
};

generateCourseData();
