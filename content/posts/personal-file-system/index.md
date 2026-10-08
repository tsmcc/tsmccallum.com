---
title: "A Place for Every File"
seoTitle: "A Place for Every File: Organizing Personal Files"
date: 2026-10-07T09:00:00-04:00
draft: false
inlineCodeStyle: soft
description: "A practical folder structure for organizing personal documents, finances, work, media, and projects, with a consistent approach to file naming."
summary: "How I organize my digital life with numbered folders, an inbox, consistent filenames, cloud syncing, and local backups."
categories: ["Technology", "Personal Organization"]
tags: ["File Organization", "Folder Structure", "File Naming"]
showTableOfContents: true
showAuthor: true
showReadingTime: true
showWordCount: true
showTaxonomies: true
images: ["feature-workspace-4.webp"]
feature: "feature-workspace-4.webp"
featureAlt: "A two-monitor workspace with a folder browser and eclipse composite on one screen, a personal website on the other, and keyboards on a wooden desk"
---

{{< lead >}}
I use a numbered folder structure, a single inbox, and consistent filenames to keep my personal documents, media, and projects organized. Here’s how it works, and what you can adapt for yourself.
{{< /lead >}}

I am, in general, an obsessively organized person: I try to live by "A place for everything, and everything in its place".[^place-for-everything] The effort has paid me back in time saved, made me more effective in my career, and otherwise made my life easier. I also feel better when I know things are where they belong.

Over the years, I've tried different ways of managing the files I create, collect, and receive in everyday life. I eventually developed a folder structure that fits the way I think and work. The system continues to evolve as I learn and my needs change. If you adopt a system of your own, I’d recommend leaving room for it to change as your needs do. 

You don’t need to put your driver’s license in the same folder I do. **What matters is giving your files a consistent home that makes sense to you, so you know where to look when you need them.**

Most new files start in an inbox before I sort them into their permanent folders. I try to make those decisions consistently, based on where I’ve put similar files before. I keep original photographs and videos separate from finished work, and use an archive to move inactive projects out of my workspace: I don’t have to scroll past my 11th-grade book report to find the working folder for this website.



## The Folder Structure

My file system is, fundamentally, *just a set of folders*. Those folders are laid out like this:

```text
├── _inbox
├── 10 Records
│   ├── 11 Identity
│   ├── 12 Legal
│   ├── 13 Insurance
│   ├── 14 Medical
│   ├── 15 Education
│   ├── 16 Property
│   ├── 17 Notices
│   ├── 18 Correspondence
│   └── 19 Pets
├── 20 Finance
│   ├── 21 Taxes
│   ├── 22 Banking & Investments
│   └── 23 Bills & Receipts
├── 30 Work
│   ├── 31 Career
│   ├── 32 Current Employment
│   ├── 33 Previous Employment
│   └── 34 Contracts (by Client)
├── 40 Personal Media (Raw)
│   ├── 41 Photos (Raw)
│   ├── 42 Videos (Raw)
│   └── 43 Captures (Raw)
├── 45 Personal Media (Curated)
│   ├── 46 Photos (Curated)
│   └── 47 Videos (Curated)
├── 50 Personal Projects
├── 70 External Media
│   ├── 71 Documents & eBooks
│   ├── 72 Pictures
│   ├── 73 Sounds & Audio
│   ├── 74 Video
│   ├── 75 Music
│   ├── 77 Templates
│   └── 79 Models
├── 80 Systems & Administration
│   ├── 81 Licenses & Keys
│   ├── 82 Devices & Configs
│   ├── 85 Backups
│   ├── 87 Fonts
│   ├── 88 Applications
│   └── 89 Logs & Savestates
├── 90 External Records
└── 99 Archive
```

That's it. If you recreate this folder structure, you have made the framework of my system. 

*With regard to numbering the folders*: I've spent a considerable amount of time organizing project folder structures for work (mostly to keep myself from going insane), and found a good numbering system useful. The numbers keep the folders in a predictable order, and the gaps leave room for additions. If you like my concept but don't like the numbers, don't use them. I've only numbered one subfolder deep, and *anything goes* for deeper levels.



## Workflow Examples

Explaining how this works for me is probably best done through some examples.

**An insurance renewal.** I receive an auto insurance renewal in the mail. I scan the letter directly into <code class="workflow-code">_inbox</code>, then rename it <code class="workflow-code">2026-01-01 Insurance Company - Auto Policy Renewal.pdf</code>, using the date on the document. I move it into <code class="workflow-code">10 Records/13 Insurance</code>, where I'll look for insurance documents later.

**A blog post.** I’m writing a blog post like this one for my website. The Markdown file and supporting images are scattered across my desktop. I gather them into a subfolder named for the post within <code class="workflow-code">50 Personal Projects/tsmccallum.com</code>. That keeps the writing and its supporting images together, gives this post its own workspace, and makes it easy to find alongside my other website projects.

**Family photographs.** After a weekend of camping, I plug my camera into my PC. Lightroom is set to import the originals into <code class="workflow-code">40 Personal Media (Raw)/41 Photos (Raw)</code>. I review and edit them, then export the finished images into <code class="workflow-code">45 Personal Media (Curated)/46 Photos (Curated)</code>, organized into folders by date and subject. The originals stay in <code>41 Photos (Raw)</code> so I can revisit them; the <code>46 Photos (Curated)</code> folder holds the finished photographs I want to use or share.

{{< workflow-note >}}
Note that it's *probably* not a good idea to adopt my entire layout at once - I'd recommend that you create the <code>_inbox</code> folder and a few key folders that you know you already have files for, then add folders as you need them. You can then organize the backlog gradually; the first goal is to stop adding to it.
{{< /workflow-note >}}



## File Naming

**A major point that I can't overstate is how important good filenames are.** A good folder structure full of poorly-labeled, mismatched junk isn't really a system. 

Unless a file needs a more specific naming convention, I typically start its filename with the ISO date, followed by where it came from and the subject: 

```text
2000-12-05 Electric Company - November Statement.pdf
2000-12-31 Amazon - 27-inch Monitor Invoice.pdf
```

A good description here helps make sure that you can search for it later, so try to describe it as something future-you would use to look for it. Using `YYYY-MM-DD` puts dated filenames in chronological order when they are sorted by name. This format follows the [ISO standard for dates](https://www.iso.org/standard/70907.html) (yes, this is a thing). 

A file's creation date doesn't always reflect the date of the document itself: for example, I get an important letter on 2020-12-10, it's dated 2020-12-08, and I don't scan it until 2020-12-15. The date should be 2020-12-08: the date on the document itself. 

For working documents, I keep the base filename stable and append a version. That is easier to follow than “Resume 2026 DRAFT FINAL FINAL FINAL.” I’m becoming partial to a date followed by a two-digit revision counter, so I only need to track the revisions made that day.

```text
Project Summary v2020-12-31.02.docx
Project Summary v2020-12-31.01.docx
Project Summary v2020-12-30.01.docx
```

## When a File Fits in Two Places

I absolutely have “should this go in <code>31 Career</code> or <code>15 Education</code>?” moments. My best solution is to check what I’ve already put in each folder, make a judgment call, and stay consistent with it. I keep course certificates in <code>15 Education</code>, even when they relate to my career; resumes and work samples go in <code>31 Career</code>. 



## The _inbox

This is where everything goes before I organize it - it's the dump folder. If I scan something new, download something I want to save, or copy an image, it goes in this folder. I *try* to sort it daily, and at worst, weekly, to put each item into the right subfolder in the rest of the system, but even if I don't, it still gets synced and backed up just like the rest of the file system. 

If files have piled up on my desktop or in Documents or Downloads, I move them here for sorting. 



## 10 Records
These folders hold personal and household records that I may need to refer to later. 

I keep everything related to identification - scans of licenses, social security cards, birth certificates, passports, professional credentials - in the <code>11 Identity</code> folder, and I start the filename with the name of the person the document belongs to, followed by the issuer, document type, and expiration date if it has one: 

```text
JOHN SMITH - TX Driver's License EXPIRY 2000-12-31
```

It's much the same for the rest of the folders:

| Folder | What I keep here |
| --- | --- |
| 11 Identity | Licenses, social security cards, birth certificates, passports, professional credentials. |
| 12 Legal | Digital signatures, contracts, power of attorney, will. |
| 13 Insurance | Policies, records of claims. |
| 14 Medical | Records, explanation of benefits, lab reports. |
| 15 Education | Coursework, certificates, diplomas. |
| 16 Property | Rental agreements, property ownership records, vehicle records, records of major assets. |
| 17 Notices | Official records *received* that don't really fit anywhere else. |
| 18 Correspondence | Copies of official letters and such originating from me. |
| 19 Pets | Pets come with paperwork - I keep it here. |

<strong class="sensitive-documents-note">These folders can contain some of your most sensitive documents.</strong> Decide who should have access, where the files should synchronize, and how they will be protected before choosing where to store them.



## 20 Finance
| Folder | What I keep here |
| --- | --- |
| 21 Taxes | This one is, unfortunately, self-explanatory. |
| 22 Banking & Investments | Anything related to banks, investment records, or loans, or accounts of this nature. |
| 23 Bills & Receipts | I keep important bills and records of major purchases here. |

There is some overlap between property records and financial records. I keep documents about the asset itself in <code>16 Property</code>, and loan agreements and statements in <code>22 Banking &amp; Investments</code>. If it comes from the bank, it goes in banking.   



## 30 Work
This could also be called "career", but I call it work. 

| Folder | What I keep here |
| --- | --- |
| 31 Career | Current and former resumes, work samples, interview notes & records, organizational memberships - anything related to my profession. |
| 32 Current Employment | Documents and/or records related to my current employer; things I have signed / am allowed to have copies of (NDAs, handbooks, et al), offer letters, etc. |
| 33 Previous Employment | All previous employer records, like the format of my current employer folder, organized by the employer name. |
| 34 Contracts (by Client) | Records of contract work I have done, organized by client. |
| *Additional Folders*      | Separate folders for business records, if needed. |



## 40, 45 Personal Media

These folders are for organizing the large amount of personal media that I generate. I have sub-folders for raw photos, videos, and screen captures - anything I produce is dumped in these folders to be organized, edited, or otherwise reviewed later. "Raw" is the starting point for my personally-generated media. Note that I do not exclusively mean camera "RAW" files, just files that are generally unprocessed. 

Once I sort through and edit my photos or videos, I export the finished work into the "Curated" folder, organized by date and subject. 

{{< mermaid >}}
flowchart LR
    subgraph RAW["40 Personal Media (Raw)"]
        photosRaw["41 Photos (Raw)"]
        videosRaw["42 Videos (Raw)"]
        capturesRaw["43 Captures (Raw)"]
    end
    process["Review and edit"]
    subgraph CURATED["45 Personal Media (Curated)"]
        photosCurated["46 Photos (Curated)"]
        videosCurated["47 Videos (Curated)"]
    end
    photosRaw --> process
    videosRaw --> process
    capturesRaw --> process
    process --> photosCurated
    process --> videosCurated
{{< /mermaid >}}

This keeps the editing and export work I do separate from the originals, making it easier to preserve and revisit the source material if I decide I want to do something new with it in the future. 



## 50 Personal Projects
This one is pretty open-ended; it covers any personal project that isn't simply a collection of recorded media: websites, digitally created graphics, models, schematics of things I build, code, or anything else that needs its own workspace. If I’m using photographs or video in something that involves more than a typical edit, I give it its own project folder.

In October 2023, I photographed a sequence of the solar eclipse over Texas and combined the images in Photoshop. For me, this became a standalone *project*: it involved more than a typical photo edit, went through several versions, and needed its own working folder. 

![Composite showing successive phases of a solar eclipse arranged diagonally across a dark sky](eclipse_composite_1800.webp?quality=90 "A Photoshop composite made from my eclipse photographs taken in Texas in October 2023.")

Things that are one-off I usually date (or at the very least, prefix with the year), and ongoing projects are just named what they are. 

Completed, one-off projects are typically moved to <code>99 Archive</code> when I am done with them so that I don't have decades-old projects to sort through when working on something recent. 

{{< workflow-note >}}
Note: *I don't have a section 60*. I've left this one open for something that may come up in the future.
{{< /workflow-note >}} 



## 70 External Media
My external media folder is broken into subfolders by type - docs & eBooks, pictures, sound & audio, etc. - all things that I have that I didn't create. This is especially useful for things I have bought: presets, templates, sounds, clips, models - it's very easy to lose access to an email link from a digital purchase. If I keep copies here, I don't have to worry about downloading them from the source, which may not even exist anymore, when I need them again. 

| Folder                | What I keep here                                             |
| --------------------- | ------------------------------------------------------------ |
| 71 Documents & eBooks | PDFs and eBooks I have bought or collected. |
| 72 Pictures | For the tens of thousands of images I have saved over the years, separated into subcategories as best as possible. I even have a "meme" folder. |
| 73 Sounds & Audio | Ringtones, soundboard files, and sound effects I have collected for use in projects. |
| 74 Video | Video clips and other video files I didn’t create. |
| 75 Music | I’m a big advocate for keeping local copies of music I own. |
| 77 Templates | All boilerplates, presets, templates, and other things I may have collected over the years for other projects. |
| 79 Models | As a 3D printing enthusiast, I have lots of saved models that I have printed from various sources over the years. |



## 80 Systems & Administration
For me, this is a large folder that supports many parts of my computer infrastructure; your needs may vary greatly.

| Folder | What I keep here |
| --- | --- |
| 81 Licenses & Keys | Any keys or licenses for software or applications I own or need access to. |
| 82 Devices & Configs | Configuration files I maintain across machines or keep for recovery. |
| 85 Backups | One-time and automatic backups from applications and machines on my network, created by their backup software. |
| 87 Fonts | Fonts I have collected and used over the years. Important if I have a personal project that references one I don't have installed. |
| 88 Applications | Installers for applications I have purchased over the years. |
| 89 Logs & Savestates | Automatic logging destination for various applications and machines on my network. |



## 90 External Records
Inevitably, you get asked to help with others’ files - update a resume, create a birthday invite, edit these photos - I keep all those things that I have worked on that are not mine in this folder, so they don't get absorbed in my work. 

Records I’m responsible for keeping for my wife and son go in the relevant identity, finance, or other folders, with their names included where needed.



## 99 Archive
Projects, raw files, and other items that I want to keep but no longer need in my active folders go into <code>99 Archive</code>. I exclude this folder from cloud syncing and back it up to storage, which keeps cloud storage usage down and my working folders less cluttered.

Separately, I sometimes delete items from the primary folder structure, but before removing a working copy, I confirm that my NAS backup completed (more below) and that its retention settings will keep the copy I need. Other than periodic culling, I try to pretend the backup isn't there and use it just for recovery. 



## Where I Store My Files

*So where do I keep this set of folders? Where should you?*

I keep this folder structure on a secondary drive in my desktop PC. For active work such as photo editing, CAD, and modeling, this works just as well for me as using the Documents folder on my OS drive. If I am taking a screen capture or recording video, that software can write directly to the subject project or <code>40 Personal Media (Raw)</code> folder on this drive, and it's already where it belongs in my system.  I also scan new documents directly into my `_inbox`, so they’re in the system even before I sort them. 

Keeping my files on a separate drive also means I can access them independently of the OS installation if I need to reinstall it. 



## Cloud Syncing

*Why is it so important to me that things get into my personal filesystem right away?* 

*I sync* *most* of these folders, in real-time, to my [pCloud](https://www.pcloud.com) account using the Drive app on my PC. Once uploading finishes, the synced folders are available in my cloud account and on the other devices I use. I chose pCloud because its [Sync feature](https://help.pcloud.com/article/pcloud-drive-vs-pcloud-sync) lets me connect existing local folders to cloud folders without moving my files into a separate sync folder: I told pCloud to sync *my folders*, the way I want them, and it did.

I exclude some folders from real-time syncing to stay below my cloud storage limit and avoid tying up my bandwidth while large files upload. 



## One-Way Backups 

Lastly, I use [Bvckup 2](https://bvckup2.com) to run a nightly, one-way backup from my PC’s storage drive to my network-attached storage (NAS). This gives me a separate copy for recovery if something goes wrong. If you choose a similar approach, which deleted files and earlier versions remain available will depend on the backup solution and its settings. I’d recommend checking those details before relying on it to recover something you’ve changed or deleted.



## Making It Your Own

For now, this system keeps things where I expect to find them and helps me maintain some semblance of order in my digital life. 

If this makes sense for you, I'd again stress to start small: choose one home for your system, create an inbox and a few useful folders, name new files consistently, sort them regularly, and build a routine that makes your files easier to manage.

Once your syncing and backups are set up and you’ve checked that you can recover your files, tackle the backlog of 10,000 files in your My Documents folder as you get more comfortable with the system. 

What part of your own file collection is hardest to organize, and what rule has helped you keep it manageable? I’d love to hear what works for you.

{{< photo-attribution >}}

[^place-for-everything]: This is often attributed to Benjamin Franklin, but I couldn’t find a reliable source confirming that he said it. Who first said it is unclear; [Phrase Finder has some history on it](https://www.phrases.org.uk/meanings/14400.html).
