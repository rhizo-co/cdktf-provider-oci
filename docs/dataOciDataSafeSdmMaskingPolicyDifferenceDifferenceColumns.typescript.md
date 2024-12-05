# `dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns oci_data_safe_sdm_masking_policy_difference_difference_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns(scope: Construct, id: string, config: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetDifferenceType">resetDifferenceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetPlannedAction">resetPlannedAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSyncStatus">resetSyncStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetDifferenceType` <a name="resetDifferenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetDifferenceType"></a>

```typescript
public resetDifferenceType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetPlannedAction` <a name="resetPlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetPlannedAction"></a>

```typescript
public resetPlannedAction(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSyncStatus` <a name="resetSyncStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSyncStatus"></a>

```typescript
public resetSyncStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceColumnCollection">sdmMaskingPolicyDifferenceColumnCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnNameInput">columnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceTypeInput">differenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.objectInput">objectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedActionInput">plannedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceIdInput">sdmMaskingPolicyDifferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatusInput">syncStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnName">columnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceType">differenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.object">object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatus">syncStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList</a>

---

##### `sdmMaskingPolicyDifferenceColumnCollection`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceColumnCollection"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceColumnCollection: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string[];
```

- *Type:* string[]

---

##### `differenceTypeInput`<sup>Optional</sup> <a name="differenceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceTypeInput"></a>

```typescript
public readonly differenceTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.objectInput"></a>

```typescript
public readonly objectInput: string[];
```

- *Type:* string[]

---

##### `plannedActionInput`<sup>Optional</sup> <a name="plannedActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedActionInput"></a>

```typescript
public readonly plannedActionInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `sdmMaskingPolicyDifferenceIdInput`<sup>Optional</sup> <a name="sdmMaskingPolicyDifferenceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceIdInput"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceIdInput: string;
```

- *Type:* string

---

##### `syncStatusInput`<sup>Optional</sup> <a name="syncStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatusInput"></a>

```typescript
public readonly syncStatusInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

---

##### `syncStatus`<sup>Required</sup> <a name="syncStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatus"></a>

```typescript
public readonly syncStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig: dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.columnName">columnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.differenceType">differenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.object">object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.plannedAction">plannedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.syncStatus">syncStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}.

---

##### `differenceType`<sup>Optional</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#filter DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}.

---

##### `plannedAction`<sup>Optional</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}.

---

##### `syncStatus`<sup>Optional</sup> <a name="syncStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.syncStatus"></a>

```typescript
public readonly syncStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}.

---

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter: dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#values DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#regex DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#values DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#regex DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#regex}.

---

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection: dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection = { ... }
```


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems: dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>[]

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.differenceType">differenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.maskingColumnkey">maskingColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveColumnkey">sensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.syncStatus">syncStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maskingColumnkey`<sup>Required</sup> <a name="maskingColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.maskingColumnkey"></a>

```typescript
public readonly maskingColumnkey: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveColumnkey`<sup>Required</sup> <a name="sensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```typescript
public readonly sensitiveColumnkey: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `syncStatus`<sup>Required</sup> <a name="syncStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.syncStatus"></a>

```typescript
public readonly syncStatus: string;
```

- *Type:* string

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.timeLastSynced"></a>

```typescript
public readonly timeLastSynced: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection</a>

---



