# `dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCounts <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts oci_database_management_managed_database_alert_log_counts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig">DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression">resetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter">resetLevelFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText">resetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter">resetTypeFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRegularExpression` <a name="resetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression"></a>

```typescript
public resetIsRegularExpression(): void
```

##### `resetLevelFilter` <a name="resetLevelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter"></a>

```typescript
public resetLevelFilter(): void
```

##### `resetLogSearchText` <a name="resetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText"></a>

```typescript
public resetLogSearchText(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

##### `resetTypeFilter` <a name="resetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter"></a>

```typescript
public resetTypeFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection">alertLogCountsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput">isRegularExpressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput">levelFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput">logSearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput">typeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter">levelFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText">logSearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter">typeFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alertLogCountsCollection`<sup>Required</sup> <a name="alertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection"></a>

```typescript
public readonly alertLogCountsCollection: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRegularExpressionInput`<sup>Optional</sup> <a name="isRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput"></a>

```typescript
public readonly isRegularExpressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelFilterInput`<sup>Optional</sup> <a name="levelFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput"></a>

```typescript
public readonly levelFilterInput: string;
```

- *Type:* string

---

##### `logSearchTextInput`<sup>Optional</sup> <a name="logSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput"></a>

```typescript
public readonly logSearchTextInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `typeFilterInput`<sup>Optional</sup> <a name="typeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput"></a>

```typescript
public readonly typeFilterInput: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegularExpression`<sup>Required</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelFilter`<sup>Required</sup> <a name="levelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter"></a>

```typescript
public readonly levelFilter: string;
```

- *Type:* string

---

##### `logSearchText`<sup>Required</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `typeFilter`<sup>Required</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection: dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems: dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig: dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter">levelFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText">logSearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter">typeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegularExpression`<sup>Optional</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `levelFilter`<sup>Optional</sup> <a name="levelFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter"></a>

```typescript
public readonly levelFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `logSearchText`<sup>Optional</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `typeFilter`<sup>Optional</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter: dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAlertLogCounts } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>

---



