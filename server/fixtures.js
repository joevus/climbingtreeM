if(Resources.find().count() === 0) {
	
	var scienceId = Topics.insert({
		name: science
	});

	var technologyId = Topics.insert({
		name: technology
	});

	var khanacademyId = Resources.insert({
		topicId: technologyId,
		siteTitle: "Khanacademy",
		img: "khanacademy",
		url: "khanacademy.com",
		descrip: "Learning by friendly videos, set courses, many subjects, and you earn points and badges!"
	});

	var smithsonianId = Resources.insert({
		topicId: scienceId,
		siteTitle: "Simithsonian",
		url: "smithsonian.com",
		img: "smithsonian",
		descrip: "Home of the famouse museum. Exhibit information, online exhibits, research, education programs."
	});

}