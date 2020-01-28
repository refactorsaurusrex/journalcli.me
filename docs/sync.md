---
id: sync
title: Synchronization Options
sidebar_label: Synchronization Options
---

In all probability, you don't want your journal confined to a single computer. Rather, you want the ability to write journal entries using whatever device you have in front of you, be it a desktop computer, a laptop, or your phone. This page describes the various ways you can synchronize your journal across multiple devices. 

## Cloud Storage

Storing `journal-cli` files directly in a cloud storage provider directory, such as Dropbox or Google Drive folders, is **not recommended**. The reason is that in addition to your raw journal entry files, `journal-cli` creates a git repository for tracking changes. The git repository is vulnerable to corruption if conflicting edits occur to it from two different computers. However, there is an alternative way to use a cloud storage provider that won't risk corruption of the git repository. If you store your journal inside a VeraCrypt container [as described on the encryption page](/docs/encryption), you can place the encrypted container itself inside a cloud provider directory. You can then mount the container on any number of computers and use `journal-cli` like normal. Just be sure to [enable timestamp modifications](/docs/encryption#enable-container-timestamp-modifications) to the container or it may not synchronize properly. 

Using this approach is not entirely risk-free, however. If you mount the encrypted container simultaneously on more than one computer and also simultaneously edit the contents of the containers, the last computer to dismount the container will overwrite all changes made on other computers. In other words, the last man in wins. As long as you only modify the container on a single computer at a time, this should not be a problem. Make sure you [keep your journal backed up](http://localhost:3000/docs/features#backing-up-your-journal), just in case bad things happen.

## Git Hosting

> Using git to synchronize your journal is only recommended if you are comfortable using git. The information below assumes you have at least basic git knowledge.

Since `journal-cli` uses git to track all your journal entry files, you can also use it to synchronize your journal across multiple computers. As usual, however, there are trade-offs to consider. The primary advantage is ease of use. You can push and pull your changes to and from any number of computers just as you would with any other git repository. The downside is that if you use one of the many run-of-the-mill git hosts out there, your journal files will be stored _unencrypted_, making them vulnerable to data leaks. Be sure to read "[Do you need encryption?](/docs/encryption#do-you-need-encryption)" before heading down this path. The only host I'm aware of which provides fully encrypted git repositories is [Keybase](https://keybase.io/blog/encrypted-git-for-everyone). If your journal contains anything remotely sensitive or private, Keybase is the only host I can recommend you use. That said, even Keybase isn't without a drawback: As long as you are signed into your Keybase account, anyone who can access your computer will also be able to peruse your Keybase git repositories. So if you use Keybase as a git host and want to protect your journal from other people who share your machine, you'll need to log out of your account when it's not needed. It's easy to forget, so be careful! 

### Setup

1. Create a repository with your favorite git host. _Make sure it's **private**, unless you want the entire world to see your journal entries!_ (This isn't a concern if you're using Keybase.)
2. Open your terminal window and navigate to your journal's root directory. 
3. Create a new [remote](https://git-scm.com/docs/git-remote): `git remote add [NAME] [URL]`. The name can be anything. The url must correspond to the repository created on step 1.

Now you can run `git push -u [NAME] master` to copy your journal to the server. To pull it down on another computer, just clone it like you would any other git repository.

## P2P Sync Tools

A safer alternative to Cloud synchronization is to use a peer to peer sync tool, like [Resilio Sync](https://www.resilio.com/individuals/). Tools like these do not store your data on third party servers. Instead, they move files directly between two computers. The downside, of course, is that all computers must be simultaneously running in order to synchronize files between them. If that's an acceptable trade-off, then Resilio Sync is highly recommended - especially over unencrypted cloud storage providers. 

## Mobile

As a command line tool, `journal-cli` can't, won't, and - really - shouldn't run on mobile devices. However, an upcoming release of `journal-cli` will offer the next best thing. It will enable writing journal entries in [Dynalist](https://dynalist.io/) while you're on the go, so that you can later import them into your journal and, optionally, simultaneously delete the originals from Dynalist. Follow [this issue](https://github.com/refactorsaurusrex/journal-cli/issues/25) if you're interested in hearing updates about this feature. 
