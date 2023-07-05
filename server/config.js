module.exports = {
    host: "localhost:3000",
    servesStatic: true,
    port: 3000,
    networkUpdateFactor: 24,
    socketWarningLimit: 5,
    networkFrontlog: 1,
    networkFallbackTime: 150,
    visibleListInterval: 250,
    gameSpeed: 3,
    runSpeed: 1.5,
    maxHeartbeatInterval: 300000,
    verbose: true,
    WIDTH: 6500,
    HEIGHT: 6500,
    MODE: "ffa",
    TEAMS: 0,
    RANDOM_COLORS: false,
    ARENA_TYPE: "rect",
    BANNED_CHARACTER_REGEX: "/[\uFDFD\u200E\u0000]/gi",
    ROOM_SETUP: [
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm" ],
        [ "roid", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "roid" ],
        [ "norm", "norm", "norm", "norm", "nest", "nest", "nest", "nest", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm" ]
    ],
    X_GRID: 12,
    Y_GRID: 12,
    DAMAGE_CONSTANT: 0.5,
    KNOCKBACK_CONSTANT: 1.5,
    GLASS_HEALTH_FACTOR: 2,
    ROOM_BOUND_FORCE: 0.01,
    FOOD: [0, 0.75, 0.22, 0.1, 0.005, 0, 0],
    FOOD_NEST: [0, 0.0, 0.0, 0.75, 0.23, 0.02, 0],
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 60) return 1;
        if (level <= 105 && level & 1 == 1) return 0.5;
        return 0;
    },
    MAX_SKILL: 9,
    SOFT_MAX_SKILL: 0.59,
    MAX_UPGRADE_TIER: 14,
    // 1, 2, 3 tiers - tanks
    // from 3 tier - dreadnoughts
    //     egg dreadnought - tier 3
    //     triangle dreadnought - tier 6
    //     square dreadnought - tier 9
    //     penatgon dreadnought - tier 12
    //     hexagon dreadnought - tier 14
    TIER_MULTIPLIER: 15,
    SKILL_CAP: 210,
    SKILL_SOFT_CAP: 0,
    SKILL_CHEAT_CAP: 45,
    SKILL_LEAK: 0,
    STEALTH: 4,
    MIN_SPEED: 0.001,
    FOOD_AMOUNT: 100,
    NEST_FOOD_AMOUNT: 1.5,
    CRASHER_RATIO: 2,
    SKILL_BOOST: 5,
    BOTS: 24,
    GLASS_HEALTH_FACTOR: 2,
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    SPACE_PHYSICS: false,
    SPACE_MODE: false,
    MAZE: false,
    DOMINATOR_LOOP: false,
    secondaryGameMode: "z",
    GROUPS: false,
    TAG: false,
    DEFAULT_FILE: 'index.html',
    WELCOME_MESSAGE: "You have spawned! Welcome to the game.\n"
                    +"You will be invulnerable until you move or shoot.\n"
                    +"This is a beta release. Please join the official discord server to report any bugs you encounter!"
}
