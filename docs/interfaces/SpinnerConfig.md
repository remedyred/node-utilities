# Interface: SpinnerConfig

## Hierarchy

- `SpinnerOptions`

  ↳ **`SpinnerConfig`**

## Table of contents

### Properties

- [auto\_increment](SpinnerConfig.md#auto_increment)
- [failPrefix](SpinnerConfig.md#failprefix)
- [indent](SpinnerConfig.md#indent)
- [prefixColor](SpinnerConfig.md#prefixcolor)
- [status](SpinnerConfig.md#status)
- [stoppedPrefix](SpinnerConfig.md#stoppedprefix)
- [succeedPrefix](SpinnerConfig.md#succeedprefix)
- [text](SpinnerConfig.md#text)
- [textColor](SpinnerConfig.md#textcolor)
- [warnPrefix](SpinnerConfig.md#warnprefix)

## Properties

### auto\_increment

• **auto\_increment**: `number`

___

### failPrefix

• **failPrefix**: `string`

The symbol to be used in place of the spinner on failure. The default value is ✖.

#### Inherited from

BaseSpinnerOptions.failPrefix

___

### indent

• **indent**: `number`

Indent the spinner with the given number of spaces.

#### Inherited from

BaseSpinnerOptions.indent

___

### prefixColor

• `Optional` **prefixColor**: `Color`

The color of the spinner or prefix. Default value is `"none"`.

#### Inherited from

BaseSpinnerOptions.prefixColor

___

### status

• **status**: `SpinnerStatus`

Initial status of the spinner.

#### Inherited from

BaseSpinnerOptions.status

___

### stoppedPrefix

• `Optional` **stoppedPrefix**: `string`

The symbol to be used in place of the spinner on stop. Default value is `""`.

#### Inherited from

BaseSpinnerOptions.stoppedPrefix

___

### succeedPrefix

• **succeedPrefix**: `string`

The symbol to be used in place of the spinner on success. The default value is ✓.

#### Inherited from

BaseSpinnerOptions.succeedPrefix

___

### text

• **text**: `string`

Text to show in the spinner. If none is provided, the name field will be shown.

#### Inherited from

BaseSpinnerOptions.text

___

### textColor

• `Optional` **textColor**: `Color`

The color of the text that accompanies the spinner. Default value is
`"none"`.

#### Inherited from

BaseSpinnerOptions.textColor

___

### warnPrefix

• **warnPrefix**: `string`

The symbol to be used in place of the spinner on warn. The default value is ⚠.

#### Inherited from

BaseSpinnerOptions.warnPrefix
