# `dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule <a name="`dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumes <a name="DataOciDataSafeAuditProfileAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes oci_data_safe_audit_profile_available_audit_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes(scope: Construct, id: string, config: DataOciDataSafeAuditProfileAvailableAuditVolumesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig">DataOciDataSafeAuditProfileAvailableAuditVolumesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig">DataOciDataSafeAuditProfileAvailableAuditVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan">resetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan">resetMonthInConsiderationLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation">resetTrailLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonthInConsiderationGreaterThan` <a name="resetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan"></a>

```typescript
public resetMonthInConsiderationGreaterThan(): void
```

##### `resetMonthInConsiderationLessThan` <a name="resetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan"></a>

```typescript
public resetMonthInConsiderationLessThan(): void
```

##### `resetTrailLocation` <a name="resetTrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation"></a>

```typescript
public resetTrailLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection">availableAuditVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput">monthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput">monthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput">trailLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput">workRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation">trailLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableAuditVolumeCollection`<sup>Required</sup> <a name="availableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection"></a>

```typescript
public readonly availableAuditVolumeCollection: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput"></a>

```typescript
public readonly auditProfileIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="monthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput"></a>

```typescript
public readonly monthInConsiderationGreaterThanInput: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThanInput`<sup>Optional</sup> <a name="monthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput"></a>

```typescript
public readonly monthInConsiderationLessThanInput: string;
```

- *Type:* string

---

##### `trailLocationInput`<sup>Optional</sup> <a name="trailLocationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput"></a>

```typescript
public readonly trailLocationInput: string;
```

- *Type:* string

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput"></a>

```typescript
public readonly workRequestIdInput: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThan`<sup>Required</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThan`<sup>Required</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection: dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection = { ... }
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems: dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems = { ... }
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems: dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems = { ... }
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesConfig <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumesConfig: dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId">workRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation">trailLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#filter DataOciDataSafeAuditProfileAvailableAuditVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}.

---

##### `trailLocation`<sup>Optional</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}.

---

### DataOciDataSafeAuditProfileAvailableAuditVolumesFilter <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumesFilter: dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId">auditTrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName">databaseUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation">trailLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume">volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `auditTrailId`<sup>Required</sup> <a name="auditTrailId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId"></a>

```typescript
public readonly auditTrailId: string;
```

- *Type:* string

---

##### `databaseUniqueName`<sup>Required</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName"></a>

```typescript
public readonly databaseUniqueName: string;
```

- *Type:* string

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration"></a>

```typescript
public readonly monthInConsideration: string;
```

- *Type:* string

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditProfileAvailableAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>[]

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditProfileAvailableAuditVolumesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter">DataOciDataSafeAuditProfileAvailableAuditVolumesFilter</a>

---



