# `dataOciCoreCpeDeviceShapes` Submodule <a name="`dataOciCoreCpeDeviceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCpeDeviceShapes <a name="DataOciCoreCpeDeviceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes oci_core_cpe_device_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes(scope: Construct, id: string, config?: DataOciCoreCpeDeviceShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig">DataOciCoreCpeDeviceShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig">DataOciCoreCpeDeviceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreCpeDeviceShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCpeDeviceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isConstruct"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCpeDeviceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCpeDeviceShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCpeDeviceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCpeDeviceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.cpeDeviceShapes">cpeDeviceShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList">DataOciCoreCpeDeviceShapesCpeDeviceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList">DataOciCoreCpeDeviceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cpeDeviceShapes`<sup>Required</sup> <a name="cpeDeviceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.cpeDeviceShapes"></a>

```typescript
public readonly cpeDeviceShapes: DataOciCoreCpeDeviceShapesCpeDeviceShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList">DataOciCoreCpeDeviceShapesCpeDeviceShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreCpeDeviceShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList">DataOciCoreCpeDeviceShapesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreCpeDeviceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCpeDeviceShapesConfig <a name="DataOciCoreCpeDeviceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapesConfig: dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#id DataOciCoreCpeDeviceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreCpeDeviceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#filter DataOciCoreCpeDeviceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#id DataOciCoreCpeDeviceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreCpeDeviceShapesCpeDeviceShapes <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapes.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapesCpeDeviceShapes: dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapes = { ... }
```


### DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo: dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo = { ... }
```


### DataOciCoreCpeDeviceShapesFilter <a name="DataOciCoreCpeDeviceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCpeDeviceShapesFilter: dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#name DataOciCoreCpeDeviceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#values DataOciCoreCpeDeviceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#regex DataOciCoreCpeDeviceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#name DataOciCoreCpeDeviceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#values DataOciCoreCpeDeviceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cpe_device_shapes#regex DataOciCoreCpeDeviceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.get"></a>

```typescript
public get(index: number): DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.platformSoftwareVersion">platformSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo">DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platformSoftwareVersion`<sup>Required</sup> <a name="platformSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.platformSoftwareVersion"></a>

```typescript
public readonly platformSoftwareVersion: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo">DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo</a>

---


### DataOciCoreCpeDeviceShapesCpeDeviceShapesList <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference <a name="DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.cpeDeviceInfo">cpeDeviceInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList">DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.cpeDeviceShapeId">cpeDeviceShapeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapes">DataOciCoreCpeDeviceShapesCpeDeviceShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpeDeviceInfo`<sup>Required</sup> <a name="cpeDeviceInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.cpeDeviceInfo"></a>

```typescript
public readonly cpeDeviceInfo: DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList">DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfoList</a>

---

##### `cpeDeviceShapeId`<sup>Required</sup> <a name="cpeDeviceShapeId" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.cpeDeviceShapeId"></a>

```typescript
public readonly cpeDeviceShapeId: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCpeDeviceShapesCpeDeviceShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesCpeDeviceShapes">DataOciCoreCpeDeviceShapesCpeDeviceShapes</a>

---


### DataOciCoreCpeDeviceShapesFilterList <a name="DataOciCoreCpeDeviceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreCpeDeviceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCpeDeviceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>[]

---


### DataOciCoreCpeDeviceShapesFilterOutputReference <a name="DataOciCoreCpeDeviceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCpeDeviceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCpeDeviceShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCpeDeviceShapes.DataOciCoreCpeDeviceShapesFilter">DataOciCoreCpeDeviceShapesFilter</a>

---



