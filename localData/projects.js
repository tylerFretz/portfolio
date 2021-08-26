const projects = [
	{
		"name": "Recipe App",
		"description": "Full-stack MERN recipe CRUD app. Back-end is an express API to a MongoDB database with hundreds of recipes. It also serves the front-end's static react files. Initial database data was populated using the amazing TheMealDB API. ",
		"gitHubUrl": "https://github.com/tylerFretz/recipe-app-js/",
		"images": ["../../images/recipeApp.gif"],
		"technologies": ["JavaScript", "MongoDb", "Express", "React", "Node.js", "Jest", "Git"],
		"url": "https://fathomless-hamlet-32500.herokuapp.com/"
	},
	{
		"name": "Sorting Algorithms Visualizer",
		"description": "A visualization app for various sorting algorithms like merge sort, quick sort, insertion sort, bubble sort and selection sort. Originally was using Redux to maintain the state of the sorted array but this proved unsuitable for the task because of the asynchronous nature of accessing the store. Changed strategy to sorting the array on page load / on user options change and saving a snapshot of the array at each step of sorting. Visualization iterates over these snapshots.",
		"gitHubUrl": "https://github.com/tylerFretz/sorting-algorithms-visualizer/",
		"images": ["../../images/sortingApp.gif"],
		"technologies": ["React", "TypeScript", "Material UI", "GitHub Actions", "Git"],
		"url": "https://jovial-jang-92478f.netlify.app/"
	},
	{
		"name": "Rate Repository App",
		"description": "Multiplatform mobile app for rating GitHub repositories and finding new / popular repositories. Repository data is accessed through GitHub's REST API.",
		"gitHubUrl": "https://github.com/tylerFretz/rate-git-repository-app",
		"images": ["../../images/rateRepoApp1.png", "../../images/rateRepoApp2.png", "../../images/rateRepoApp3.png"],
		"technologies": ["React Native", "React Native Paper","JavaScript", "GraphQL", "Jest", "Expo", "Git"]
	},
	{
		"name": "News App",
		"description": "Swift mobile app built to consume The News API. When the user opens the app, they see a list of news articles catered to their saved preferences. Users can modify which categories / countries they see by either selecting a country on the map or selecting from a picker.",
		"gitHubUrl": "https://github.com/tylerFretz/mobile-news-app",
		"images": ["../../images/newsApp.gif"],
		"technologies": ["Swift", "UIKit", "MapKit", "Git"]

	}
];

module.exports = projects;