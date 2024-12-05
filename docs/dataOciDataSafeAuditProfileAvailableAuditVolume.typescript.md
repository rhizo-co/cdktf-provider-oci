# `dataOciDataSafeAuditProfileAvailableAuditVolume` Submodule <a name="`dataOciDataSafeAuditProfileAvailableAuditVolume` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolume <a name="DataOciDataSafeAuditProfileAvailableAuditVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume oci_data_safe_audit_profile_available_audit_volume}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume(scope: Construct, id: string, config: DataOciDataSafeAuditProfileAvailableAuditVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig">DataOciDataSafeAuditProfileAvailableAuditVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig">DataOciDataSafeAuditProfileAvailableAuditVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationGreaterThan">resetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationLessThan">resetMonthInConsiderationLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetTrailLocation">resetTrailLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonthInConsiderationGreaterThan` <a name="resetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationGreaterThan"></a>

```typescript
public resetMonthInConsiderationGreaterThan(): void
```

##### `resetMonthInConsiderationLessThan` <a name="resetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationLessThan"></a>

```typescript
public resetMonthInConsiderationLessThan(): void
```

##### `resetTrailLocation` <a name="resetTrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetTrailLocation"></a>

```typescript
public resetTrailLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThanInput">monthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThanInput">monthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocationInput">trailLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestIdInput">workRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocation">trailLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileIdInput"></a>

```typescript
public readonly auditProfileIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="monthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThanInput"></a>

```typescript
public readonly monthInConsiderationGreaterThanInput: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThanInput`<sup>Optional</sup> <a name="monthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThanInput"></a>

```typescript
public readonly monthInConsiderationLessThanInput: string;
```

- *Type:* string

---

##### `trailLocationInput`<sup>Optional</sup> <a name="trailLocationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocationInput"></a>

```typescript
public readonly trailLocationInput: string;
```

- *Type:* string

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestIdInput"></a>

```typescript
public readonly workRequestIdInput: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThan`<sup>Required</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThan`<sup>Required</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumeConfig <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumeConfig: dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.workRequestId">workRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.trailLocation">trailLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}.

---

##### `trailLocation`<sup>Optional</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}.

---

### DataOciDataSafeAuditProfileAvailableAuditVolumeItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileAvailableAuditVolumeItems: dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileAvailableAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.trailLocation">trailLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.volume">volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems">DataOciDataSafeAuditProfileAvailableAuditVolumeItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.monthInConsideration"></a>

```typescript
public readonly monthInConsideration: string;
```

- *Type:* string

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileAvailableAuditVolumeItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems">DataOciDataSafeAuditProfileAvailableAuditVolumeItems</a>

---



