---
id: encryption
title: Encryption
sidebar_label: Encryption
---

> **WARNING!** Do not use Cryptomator with `journal-cli`. Cryptomator is a great tool, but it does not play nicely with git, which is baked into `journal-cli`. I tried creating a git repository on a mounted Cryptomator drive on my Windows machine and it basically corrupted my files. Don't make the same mistake.

## Do you need encryption?

Out of the box, `journal-cli` stores all your journal files in plain text in a directory of your choosing on your local file system, without any protection of any kind. Depending on what kind of information you're keeping in your journal, that might be perfectly acceptable. The files aren't in the cloud, so at least they're not vulnerable to the ineptitudes of your favorite cloud provider - or to the nefarious hacker targeting it - but anyone who is able access your computer can potentially read them. That includes the thief who steals your laptop and manages to crack the shitty password you used to lock it, or your nosey brother who "accidentally" finds your journal while browsing the internet. Again, if your journal consists of research notes of from books and articles you're read, this all may not be a problem. But if your journal is for writing intimate, personal, or private thoughts, it really should be encrypted. To do that, you'll need another third party tool.

## Recommendations

There are a lot of tools available these days for encryption, and I've played with many of them specifically for use with `journal-cli`. Based on my experiences, I can offer two recommendations. First, as indicated above, don't use Cryptomator. I myself experienced data corruption when I created a git repository on Cryptomator's mounted virtual drive. [Other folks](https://community.cryptomator.org/t/cryptomator-git-windows-10-doesnt-work-at-all/2598/4) have [reported](https://community.cryptomator.org/t/have-fun-how-to-break-a-cryptomator-partition-in-less-than-2-minutes/2652) similar issues. So while it's a great tool overall, it's not a good choice for use with `journal-cli`. By extension, I don't recommend experimenting with other encryption tools unless you've confirmed that they will work reliably with git repositories. 

The other recommendation is for what I think you _should_ use with `journal-cli`: [VeraCrypt](https://www.veracrypt.fr/en/Home.html). I've used VeraCrypt - and its long defunct [predecessor](https://www.wikiwand.com/en/TrueCrypt#/End_of_life_announcement) - for many years without ever having a single problem. I've used it to encrypt my journal for as long as [journal-cli has existed](https://github.com/refactorsaurusrex/journal-cli/commit/449fa188b0c73e32c8648143dd91ff633fa412c3). 

## Using VeraCrypt

### Getting Started

If you've never used VeraCrypt before, I suggest you start by reading [this beginner's tutorial](https://www.veracrypt.fr/en/Beginner%27s%20Tutorial.html). Basically, it allows you to create an encrypted file - referred to as a "container" - that can be mounted as a disk drive on your computer. Once mounted, you can interact with it just like you would any other drive on your machine. You can add files, edit them, delete them; whatever. However, once you _dismount_ the drive, it is removed from the system and the files it contains become inaccessible. They still exist within the encrypted file, but cannot be accessed until it has once again been mounted.

If you already have a `journal-cli` journal that you would like to encrypt, it's as easy as creating a new encrypted container as described in the tutorial linked above, mounting it, and then moving all your journal files from their current location to the mounted container drive. Don't forget to include the hidden `.git` directory. Once that's done, use `Set-DefaultJournalLocation` to update your journal's path. 

If you **have not** yet used `journal-cli` to create journal entries, create a new encrypted container as described in the tutorial linked above and mount it. Then, use `Set-DefaultJournalLocation` to set the desired path on the mounted drive for your journal files. 

Remember, you must always use the same path when mounting your journal's container file. (Using VeraCrypt's "favorite volumes" feature - described below - makes this easy.)

### Recommended Configuration

#### Chose a naming convention

Even though VeraCrypt containers can be named anything at all, I suggest using a naming convention so you can easily find them again. For example, I always name my containers with a `.vcc` file extension. ("**V**era**C**rypt **C**ontainer") That way, I can easily find all my containers by searching for "\*.vcc" with a tool such as [Everything](https://www.voidtools.com/)\*. 

#### Choosing the right file size

How large should your encrypted container be? It depends. Will your entries consists solely of text? If so, you can veer toward the smaller end of the spectrum. On the other hand, if you plan on embedding lots of images in your entries you'll need a larger container. I recommend starting with a 100MB. If your journal ever outgrows the container, you can always create another, larger one and just move your journal files over. 

#### Keep your password *secure* and *private*

This might be patently obvious - in fact, I _hope_ it is - but I'll say it anyway. Keep your password away from prying eyes. I highly recommend using a password manager such as [1Password](https://1password.com/). It's not free, but it's fairly inexpensive and totally worth it. (There are free alternatives out there, but I've used 1Password for years so it's the only one I can recommend.) 

You might be tempted to memorize your password and never write it down. I don't recommend that. If you don't unlock your container for a long enough period of time, you risk forgetting the password and if that happens *you are completely screwed*. This point warrants further emphasis: if you forget the password to an encrypted container, *there is absolutely no way to recover the data inside it*. There are no password recovery options available. 

#### Enable container timestamp modifications

By default, VeraCrypt will not alter the "last modified" date on encrypted container files. That means when a container is created, the file will have the same "created on" and "last modified" dates and they will never change. This is for security reasons, but it also has a significant downside because synchronization and backup software may not detect when the container's contents have changed. In the context of `journal-cli`, the consequence is that your journal may not get backed up and/or synchronized properly. For this reason, I highly recommend you enable timestamp modifications if you plan to use VeraCrypt to protect your journal. 

Starting from the VeraCrypt main window, go to **Settings**, then **Preferences**, and then _uncheck_ the option that says "Preserve modification timestamp of the file containers". That's it.

#### Enable hotkeys

When you sit down to write a journal entry, you want to be able to decrypt and mount the container quickly and easily. The best way to do this is with keyboard shortcuts. That way, it's just a quick keyboard combination in order to read from and write to your journal. To enable hotkeys, follow these steps:

1. Starting from the VeraCrypt main window, go to **Settings**, then **Preferences**, and then: 
   1. Under "VeraCrypt Background Task" check the option that says "Enabled" and _uncheck_ "Exit when there are no mounted volumes". This ensures VeraCrypt is ready to mount your volume at any time.
   2. Under "Actions to perform upon logon to Windows", check "Start VeraCrypt Background Task". (I assume this is the same on other operating systems.)
2. Follow [these instructions](https://www.veracrypt.fr/en/Favorite%20Volumes.html) to create a "Favorite Volume" for your journal's container.
3. Go to **Settings**, then **Hot Keys...**, and create a keyboard shortcut for the "Mount Favorite Volumes" action.

#### Enable auto-dismount

Once your container is mounted, it's very easy to forget to *dismount* it. Therefore, you should tell VeraCrypt to automatically dismount it for you - just in case. Starting from the VeraCrypt main window, go to **Settings**, then **Preferences**. Under "Auto-Dismount", enable all six options:

1. Dismount all when... **User logs off**.
2. Dismount all when... **User session is locked**.
3. Dismount all when... **Screen saver is launched**.
4. Dismount all when... **Entering power saving mode.**
5. Auto-dismount volume after no data has been read/written to it for XX minutes. (How long depends on how paranoid you're feeling. Anywhere from 15 to 60 minutes seems reasonable.)
6. Force auto-dismount even if volume contains open files or directories. 

<hr />
* "Everything" is window-specific, but I'm sure there are similar tools for Mac and Linux. 