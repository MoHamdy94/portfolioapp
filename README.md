Header Component (header.js)
The header component uses the following main features:
•	Theme Management:
•	The state variable theme is used to track the current theme (light or dark), and local Storage is used to persist the theme between sessions.
•	The useEffect hook applies the appropriate theme to the body class based on the value of theme.
•	Navigation Bar:
•	Uses Navbar, Nav, and Container components from react-bootstrap for styling and structure.
•	The navigation links are created using Nav.Link elements and link to different sections of the site.
•	Modal Menu:
•	The modal is shown/hidden based on the showModel state.
•	Clicking the close button or outside the menu sets showModel to false.
•	CSS File (header.css)
•	The CSS file defines the styles for both the header and modal components, including styles for the light and dark themes.

Hero Component (Hero.js)
The Hero component uses the following main features:
•	Lottie Animation:
•	The animation is displayed using the Lottie component from the lottie-react package.
•	The animation data is imported from a JSON file.
•	Social Media Links:
•	The links are displayed as icons using FontAwesome.
•	The icons are wrapped in anchor tags to make them clickable and open in a new tab.
•	Text Content:
•	Includes a title and a subtitle to introduce the user or project.
•	CSS File (hero.css)
The CSS file defines the styles for the hero section, including layout, animation, and theme-specific styles.

Projects Component (Projects.js)
The Projects component consists of the following main parts:
•	State Management:
o	Uses React's useState to manage the filter state (filter) for displaying different categories of projects.
o	When the filter state changes, the component displays the projects matching the selected category.
•	Filtering Logic:
o	The handleFilter function updates the filter state based on the selected category.
o	The filteredProjects variable contains the projects to be displayed, determined by the selected filter.
•	Rendering:
o	The component renders two main sections:
	Filter Buttons: Allows users to filter the projects by category.
	Project Cards: Displays a list of project cards that match the current filter.
o	Each project card includes an image, title, description, and a "View Details" link.

ProjectDetails.js
The ProjectDetails component performs the following tasks:
•	Extracts the project ID from the URL:
o	Uses the useParams hook from react-router-dom to get the id parameter.
•	Finds the corresponding project:
o	Searches the projects array to find the project matching the given ID.
•	Renders project details:
o	Displays the project's image, title, and description in a responsive layout.

Blogs.js
The Blogs component performs the following tasks:
•	rendering a list of blog posts with essential features like navigation, categorization, and engagement metrics.
•	It utilizes responsive design principles through CSS and React's mapping capabilities to render dynamic content efficiently.
