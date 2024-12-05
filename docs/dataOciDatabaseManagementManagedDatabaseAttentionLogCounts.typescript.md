# `dataOciDatabaseManagementManagedDatabaseAttentionLogCounts` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAttentionLogCounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCounts <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts oci_database_management_managed_database_attention_log_counts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetIsRegularExpression">resetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetLogSearchText">resetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTypeFilter">resetTypeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetUrgencyFilter">resetUrgencyFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRegularExpression` <a name="resetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetIsRegularExpression"></a>

```typescript
public resetIsRegularExpression(): void
```

##### `resetLogSearchText` <a name="resetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetLogSearchText"></a>

```typescript
public resetLogSearchText(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

##### `resetTypeFilter` <a name="resetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetTypeFilter"></a>

```typescript
public resetTypeFilter(): void
```

##### `resetUrgencyFilter` <a name="resetUrgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.resetUrgencyFilter"></a>

```typescript
public resetUrgencyFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAttentionLogCounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAttentionLogCounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAttentionLogCounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.attentionLogCountsCollection">attentionLogCountsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.isRegularExpressionInput">isRegularExpressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.logSearchTextInput">logSearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.typeFilterInput">typeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.urgencyFilterInput">urgencyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.logSearchText">logSearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.typeFilter">typeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.urgencyFilter">urgencyFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attentionLogCountsCollection`<sup>Required</sup> <a name="attentionLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.attentionLogCountsCollection"></a>

```typescript
public readonly attentionLogCountsCollection: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRegularExpressionInput`<sup>Optional</sup> <a name="isRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.isRegularExpressionInput"></a>

```typescript
public readonly isRegularExpressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSearchTextInput`<sup>Optional</sup> <a name="logSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.logSearchTextInput"></a>

```typescript
public readonly logSearchTextInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `typeFilterInput`<sup>Optional</sup> <a name="typeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.typeFilterInput"></a>

```typescript
public readonly typeFilterInput: string;
```

- *Type:* string

---

##### `urgencyFilterInput`<sup>Optional</sup> <a name="urgencyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.urgencyFilterInput"></a>

```typescript
public readonly urgencyFilterInput: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegularExpression`<sup>Required</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSearchText`<sup>Required</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `typeFilter`<sup>Required</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

---

##### `urgencyFilter`<sup>Required</sup> <a name="urgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.urgencyFilter"></a>

```typescript
public readonly urgencyFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection: dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems: dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig: dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.logSearchText">logSearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.typeFilter">typeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.urgencyFilter">urgencyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#urgency_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#id DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegularExpression`<sup>Optional</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#is_regular_expression}.

---

##### `logSearchText`<sup>Optional</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#log_search_text}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#time_less_than_or_equal_to}.

---

##### `typeFilter`<sup>Optional</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#type_filter}.

---

##### `urgencyFilter`<sup>Optional</sup> <a name="urgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsConfig.property.urgencyFilter"></a>

```typescript
public readonly urgencyFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#urgency_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter: dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#name DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#values DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#regex DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#name DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#values DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_counts#regex DataOciDatabaseManagementManagedDatabaseAttentionLogCounts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsAttentionLogCountsCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCounts.DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAttentionLogCountsFilter</a>

---



