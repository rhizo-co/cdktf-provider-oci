# `dataOciDataSafeAuditProfileCollectedAuditVolume` Submodule <a name="`dataOciDataSafeAuditProfileCollectedAuditVolume` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolume <a name="DataOciDataSafeAuditProfileCollectedAuditVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume oci_data_safe_audit_profile_collected_audit_volume}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume(scope: Construct, id: string, config: DataOciDataSafeAuditProfileCollectedAuditVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig">DataOciDataSafeAuditProfileCollectedAuditVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig">DataOciDataSafeAuditProfileCollectedAuditVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationGreaterThan">resetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationLessThan">resetMonthInConsiderationLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonthInConsiderationGreaterThan` <a name="resetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationGreaterThan"></a>

```typescript
public resetMonthInConsiderationGreaterThan(): void
```

##### `resetMonthInConsiderationLessThan` <a name="resetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.resetMonthInConsiderationLessThan"></a>

```typescript
public resetMonthInConsiderationLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileCollectedAuditVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileCollectedAuditVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileCollectedAuditVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThanInput">monthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThanInput">monthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestIdInput">workRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileIdInput"></a>

```typescript
public readonly auditProfileIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="monthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThanInput"></a>

```typescript
public readonly monthInConsiderationGreaterThanInput: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThanInput`<sup>Optional</sup> <a name="monthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThanInput"></a>

```typescript
public readonly monthInConsiderationLessThanInput: string;
```

- *Type:* string

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestIdInput"></a>

```typescript
public readonly workRequestIdInput: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThan`<sup>Required</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThan`<sup>Required</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumeConfig <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumeConfig: dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolume#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.workRequestId">workRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolume#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#id DataOciDataSafeAuditProfileCollectedAuditVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolume#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolume#work_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#id DataOciDataSafeAuditProfileCollectedAuditVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeConfig.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolume#month_in_consideration_less_than}.

---

### DataOciDataSafeAuditProfileCollectedAuditVolumeItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumeItems: dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolume } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.archivedVolume">archivedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.onlineVolume">onlineVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems">DataOciDataSafeAuditProfileCollectedAuditVolumeItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archivedVolume`<sup>Required</sup> <a name="archivedVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.archivedVolume"></a>

```typescript
public readonly archivedVolume: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.monthInConsideration"></a>

```typescript
public readonly monthInConsideration: string;
```

- *Type:* string

---

##### `onlineVolume`<sup>Required</sup> <a name="onlineVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.onlineVolume"></a>

```typescript
public readonly onlineVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileCollectedAuditVolumeItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolume.DataOciDataSafeAuditProfileCollectedAuditVolumeItems">DataOciDataSafeAuditProfileCollectedAuditVolumeItems</a>

---



