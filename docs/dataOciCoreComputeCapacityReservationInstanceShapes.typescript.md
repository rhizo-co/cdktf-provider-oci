# `dataOciCoreComputeCapacityReservationInstanceShapes` Submodule <a name="`dataOciCoreComputeCapacityReservationInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityReservationInstanceShapes <a name="DataOciCoreComputeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes oci_core_compute_capacity_reservation_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes(scope: Construct, id: string, config: DataOciCoreComputeCapacityReservationInstanceShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig">DataOciCoreComputeCapacityReservationInstanceShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig">DataOciCoreComputeCapacityReservationInstanceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeCapacityReservationInstanceShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeCapacityReservationInstanceShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeCapacityReservationInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityReservationInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.computeCapacityReservationInstanceShapes">computeCapacityReservationInstanceShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList">DataOciCoreComputeCapacityReservationInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computeCapacityReservationInstanceShapes`<sup>Required</sup> <a name="computeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.computeCapacityReservationInstanceShapes"></a>

```typescript
public readonly computeCapacityReservationInstanceShapes: DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeCapacityReservationInstanceShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList">DataOciCoreComputeCapacityReservationInstanceShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeCapacityReservationInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes: dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes = { ... }
```


### DataOciCoreComputeCapacityReservationInstanceShapesConfig <a name="DataOciCoreComputeCapacityReservationInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstanceShapesConfig: dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#compartment_id DataOciCoreComputeCapacityReservationInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#availability_domain DataOciCoreComputeCapacityReservationInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#display_name DataOciCoreComputeCapacityReservationInstanceShapes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#id DataOciCoreComputeCapacityReservationInstanceShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#compartment_id DataOciCoreComputeCapacityReservationInstanceShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#availability_domain DataOciCoreComputeCapacityReservationInstanceShapes#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#display_name DataOciCoreComputeCapacityReservationInstanceShapes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeCapacityReservationInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#filter DataOciCoreComputeCapacityReservationInstanceShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#id DataOciCoreComputeCapacityReservationInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityReservationInstanceShapesFilter <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstanceShapesFilter: dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#name DataOciCoreComputeCapacityReservationInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#values DataOciCoreComputeCapacityReservationInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#regex DataOciCoreComputeCapacityReservationInstanceShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#name DataOciCoreComputeCapacityReservationInstanceShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#values DataOciCoreComputeCapacityReservationInstanceShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#regex DataOciCoreComputeCapacityReservationInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.instanceShape">instanceShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.instanceShape"></a>

```typescript
public readonly instanceShape: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes</a>

---


### DataOciCoreComputeCapacityReservationInstanceShapesFilterList <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationInstanceShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>[]

---


### DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstanceShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationInstanceShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter">DataOciCoreComputeCapacityReservationInstanceShapesFilter</a>

---



