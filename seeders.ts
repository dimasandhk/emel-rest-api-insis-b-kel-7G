/*
const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    image: { type: String, required: true }
  },
  { _id: false }
);

const heroSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    skills: [skillSchema],
    tags: [{ type: String, required: true }]
  },
  { timestamps: true }
);
*/

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;
console.log("mongoURI", mongoURI);
if (!mongoURI) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

import { Hero } from "./src/models/hero.model";

const mageDatas = [
  // Esmeralda
  {
    name: "Esmeralda",
    role: "Tank, Mage",
    description: "A mysterious astrologer.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f684768281faab70dea48d06fb72979e.png",
    skills: [
      {
        name: "Starmoon Casket",
        description:
          "Esmeralda manipulates Stardust and Frostmoon: Stardust deals Physical Damage while Frostmoon deals Magic Damage and gives the target a shield equal to 135% of Frostmoon's damage dealt. Each Basic Attack deals (+100% Total Physical Attack) Physical Damage and 100 (+75% Total Magic Power) Magic Damage. The damage dealt by Esmeralda ignores all shield effects and gradually converts her shield into HP.",
        tags: ["Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_fde2b66e35d103d9e71272a6d61381e8.png"
      },
      {
        name: "Frostmoon Shield",
        description:
          "Esmeralda gains 400 (+150% Total Magic Power) Shield and 40% Movement Speed which rapidly decays over its duration for 4s. Meanwhile, she gradually transforms the shields of her nearby enemies into her own shield, capped at 50% of her Max HP.",
        tags: ["Shield", "Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_00253b3e2e77dce506b07fe23755fe26.png"
      },
      {
        name: "Stardust Dance",
        description:
          "Esmeralda waves Stardust and Frostmoon, dealing 240 (+60% Total Physical Attack) Physical Damage and 300 (+120% Total Magic Power) Magic Damage to nearby enemies. Each time she deals damage to a hero, the cooldown of Frostmoon Shield is reduced by 1.5s (damaging non-hero units grants a 0.5s reduction) and the enemy's Movement Speed is reduced by 10% for 1.5s.",
        tags: ["AoE", "Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_fd62ea376ea37da799123a8db3d853d9.png"
      },
      {
        name: "Falling Starmoon",
        description:
          "Esmeralda coheres the power of Astrospace into her two weapons - Stardust and Frostmoon. The longer this skill is channeled, the longer the cast range.",
        tags: ["Burst", "Mobility"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_9d95dd7c4b01c3a234a79ace93433a2c.png"
      }
    ]
  },
  // vexana
  {
    name: "Vexana",
    role: "Mage",
    description: "The young duchess guarding Necrokeep.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_39c9058219c59535e9ed07645c8d9dd3.png",
    skills: [
      {
        name: "Nether Touch",
        description:
          "Vexana and the Eternal Guard inflict Nether Curse on enemies hit. The Curse lasts 5s and will cause the affected enemy to explode upon death, dealing 108-500 (+60% Total Magic Power) Magic Damage to nearby enemies (base damage scales with level).",
        tags: ["Damage"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_4a772fea90f7fef17b012afc119091a7.png"
      },
      {
        name: "Deathly Grasp",
        description:
          "Vexana unleashes a Deathly Grasp in the target direction, dealing 200 (+60% Total Magic Power) Magic Damage to enemies in its path. The projectile stops upon hitting an enemy hero, terrifying them and knocking them back, then it explodes, dealing 200 (+60% Total Magic Power) Magic Damage to nearby enemies and terrifying them for 1s.",
        tags: ["CC", "AoE"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_306fd329581b6ea4590086598d250df1.png"
      },
      {
        name: "Cursed Blast",
        description:
          "exana marks the target area with the power of the undead, striking it after a 0.8s delay and dealing 580 (+165% Total Magic Power) Magic Damage to enemies hit.",
        tags: ["AoE"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f0142fc0def21fe074ec6feb4a24fa07.png"
      },
      {
        name: "Eternal Guard",
        description:
          "Vexana summons an Eternal Guard at the target location, dealing 500 (+60% Total Magic Power) Magic Damage to enemies hit and knocking them airborne for 0.6s. The Eternal Guard then joins Vexana in battle for 15s. Each of the Eternal Guard's attacks deals 225 (+40% Total Magic Power) plus 5% of the target's Max HP as Magic Damage to enemies in a large area.",
        tags: ["Summon", "Damage"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_1a95d813fc47cb5ec048784dacd7b46e.png"
      }
    ]
  },
  // kagura
  {
    name: "Kagura",
    role: "Mage",
    description:
      "A genius Onmyouji Master that inherited the ancestral treasure Seimei Umbrella.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_634196d9234babcc3072155d4fefaf0c.png",
    skills: [
      {
        name: "Yin Yang Gathering",
        description:
          "Upon retrieving the Seimei Umbrella, Kagura gains a 280 (+50% Total Magic Power) shield, stuns nearby enemies for 0.5s, and slows them by 60% for 1s. Cooldown: 4.5s.",
        tags: ["Shield", "CC"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f022f5769cb87dee7944160a24f03b79.png"
      },
      {
        name: "Seimei Umbrella Open",
        description:
          "Kagura sends the Seimei Umbrella to the target location, dealing 315 (+105% Total Magic Power) Magic Damage to enemies in its path and slowing them by 60% for 0.5s. The Umbrella will automatically return to Kagura when she's too far away.This skill deals 130% damage to non-hero enemies.",
        tags: ["Damage", "Slow"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_cc6ff81df0961e494e8c5f3e42f582fe.png"
      },
      {
        name: "Rasho Umbrella Flee",
        description:
          "Kagura removes all debuffs on her and leaps in the target direction, while leaving the Seimei Umbrella behind.",
        tags: ["Remove CC", "Mobility"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_292caeb01278d75ba3e02457e9ddb603.png"
      },
      {
        name: "Yin Yang Overturn",
        description:
          "Kagura invokes the power of the Seimei Umbrella, dealing 330 (+105% Total Magic Power) Magic Damage to nearby enemies, knocking them back, and slowing them by 60% for 0.5s.",
        tags: ["CC", "Burst"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_07f828b02ce64ae8ded3b3ede8893b53.png"
      }
    ]
  },
  // aurora
  {
    name: "Aurora",
    role: "Mage",
    description:
      "The Maiden of the Glacier who grants eternal remembrance in the legends of the North.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_1f3f900f917956e81d7764b9e5ffeb3d.png",
    skills: [
      {
        name: "Pride of Ice",
        description:
          "Upon taking fatal damage, Aurora freezes herself for 1.5s, becoming invincible during this time and gradually recovering 30% Max HP. This effect has a 150s cooldown.",
        tags: ["Death Immunity"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_c6d80942b639b97fbeffc5fd9ee8167e.png"
      },
      {
        name: "Hailstone Blast",
        description:
          "Aurora summons an icy meteorite to strike at the target location, dealing 400 (+90% Total Magic Power) Magic Damage and slowing targets hit by 40% for 1s. Afterward, 5 hailstones fall, each dealing 40 (+10% Total Magic Power) Magic Damage.",
        tags: ["AoE", "Slow"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_209d6465a2c64f50265810fcbaa0c8bb.png"
      },
      {
        name: "Frosty Breeze",
        description:
          "Aurora blows Frosty Breeze in a fan-shaped area in the target direction, dealing 225 (+75% Total Magic Power) Magic Damage to enemies hit, and creating a frozen area at the far-end of the attack that deals a total of 225 (+75% Total Magic Power) Magic Damage to enemies in the area and freezes them for 1s.",
        tags: ["AoE", "CC"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_ef80a610e18430d6ff01ee049d08a489.png"
      },
      {
        name: "Frigid Glacier",
        description:
          "Aurora creates a frost path in the target direction, dealing 100 (+40% Total Magic Power) Magic Damage to enemies in the path and reducing their Movement Speed by 80% for 1.2s. The frost path gradually becomes glaciers that spread until reaching their maximum size and shattering, dealing 600 (+150% Total Magic Power) Magic Damage to all enemies in the area and freezing targets for 1s. Every 100 Magic Power that Aurora has will increase the freeze duration by 0.2s.",
        tags: ["CC", "AoE"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_42818d794bbe6206d10e9658013ab033.png"
      }
    ]
  },
  // chang'e
  {
    name: "Chang'e",
    role: "Mage",
    description: "Naughty and cute disciple of the Great Dragon.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_4a2db83b0fb92b826f039955d1b8b5df.png",
    skills: [
      {
        name: "Trouble Maker",
        description:
          "Each time Chang'e deals damage to an enemy, she leaves a mark on them. Each mark reduces the target's Movement Speed by 1%, stacking up to 20%.",
        tags: ["Debuff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_4d7332d176c72445d8cc3ee0317dacde.png"
      },
      {
        name: "Starmoon Shockwave",
        description:
          "Chang'e sends an energy sphere in the target direction, dealing 350 (+130% Total Magic Power) Magic Damage to enemies in its path and slowing them by 10% for 1.5s.",
        tags: ["AoE", "Slow"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_a02d601ba3fe650adef7922262df55c4.png"
      },
      {
        name: "Crescent Moon",
        description:
          "Chang'e summons the Crescent Moon, gaining a permanent 300 (+150% Total Magic Power) shield and 10% Movement Speed (that lasts until the shield is destroyed). Each time Chang'e casts a skill, she also gains 50% Movement Speed that decays over 2.5s. Crescent Moon also allows Chang'e's Basic Attacks to deal 20 (+35% Total Physical Attack) (+35% Total Magic Power) additional Magic Damage 2 times.",
        tags: ["Shield", "Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_7cccc4df5ed4adc5cedaaf446aab3a6a.png"
      },
      {
        name: "Meteor Shower",
        description:
          "Chang'e fires 30 meteors in the target direction over 4s, each dealing 60 (+33% Total Magic Power) Magic Damage to the first enemy hit. This skill deals 100% extra damage to Minions and Creeps. Chang'e also gains 10% Movement Speed for the duration.",
        tags: ["Burst"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_43c4ffb92aa2cf0242ed4fc0571c1a5d.png"
      }
    ]
  }
];

const assasinDatas = [
  // suyou
  {
    name: "Suyou",
    role: "Assassin, Fighter",
    description:
      "An exorcist from Zhu'an who has inherited the power of the Immortal Nuo.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_20/100_422ffc7849e8bb01629d2423054ed410.png",
    skills: [
      {
        name: "Transient Immortal",
        description:
          "Tap-casting any skill will put Suyou in his Mortal form, granting him 40 Movement Speed and decreasing the interval between Basic Attacks. Hold-casting any skill will put Suyou in his Immortal form, increasing the damage of Basic Attacks to 125% and granting him 20% Damage Reduction. In this form, for every 20 extra Physical Attack Suyou has, he gains 1% Damage Reduction (up to 40%).",
        tags: ["Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_20/100_8b4882f70a3c4538683a2cb8739c7027.png"
      },
      {
        name: "Blade Surge",
        description:
          "Tap: Suyou throws his weapon in the target direction, dealing 250 (+100% Extra Physical Attack) Physical Damage to enemies in its path. Suyou then blinks to the weapon's location, catches it, and performs a slash in the opposite direction, dealing 375 (+150% Extra Physical Attack) Physical Damage. Hold: Suyou channels the Immortal's power and charges in the target direction, dealing 250 (+100% Extra Physical Attack) Physical Damage to enemies along the path. When hitting an enemy hero, he stops and stuns enemies in a rectangular area in front for 0.6s. The charge distance increases with the hold time. Suyou can be controlled while charging, but the skill cannot be interrupted.",
        tags: ["Damage", "CC"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_20/100_f19d61842474b4be077095114cb7a2bd.png"
      },
      {
        name: "Soul Sever",
        description:
          "Tap: Suyou performs a sweeping attack with his weapon, dealing Physical Damage equal to 300 (+200% Extra Physical Attack) plus 15% of target's Lost HP to enemies in a fan-shaped area. Hold: Suyou channels the power of the Immortal to perform 3 cleaves in a fan-shaped area. The first two strikes deal 250 (+80% Extra Physical Attack) Physical Damage each, while the final strike deals 400 (+128% Extra Physical Attack) Physical Damage and recovers 150 (+50% Extra Physical Attack) HP for himself.",
        tags: ["AOE", "Burst"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_20/100_4a0a58432d841803b33982fe1918bfe2.png"
      },
      {
        name: "Evil Queller",
        description:
          "Tap: Suyou glides backward and swings his weapon in the target direction, dealing 420 (+120% Extra Physical Attack) Physical Damage to enemies in a rectangular area and on his path backward, and reducing their Movement Speed by 30% for 1.5s. Hold: Suyou uses the Immortals power to shoot a deadly arrow in the target direction, dealing 580 (+165% Extra Physical Attack) Physical Damage to the target hit. The range increases with the hold time. Suyou can be controlled while charging, but the skill cannot be interrupted.",
        tags: ["Damage", "Debuff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_20/100_34cdeedb104693a99738e1cad6dda2ec.png"
      }
    ]
  },
  // nolan
  {
    name: "Nolan",
    role: "Assassin",
    description:
      "A scholar that wanders the universe with split souls to save his daughter.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_0495066df0d828c149e7fe89aa63078b.png",
    skills: [
      {
        name: "Dimensional Rift",
        description:
          "Nolan's skills will leave a Rift. When a rift comes into contact with another rift, they will activate and pull enemies to their center and deal 220 (+140% Extra Physical Attack) Physical Damage after a short delay. Each time a rift activation hits an enemy, Nolan will gain 15 Energy. If an enemy is hit by multiple rift activations, the damage after the first hit will be reduced by 40%. Cosmic Leap: If Nolan does not deal or take damage for 5s, he enhances his next Basic Attack to dash to the target, dealing (+120% Total Physical Attack) Physical Damage and leaving a Rift. (Damage to and from Minions or Creeps will not prevent Nolan from getting this effect.)",
        tags: ["Damage"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_655b024d09823ec48d3557e202a404b7.png"
      },
      {
        name: "Expansion",
        description:
          "Nolan cuts a rectangular area in front of him with his cosmic gauge, dealing 230 (+40% Total Physical Attack) Physical Damage and leaving a Rift at the first enemy hit.",
        tags: ["AOE"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_f9e7e389d9aa59fb42aff11a2303cf1c.png"
      },
      {
        name: "Gauge",
        description:
          "Nolan charges in the target direction and slashes with his cosmic gauge, dealing 70 (+13% Total Physical Attack) Physical Damage to enemies in his path and leaving a Rift.",
        tags: ["Mobility"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_23fc06b2b01c5abdf0c91182ab8eebc0.png"
      },
      {
        name: "Fracture",
        description:
          "Nolan slashes at the target location 3 times, dealing 120 (+50% Extra Physical Attack) Physical Damage with each slash while leaving 3 rifts and slowing the target hit by 30% for 0.5s. The rifts will be activated automatically while Nolan dashes backward.",
        tags: ["Burst"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_a24a1a342fb4f6bd6f1d59de13e77a05.png"
      }
    ]
  },
  // joy
  {
    name: "Joy",
    role: "Assassin",
    description:
      "The Child of Miracle who returned to the Leonins after years of wandering.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_6b5570b0e557e36501b4228fcdfcf164.png",
    skills: [
      {
        name: "Humph, Joys Angry!",
        description:
          "Joy becomes Angry! each time her skill hits a non-Minion enemy, dealing 100 (+100% Total Magic Power) Magic Damage and increasing her Movement Speed by 60% that decays over 4s (hitting the Leonin Crystal will also grant the Movement Speed effect). This effect has a cooldown of 4s for each target. Joys Basic Attack will deal 65 (+65% Total Physical Attack) (+65% Total Magic Power) Magic Damage.",
        tags: ["Damage", "Speed Up"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_2e3f79d1e66691e8d89cacca211ed231.png"
      },
      {
        name: "Look, Leonin Crystal!",
        description:
          "Joy summons a Leonin Crystal at the target location, dealing 200 (+40% Total Magic Power) Magic Damage to nearby enemies and slowing them by 30% for 1s. The Leonin Crystal lasts up to 2s.",
        tags: ["Summon"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_608b4796b7497e4552f9785a3d4331db.png"
      },
      {
        name: "Meow, Rhythm of Joy!",
        description:
          "Joy dashes in the target direction, dealing 120 (+55% Total Magic Power) Magic Damage to enemies in her path. Hitting an enemy or the Leonin Crystal allows Joy to cast this skill again within 0.8s and gain 1 Beat Energy. Casting this skill on the beat increases the skill damage by 100% and grants a 80 (+60% Total Magic Power) shield that lasts 3s. This skill can be cast up to 4 times in succession.",
        tags: ["Mobility", "Damage"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_a500868582b10eec96f338ed3922d3eb.png"
      },
      {
        name: "Ha, Electrifying Beats!",
        description:
          "Joy increases her Physical & Magic Defense by 15 (+10% Total Magic Power) and gains 30% Movement Speed. Over the next 3s, she pulses 8 times, dealing 120 (+40% Total Magic Power) Magic Damage each time to nearby enemies. Each Meow, Rhythm of Joy! cast on the beat increases this skills damage by 40%. If perfect rhythm is achieved by hitting every beat with Meow, Rhythm of Joy!, Joy also gains 40% Spell Vamp while this skill is active. This skill unlocks when Joy acquires Beat Energy. Casting this skill with 3 Beat Energy will remove all debuffs on Joy and make her immune to slow effects while this skill is active.",
        tags: ["AOE", "Speed Up"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_d86ac1655ad1a2ec0b569fbec9abadda.png"
      }
    ]
  },
  // hanzo
  {
    name: "Hanzo",
    role: "Assassin",
    description: "Genius ninja in the Shadow Sect who is at the crossroads.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_746725e15c7577be6bb92b2665adf447.png",
    skills: [
      {
        name: "Ame no Habakiri",
        description:
          "Damage dealt by Hanzo's Basic Attacks and skills inflicts a stack of Dark Ninjutsu on the target, up to 5 stacks. Ninjutsu: Demon Feast can only be cast on targets with full stacks of Dark Ninjutsu.",
        tags: ["Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_ac365435698ba11d4cea185ab07f4f01.png"
      },
      {
        name: "Ninjutsu: Demon Feast",
        description:
          "The skill can only be used on targets with max stacks of Dark Ninjutsu. If the target is a Common Creep, Hanzo will immediately devour them and digest over a period of time to recover 20% HP. (Targeting enemy heroes deals 540 (+120% Extra Physical Attack) Physical Damage; Targeting Lord or Turtle deals 500 True Damage.)",
        tags: ["Burst"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_816e14aed8c099fb8cfa6053ca0666e5.png"
      },
      {
        name: "Ninjutsu: Dark Mist",
        description:
          "Hanzo dashes in the target direction, leaving dark mist in front that deals 90 (+45% Extra Physical Attack) Physical Damage to enemies in the area every 0.5s, up to 5 times (this damage counts as Basic Attack damage but cannot Crit). The dark mist slows enemies in the area by 40% and grants Hanzo 20% Movement Speed.",
        tags: ["AOE", "Slow"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_83f7dbd47c58fba79f634a31f88e0ffe.png"
      },
      {
        name: "Kinjutsu: Pinnacle Ninja",
        description:
          "Hanzo charges into battle as Hanekage, consuming 12.5 Energy per second. He gains 2 Energy when a non-hero unit dies nearby and 20 Energy when its a hero. After consuming all his Energy, Hanzos body will be slowly drawn to Hanekages current position. While in Hanekage form, Hanzos body is invincible, and Hanekage ignores obstacles and gains 35% Movement Speed and 30% Attack Speed. After being killed, Hanekage will be immediately drawn to Hanzos position, during which he recovers 16% HP and cannot be targeted. This effect is also triggered when the skill is cast again. If Hanekage is killed, Hanzo will be slowed by 50% and reveal his location for 6s.",
        tags: ["Morph", "Mobility"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage_1_9_47/100_12b3b6f378728e25a1ccf0952c9f84bf.png"
      }
    ]
  },
  // lancelot
  {
    name: "Lancelot",
    role: "Assassin",
    description: "Prodigal son and genius swordsman of House Baroque.",
    coverImage:
      "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_db7d20dd6e7a9f958ad210680dc2ba7b.png",
    skills: [
      {
        name: "Soul Cutter",
        description:
          "Each time Lancelot charges, his damage is increased by 7.5% for 4s, up to 30%.",
        tags: ["Buff"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_ae0f65f46319169e0086c9249b921b16.png"
      },
      {
        name: "Puncture",
        description:
          "Lancelot charges in the target direction, dealing 100 (+50% Total Physical Attack) Physical Damage to enemies along the way and applying a Sword Mark to the first unmarked enemy hit. The Sword Mark lasts 5s. If Lancelot successfully applies a Sword Mark to an enemy, the skill's cooldown will be reset.",
        tags: ["Mobility", "AOE"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_60c8287e6736521c1c00d1eda3bc07bf.png"
      },
      {
        name: "Thorned Rose",
        description:
          "Lancelot strikes in the target direction 3 times, each time dealing 220 (+130% Extra Physical Attack) Physical Damage to enemies hit (damage is reduced when multiple enemies are hit). He's untargetable and invincible during this process. Enemies in the center of the area take all the 3 hits and are slowed by 20% for 0.5s. The slow effect can stack.",
        tags: ["AOE", "Slow"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_146f3578adb9187559996d65a9bcab8b.png"
      },
      {
        name: "Phantom Execution",
        description:
          "After a short delay, Lancelot performs an executioners strike in the target direction, dealing 350 (+170% Total Physical Attack) Physical Damage to enemies hit. He is invincible throughout the process.",
        tags: ["Burst", "Mobility"],
        image:
          "https://akmweb.youngjoygame.com/web/svnres/img/mlbb/homepage/100_410d2071fe2e9cfeaed0001e1b942229.png"
      }
    ]
  }
];

// create mage heroes
mageDatas.forEach(async (mage) => {
  const newMage = new Hero(mage);
  console.log(mage.name);
  await newMage.save();
});

// create assasin heroes
assasinDatas.forEach(async (assasin) => {
  const newAssasin = new Hero(assasin);
  console.log(assasin.name);
  await newAssasin.save();
});
