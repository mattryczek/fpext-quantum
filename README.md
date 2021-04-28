# Footprints++
A Firefox extension written for Northwestern IT to extend the functionality of the Footprints IT Service Manager. Based on code from the OG [Footprints Extension](https://github.com/mattryczek/footprints-extension) used by Tier 1 students to streamline daily work.

# Aesthetic Changes

### Card Layout
Render a more modern, card based layout on the tickets homepage. Issues should be much more readable and pleasant to look at. Each
separate ticket is now a card. The UI functions much the same as the original page, albeit only displaying critical information on first glance.
The ticket number in the bottom left is colored based on issue status, and it can be **clicked to copy the ticket number**. Critical tickets also get a dangerous looking outline to really draw your attention.

![Cards](../media/Cards.png?raw=true)

### Navbar 

Along with the card layout comes a new navbar that scrolls with the page, so you can search and look up other functions no matter how many tickets you are looking at on any given page. 

![Navbar](../media/Navbar.png?raw=true)

### Options

The extension creates a favicon charm in your extension toolbar. This is a quick way to know you are running the extension. Clicking this takes you to the settings page, where you can quickly determine what version of the extension you are running, and what options you have selected.

![Options](../media/Options.png?raw=true)

# Features
This extension provides a number of features that improve the experience of using Footprints.

### Category Search
Since Footprints has [nearly 1000](https://kb.northwestern.edu/internal/87181) distinct categories, it can be difficult to
remember where all of them are or even to know that some of them exist. This extension provides a method of searching for
categories and displaying the closest matching ones.

![Category Search](https://imgur.com/WJ2kbTn.jpg)

In the case that multiple categories match your search terms, the dropdown above the search box will allow you to select from
one of them.

![Category Search Multiple](https://imgur.com/PFkNn2r.jpg)

### Assignee Search
Similarly to categories, since Northwestern has somewhere in the area of 150 assignment groups (in this workspace alone),
this extension provides a search box for assignees. The search enables you to search for any of these fields:
* An individual's NetID
* An individual's name
* An assignment group's name

For example, to find **NUIT-TSS-USSTier2**, you could search for "sst" (since that's in the name), "kbb0737" (a member's NetID),
or "barnick" (part of a member's name).

![Assignee Search by Team Name](https://imgur.com/Txh81Ji.jpg)

![Assignee Search by Member Name](https://imgur.com/lahPuZG.jpg)

![Assignee Search by Member NetID](https://imgur.com/wavaW6E.jpg)

### Template Search
To make finding a Quick Issue Template easier, the extension adds a search bar to the left of the template menu. The template list will be
filtered to show only templates whose names contain the entered text (case-insensitive).

![Template Search](https://imgur.com/XfrBSV2.jpg)

### Tabbed Browsing Changes
Generally, because of the way that Footprints was written, tickets end up opening in new windows the majority of the time,
regardless of whether your browser is configured to prefer new tabs or new windows. This extension changes that and makes it
such that tickets open *in new tabs* in most places. This behavior can be disabled in the [extension settings](chrome://extensions/?options=bhcajiiignledggebpaalkpcccbjohhc).

### Address Book Search Glitch Fixes
Because of the way that the Footprints address book form was designed, when pressing "Enter" or "Return" to auto-fill contact
information for a ticket, this sometimes caused the last description for a ticket to open in a new window. This extension resolves
that issue.

### Attachment Preview
To view images that are attached to Footprints tickets, Footprints requires that they be downloaded to your computer and then viewed
using a photo viewer on your desktop.

This extension allows for image attachments (`.png`, `.gif`, `.bmp`, and `.jpg`) and text attachments (`.csv`, `.txt`, and `.json`) to be previewed when hovering over the **Download** button for said attachment.

 ![Image Attachment Preview](https://imgur.com/4AmptLN.jpg)

 ![Text Attachment Preview](https://imgur.com/0QcwTuM.jpg)

### Fixify Descriptions
The Footprints WYSIWYG editor has plenty of glitches in its behavior. Often, a description that looked good while typing appears different
after being submitted and results in tickets that have strange discrepancies in formatting, like this one:

![Poorly Formatted Ticket](https://imgur.com/ujxhjEj.jpg)

This extension adds what we lovingly call the **Fixify** button to the description editor. When you click the Fixify button, the following
happens to your ticket description:
* All background highlight colors are removed from the text.
* The text is all set to 13px (10pt) Verdana.
* The color of all text in the ticket is set to black (except for links).

Of note, **bolded**, *italicized*, or indented text will remain bolded, italicized, or indented. All of the above changes will still be made.

![Fixify](https://imgur.com/xlVx6DD.jpg)

Even when it appears that the formatting of a new ticket description is okay, we recommend using the Fixify button to ensure that all redundant
and unnecessary formatting is cleared from the text before submitting. Often, the offending formatting tags are already in the text but don't
cause an issue until the email has already been sent to the user. Fixify prevents that.

# Todo

### User Specified Columns

The current number of columns is hardcoded to 3, pending possible change to 4. This should really be configurable by the user as everyone's monitor/setup is different.  A future release will allow users to specify a custom  `column-size` in the settings.

### Modern Default View

This honestly should've been implemented first; take the original FP table style view and just throw bootstrap and spacing at it. Simple and familiar, yet elegant and refreshing. Will probably be the next order of business after bugs are resolved.

### Advanced Assignee Options

Code for [pickup_ticket](https://github.com/mattryczek/fpext-quantum/blob/2f7d9881d9b6cf5448985e3d281d3c1ec75cd8ee/js/assignees.js#L87-L101) and [assign_my_team](https://github.com/mattryczek/fpext-quantum/blob/2f7d9881d9b6cf5448985e3d281d3c1ec75cd8ee/js/assignees.js#L103-L121) already exists and has been tested (mostly). It needs a GUI implementation, although you _could_ always open the console and call the methods manually for now, if you're curious.

### Ticket Page Redesign

There is _so_ much info thrown at you on the ticket page, when you probably only need to interact with like 4-5 things (for a simple update anyway). The new ticket page will present relevant info in an easy-to-digest format, and hide everything else behind toggles. 

# Known Bugs

### Spacing Issues

>Not really sure how to reproduce it yet, but sometimes the offset between the `navbar` and `cards` div is set to the collapsed version instead of the correct viewport's version. This can be fixed by refreshing the page.

### No Cards Rendered

>Sometimes FP doesn't fetch new tickets when loading the homepage. This leaves the `card` render engine with nothing to draw. Refreshing the page with either the built in refresh button or `F5` solves the issue.