---
id: features
title: Features Overview
sidebar_label: Features Overview
---

> **Important Notes**
>
> - Unless otherwise specified, all commands assume you are working in a PowerShell 6+ terminal window.
> -  "Cmdlet" is a [PowerShell-specific term](https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/cmdlet-overview?view=powershell-6). Throughout this site, it is used interchangeably with the more the generic term "command". They are completely synonymous in this context.

## Creating Journal Entries

### Option 1: Write with a markdown editor

Run `New-JournalEntry`, or use the alias `nj`. A new journal entry will be created for today, and launched using the default application on your machine for `.md` files. Need to create an entry for a day other than today? Use the `DateOffset` parameter, which take a positive or negative number that represents the number of days to add or subtract from today. For example, `nj -DateOffset -1` will create an entry for yesterday. Or use the `-Date` parameter to specify an abitrary date. To tag your entry use the `-Tags` parameter, which takes an array of strings and adds them to your entry as a yaml property. If you'd like to remind yourself to read an entry at some point in the future, use the `-Readme` parameter. This takes either a discrete date such as `3/30/2028` or a duration such as `6 years` and applies it to your entry as another yaml property. If neither the `-Tags` nor `-Readme` parameters are used, the new journal entry will be created with a single, default tag: `(untagged)`. The default tag is automatically removed when any non-default tags are applied. Every entry must have at least one tag, or it will effectively be orphaned. Orphaned entries are ignored by most `journal-cli` cmdlets. You can, of course, also add or edit tags and readme yaml properties manually, if desired. Additional documentation for the `New-JournalEntry` cmdlet, including examples, can be found [here](https://github.com/refactorsaurusrex/journal-cli/wiki/New-JournalEntry). 

The instructions above assume you've already set a default journal location. If not, you must provide the location via the `-Location` parameter. Unless you want to enter a `-Location` parameter _every single time you create a new entry_, it's recommended that you set a default path:

```powershell
Set-JournalDefaultLocation 'C:\Path\To\Your\Journal'
# Use the path syntax appropriate for your operating system.
```

### Option 2: Write directly from the terminal

> Note: This method does not currently have a `-Readme` parameter. It will be added in an upcoming release.

Run `Add-JournalEntryContent`, or use the alias `aje`, to add content to today's journal entry. If an entry does not yet exist for today, one will be created. Use the `-Body` parameter to add text to the entry's body and the `-Tags` parameter to append additional tags. If no tags are specified for a new entry, it will be created with a single, default tag: `(untagged)`. The default tag is automatically removed when any non-default tags are applied. Every entry must have at least one tag, or it will effectively be orphaned. Orphaned entries are ignored by most `journal-cli` cmdlets. You can, of course, also add or edit tags and readme yaml properties manually, if desired. 

By default, new body content is appended to `journal-cli`'s default date-based H1 header. To insert content under a different header, use the `-Header` parameter. If the specified header already exists, the content will be appended to it. If not, the header and the specified body content will be appended to the bottom of the entry. Need to create an entry for a day other than today? Use the `DateOffset` parameter, which take a positive or negative number that represents the number of days to add or subtract from today. For example, `nj -DateOffset -1` will create an entry for yesterday. Or use the `-Date` parameter to specify an abitrary date. Additional documentation for the `Add-JournalEntryContent` cmdlet, including examples, can be found [here](https://github.com/refactorsaurusrex/journal-cli/wiki/Add-JournalEntryContent). 

The instructions above assume you've already set a default journal location. If not, you must provide the location via the `-Location` parameter. Unless you want to enter a `-Location` parameter _every single time you create a new entry_, it's recommended that you set a default path:

```powershell
Set-JournalDefaultLocation 'C:\Path\To\Your\Journal'
# Use the path syntax appropriate for your operating system.
```

### Valid Readme Expressions

**Dates**

Readme dates can be written in any standard format for the current culture of your machine. In the United States, for example, `October 26, 2019`, `10/26/2019`, and `10/26/19` are all valid formats. On a machine set to German culture, `26/10/2019` is a valid expression of "October 26 2019" but `10/26/2019` is not. Periods and dashes can be substituted for forward slashes. 

**Durations**

Readme durations are written in the format of "[integer] [years|months|weeks|days]", so `1 year`, `15 months`, `6 weeks`, and `1024 days` are all valid expressions. Only whole numbers can be used. Time periods can be either singular or plural. 

## Indexing Your Journal

> Additional information about indexing can be found in the [getting started page](/docs/getting-started#indexing-searching). 

Run `Get-JournalIndex`  or `gji` to dynamically build an index of your entire journal. By default, results are sorted by tag count. This shows you the topics you write about most frequently. Use the `-OrderBy` and `-Direction` parameters to sort alphabetically by tag or change the sort order. To restrict the index to one or more specific tags, use the `Get-JournalEntriesByTag`. By default,  this command will filter the returned journal entries to those which contain _any_ of the provided tags. However, if you only want to see entries that contain _all_ the tags provided, you can use the `-All` switch. 

### Listing Readme Entries

To review a list of entries which were flagged for you to re-read at a future date, run `Get-JournalReadmeEntries`. To use this, you must either use the `-All` switch - which, perhaps obviously, will return every single entry in your journal that contains a `readme` property. This can be useful, but over enough time it may result in a very long list. To restrict the list to a shorter time period, you can pass the `-Period` and `-Duration` parameters, as shown below. Periods can be `Days`, `Months`, or `Years` and the duration is any positive integer. 

```powershell
> Get-JournalReadmeEntries -Period Years -Duration 1 | Format-List

ReadmeDate : Saturday, August 27, 2019
Headers    : {## ReadMe:}
EntryName  : 2019.08.27
Tags       : {work, exercise}

ReadmeDate : Saturday, August 1, 2019
Headers    : {## Car broke down, ## The evening}
EntryName  : 2019.08.23
Tags       : {work, event, predictions}

ReadmeDate : Sunday, January 26, 2019
Headers    : {# Thursday, September 26, 2019}
EntryName  : 2019.09.26
Tags       : {coding, work}

# 1. This example is contrived, so the entry dates and readme dates may appear a bit odd.
# 2. Format-List is not required, but it made this output easier to read here. :)
```

## Opening and Reading Entries

### Viewing Entries On Disk

To view journal entry files via your system's file explorer, run `Open-Journal` or `oj`. Without any parameters, this will open the directory containing the current month's entries. If no entries have been written for the current month, an error is thrown. You can also use the `-To` parameter which accepts one of the following values: `CurrentMonth` (the default), `CurrentYear`, or `Root`. As you might expect, `CurrentYear` will open the directory for the current year while `Root` opens the journal's topmost directory.

### Reading Entry Content In The Terminal

Starting with either the `Get-JournalIndex` or `Get-JournalEntriesByTag` commands, you can read entire journal entries, or only the headers from each entry, within the terminal window. For example, the following command creates an index of entries that are tagged either `work` or `running`, expands the `Entries` property, formats the results into a list, and paginates the content. 

```powershell
Get-JournalEntriesByTag -Tags work,running | 
  select -ExpandProperty Entries | 
  fl | 
  more
  
# 1. "select" is an alias for "Select-Object"
# 2. "fl" is an alias for "Format-List"
# 3. "more" paginates the results. You can also use "oh -p", 
# which is shorthand for "Out-Host -Paging", to achieve similar results.
```

By default, `Get-JournalIndex` and `Get-EntriesByTag` include only headers from each entry. To include the complete entry content, use the `-IncludeBodies` switch like so:

```powershell
Get-JournalEntriesByTag -Tags work,running -IncludeBodies | 
  select -ExpandProperty Entries | 
  fl | 
  more
```

This makes it super easy to leaf through a collection of entries and scan its content at whatever level of detail you desire.

### Reading Entries With A Markdown Editor

To open a journal entry with your default markdown editor, the `Open-JournalEntry` command. This command is versatile and can accept an entry by name - with or without the `.md` file extension, by date, or by passing in an `IJournalEntry` object from either `Get-JournalIndex` or `Get-JournalEntriesByTag`. 

```powershell
# These three commands are functionally equivalent. 
> Get-JournalEntry '2019.02.05'
> Get-JournalEntry '2019.02.05.md'
> Get-Date -Year 2019 -Month 2 -Day 5 | Open-JournalEntry

# This will open all entries tagged 'insomnia', one at a time.
> Get-JournalEntriesByTag -Tags insomnia | 
  select -ExpandProperty entries | 
  Open-JournalEntry -Wait
```

A word of caution: be careful not to pipe in dozens or hundreds of journal entry references into the `Open-JournalEntry` command without the `-Wait` switch enabled, lest you end up with dozens or hundreds of markdown editor instances running on your machine. :)

### Reading Random Entries

Looking for a flash from the past? Run `Open-RandomJournalEntry` (alias `orj`) to open a random entry from your journal. By default, this command will search your entire journal for an entry to open. But you can also pass in an array of tags using the `-Tags` parameter to filter the possible entries to those that contain at least one of the specified tags.

## Renaming Tags

You can easily rename entry tags at any time using the `Rename-JournalTag` command. It takes two mandatory parameters, `-OldName` and `-NewName`, and one optional parameter, `-DryRun`. The `-DryRun` flag will generate a list of all entries that include the old tag, but doesn't modify any of the entries. It is highly recommended that you do a dry run before proceeding with the rename. Doing so will help ensure you don't unintentionally edit any entries. That said, even if you regret the change, it's still easily reversible because all changes made by `journal-cli` are permanently logged using [git](/docs/git) version control. To safely undo an undesirable journal action - such as renaming tags - all you have to do is navigate to your journal's root directory in your terminal, and revert the appropriate commit:

```powershell
> Rename-JournalTag -OldTag 'exercise' -NewTag 'runnnnering'
# Crap!I misspelled 'running'

> cd C:\path\to\my\journal
> git log --oneline

2f45d11 POST: Rename tag # This is what we want to undo
b10fb41 POST: Add new journal entry
e429ec5 PRE: Add new journal entry
4cd07df Initial commit

> git revert 2f45d11 
# Journal is now back to its previous state, before running 
# the `Rename-JournalTag` command.
```

Be sure to read the [git documentation page](/docs/git) for more information. 

## Backing Up Your Journal

### First, a philosophical statement

`journal-cli` maintains a single copy of all your journal files. Unless you back it up, _you will lose your entire journal if your hard drive suffers a catastrophic failure_. This can include a fire that destroys your home. Or a flood. Or ransomware that encrypts all the files on your system. Don't take any chances with your important files, be they journal entries, family photos, or tax documents. And [don't be fooled](https://lifehacker.com/psa-dropbox-shouldnt-be-your-sole-backup-for-your-file-1612803794) into thinking that cloud storage counts as a robust backup solution. 

The best way to keep your journal safely backed up is to use a tool like [CrashPlan](https://www.crashplan.com), which will automatically back up changes to your files as often as every 15 minutes. There are other similar tools out there - such as [BackBlaze](https://www.backblaze.com/version-history.html) - but I can personally vouch for CrashPlan. In 2017 my mother's computer was infected by ransomware, which encrypted all the files on her computer. If it wasn't for the fact that we could restore her files from a date and time *prior* to the infection, they all would have been permanently lost. CrashPlan made recovery a simple matter, and she only lost - at most - a few hours of work. I've had CrashPlan installed on all my personal computers ever since. If you don't use a backup tool with this degree of granular version history, you should really get one.

### Backup Commands

`journal-cli` can create a backup copy of your entire journal using the `Backup-Journal` command. Use the required `-BackupLocation` parameter to indicate where you'd like your backup files stored. This path can be saved for future use with the `-SaveParameters` switch. Running the command will copy all entries from your journal into a zip file - named according to the current date and time - and save it in the specified directory. Use the `-Password` parameter to password protect the resulting zip file. This, too, can be saved for future use. (Note: this password, along with all other settings, are encrypted and stored locally on your computer.) If you choose to save the backup location, you can then run `Open-BackupLocation` to display the directory in your system's file viewer. Ideally, backups should be located on a different physical disk from your normal journal files. If desired, you could create a scheduled task on your computer to run `Backup-Journal` on a regular basis. 

```powershell
# First time
> Backup-Journal -BackupLocation 'D:\Backups\Journal' -Password 'secret' -SaveParameters

# Subsequent times, now that the path and password have been saved
> Backup-Journal
```

## Tracking Changes To Your Journal

Every `journal-cli` command that alters your journal, such as by creating new entries or renaming tags, automatically generates a permanent snapshot of your all journal files at that point in time. You can also create manual snapshots by running `Save-JournalSnapshot`. This allows you to view the complete editing history of every change ever made to your journal entries. It also provides the ability to undo most unintended changes, such as a regrettable tag rename. And it's handy if you ever edit older entries, because you can always see exactly what changes you made over time to specific entries. 

This version history tracking functionality is facilitated by [integrated git source control](/docs/git). If you're fluent with git, all you need to know is that you can interact with your journal's history exactly as you would any other git repository. Just navigate to your journal's root directory and have at it! For those who are less familiar with git, just know that such knowledge is not essential to using `journal-cli`. Refer to the git integration page linked above and the [recipes page](/docs/recipes) for additional information and helpful tips. 

## A Note About Performance

`journal-cli` has only be tested with a few hundred files on a very fast machine. No deliberate efforts have been made to maximize performance. If you use it with many thousands of files (or more!) and/or on a slower machine, your experience may vary. If you do notice any performance problems, please [open an issue](https://github.com/refactorsaurusrex/journal-cli/issues) so we can get it fixed.

