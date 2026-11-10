export interface Area {
  slug: string;
  name: string;
  state: 'WA' | 'ID' | 'MT';
  county: string;
  pop: string;
  drive: string;
  region: string;
  intro: string;
  sectors: string[];
  places: string[];
  events: string[];
  // [service slug, how it applies in this city]
  uses: [string, string][];
  nearby: string[];
  localFaq: { q: string; a: string };
}

export const areas: Area[] = [
  {
    "slug": "spokane",
    "name": "Spokane",
    "state": "WA",
    "county": "Spokane County",
    "pop": "about 230,000",
    "drive": "home base",
    "region": "Spokane area",
    "intro": "Spokane is home. We know the downtown venues, the hotel ballrooms, and the campus theaters, and we can usually walk a room before you book.",
    "sectors": [
      "healthcare",
      "higher education",
      "nonprofits and the arts",
      "manufacturing",
      "government and public agencies"
    ],
    "places": [
      "Spokane Convention Center and the First Interstate Center for the Arts",
      "Riverfront Park and the Spokane Falls",
      "Gonzaga University, Whitworth University, and Spokane Falls Community College",
      "The Fox Theater and the INB Performing Arts Center",
      "Providence Sacred Heart and MultiCare Deaconess hospital campuses"
    ],
    "events": [
      "Bloomsday",
      "Hoopfest",
      "Spokane Lilac Festival",
      "TEDx Spokane"
    ],
    "uses": [
      [
        "conference-live-streaming",
        "Conference and summit streaming at the convention center and downtown hotels"
      ],
      [
        "gala-fundraiser-live-streaming",
        "Gala and fundraiser coverage for Spokane nonprofits and arts organizations"
      ],
      [
        "concert-performance-live-streaming",
        "Concerts and stage performances at theaters and campus venues"
      ],
      [
        "graduation-live-streaming",
        "Commencements and campus events for local universities and colleges"
      ]
    ],
    "nearby": [
      "spokane-valley",
      "coeur-d-alene",
      "post-falls",
      "pullman"
    ],
    "localFaq": {
      "q": "Are you based in Spokane?",
      "a": "Yes. 12 Acre Live is based in the Spokane area, so we can usually respond quickly and visit your venue in person."
    }
  },
  {
    "slug": "spokane-valley",
    "name": "Spokane Valley",
    "state": "WA",
    "county": "Spokane County",
    "pop": "about 105,000",
    "drive": "about 20 minutes",
    "region": "Spokane area",
    "intro": "Spokane Valley is the east side of the Spokane metro and a busy corridor for meetings, trainings, and community events. We are close, so site visits are easy.",
    "sectors": [
      "manufacturing and aerospace suppliers",
      "retail and auto",
      "healthcare",
      "construction and trades",
      "local government"
    ],
    "places": [
      "CenterPlace Regional Event Center",
      "Mirabeau Point Park",
      "Spokane Valley Mall and the Sprague corridor",
      "Valley hospital and clinic campuses",
      "Spokane County Interstate Fairgrounds"
    ],
    "events": [
      "Spokane County Interstate Fair",
      "Valley community festivals and parades"
    ],
    "uses": [
      [
        "webinar-studio-production",
        "Webinars and training broadcasts for Valley employers"
      ],
      [
        "hybrid-event-production",
        "Hybrid meetings and trainings at CenterPlace and local halls"
      ],
      [
        "multi-camera-event-recording",
        "Recording community events, fairs, and ceremonies"
      ]
    ],
    "nearby": [
      "spokane",
      "post-falls",
      "coeur-d-alene"
    ],
    "localFaq": {
      "q": "Do you stream events in Spokane Valley?",
      "a": "Yes. Spokane Valley is part of our regular service area, and we cover events there often."
    }
  },
  {
    "slug": "coeur-d-alene",
    "name": "Coeur d'Alene",
    "state": "ID",
    "county": "Kootenai County",
    "pop": "about 55,000",
    "drive": "about 40 minutes",
    "region": "North Idaho",
    "intro": "Coeur d'Alene hosts conferences, weddings, and lake events all year. We cross the state line often to stream and record them.",
    "sectors": [
      "hospitality and tourism",
      "real estate and development",
      "healthcare",
      "education",
      "outdoor and recreation brands"
    ],
    "places": [
      "Lake Coeur d'Alene and the downtown waterfront",
      "The Coeur d'Alene Resort and other lakeside venues",
      "North Idaho College",
      "Kootenai Health",
      "The Kroc Center"
    ],
    "events": [
      "Summer lake and downtown festivals",
      "Holiday light shows on the lake",
      "Regional running and cycling events"
    ],
    "uses": [
      [
        "conference-live-streaming",
        "Conference and association event streaming at lakeside venues"
      ],
      [
        "multi-camera-event-recording",
        "Recording tournaments, weddings, and celebrations"
      ],
      [
        "church-service-live-streaming",
        "Services and ceremonies for North Idaho congregations"
      ],
      [
        "graduation-live-streaming",
        "Campus events for North Idaho College"
      ]
    ],
    "nearby": [
      "post-falls",
      "spokane",
      "spokane-valley"
    ],
    "localFaq": {
      "q": "Do you stream events in Coeur d'Alene?",
      "a": "Yes. We travel from Spokane to Coeur d'Alene regularly. Tell us your venue and date and we will plan the setup."
    }
  },
  {
    "slug": "post-falls",
    "name": "Post Falls",
    "state": "ID",
    "county": "Kootenai County",
    "pop": "about 40,000",
    "drive": "about 30 minutes",
    "region": "North Idaho",
    "intro": "Post Falls is a short drive from Spokane and has a growing calendar of school, sports, and community events that deserve a bigger audience.",
    "sectors": [
      "logistics and distribution",
      "light manufacturing",
      "construction and homebuilding",
      "retail",
      "healthcare"
    ],
    "places": [
      "Q'emiln Park on the Spokane River",
      "Falls Park and the Post Falls Dam area",
      "The I-90 business and industrial corridors",
      "Post Falls schools and community facilities"
    ],
    "events": [
      "Post Falls community events and parades",
      "High school sports and graduations"
    ],
    "uses": [
      [
        "graduation-live-streaming",
        "Graduations and school events for families who cannot attend"
      ],
      [
        "church-service-live-streaming",
        "Services and special occasions for local churches"
      ],
      [
        "multi-camera-event-recording",
        "Recording community events and ceremonies"
      ]
    ],
    "nearby": [
      "coeur-d-alene",
      "spokane-valley",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you cover events in Post Falls?",
      "a": "Yes. Post Falls is about 30 minutes from Spokane and part of our regular service area."
    }
  },
  {
    "slug": "pullman",
    "name": "Pullman",
    "state": "WA",
    "county": "Whitman County",
    "pop": "about 33,000",
    "drive": "about 1 hour 30 minutes",
    "region": "The Palouse",
    "intro": "Pullman is a university town, and many events here draw an audience from far beyond the Palouse: commencements, research talks, and campus celebrations.",
    "sectors": [
      "higher education and research",
      "agriculture",
      "engineering and technology",
      "healthcare"
    ],
    "places": [
      "Washington State University",
      "Martin Stadium and WSU athletic venues",
      "Pullman Regional Hospital",
      "Schweitzer Engineering Laboratories",
      "Downtown Pullman and the Bill Chipman Palouse Trail"
    ],
    "events": [
      "National Lentil Festival",
      "WSU commencement and campus events",
      "Cougar athletics home games"
    ],
    "uses": [
      [
        "graduation-live-streaming",
        "Commencement and campus ceremony streaming"
      ],
      [
        "conference-live-streaming",
        "Research symposia and conferences"
      ],
      [
        "hybrid-event-production",
        "Hybrid talks with remote presenters and online attendees"
      ]
    ],
    "nearby": [
      "moscow",
      "lewiston",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you stream university events in Pullman?",
      "a": "Yes. We work with universities and colleges in the region, and we travel to Pullman for events of all sizes."
    }
  },
  {
    "slug": "moscow",
    "name": "Moscow",
    "state": "ID",
    "county": "Latah County",
    "pop": "about 25,000",
    "drive": "about 1 hour 30 minutes",
    "region": "The Palouse",
    "intro": "Moscow has a lively calendar of music, student life, and community events, and a strong audience of alumni and families who want to watch from afar.",
    "sectors": [
      "higher education",
      "arts and music",
      "agriculture",
      "small business"
    ],
    "places": [
      "University of Idaho",
      "The Kibbie Dome and UI athletic venues",
      "Downtown Moscow and the Farmers Market",
      "Latah County Fairgrounds"
    ],
    "events": [
      "Lionel Hampton Jazz Festival",
      "University of Idaho commencement and campus events",
      "Moscow Farmers Market"
    ],
    "uses": [
      [
        "concert-performance-live-streaming",
        "Concerts, jazz, and performances"
      ],
      [
        "graduation-live-streaming",
        "Commencement and campus events"
      ],
      [
        "multi-camera-event-recording",
        "Recording festivals and community events"
      ]
    ],
    "nearby": [
      "pullman",
      "lewiston",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you stream concerts and campus events in Moscow?",
      "a": "Yes. We travel to Moscow for concerts, ceremonies, and conferences."
    }
  },
  {
    "slug": "lewiston",
    "name": "Lewiston",
    "state": "ID",
    "county": "Nez Perce County",
    "pop": "about 34,000",
    "drive": "about 2 hours",
    "region": "The Palouse",
    "intro": "Lewiston and the Lewis-Clark Valley hold college events, regional meetings, and community gatherings that families and members often cannot attend in person.",
    "sectors": [
      "river transportation and port activity",
      "manufacturing and paper",
      "healthcare",
      "education",
      "outdoor recreation and tourism"
    ],
    "places": [
      "Lewis-Clark State College",
      "The Port of Lewiston",
      "The Snake and Clearwater river confluence",
      "Hells Gate and riverfront parks",
      "Clarkston and the Lewis-Clark Valley"
    ],
    "events": [
      "Lewiston Roundup",
      "River and fishing events",
      "College events"
    ],
    "uses": [
      [
        "graduation-live-streaming",
        "College ceremonies and events"
      ],
      [
        "conference-live-streaming",
        "Regional meetings and conferences"
      ],
      [
        "church-service-live-streaming",
        "Services and ceremonies for Valley congregations"
      ]
    ],
    "nearby": [
      "pullman",
      "moscow",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you travel to Lewiston?",
      "a": "Yes. Lewiston is about two hours from Spokane, and we schedule events there in advance."
    }
  },
  {
    "slug": "moses-lake",
    "name": "Moses Lake",
    "state": "WA",
    "county": "Grant County",
    "pop": "about 25,000",
    "drive": "about 1 hour 45 minutes",
    "region": "Columbia Basin",
    "intro": "Moses Lake is the center of the Columbia Basin, where trainings, safety meetings, and community events often need to reach people across a wide area.",
    "sectors": [
      "agriculture and food processing",
      "aerospace testing",
      "data centers and energy",
      "manufacturing",
      "outdoor recreation"
    ],
    "places": [
      "Grant County International Airport",
      "Big Bend Community College",
      "Moses Lake and Potholes State Park",
      "Grant County Fairgrounds",
      "Downtown Moses Lake"
    ],
    "events": [
      "Moses Lake Spring Festival",
      "Grant County Fair"
    ],
    "uses": [
      [
        "webinar-studio-production",
        "Training and safety broadcasts for employers"
      ],
      [
        "hybrid-event-production",
        "Meetings that serve both the room and remote staff"
      ],
      [
        "multi-camera-event-recording",
        "Recording fairs, ceremonies, and community events"
      ]
    ],
    "nearby": [
      "spokane",
      "wenatchee",
      "tri-cities"
    ],
    "localFaq": {
      "q": "Do you travel to Moses Lake?",
      "a": "Yes. Moses Lake is about an hour and 45 minutes from Spokane. We plan the trip around your event schedule."
    }
  },
  {
    "slug": "wenatchee",
    "name": "Wenatchee",
    "state": "WA",
    "county": "Chelan County",
    "pop": "about 35,000",
    "drive": "about 3 hours",
    "region": "North Central Washington",
    "intro": "Wenatchee hosts festivals, concerts, and conferences that draw visitors from across the state, and a lot of people who want to watch from home.",
    "sectors": [
      "apple and orchard agriculture",
      "tourism and outdoor recreation",
      "healthcare",
      "wine and food",
      "education"
    ],
    "places": [
      "Wenatchee Valley College",
      "Confluence Health",
      "The Numerica Performing Arts Center",
      "Town Toyota Center",
      "Pybus Public Market and the Riverfront Loop Trail"
    ],
    "events": [
      "Washington State Apple Blossom Festival",
      "Wenatchee Wine and Food events",
      "Outdoor racing and cycling events"
    ],
    "uses": [
      [
        "concert-performance-live-streaming",
        "Concerts and performances at local venues"
      ],
      [
        "conference-live-streaming",
        "Conferences and regional meetings"
      ],
      [
        "multi-camera-event-recording",
        "Recording festivals and community events"
      ]
    ],
    "nearby": [
      "moses-lake",
      "yakima",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you stream events in Wenatchee?",
      "a": "Yes. We travel to Wenatchee for events and plan the crew and gear around your venue."
    }
  },
  {
    "slug": "yakima",
    "name": "Yakima",
    "state": "WA",
    "county": "Yakima County",
    "pop": "about 97,000",
    "drive": "about 3 hours 15 minutes",
    "region": "Yakima Valley",
    "intro": "Yakima is the largest city in the Yakima Valley, with a busy convention and fairgrounds calendar. Events here often serve both English- and Spanish-speaking audiences.",
    "sectors": [
      "hops and orchard agriculture",
      "wine and tourism",
      "healthcare",
      "tribal government and enterprise",
      "education"
    ],
    "places": [
      "Yakima Valley College",
      "The Yakima Valley SunDome and State Fair Park",
      "Yakima Valley Museum",
      "The Yakima Greenway",
      "Downtown Yakima and the Yakima Convention Center"
    ],
    "events": [
      "The Central Washington State Fair",
      "Yakima Valley wine and hop harvest season events"
    ],
    "uses": [
      [
        "conference-live-streaming",
        "Conferences and meetings at the convention center"
      ],
      [
        "multi-camera-event-recording",
        "Recording fairs, ceremonies, and community events"
      ],
      [
        "hybrid-event-production",
        "Hybrid events with remote attendees"
      ]
    ],
    "nearby": [
      "wenatchee",
      "tri-cities",
      "richland"
    ],
    "localFaq": {
      "q": "Do you stream events in Yakima?",
      "a": "Yes. We travel to Yakima for conferences, ceremonies, and community events."
    }
  },
  {
    "slug": "tri-cities",
    "name": "Tri-Cities",
    "state": "WA",
    "county": "Benton and Franklin Counties",
    "pop": "about 225,000 across Kennewick, Pasco, and Richland",
    "drive": "about 2 hours 30 minutes",
    "region": "Tri-Cities",
    "intro": "The Tri-Cities is one of the largest metro areas in Eastern Washington, with a steady calendar of conferences, trainings, and community events. We treat Kennewick, Pasco, and Richland as one market.",
    "sectors": [
      "science, engineering, and national laboratory work",
      "agriculture and food processing",
      "wine",
      "healthcare",
      "logistics and construction"
    ],
    "places": [
      "Three Rivers Convention Center in Kennewick",
      "Pacific Northwest National Laboratory and WSU Tri-Cities in Richland",
      "Columbia Basin College in Pasco",
      "Tri-Cities Airport",
      "The Columbia River shoreline and Red Mountain wineries"
    ],
    "events": [
      "Water Follies and Columbia Cup hydroplane racing",
      "Franklin County Fair",
      "Tri-Cities wine and food events"
    ],
    "uses": [
      [
        "conference-live-streaming",
        "Conferences and technical meetings at the convention center"
      ],
      [
        "hybrid-event-production",
        "Hybrid meetings for science and engineering organizations"
      ],
      [
        "graduation-live-streaming",
        "College ceremonies and events"
      ]
    ],
    "nearby": [
      "kennewick",
      "richland",
      "pasco",
      "walla-walla"
    ],
    "localFaq": {
      "q": "Do you cover all three Tri-Cities?",
      "a": "Yes. Kennewick, Pasco, and Richland are one trip for us, so one event plan can cover venues in all three."
    }
  },
  {
    "slug": "kennewick",
    "name": "Kennewick",
    "state": "WA",
    "county": "Benton County",
    "pop": "about 83,000",
    "drive": "about 2 hours 30 minutes",
    "region": "Tri-Cities",
    "intro": "Kennewick is the largest of the Tri-Cities, with a convention center, a riverfront, and a full calendar of public events.",
    "sectors": [
      "retail and auto",
      "healthcare",
      "agriculture and wine",
      "construction",
      "tourism and events"
    ],
    "places": [
      "Three Rivers Convention Center",
      "Columbia Park and the Columbia River shoreline",
      "The Tri-City Americans hockey arena",
      "The Reach and the Hanford history region",
      "Red Mountain and Columbia Valley wineries"
    ],
    "events": [
      "Water Follies and Columbia Cup hydroplane racing",
      "Tri-Cities wine and food events"
    ],
    "uses": [
      [
        "conference-live-streaming",
        "Conference streaming at Three Rivers Convention Center"
      ],
      [
        "multi-camera-event-recording",
        "Recording sports, festivals, and public events"
      ],
      [
        "gala-fundraiser-live-streaming",
        "Fundraiser and gala coverage"
      ]
    ],
    "nearby": [
      "tri-cities",
      "richland",
      "pasco",
      "walla-walla"
    ],
    "localFaq": {
      "q": "Do you stream events in Kennewick?",
      "a": "Yes. Kennewick is part of our regular Tri-Cities coverage."
    }
  },
  {
    "slug": "richland",
    "name": "Richland",
    "state": "WA",
    "county": "Benton County",
    "pop": "about 61,000",
    "drive": "about 2 hours 30 minutes",
    "region": "Tri-Cities",
    "intro": "Richland combines a science and engineering community with a riverfront full of events. Presentations here are technical and need clear audio and slides.",
    "sectors": [
      "national laboratory and cleanup contracting",
      "engineering and technology",
      "higher education",
      "healthcare",
      "wine"
    ],
    "places": [
      "Pacific Northwest National Laboratory",
      "WSU Tri-Cities",
      "Columbia Basin College",
      "Howard Amon Park and the Richland riverfront",
      "Hanford-area contractor offices"
    ],
    "events": [
      "Richland riverfront and community events",
      "Science and technology outreach events"
    ],
    "uses": [
      [
        "hybrid-event-production",
        "Hybrid technical talks and symposia"
      ],
      [
        "webinar-studio-production",
        "Webinars and training sessions"
      ],
      [
        "graduation-live-streaming",
        "University and college ceremonies"
      ]
    ],
    "nearby": [
      "tri-cities",
      "kennewick",
      "pasco",
      "walla-walla"
    ],
    "localFaq": {
      "q": "Can you stream technical presentations in Richland?",
      "a": "Yes. We plan the slide capture and speaker audio for technical talks, and we can bring in remote presenters."
    }
  },
  {
    "slug": "pasco",
    "name": "Pasco",
    "state": "WA",
    "county": "Franklin County",
    "pop": "about 79,000",
    "drive": "about 2 hours 30 minutes",
    "region": "Tri-Cities",
    "intro": "Pasco hosts community festivals, fairs, and celebrations that matter to a large local community, including many families who want to see them live from elsewhere.",
    "sectors": [
      "food processing and agriculture",
      "logistics and rail",
      "construction",
      "retail",
      "education"
    ],
    "places": [
      "Columbia Basin College",
      "Tri-Cities Airport",
      "Sacajawea State Park",
      "Pasco Farmers Market",
      "Franklin County Fairgrounds"
    ],
    "events": [
      "Franklin County Fair",
      "Community festivals and quinceañeras"
    ],
    "uses": [
      [
        "multi-camera-event-recording",
        "Recording festivals, fairs, and celebrations"
      ],
      [
        "church-service-live-streaming",
        "Services and ceremonies"
      ],
      [
        "graduation-live-streaming",
        "College events and ceremonies"
      ]
    ],
    "nearby": [
      "tri-cities",
      "kennewick",
      "richland",
      "walla-walla"
    ],
    "localFaq": {
      "q": "Do you stream events in Pasco?",
      "a": "Yes. Pasco is part of our regular Tri-Cities coverage."
    }
  },
  {
    "slug": "walla-walla",
    "name": "Walla Walla",
    "state": "WA",
    "county": "Walla Walla County",
    "pop": "about 34,000",
    "drive": "about 3 hours",
    "region": "Southeast Washington",
    "intro": "Walla Walla has colleges, a wine industry, and a long list of festivals and releases. Live and recorded events here reach guests who cannot travel.",
    "sectors": [
      "wine and hospitality",
      "agriculture (including sweet onions)",
      "higher education",
      "healthcare",
      "tourism"
    ],
    "places": [
      "Whitman College",
      "Walla Walla University in nearby College Place",
      "Downtown Walla Walla and the wine tasting rooms",
      "Fort Walla Walla Museum",
      "Walla Walla Valley vineyards"
    ],
    "events": [
      "Walla Walla Balloon Stampede",
      "Spring Release and wine harvest weekends",
      "Fair and rodeo season"
    ],
    "uses": [
      [
        "graduation-live-streaming",
        "Commencement and campus events"
      ],
      [
        "gala-fundraiser-live-streaming",
        "Fundraisers and wine-industry events"
      ],
      [
        "multi-camera-event-recording",
        "Recording festivals and community events"
      ]
    ],
    "nearby": [
      "tri-cities",
      "kennewick",
      "richland",
      "pasco",
      "lewiston"
    ],
    "localFaq": {
      "q": "Do you travel to Walla Walla?",
      "a": "Yes. We schedule events there in advance and plan the trip around your date."
    }
  },
  {
    "slug": "kalispell",
    "name": "Kalispell",
    "state": "MT",
    "county": "Flathead County",
    "pop": "about 25,000",
    "drive": "about 4 hours 30 minutes",
    "region": "Northwest Montana",
    "intro": "Kalispell is the center of the Flathead Valley, with a busy summer calendar of fairs, festivals, and conferences.",
    "sectors": [
      "tourism and outdoor recreation",
      "healthcare",
      "real estate and resort development",
      "education",
      "manufacturing and outfitters"
    ],
    "places": [
      "Flathead Valley Community College",
      "Logan Health",
      "Flathead Lake",
      "Glacier National Park",
      "Downtown Kalispell"
    ],
    "events": [
      "Northwest Montana Fair and Rodeo",
      "Summer and winter outdoor festivals"
    ],
    "uses": [
      [
        "multi-camera-event-recording",
        "Recording fairs, rodeos, and festivals"
      ],
      [
        "conference-live-streaming",
        "Conferences and association meetings"
      ],
      [
        "hybrid-event-production",
        "Hybrid events with remote attendees"
      ]
    ],
    "nearby": [
      "missoula",
      "coeur-d-alene"
    ],
    "localFaq": {
      "q": "Do you travel to Kalispell?",
      "a": "Yes, for events planned in advance. Contact us with your date and venue."
    }
  },
  {
    "slug": "missoula",
    "name": "Missoula",
    "state": "MT",
    "county": "Missoula County",
    "pop": "about 74,000",
    "drive": "about 3 hours 15 minutes",
    "region": "Western Montana",
    "intro": "Missoula is a university and arts town with big stages, a thriving film community, and an audience that follows events well beyond the city.",
    "sectors": [
      "higher education",
      "healthcare",
      "film, arts, and music",
      "outdoor industry",
      "nonprofits and conservation"
    ],
    "places": [
      "University of Montana",
      "Washington-Grizzly Stadium and the Adams Center",
      "KettleHouse Amphitheater",
      "Caras Park and the Clark Fork riverfront",
      "Providence St. Patrick Hospital"
    ],
    "events": [
      "Big Sky Documentary Film Festival",
      "Griz home games",
      "First Friday downtown"
    ],
    "uses": [
      [
        "concert-performance-live-streaming",
        "Concerts and performances at local venues"
      ],
      [
        "conference-live-streaming",
        "Conferences and symposia"
      ],
      [
        "graduation-live-streaming",
        "University ceremonies and events"
      ]
    ],
    "nearby": [
      "kalispell",
      "coeur-d-alene",
      "spokane"
    ],
    "localFaq": {
      "q": "Do you travel to Missoula?",
      "a": "Yes, for events planned in advance. Missoula is the eastern edge of our regular service area."
    }
  }
];

export const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
export const areaRegions = Array.from(new Set(areas.map((a) => a.region)));
