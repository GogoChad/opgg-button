# OP.GG & U.GG Quick Access — Pengu Loader Plugin

## What it does

This plugin adds two floating buttons directly in the **League of Legends client** when you view a player's profile.

- **OP.GG button** → opens the player's OP.GG page instantly
- **U.GG button** → opens the player's U.GG page instantly

Both buttons display a **tooltip** with the player's rank, tier, LP and wins/losses on hover.

---

## Features

- Auto-detects the viewed player's PUUID
- Auto-detects your server region
- Displays rank info (Solo/Duo or Flex) in the tooltip
- Tooltip color changes based on rank tier (Iron → Challenger)
- Updates automatically when you navigate between profiles
- Caches Riot ID and rank to avoid redundant API calls

---

## Requirements

- [Pengu Loader](https://github.com/PenguLoader/PenguLoader) installed and running
- League of Legends client

---

## Installation

**1. Clone or download this repository**

```bash
git clone https://github.com/GogoChad/opgg-button.git
```

**2. Move the folder into Pengu Loader's plugins directory**
C:\Program Files\Pengu Loader\plugins\opgg-button\

__Your folder structure should look like this:__
```bash
plugins/
└── opgg-button/
    └── index.js
```

### **Support**

If you enjoy this plugin and find it useful, consider giving it a ⭐ star on this repo!
It helps a lot and keeps the project alive. Thank you! 🙏
