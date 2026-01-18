export type Event = {
  image: string; // path under public/, e.g. /images/event1.png
  title: string;
  slug: string; // url-friendly identifier
  location: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM (local time) or timezone-aware string
};

export const events: Event[] = [
  {
    image: "/images/event1.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-03-12",
    time: "09:00",
  },
  {
    image: "/images/event2.png",
    title: "JS World Conference 2026",
    slug: "js-world-conference-2026",
    location: "San Francisco, CA, USA",
    date: "2026-04-22",
    time: "10:00",
  },
  {
    image: "/images/event3.png",
    title: "Global Hackathon 2026",
    slug: "global-hackathon-2026",
    location: "Remote / Online",
    date: "2026-05-08",
    time: "16:00",
  },
  {
    image: "/images/event4.png",
    title: "Cloud & Infrastructure Summit",
    slug: "cloud-infra-summit-2026",
    location: "Berlin, Germany",
    date: "2026-06-15",
    time: "09:30",
  },
  {
    image: "/images/event5.png",
    title: "Frontend Masters Meetup",
    slug: "frontend-masters-meetup",
    location: "London, UK",
    date: "2026-07-02",
    time: "18:30",
  },
  {
    image: "/images/event6.png",
    title: "AI for Developers Conference",
    slug: "ai-for-developers-conf-2026",
    location: "New York, NY, USA",
    date: "2026-09-10",
    time: "09:00",
  },
];

export default events;
