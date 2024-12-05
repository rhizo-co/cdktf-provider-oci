# `dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumns <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns oci_data_safe_sensitive_data_models_sensitive_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup">resetColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive">resetIsCaseInSensitive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey">resetParentColumnKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType">resetRelationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState">resetSensitiveColumnLifecycleState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo">resetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan">resetTimeUpdatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]

---

##### `resetColumnGroup` <a name="resetColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup"></a>

```typescript
public resetColumnGroup(): void
```

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCaseInSensitive` <a name="resetIsCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive"></a>

```typescript
public resetIsCaseInSensitive(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetParentColumnKey` <a name="resetParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey"></a>

```typescript
public resetParentColumnKey(): void
```

##### `resetRelationType` <a name="resetRelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType"></a>

```typescript
public resetRelationType(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSensitiveColumnLifecycleState` <a name="resetSensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState"></a>

```typescript
public resetSensitiveColumnLifecycleState(): void
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId"></a>

```typescript
public resetSensitiveTypeId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

##### `resetTimeUpdatedGreaterThanOrEqualTo` <a name="resetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeUpdatedGreaterThanOrEqualTo(): void
```

##### `resetTimeUpdatedLessThan` <a name="resetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan"></a>

```typescript
public resetTimeUpdatedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection">sensitiveColumnCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput">columnGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput">columnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput">dataTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput">isCaseInSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput">objectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput">objectTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput">parentColumnKeyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput">relationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput">sensitiveColumnLifecycleStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput">timeUpdatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput">timeUpdatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup">columnGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName">columnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType">dataType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive">isCaseInSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object">object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType">objectType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey">parentColumnKey</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType">relationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState">sensitiveColumnLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status">status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a>

---

##### `sensitiveColumnCollection`<sup>Required</sup> <a name="sensitiveColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection"></a>

```typescript
public readonly sensitiveColumnCollection: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a>

---

##### `columnGroupInput`<sup>Optional</sup> <a name="columnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput"></a>

```typescript
public readonly columnGroupInput: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string[];
```

- *Type:* string[]

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCaseInSensitiveInput`<sup>Optional</sup> <a name="isCaseInSensitiveInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput"></a>

```typescript
public readonly isCaseInSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput"></a>

```typescript
public readonly objectInput: string[];
```

- *Type:* string[]

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string[];
```

- *Type:* string[]

---

##### `parentColumnKeyInput`<sup>Optional</sup> <a name="parentColumnKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput"></a>

```typescript
public readonly parentColumnKeyInput: string[];
```

- *Type:* string[]

---

##### `relationTypeInput`<sup>Optional</sup> <a name="relationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput"></a>

```typescript
public readonly relationTypeInput: string[];
```

- *Type:* string[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `sensitiveColumnLifecycleStateInput`<sup>Optional</sup> <a name="sensitiveColumnLifecycleStateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput"></a>

```typescript
public readonly sensitiveColumnLifecycleStateInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput"></a>

```typescript
public readonly sensitiveTypeIdInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `timeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeUpdatedLessThanInput`<sup>Optional</sup> <a name="timeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput"></a>

```typescript
public readonly timeUpdatedLessThanInput: string;
```

- *Type:* string

---

##### `columnGroup`<sup>Required</sup> <a name="columnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup"></a>

```typescript
public readonly columnGroup: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType"></a>

```typescript
public readonly dataType: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCaseInSensitive`<sup>Required</sup> <a name="isCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive"></a>

```typescript
public readonly isCaseInSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

---

##### `parentColumnKey`<sup>Required</sup> <a name="parentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey"></a>

```typescript
public readonly parentColumnKey: string[];
```

- *Type:* string[]

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType"></a>

```typescript
public readonly relationType: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

##### `sensitiveColumnLifecycleState`<sup>Required</sup> <a name="sensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState"></a>

```typescript
public readonly sensitiveColumnLifecycleState: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeUpdatedLessThan`<sup>Required</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan"></a>

```typescript
public readonly timeUpdatedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig: dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup">columnGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName">columnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType">dataType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive">isCaseInSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object">object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType">objectType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey">parentColumnKey</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType">relationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState">sensitiveColumnLifecycleState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status">status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}.

---

##### `columnGroup`<sup>Optional</sup> <a name="columnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup"></a>

```typescript
public readonly columnGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType"></a>

```typescript
public readonly dataType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCaseInSensitive`<sup>Optional</sup> <a name="isCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive"></a>

```typescript
public readonly isCaseInSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType"></a>

```typescript
public readonly objectType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}.

---

##### `parentColumnKey`<sup>Optional</sup> <a name="parentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey"></a>

```typescript
public readonly parentColumnKey: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}.

---

##### `relationType`<sup>Optional</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType"></a>

```typescript
public readonly relationType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}.

---

##### `sensitiveColumnLifecycleState`<sup>Optional</sup> <a name="sensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState"></a>

```typescript
public readonly sensitiveColumnLifecycleState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}.

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeUpdatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan"></a>

```typescript
public readonly timeUpdatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter: dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection: dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection = { ... }
```


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems: dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>[]

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter</a>

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups">columnGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys">parentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType">relationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues">sampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `columnGroups`<sup>Required</sup> <a name="columnGroups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups"></a>

```typescript
public readonly columnGroups: string[];
```

- *Type:* string[]

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```typescript
public readonly estimatedDataValueCount: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys"></a>

```typescript
public readonly parentColumnKeys: string[];
```

- *Type:* string[]

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues"></a>

```typescript
public readonly sampleDataValues: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSensitiveDataModelsSensitiveColumns } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a>

---



