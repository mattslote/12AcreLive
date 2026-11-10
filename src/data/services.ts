export interface Section { h2: string; paras?: string[]; bullets?: string[] }
export interface Service {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  description: string;
  lead: string;
  cta: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
  gentle?: boolean;
}

// What every live job includes. Mirrors what 12 Acre Films provides on its live events page.
const common = [
  'Professional camera operators and live switching between angles',
  "Clean audio from wireless lavaliers, handheld mics, and feeds from the venue's sound system",
  'On-screen graphics such as titles, speaker names, sponsor logos, and slides',
  'A full recording of the event, with optional edited highlights and social clips',
  'A pre-event walkthrough of the venue, the connection plan, and the run-of-show',
];

const how = [
  'Conversation: we talk through your goals, audience, and where viewers will watch.',
  'Planning: venue walkthrough, internet plan, run-of-show, and a list of speakers and presenters.',
  'Setup: cameras, audio, and graphics are in place and tested before doors open.',
  'Live: the stream runs while the event happens, with a backup plan for connectivity.',
  'Delivery: the recording is delivered afterward, with optional highlight edits and social clips.',
];

interface Spec {
  slug: string; name: string; short: string; eyebrow: string; place: string; metaTitle: string; description: string;
  lead: string; intro: string[]; covers: string[]; extra: string[]; faqs: { q: string; a: string }[]; related: string[]; gentle?: boolean; cta?: string;
}

const build = (s: Spec): Service => ({
  slug: s.slug, name: s.name, short: s.short, eyebrow: s.eyebrow,
  h1: `${s.name} in Spokane and the Inland Northwest`,
  metaTitle: s.metaTitle, description: s.description, lead: s.lead,
  cta: s.cta ?? 'Get a live event quote', gentle: s.gentle,
  sections: [
    { h2: s.place, paras: s.intro },
    { h2: 'What we cover', bullets: s.covers },
    { h2: "What's included", bullets: [...s.extra, ...common] },
    { h2: 'How a live event comes together', bullets: how },
  ],
  faqs: [
    ...s.faqs,
    { q: 'Do you stream outside Spokane?', a: 'Yes. We travel across the Inland Northwest, from Yakima to Missoula. See our areas page for every city we cover.' },
  ],
  related: s.related,
});

export const services: Service[] = [
  build({
    slug: 'conference-live-streaming', name: 'Conference Live Streaming',
    short: 'Multi-camera streaming and recording for conferences, summits, and speaker events.',
    eyebrow: 'Conferences · Summits · Speaker series',
    place: 'Your conference, for everyone who could not be in the room',
    metaTitle: 'Conference Live Streaming in Spokane, WA',
    description: 'Multi-camera conference live streaming and recording in Spokane and the Inland Northwest: keynotes, breakouts, and speaker series streamed to YouTube, LinkedIn, or your own website.',
    lead: 'Keynotes, panels, and breakouts, streamed and recorded so your content reaches far beyond the venue. 12 Acre Live handles the cameras, audio, graphics, and stream so your team can run the event.',
    intro: [
      'A conference stream has to survive a full day of changing speakers, slide decks, and room conditions. The setup is planned around your agenda: which rooms are covered, which sessions go live, and which are recorded for later.',
      'We have a long history with TEDx-style talks and speaker-driven events, and we plan for clean speaker audio and readable slides first.',
    ],
    covers: ['Keynotes and main-stage sessions', 'Panel discussions and fireside chats', 'Breakout rooms recorded for on-demand viewing', 'Speaker series and recurring talk programs', 'Annual meetings and member conferences'],
    extra: ['Slides shown on screen alongside the speaker', 'Streaming to YouTube Live, LinkedIn Live, Facebook Live, your own website, or several destinations at once'],
    faqs: [
      { q: 'Can you stream several rooms at once?', a: 'Often, yes. It depends on the venue and the number of rooms. Tell us your agenda and we will plan the crew and gear around it.' },
      { q: 'Can we get the sessions afterward?', a: 'Yes. Every event is recorded, and we can deliver full sessions and shorter highlight edits.' },
    ],
    related: ['hybrid-event-production', 'webinar-studio-production', 'multi-camera-event-recording'],
  }),
  build({
    slug: 'hybrid-event-production', name: 'Hybrid Event Production',
    short: 'In-room and online audiences served at once, with remote speakers and live Q&A.',
    eyebrow: 'Hybrid events · Remote speakers · Live Q&A',
    place: 'One event, two audiences, no compromises',
    metaTitle: 'Hybrid Event Production in Spokane, WA',
    description: 'Hybrid event production in Spokane and the Inland Northwest: multi-camera video for the room, a live stream for online guests, remote speakers, and live Q&A.',
    lead: 'A hybrid event only works if the online audience feels included. We produce for the room and for the people watching at home, with remote speakers and questions built into the program.',
    intro: [
      'The common failure in a hybrid event is that the online audience gets whatever the room gets. We plan the stream as its own experience: camera angles, graphics, and a producer who watches the online side.',
      'Remote speakers can join from anywhere and appear on the venue screens, and viewers can send questions that reach the moderator.',
    ],
    covers: ['Conferences and summits with remote speakers', 'Board meetings and annual meetings with remote attendance', 'Fundraisers with an online giving audience', 'Training days and workshops', 'Town halls with online questions'],
    extra: ['Remote speaker and guest connections shown on the room screens and in the stream', 'A plan for collecting and relaying online questions'],
    faqs: [
      { q: 'Can remote speakers appear on the screens in the room?', a: 'Yes. We bring remote guests into the production and can show them on venue screens as well as in the stream.' },
      { q: 'What if the venue internet is poor?', a: 'We check connectivity during the walkthrough and build a plan around it, including backups, before the event day.' },
    ],
    related: ['conference-live-streaming', 'webinar-studio-production', 'gala-fundraiser-live-streaming'],
  }),
  build({
    slug: 'gala-fundraiser-live-streaming', name: 'Gala & Fundraiser Live Streaming',
    short: 'Live streaming and recording for galas, auctions, and nonprofit fundraising events.',
    eyebrow: 'Galas · Auctions · Nonprofit fundraisers',
    place: 'Give your event a bigger room',
    metaTitle: 'Gala & Fundraiser Live Streaming in Spokane, WA',
    description: 'Live streaming for galas, auctions, and nonprofit fundraisers in Spokane and the Inland Northwest, with multi-camera video, graphics, and mission films played live.',
    lead: 'Fundraising events live or die on the program. We stream and record galas and auctions so supporters who cannot attend can still take part, and so your best moments live on afterward.',
    intro: [
      'We have a long background in nonprofit video, so we understand how a fundraising program flows: the mission film, the paddle raise, the speaker who makes the room go quiet.',
      'We work with your emcee and event team so the stream and the room tell one story.',
    ],
    covers: ['Galas and awards dinners', 'Live and silent auctions', 'Paddle raises and fund-a-need moments', 'Mission films and impact videos played during the program', 'Online-only giving events'],
    extra: ['Playback of your mission film and sponsor slides in the stream', 'Sponsor logos and donation prompts as on-screen graphics'],
    faqs: [
      { q: 'Can you play our mission video during the stream?', a: 'Yes. We can roll your film and slides into the live program and record the whole event.' },
      { q: 'Can you also make the video we play at the gala?', a: 'Yes. 12 Acre Films produces nonprofit and fundraising video. Ask us about a film for your event.' },
    ],
    related: ['hybrid-event-production', 'multi-camera-event-recording', 'concert-performance-live-streaming'],
  }),
  build({
    slug: 'webinar-studio-production', name: 'Webinar & Studio Broadcast Production',
    short: 'Polished webinars, panels, and studio-style broadcasts with graphics and guests.',
    eyebrow: 'Webinars · Panels · Studio broadcasts',
    place: 'Webinars that look like broadcasts',
    metaTitle: 'Webinar & Studio Broadcast Production in Spokane, WA',
    description: 'Webinar and studio-style broadcast production in Spokane, WA: multi-camera panels, interviews, product launches, and training sessions with professional audio and graphics.',
    lead: 'If your webinar is your brand, it should look like it. We produce webinars, panels, and studio-style broadcasts with proper cameras, clean audio, and graphics.',
    intro: [
      'A webinar does not need a screen share and a webcam. With a camera crew, lighting, and a switcher, a panel or product launch looks like a show.',
      'We can set up in your office or a venue, and bring remote guests into the production.',
    ],
    covers: ['Product launches and announcements', 'Panel discussions and interview shows', 'Employee town halls and all-hands', 'Training and onboarding sessions', 'Recurring series with a consistent look'],
    extra: ['Lighting and a clean on-camera setup for hosts and guests', 'Remote guests brought into the production'],
    faqs: [
      { q: 'Can you work in our office?', a: 'Yes. We can set up in a conference room, office, or event space. We look at the room in advance.' },
      { q: 'Can you produce a recurring series?', a: 'Yes. We can set a consistent look, graphics package, and schedule for an ongoing show.' },
    ],
    related: ['conference-live-streaming', 'hybrid-event-production', 'multi-camera-event-recording'],
  }),
  build({
    slug: 'church-service-live-streaming', name: 'Church & Ceremony Live Streaming',
    short: 'Weekly or special-occasion streaming for churches, weddings, and ceremonies.',
    eyebrow: 'Services · Ceremonies · Special occasions',
    place: 'Bring the congregation home',
    metaTitle: 'Church Service Live Streaming in Spokane, WA',
    description: 'Church service and ceremony live streaming in Spokane and the Inland Northwest: quiet, professional multi-camera video for weekly services and special occasions.',
    lead: 'A good church stream should disappear. We run quiet, respectful multi-camera streams for services, holidays, and special occasions, so your community can take part from wherever they are.',
    intro: [
      'We keep equipment unobtrusive and follow your lead on what can and cannot happen during a service. For regular services, we can discuss how best to set up a plan that works for your staff and volunteers.',
      'We also stream and record special occasions, such as holiday services, weddings, and memorials.',
    ],
    covers: ['Weekly and holiday services', 'Weddings and ceremonies', 'Concerts and choir performances', 'Memorials and celebrations of life', 'Special guests and conferences hosted at your church'],
    extra: ['Quiet, low-profile camera positions that respect the service', 'Streaming to YouTube, Facebook, or your own website'],
    faqs: [
      { q: 'Can you stream just one special service?', a: 'Yes. We can cover a single holiday, wedding, or memorial.' },
      { q: 'Do you handle funerals?', a: 'Yes. See our funeral live streaming page for the dedicated approach we take with families and funeral homes.' },
    ],
    related: ['funeral-live-streaming', 'concert-performance-live-streaming', 'multi-camera-event-recording'],
  }),
  build({
    slug: 'graduation-live-streaming', name: 'Graduation & School Event Live Streaming',
    short: 'Commencements, assemblies, and school events streamed for family and friends.',
    eyebrow: 'Commencement · Assemblies · School events',
    place: 'Let every family see the moment',
    metaTitle: 'Graduation Live Streaming in Spokane, WA',
    description: 'Graduation and school event live streaming in Spokane and the Inland Northwest: multi-camera commencement coverage so family and friends can watch from anywhere.',
    lead: 'Not every grandparent can make it to the ceremony. We stream and record graduations and school events with clear audio and steady cameras, and deliver a recording families can keep.',
    intro: [
      'Large ceremonies are about sightlines and sound. We work with your venue staff on camera positions and take audio from the venue system, so names are heard and the stream is steady.',
      'Beyond graduation, we cover assemblies, awards nights, school board meetings, and performances.',
    ],
    covers: ['High school and college commencement', 'Awards nights and honors ceremonies', 'School concerts and theater', 'Board meetings and community forums', 'Athletic banquets'],
    extra: ['Reader names and graduate lists supported with on-screen graphics', 'Recordings delivered for families and the school archive'],
    faqs: [
      { q: 'Can the recording be shared with families?', a: 'Yes. We deliver the full recording, and you can share it with families and the school community.' },
      { q: 'Do you work with schools and universities?', a: 'Yes. Our clients include schools, community colleges, and universities in the region.' },
    ],
    related: ['conference-live-streaming', 'church-service-live-streaming', 'concert-performance-live-streaming'],
  }),
  build({
    slug: 'concert-performance-live-streaming', name: 'Concert & Performance Live Streaming',
    short: 'Multi-camera streaming and recording for concerts, theater, and performances.',
    eyebrow: 'Concerts · Theater · Performances',
    place: 'Capture the performance, not just the stage',
    metaTitle: 'Concert & Performance Live Streaming in Spokane, WA',
    description: 'Concert and performance live streaming and multi-camera recording in Spokane and the Inland Northwest, for theaters, festivals, schools, and community organizations.',
    lead: 'A performance needs camera work that follows the music and audio that matches the room. We stream and record concerts and shows with a multi-camera crew that is quiet and prepared.',
    intro: [
      'We rehearse the camera plan with your program where possible, so shots land on the solo and the crowd reaction. Audio can come from the house mix or a separate feed, depending on the venue.',
      'You can stream live, record for later release, or both.',
    ],
    covers: ['Concerts and festivals', 'Theater and dance performances', 'School and community music programs', 'Benefit concerts', 'Recording a performance for release or archive'],
    extra: ['Audio from the house mix or a dedicated feed, coordinated with your sound engineer', 'Multi-camera coverage planned around your set list or program'],
    faqs: [
      { q: 'Can you record the show without streaming it?', a: 'Yes. We can record only, stream only, or do both.' },
      { q: 'Do you need to rehearse?', a: 'It helps. If there is a dress rehearsal, we like to attend and plan the camera work around it.' },
    ],
    related: ['multi-camera-event-recording', 'gala-fundraiser-live-streaming', 'church-service-live-streaming'],
  }),
  build({
    slug: 'multi-camera-event-recording', name: 'Multi-Camera Event Recording',
    short: 'Record your event from several angles, with a polished edit delivered afterward.',
    eyebrow: 'Event videography · Multi-camera · Highlights',
    place: 'Not every event needs to go live',
    metaTitle: 'Multi-Camera Event Videography in Spokane, WA',
    description: 'Multi-camera event recording and videography in Spokane and the Inland Northwest: conferences, galas, speakers, and ceremonies recorded, edited, and delivered.',
    lead: 'Sometimes the goal is a great recording, not a live audience. We record events from multiple angles and deliver full sessions, highlight edits, and social clips.',
    intro: [
      'A multi-camera record gives an editor options: the speaker, the audience reaction, the slide. The result looks like it was edited, because it was.',
      'We can record your event as a live-switched program, or capture isolated angles for a more detailed edit.',
    ],
    covers: ['Conferences and speaker sessions', 'Galas and awards events', 'Ceremonies and celebrations', 'Workshops and trainings', 'Product launches and openings'],
    extra: ['Optional edited highlight reel and social media clips', 'Full-length session recordings delivered for on-demand viewing'],
    faqs: [
      { q: 'Can you make a highlight video after the event?', a: 'Yes. Tell us what the highlights are for, and we will edit to that goal and length.' },
      { q: 'Can you add a live stream later?', a: 'Often yes. Let us know early, since a stream changes the connection and crew plan.' },
    ],
    related: ['conference-live-streaming', 'gala-fundraiser-live-streaming', 'concert-performance-live-streaming'],
  }),
  build({
    slug: 'funeral-live-streaming', name: 'Funeral & Memorial Live Streaming',
    short: 'Quiet, respectful streaming for families and funeral homes.',
    eyebrow: 'Funerals · Memorials · Celebrations of life',
    place: 'Gentle, dependable, and out of the way',
    metaTitle: 'Funeral Live Streaming in Spokane, WA',
    description: 'Respectful funeral and memorial live streaming in Spokane and the Inland Northwest for families, funeral homes, and churches.',
    lead: 'Families who cannot travel still need to be there. We provide quiet, respectful funeral and memorial streaming, and coordinate directly with the funeral home or church so families have one less thing to manage.',
    intro: [
      'We keep equipment unobtrusive and follow the lead of the family and the staff. If you need to arrange a stream on short notice, please call.',
      'For more on our approach, see the dedicated page on the 12 Acre Films site.',
    ],
    covers: ['Funeral services and graveside services', 'Celebrations of life', 'Memorials in churches, funeral homes, and other venues', 'Recordings delivered to the family afterward'],
    extra: ['A way for family members who cannot attend to watch live, arranged with you in advance', 'Coordination directly with funeral home or church staff'],
    faqs: [
      { q: 'Can you set up on short notice?', a: 'Please call. We will do our best to help.' },
      { q: 'Will we get a recording?', a: 'Yes. We deliver a recording for the family to keep.' },
    ],
    related: ['church-service-live-streaming', 'multi-camera-event-recording'],
    gentle: true, cta: 'Contact us',
  }),
];

export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
