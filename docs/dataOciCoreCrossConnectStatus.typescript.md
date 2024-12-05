# `dataOciCoreCrossConnectStatus` Submodule <a name="`dataOciCoreCrossConnectStatus` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnectStatus <a name="DataOciCoreCrossConnectStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status oci_core_cross_connect_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus(scope: Construct, id: string, config: DataOciCoreCrossConnectStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig">DataOciCoreCrossConnectStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig">DataOciCoreCrossConnectStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnectStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isConstruct"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformElement"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCrossConnectStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCrossConnectStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCrossConnectStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnectStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.encryptionStatus">encryptionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.interfaceState">interfaceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lightLevelIndBm">lightLevelIndBm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lightLevelIndicator">lightLevelIndicator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.crossConnectIdInput">crossConnectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.crossConnectId">crossConnectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `encryptionStatus`<sup>Required</sup> <a name="encryptionStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.encryptionStatus"></a>

```typescript
public readonly encryptionStatus: string;
```

- *Type:* string

---

##### `interfaceState`<sup>Required</sup> <a name="interfaceState" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.interfaceState"></a>

```typescript
public readonly interfaceState: string;
```

- *Type:* string

---

##### `lightLevelIndBm`<sup>Required</sup> <a name="lightLevelIndBm" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lightLevelIndBm"></a>

```typescript
public readonly lightLevelIndBm: number;
```

- *Type:* number

---

##### `lightLevelIndicator`<sup>Required</sup> <a name="lightLevelIndicator" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.lightLevelIndicator"></a>

```typescript
public readonly lightLevelIndicator: string;
```

- *Type:* string

---

##### `crossConnectIdInput`<sup>Optional</sup> <a name="crossConnectIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.crossConnectIdInput"></a>

```typescript
public readonly crossConnectIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `crossConnectId`<sup>Required</sup> <a name="crossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.crossConnectId"></a>

```typescript
public readonly crossConnectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectStatusConfig <a name="DataOciCoreCrossConnectStatusConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectStatus } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectStatusConfig: dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.crossConnectId">crossConnectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status#cross_connect_id DataOciCoreCrossConnectStatus#cross_connect_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status#id DataOciCoreCrossConnectStatus#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `crossConnectId`<sup>Required</sup> <a name="crossConnectId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.crossConnectId"></a>

```typescript
public readonly crossConnectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status#cross_connect_id DataOciCoreCrossConnectStatus#cross_connect_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectStatus.DataOciCoreCrossConnectStatusConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_status#id DataOciCoreCrossConnectStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



