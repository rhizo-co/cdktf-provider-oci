# `dataOciCoreCpeDeviceShape` Submodule <a name="`dataOciCoreCpeDeviceShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCpeDeviceShape <a name="DataOciCoreCpeDeviceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape oci_core_cpe_device_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape(scope: Construct, id: string, config: DataOciCoreCpeDeviceShapeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig">DataOciCoreCpeDeviceShapeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig">DataOciCoreCpeDeviceShapeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCpeDeviceShape resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isConstruct"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformElement"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCpeDeviceShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCpeDeviceShape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCpeDeviceShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCpeDeviceShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceInfo">cpeDeviceInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList">DataOciCoreCpeDeviceShapeCpeDeviceInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList">DataOciCoreCpeDeviceShapeParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceShapeIdInput">cpeDeviceShapeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceShapeId">cpeDeviceShapeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cpeDeviceInfo`<sup>Required</sup> <a name="cpeDeviceInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceInfo"></a>

```typescript
public readonly cpeDeviceInfo: DataOciCoreCpeDeviceShapeCpeDeviceInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList">DataOciCoreCpeDeviceShapeCpeDeviceInfoList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.parameters"></a>

```typescript
public readonly parameters: DataOciCoreCpeDeviceShapeParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList">DataOciCoreCpeDeviceShapeParametersList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `cpeDeviceShapeIdInput`<sup>Optional</sup> <a name="cpeDeviceShapeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceShapeIdInput"></a>

```typescript
public readonly cpeDeviceShapeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `cpeDeviceShapeId`<sup>Required</sup> <a name="cpeDeviceShapeId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.cpeDeviceShapeId"></a>

```typescript
public readonly cpeDeviceShapeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShape.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCpeDeviceShapeConfig <a name="DataOciCoreCpeDeviceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapeConfig: dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.cpeDeviceShapeId">cpeDeviceShapeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape#cpe_device_shape_id DataOciCoreCpeDeviceShape#cpe_device_shape_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape#id DataOciCoreCpeDeviceShape#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cpeDeviceShapeId`<sup>Required</sup> <a name="cpeDeviceShapeId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.cpeDeviceShapeId"></a>

```typescript
public readonly cpeDeviceShapeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape#cpe_device_shape_id DataOciCoreCpeDeviceShape#cpe_device_shape_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shape#id DataOciCoreCpeDeviceShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreCpeDeviceShapeCpeDeviceInfo <a name="DataOciCoreCpeDeviceShapeCpeDeviceInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfo.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapeCpeDeviceInfo: dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfo = { ... }
```


### DataOciCoreCpeDeviceShapeParameters <a name="DataOciCoreCpeDeviceShapeParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParameters.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapeParameters: dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCpeDeviceShapeCpeDeviceInfoList <a name="DataOciCoreCpeDeviceShapeCpeDeviceInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.get"></a>

```typescript
public get(index: number): DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference <a name="DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.platformSoftwareVersion">platformSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfo">DataOciCoreCpeDeviceShapeCpeDeviceInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platformSoftwareVersion`<sup>Required</sup> <a name="platformSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.platformSoftwareVersion"></a>

```typescript
public readonly platformSoftwareVersion: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCpeDeviceShapeCpeDeviceInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeCpeDeviceInfo">DataOciCoreCpeDeviceShapeCpeDeviceInfo</a>

---


### DataOciCoreCpeDeviceShapeParametersList <a name="DataOciCoreCpeDeviceShapeParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.get"></a>

```typescript
public get(index: number): DataOciCoreCpeDeviceShapeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCpeDeviceShapeParametersOutputReference <a name="DataOciCoreCpeDeviceShapeParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShape } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.explanation">explanation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParameters">DataOciCoreCpeDeviceShapeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.explanation"></a>

```typescript
public readonly explanation: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCpeDeviceShapeParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShape.DataOciCoreCpeDeviceShapeParameters">DataOciCoreCpeDeviceShapeParameters</a>

---



