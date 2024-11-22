import {
    fixupConfigRules,
    fixupPluginRules
} from "@eslint/compat";
import react from "eslint-plugin-react";
import _import from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tailwindcss from "eslint-plugin-tailwindcss";
import jest from "eslint-plugin-jest";
import jestFormatting from "eslint-plugin-jest-formatting";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import path from "node:path";
import {
    fileURLToPath
} from "node:url";
import js from "@eslint/js";
import {
    FlatCompat
} from "@eslint/eslintrc";

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/out",
        "**/christmas"
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
)), {
    plugins: {
        react: fixupPluginRules(react),
        import: fixupPluginRules(_import),
        "simple-import-sort": simpleImportSort,
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        "react-hooks": fixupPluginRules(reactHooks),
        "@typescript-eslint": typescriptEslint,
        tailwindcss: fixupPluginRules(tailwindcss),
        jest: fixupPluginRules(jest),
        "jest-formatting": fixupPluginRules(jestFormatting),
        "testing-library": fixupPluginRules(testingLibrary),
        "jest-dom": fixupPluginRules(jestDom),
    },

    settings: {
        "jsx-a11y": {
            polymorphicPropName: "as",

            components: {
                CityInput: "input",
                CustomButton: "button",
                MyButton: "button",
                RoundButton: "button",
            },
        },

        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },

        react: {
            createClass: "createReactClass",
            pragma: "React",
            fragment: "Fragment",
            version: "detect",
            flowVersion: "0.53",
        },
    },

    rules: {
        "no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
        }],

        "simple-import-sort/exports": "error",

        "simple-import-sort/imports": ["error", {
            groups: [
                ["^react", "^@?\\w"],
                ["^(@|components)(/.*|$)"],
                ["^\\u0000"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.?(css)$"],
            ],
        }],

        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/named": 0,
        "import/namespace": 0,
        "import/default": 0,
        "import/export": 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "import/no-unresolved": 0,
        "no-useless-escape": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "jsx-a11y/rule-name": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/img-redundant-alt": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/anchor-has-content": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/no-unescaped-entities": "off",
        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/react-in-jsx-scope": "off",
        "@next/next/no-img-element": "off",
        "tailwindcss/classnames-order": "off",
        "tailwindcss/enforces-negative-arbitrary-values": "off",
        "tailwindcss/enforces-shorthand": "off",
        "tailwindcss/migration-from-tailwind-2": "off",
        "tailwindcss/no-arbitrary-value": "off",
        "tailwindcss/no-custom-classname": "off",
        "tailwindcss/no-contradicting-classname": "off",
        "tailwindcss/no-unnecessary-arbitrary-value": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
    },
}];