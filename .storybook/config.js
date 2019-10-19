import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

// automatically import all files ending in *.stories.js
configure(requireContext("../stories", true, /\.stories\.js$/), module);
