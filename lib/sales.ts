export const salesCopy = {
  notThis: [
    "This is not a course. Nobody here is going to teach you a proven system, and there isn't one.",
    "This is not coaching. I'm not a former contracting officer and I've never won a federal contract. What I've done is spend the research hours pulling every published small-business contact, requirement, and program status for this specific market into one place, with sources and dates attached, at a moment when almost everything written before this year is out of date.",
    "And this is not a replacement for the free help. Alabama's APEX Accelerator, funded by the Defense Department, gives free one-on-one procurement counseling out of an office at UAH. If you've never done this before, call them first. The number is below, and it's in the free sample. This guide is the map you read before and between those conversations, not a substitute for them.",
  ],
  mechanism:
    "Nine modules. Every government contact with the .gov page it came from. Every prime's small business portal, and an honest note where one doesn't exist. What CMMC actually requires today versus what's suspended. Which certifications can still be self-certified — none of them, as of December 2024, which is news to most of the internet. And a public changelog so you can see what moved since you bought.",
  whoBuiltThis:
    "Nicholas Gil is a researcher in Huntsville / Cullman, Alabama. He is not a coach, guru, or insider. He compiled a sourced, dated map of this market and shows every source.",
  currentInformationPromise:
    "The Current Information Promise. If any contact, requirement, or program status in this guide is out of date on the day you use it, tell us. Full refund, and it's corrected for everyone else within the week.",
  objections: [
    {
      question: "Isn't all of this free on .gov sites?",
      answer:
        "All of it. Spread across a dozen agency sites, three SBA platforms, two Federal Register rules, a DoD memo issued in July, and a set of small-business contact pages that mostly aren't indexed. The map is the assembly and the dating, not the facts.",
    },
    {
      question: "Isn't this just another GovCon course?",
      answer:
        "No, and you should be suspicious of those. The FTC keeps a standing consumer alert on business coaching scams and has sued sellers in this space repeatedly. You'll find no income claims here, because nobody can honestly make one.",
    },
    {
      question: "Why should I pay you if APEX is free?",
      answer:
        "You shouldn't skip APEX. Book them. This is a reference you can search at 11pm when you're deciding whether a sources sought notice is worth two days of writing.",
    },
    {
      question: "What if it goes out of date?",
      answer:
        "It will, and faster than you'd like. That's why every fact carries a verification date, why there's a public changelog, and why the guarantee covers stale information specifically.",
    },
    {
      question: "$199 for a PDF?",
      answer:
        "It isn't a PDF. And the comparison isn't a blog post. It's the two weeks you'd otherwise spend reading FAR parts to find out that firm-fixed-price work doesn't require the accounting system somebody tried to sell you.",
    },
  ],
  faq: [
    {
      question: "How do I open the map after I pay?",
      answer:
        "Stripe takes the payment. A magic-link email goes to the checkout address. Open the link, then go to /guide. If you bought with a different email than the one you are signed in with, request a link from /account.",
    },
    {
      question: "How do refunds work?",
      answer:
        "60-day unconditional money-back. Email us through the contact form. You get a full refund. The Current Information Promise also covers a contact, requirement, or program status that is out of date on the day you use it.",
    },
    {
      question: "What is the Toolkit?",
      answer:
        "The $399 tier adds the Capability Statement Template, Contact Tracker, Compliance Self-Check worksheet, Event Calendar, and Set-Aside Eligibility Decision Tree. You fill them in. Nobody here submits bids or makes introductions.",
    },
    {
      question: "Do the $599 updates auto-renew?",
      answer:
        "No. Map + Toolkit + 12 Months of Updates is a one-time 12-month purchase. There is no auto-renew.",
    },
  ],
} as const;
