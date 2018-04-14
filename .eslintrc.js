module.exports = {
    env: { browser: true },
    extends: ["react"],
    rules: {
        "no-use-before-define": "off",
        "comma-dangle": [
            "warn",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "quotes": ["warn", "double"],
        "sort-keys": ["warn", "asc", { natural: true }],
        "sort-imports": [
            "error",
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            },
        ],
    },
};
