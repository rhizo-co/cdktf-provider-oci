# `dataOciCoreVirtualCircuitBandwidthShapes` Submodule <a name="`dataOciCoreVirtualCircuitBandwidthShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitBandwidthShapes <a name="DataOciCoreVirtualCircuitBandwidthShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes oci_core_virtual_circuit_bandwidth_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes(scope: Construct, id: string, config: DataOciCoreVirtualCircuitBandwidthShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig">DataOciCoreVirtualCircuitBandwidthShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig">DataOciCoreVirtualCircuitBandwidthShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreVirtualCircuitBandwidthShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitBandwidthShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitBandwidthShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreVirtualCircuitBandwidthShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreVirtualCircuitBandwidthShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitBandwidthShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList">DataOciCoreVirtualCircuitBandwidthShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.virtualCircuitBandwidthShapes">virtualCircuitBandwidthShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceIdInput">providerServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreVirtualCircuitBandwidthShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList">DataOciCoreVirtualCircuitBandwidthShapesFilterList</a>

---

##### `virtualCircuitBandwidthShapes`<sup>Required</sup> <a name="virtualCircuitBandwidthShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.virtualCircuitBandwidthShapes"></a>

```typescript
public readonly virtualCircuitBandwidthShapes: DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreVirtualCircuitBandwidthShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerServiceIdInput`<sup>Optional</sup> <a name="providerServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceIdInput"></a>

```typescript
public readonly providerServiceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitBandwidthShapesConfig <a name="DataOciCoreVirtualCircuitBandwidthShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitBandwidthShapesConfig: dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#provider_service_id DataOciCoreVirtualCircuitBandwidthShapes#provider_service_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreVirtualCircuitBandwidthShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#filter DataOciCoreVirtualCircuitBandwidthShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#id DataOciCoreVirtualCircuitBandwidthShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitBandwidthShapesFilter <a name="DataOciCoreVirtualCircuitBandwidthShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitBandwidthShapesFilter: dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#name DataOciCoreVirtualCircuitBandwidthShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#values DataOciCoreVirtualCircuitBandwidthShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#regex DataOciCoreVirtualCircuitBandwidthShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#name DataOciCoreVirtualCircuitBandwidthShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#values DataOciCoreVirtualCircuitBandwidthShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_bandwidth_shapes#regex DataOciCoreVirtualCircuitBandwidthShapes#regex}.

---

### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes: dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitBandwidthShapesFilterList <a name="DataOciCoreVirtualCircuitBandwidthShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitBandwidthShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>[]

---


### DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference <a name="DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreVirtualCircuitBandwidthShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesFilter">DataOciCoreVirtualCircuitBandwidthShapesFilter</a>

---


### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference <a name="DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreVirtualCircuitBandwidthShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.bandwidthInMbps">bandwidthInMbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthInMbps`<sup>Required</sup> <a name="bandwidthInMbps" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.bandwidthInMbps"></a>

```typescript
public readonly bandwidthInMbps: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitBandwidthShapes.DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes">DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes</a>

---



