# `dataOciCoreCrossConnectPortSpeedShapes` Submodule <a name="`dataOciCoreCrossConnectPortSpeedShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreCrossConnectPortSpeedShapes <a name="DataOciCoreCrossConnectPortSpeedShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes oci_core_cross_connect_port_speed_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes(scope: Construct, id: string, config: DataOciCoreCrossConnectPortSpeedShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig">DataOciCoreCrossConnectPortSpeedShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig">DataOciCoreCrossConnectPortSpeedShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreCrossConnectPortSpeedShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreCrossConnectPortSpeedShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreCrossConnectPortSpeedShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreCrossConnectPortSpeedShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreCrossConnectPortSpeedShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreCrossConnectPortSpeedShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.crossConnectPortSpeedShapes">crossConnectPortSpeedShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList">DataOciCoreCrossConnectPortSpeedShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `crossConnectPortSpeedShapes`<sup>Required</sup> <a name="crossConnectPortSpeedShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.crossConnectPortSpeedShapes"></a>

```typescript
public readonly crossConnectPortSpeedShapes: DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreCrossConnectPortSpeedShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList">DataOciCoreCrossConnectPortSpeedShapesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreCrossConnectPortSpeedShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreCrossConnectPortSpeedShapesConfig <a name="DataOciCoreCrossConnectPortSpeedShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectPortSpeedShapesConfig: dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#compartment_id DataOciCoreCrossConnectPortSpeedShapes#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreCrossConnectPortSpeedShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#filter DataOciCoreCrossConnectPortSpeedShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#id DataOciCoreCrossConnectPortSpeedShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes: dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes = { ... }
```


### DataOciCoreCrossConnectPortSpeedShapesFilter <a name="DataOciCoreCrossConnectPortSpeedShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreCrossConnectPortSpeedShapesFilter: dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#name DataOciCoreCrossConnectPortSpeedShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#values DataOciCoreCrossConnectPortSpeedShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#regex DataOciCoreCrossConnectPortSpeedShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#name DataOciCoreCrossConnectPortSpeedShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#values DataOciCoreCrossConnectPortSpeedShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cross_connect_port_speed_shapes#regex DataOciCoreCrossConnectPortSpeedShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference <a name="DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.portSpeedInGbps">portSpeedInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portSpeedInGbps`<sup>Required</sup> <a name="portSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.portSpeedInGbps"></a>

```typescript
public readonly portSpeedInGbps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes">DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes</a>

---


### DataOciCoreCrossConnectPortSpeedShapesFilterList <a name="DataOciCoreCrossConnectPortSpeedShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCrossConnectPortSpeedShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>[]

---


### DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference <a name="DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreCrossConnectPortSpeedShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreCrossConnectPortSpeedShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreCrossConnectPortSpeedShapes.DataOciCoreCrossConnectPortSpeedShapesFilter">DataOciCoreCrossConnectPortSpeedShapesFilter</a>

---



