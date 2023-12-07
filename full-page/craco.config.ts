import CracoAliasPlugin from "craco-alias"

export const plugins = [
    {
        plugin: CracoAliasPlugin,
        options: {
            source: "tsconfig",
            tsConfigPath: "tsconfig.paths.json"
        }
    }
]
