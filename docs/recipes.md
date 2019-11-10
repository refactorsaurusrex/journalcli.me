---
id: recipes
title: Recipes
sidebar_label: Recipes
---

- How to search entries for text with Select-String

## Paginate through a list of entries tagged 'work'

```powershell
Get-JournalEntriesByTag -Tags work | 
	select -ExpandProperty entries | 
	fl | 
	more
```

