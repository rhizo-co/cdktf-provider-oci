# `dataOciCoreComputeCapacityReservationInstances` Submodule <a name="`dataOciCoreComputeCapacityReservationInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityReservationInstances <a name="DataOciCoreComputeCapacityReservationInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances oci_core_compute_capacity_reservation_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances(scope: Construct, id: string, config: DataOciCoreComputeCapacityReservationInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig">DataOciCoreComputeCapacityReservationInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig">DataOciCoreComputeCapacityReservationInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeCapacityReservationInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isConstruct"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeCapacityReservationInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeCapacityReservationInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityReservationInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationInstances">capacityReservationInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList">DataOciCoreComputeCapacityReservationInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `capacityReservationInstances`<sup>Required</sup> <a name="capacityReservationInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationInstances"></a>

```typescript
public readonly capacityReservationInstances: DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeCapacityReservationInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList">DataOciCoreComputeCapacityReservationInstancesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeCapacityReservationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances: dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances = { ... }
```


### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig: dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig = { ... }
```


### DataOciCoreComputeCapacityReservationInstancesConfig <a name="DataOciCoreComputeCapacityReservationInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstancesConfig: dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#capacity_reservation_id DataOciCoreComputeCapacityReservationInstances#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#availability_domain DataOciCoreComputeCapacityReservationInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#compartment_id DataOciCoreComputeCapacityReservationInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#id DataOciCoreComputeCapacityReservationInstances#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#capacity_reservation_id DataOciCoreComputeCapacityReservationInstances#capacity_reservation_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#availability_domain DataOciCoreComputeCapacityReservationInstances#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#compartment_id DataOciCoreComputeCapacityReservationInstances#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeCapacityReservationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#filter DataOciCoreComputeCapacityReservationInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#id DataOciCoreComputeCapacityReservationInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityReservationInstancesFilter <a name="DataOciCoreComputeCapacityReservationInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationInstancesFilter: dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#name DataOciCoreComputeCapacityReservationInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#values DataOciCoreComputeCapacityReservationInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#regex DataOciCoreComputeCapacityReservationInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#name DataOciCoreComputeCapacityReservationInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#values DataOciCoreComputeCapacityReservationInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instances#regex DataOciCoreComputeCapacityReservationInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstances</a>

---


### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference <a name="DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig">DataOciCoreComputeCapacityReservationInstancesCapacityReservationInstancesShapeConfig</a>

---


### DataOciCoreComputeCapacityReservationInstancesFilterList <a name="DataOciCoreComputeCapacityReservationInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>[]

---


### DataOciCoreComputeCapacityReservationInstancesFilterOutputReference <a name="DataOciCoreComputeCapacityReservationInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservationInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstances.DataOciCoreComputeCapacityReservationInstancesFilter">DataOciCoreComputeCapacityReservationInstancesFilter</a>

---



