# `dataOciCoreComputeCapacityReservations` Submodule <a name="`dataOciCoreComputeCapacityReservations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityReservations <a name="DataOciCoreComputeCapacityReservations" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations oci_core_compute_capacity_reservations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations(scope: Construct, id: string, config: DataOciCoreComputeCapacityReservationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig">DataOciCoreComputeCapacityReservationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig">DataOciCoreComputeCapacityReservationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCoreComputeCapacityReservationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityReservations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isConstruct"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformElement"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformDataSource"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityReservations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeCapacityReservations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeCapacityReservations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityReservations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.computeCapacityReservations">computeCapacityReservations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList">DataOciCoreComputeCapacityReservationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `computeCapacityReservations`<sup>Required</sup> <a name="computeCapacityReservations" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.computeCapacityReservations"></a>

```typescript
public readonly computeCapacityReservations: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.filter"></a>

```typescript
public readonly filter: DataOciCoreComputeCapacityReservationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList">DataOciCoreComputeCapacityReservationsFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCoreComputeCapacityReservationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityReservationsComputeCapacityReservations <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservations" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservations.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsComputeCapacityReservations: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservations = { ... }
```


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs = { ... }
```


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig = { ... }
```


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig = { ... }
```


### DataOciCoreComputeCapacityReservationsConfig <a name="DataOciCoreComputeCapacityReservationsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsConfig: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#compartment_id DataOciCoreComputeCapacityReservations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#availability_domain DataOciCoreComputeCapacityReservations#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#display_name DataOciCoreComputeCapacityReservations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#id DataOciCoreComputeCapacityReservations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#state DataOciCoreComputeCapacityReservations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#compartment_id DataOciCoreComputeCapacityReservations#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#availability_domain DataOciCoreComputeCapacityReservations#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#display_name DataOciCoreComputeCapacityReservations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCoreComputeCapacityReservationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#filter DataOciCoreComputeCapacityReservations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#id DataOciCoreComputeCapacityReservations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#state DataOciCoreComputeCapacityReservations#state}.

---

### DataOciCoreComputeCapacityReservationsFilter <a name="DataOciCoreComputeCapacityReservationsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

const dataOciCoreComputeCapacityReservationsFilter: dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#name DataOciCoreComputeCapacityReservations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#values DataOciCoreComputeCapacityReservations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#regex DataOciCoreComputeCapacityReservations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#name DataOciCoreComputeCapacityReservations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#values DataOciCoreComputeCapacityReservations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservations#regex DataOciCoreComputeCapacityReservations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId">hpcIslandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds">networkBlockIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hpcIslandId`<sup>Required</sup> <a name="hpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId"></a>

```typescript
public readonly hpcIslandId: string;
```

- *Type:* string

---

##### `networkBlockIds`<sup>Required</sup> <a name="networkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds"></a>

```typescript
public readonly networkBlockIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfig</a>

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfig</a>

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.clusterConfig">clusterConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.instanceShape">instanceShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.instanceShapeConfig">instanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.reservedCount">reservedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.usedCount">usedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsClusterConfigList</a>

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `instanceShape`<sup>Required</sup> <a name="instanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.instanceShape"></a>

```typescript
public readonly instanceShape: string;
```

- *Type:* string

---

##### `instanceShapeConfig`<sup>Required</sup> <a name="instanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.instanceShapeConfig"></a>

```typescript
public readonly instanceShapeConfig: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsInstanceShapeConfigList</a>

---

##### `reservedCount`<sup>Required</sup> <a name="reservedCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.reservedCount"></a>

```typescript
public readonly reservedCount: string;
```

- *Type:* string

---

##### `usedCount`<sup>Required</sup> <a name="usedCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.usedCount"></a>

```typescript
public readonly usedCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigs</a>

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference <a name="DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.instanceReservationConfigs">instanceReservationConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.isDefaultReservation">isDefaultReservation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.reservedInstanceCount">reservedInstanceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.usedInstanceCount">usedInstanceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservations">DataOciCoreComputeCapacityReservationsComputeCapacityReservations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceReservationConfigs`<sup>Required</sup> <a name="instanceReservationConfigs" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.instanceReservationConfigs"></a>

```typescript
public readonly instanceReservationConfigs: DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList">DataOciCoreComputeCapacityReservationsComputeCapacityReservationsInstanceReservationConfigsList</a>

---

##### `isDefaultReservation`<sup>Required</sup> <a name="isDefaultReservation" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.isDefaultReservation"></a>

```typescript
public readonly isDefaultReservation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `reservedInstanceCount`<sup>Required</sup> <a name="reservedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.reservedInstanceCount"></a>

```typescript
public readonly reservedInstanceCount: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `usedInstanceCount`<sup>Required</sup> <a name="usedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.usedInstanceCount"></a>

```typescript
public readonly usedInstanceCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCoreComputeCapacityReservationsComputeCapacityReservations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsComputeCapacityReservations">DataOciCoreComputeCapacityReservationsComputeCapacityReservations</a>

---


### DataOciCoreComputeCapacityReservationsFilterList <a name="DataOciCoreComputeCapacityReservationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.get"></a>

```typescript
public get(index: number): DataOciCoreComputeCapacityReservationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>[]

---


### DataOciCoreComputeCapacityReservationsFilterOutputReference <a name="DataOciCoreComputeCapacityReservationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCoreComputeCapacityReservations } from 'rhizo-co-terraform-provider-oci'

new dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCoreComputeCapacityReservationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservations.DataOciCoreComputeCapacityReservationsFilter">DataOciCoreComputeCapacityReservationsFilter</a>

---



