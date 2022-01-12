import { default as ObfuscatorPlugin } from "webpack-obfuscator";
import { WebpackObfuscatorOptions } from "webpack-obfuscator/dist/plugin";

const obfuscatorOptions: WebpackObfuscatorOptions = {
  // 压缩代码
  compact: true,
  // 是否启用控制流扁平化(降低1.5倍的运行速度)
  controlFlowFlattening: true,
  // 应用概率;在较大的代码库中，建议降低此值，因为大量的控制流转换可能会增加代码的大小并降低代码的速度。
  controlFlowFlatteningThreshold: 0.3,
  // 随机的死代码块(增加了混淆代码的大小)
  deadCodeInjection: false,
  // 死代码块的影响概率
  deadCodeInjectionThreshold: 0.4,
  // 此选项几乎不可能使用开发者工具的控制台选项卡
  debugProtection: true,
  // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
  debugProtectionInterval: true,
  // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
  disableConsoleOutput: true,
  // 允许只在特定的域和/或子域中运行被混淆的源代码。
  domainLock: [],
  // 如果源代码没有在domainLock指定的域中运行，允许浏览器被重定向到一个通过的 URL。
  domainLockRedirectUrl: "about:blank",
  // 启用被传递的正则表达式匹配的字符串字面的强制转换。
  forceTransformStrings: [],
  // 这个选项的主要目的是能够在混淆多个来源/文件的过程中使用相同的标识符名称。
  identifierNamesCache: null,
  // 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)
  identifierNamesGenerator: "mangled",
  // 为identifierNamesGenerator设置标识符字典
  identifiersDictionary: [],
  // 设置所有全局标识符的前缀
  identifiersPrefix: "",
  // 防止 require 导入的混淆。在某些情况下，由于某些原因，运行时环境要求这些导入只有静态字符串，这可能是有帮助的。
  ignoreRequireImports: false,
  // 允许设置带有源代码的输入文件的名称。
  inputFileName: "",
  // 启用将信息记录到控制台的功能。
  log: true,
  // 使得数字转换为表达式
  numbersToExpressions: false,
  // 所有增加的选项都将与选定的选项预设合并。
  optionsPreset: "default",
  // 是否启用全局变量和函数名称的混淆
  renameGlobals: true,
  // 启用属性名称的重命名。
  renameProperties: false,
  // 指定 renameProperties 选项模式
  renamePropertiesMode: "safe",
  // 禁用混淆和标识符的生成，这些标识符被传递的正则表达式匹配。
  reservedNames: [],
  // 禁用被传递的正则表达式匹配的字符串字面的转换。
  reservedStrings: [],
  // 该选项为随机发生器设置种子。这对于创造可重复的结果很有用。
  seed: 0,
  // 混淆后的代码,不能使用代码美化,同时需要配置 compact:true;
  selfDefending: false,
  // 通过简化实现了额外的代码混淆。
  simplify: true,
  // 启用混淆代码的源码地图生成。
  sourceMap: false,
  sourceMapBaseUrl: "",
  sourceMapFileName: "",
  sourceMapMode: "separate",
  sourceMapSourcesMode: "sources-content",
  // 将字面字符串分割成长度为 splitStringsChunkLength 选项值的块状物。
  splitStrings: true,
  // 设置 splitStrings 选项的分块长度。
  splitStringsChunkLength: 20,
  // 删除字符串文字并将它们放在一个特殊的数组中
  stringArray: true,
  // 允许控制字符串数组调用索引的类型。
  stringArrayIndexesType: ["hexadecimal-number"],
  // 使用base64或rc4对stringArray的所有字符串字面进行编码，并插入一个特殊的代码，用于在运行时将其解码。
  stringArrayEncoding: ["base64"],
  // 启用所有字符串阵列调用的额外索引移位
  stringArrayIndexShift: true,
  // 将 stringArray 数组移动一个固定的、随机的（在代码混淆时产生的）位置。
  stringArrayRotate: true,
  // 随机排序 stringArray 数组中的项目。
  stringArrayShuffle: true,
  // 设置每个根或函数作用域内的 string array 的包装器的数量。
  stringArrayWrappersCount: 1,
  // 启用 string array 包装器之间的链式调用。
  stringArrayWrappersChainedCalls: true,
  // 允许控制字符串数组包装器参数的最大数量。
  stringArrayWrappersParametersMaxCount: 2,
  // 允许选择通过 stringArrayWrappersCount 选项追加的包装器的类型。
  stringArrayWrappersType: "variable",
  // 你可以使用这个设置来调整一个字符串字头被插入到 stringArray 的概率（从 0 到 1）
  stringArrayThreshold: 0.75,
  // 允许为混淆的代码设置目标环境。
  target: "browser",
  // 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。
  transformObjectKeys: false,
  // 允许启用/禁用字符串转换为 unicode 转义序列。
  unicodeEscapeSequence: false
};

const OBFUSCATOR_PLUGIN = new ObfuscatorPlugin(obfuscatorOptions, []);

export { OBFUSCATOR_PLUGIN };
