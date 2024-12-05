# `dataOciCoreDedicatedVmHostInstanceShapes` Submodule <a name="`dataOciCoreDedicatedVmHostInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes oci_core_dedicated_vm_host_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostInstanceShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig">DataOciCoreDedicatedVmHostInstanceShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig">DataOciCoreDedicatedVmHostInstanceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape">resetDedicatedVmHostShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreDedicatedVmHostInstanceShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDedicatedVmHostShape` <a name="resetDedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetDedicatedVmHostShape"></a>

```typescript
public resetDedicatedVmHostShape(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreDedicatedVmHostInstanceShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreDedicatedVmHostInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreDedicatedVmHostInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes">dedicatedVmHostInstanceShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput">dedicatedVmHostShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape">dedicatedVmHostShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dedicatedVmHostInstanceShapes`<sup>Required</sup> <a name="dedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostInstanceShapes"></a>

```typescript
public readonly dedicatedVmHostInstanceShapes: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreDedicatedVmHostInstanceShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList">DataOciCoreDedicatedVmHostInstanceShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dedicatedVmHostShapeInput`<sup>Optional</sup> <a name="dedicatedVmHostShapeInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShapeInput"></a>

```typescript
public readonly dedicatedVmHostShapeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreDedicatedVmHostInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dedicatedVmHostShape`<sup>Required</sup> <a name="dedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.dedicatedVmHostShape"></a>

```typescript
public readonly dedicatedVmHostShape: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreDedicatedVmHostInstanceShapesConfig <a name="DataOciCoreDedicatedVmHostInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostInstanceShapesConfig: dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape">dedicatedVmHostShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}.

---

##### `dedicatedVmHostShape`<sup>Optional</sup> <a name="dedicatedVmHostShape" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.dedicatedVmHostShape"></a>

```typescript
public readonly dedicatedVmHostShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreDedicatedVmHostInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#filter DataOciCoreDedicatedVmHostInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes: dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes = { ... }
```


### DataOciCoreDedicatedVmHostInstanceShapesFilter <a name="DataOciCoreDedicatedVmHostInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreDedicatedVmHostInstanceShapesFilter: dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName">instanceShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `instanceShapeName`<sup>Required</sup> <a name="instanceShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.instanceShapeName"></a>

```typescript
public readonly instanceShapeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes">DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes</a>

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterList <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDedicatedVmHostInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>[]

---


### DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference <a name="DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreDedicatedVmHostInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreDedicatedVmHostInstanceShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreDedicatedVmHostInstanceShapes.DataOciCoreDedicatedVmHostInstanceShapesFilter">DataOciCoreDedicatedVmHostInstanceShapesFilter</a>

---



