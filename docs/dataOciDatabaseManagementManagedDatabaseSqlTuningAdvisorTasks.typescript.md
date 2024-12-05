# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks oci_database_management_managed_database_sql_tuning_advisor_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection">sqlTuningAdvisorTaskCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList</a>

---

##### `sqlTuningAdvisorTaskCollection`<sup>Required</sup> <a name="sqlTuningAdvisorTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.sqlTuningAdvisorTaskCollection"></a>

```typescript
public readonly sqlTuningAdvisorTaskCollection: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig: dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#opc_named_credential_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#status DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#status}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#time_less_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter: dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection: dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems: dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire">daysToExpire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId">instanceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount">recommendationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">sqlTuningAdvisorTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus">taskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded">timeExecutionEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted">timeExecutionStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements">totalSqlStatements</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysToExpire`<sup>Required</sup> <a name="daysToExpire" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.daysToExpire"></a>

```typescript
public readonly daysToExpire: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `recommendationCount`<sup>Required</sup> <a name="recommendationCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.recommendationCount"></a>

```typescript
public readonly recommendationCount: number;
```

- *Type:* number

---

##### `sqlTuningAdvisorTaskId`<sup>Required</sup> <a name="sqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```typescript
public readonly sqlTuningAdvisorTaskId: string;
```

- *Type:* string

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.taskStatus"></a>

```typescript
public readonly taskStatus: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExecutionEnded`<sup>Required</sup> <a name="timeExecutionEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionEnded"></a>

```typescript
public readonly timeExecutionEnded: string;
```

- *Type:* string

---

##### `timeExecutionStarted`<sup>Required</sup> <a name="timeExecutionStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.timeExecutionStarted"></a>

```typescript
public readonly timeExecutionStarted: string;
```

- *Type:* string

---

##### `totalSqlStatements`<sup>Required</sup> <a name="totalSqlStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.totalSqlStatements"></a>

```typescript
public readonly totalSqlStatements: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasks.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksSqlTuningAdvisorTaskCollection</a>

---



