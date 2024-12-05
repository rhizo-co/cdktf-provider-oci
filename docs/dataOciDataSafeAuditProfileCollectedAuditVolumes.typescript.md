# `dataOciDataSafeAuditProfileCollectedAuditVolumes` Submodule <a name="`dataOciDataSafeAuditProfileCollectedAuditVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumes <a name="DataOciDataSafeAuditProfileCollectedAuditVolumes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes oci_data_safe_audit_profile_collected_audit_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes(scope: Construct, id: string, config: DataOciDataSafeAuditProfileCollectedAuditVolumesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig">DataOciDataSafeAuditProfileCollectedAuditVolumesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig">DataOciDataSafeAuditProfileCollectedAuditVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationGreaterThan">resetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationLessThan">resetMonthInConsiderationLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeAuditProfileCollectedAuditVolumesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonthInConsiderationGreaterThan` <a name="resetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationGreaterThan"></a>

```typescript
public resetMonthInConsiderationGreaterThan(): void
```

##### `resetMonthInConsiderationLessThan` <a name="resetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.resetMonthInConsiderationLessThan"></a>

```typescript
public resetMonthInConsiderationLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileCollectedAuditVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeAuditProfileCollectedAuditVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeAuditProfileCollectedAuditVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileCollectedAuditVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.collectedAuditVolumeCollection">collectedAuditVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList">DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThanInput">monthInConsiderationGreaterThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThanInput">monthInConsiderationLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestIdInput">workRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `collectedAuditVolumeCollection`<sup>Required</sup> <a name="collectedAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.collectedAuditVolumeCollection"></a>

```typescript
public readonly collectedAuditVolumeCollection: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList">DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileIdInput"></a>

```typescript
public readonly auditProfileIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeAuditProfileCollectedAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="monthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThanInput"></a>

```typescript
public readonly monthInConsiderationGreaterThanInput: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThanInput`<sup>Optional</sup> <a name="monthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThanInput"></a>

```typescript
public readonly monthInConsiderationLessThanInput: string;
```

- *Type:* string

---

##### `workRequestIdInput`<sup>Optional</sup> <a name="workRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestIdInput"></a>

```typescript
public readonly workRequestIdInput: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monthInConsiderationGreaterThan`<sup>Required</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

---

##### `monthInConsiderationLessThan`<sup>Required</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection: dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection = { ... }
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems: dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems = { ... }
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems: dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems = { ... }
```


### DataOciDataSafeAuditProfileCollectedAuditVolumesConfig <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumesConfig: dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.workRequestId">workRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#id DataOciDataSafeAuditProfileCollectedAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationGreaterThan">monthInConsiderationGreaterThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationLessThan">monthInConsiderationLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileCollectedAuditVolumes#audit_profile_id}.

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#work_request_id DataOciDataSafeAuditProfileCollectedAuditVolumes#work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeAuditProfileCollectedAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#filter DataOciDataSafeAuditProfileCollectedAuditVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#id DataOciDataSafeAuditProfileCollectedAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monthInConsiderationGreaterThan`<sup>Optional</sup> <a name="monthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationGreaterThan"></a>

```typescript
public readonly monthInConsiderationGreaterThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_greater_than}.

---

##### `monthInConsiderationLessThan`<sup>Optional</sup> <a name="monthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesConfig.property.monthInConsiderationLessThan"></a>

```typescript
public readonly monthInConsiderationLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileCollectedAuditVolumes#month_in_consideration_less_than}.

---

### DataOciDataSafeAuditProfileCollectedAuditVolumesFilter <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeAuditProfileCollectedAuditVolumesFilter: dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#name DataOciDataSafeAuditProfileCollectedAuditVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#values DataOciDataSafeAuditProfileCollectedAuditVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#regex DataOciDataSafeAuditProfileCollectedAuditVolumes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#name DataOciDataSafeAuditProfileCollectedAuditVolumes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#values DataOciDataSafeAuditProfileCollectedAuditVolumes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_collected_audit_volumes#regex DataOciDataSafeAuditProfileCollectedAuditVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.archivedVolume">archivedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.onlineVolume">onlineVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archivedVolume`<sup>Required</sup> <a name="archivedVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.archivedVolume"></a>

```typescript
public readonly archivedVolume: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration"></a>

```typescript
public readonly monthInConsideration: string;
```

- *Type:* string

---

##### `onlineVolume`<sup>Required</sup> <a name="onlineVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.onlineVolume"></a>

```typescript
public readonly onlineVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItems</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItems</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection">DataOciDataSafeAuditProfileCollectedAuditVolumesCollectedAuditVolumeCollection</a>

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditProfileCollectedAuditVolumesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>[]

---


### DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference <a name="DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeAuditProfileCollectedAuditVolumes } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeAuditProfileCollectedAuditVolumesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileCollectedAuditVolumes.DataOciDataSafeAuditProfileCollectedAuditVolumesFilter">DataOciDataSafeAuditProfileCollectedAuditVolumesFilter</a>

---



