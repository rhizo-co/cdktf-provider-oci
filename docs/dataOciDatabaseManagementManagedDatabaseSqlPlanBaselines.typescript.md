# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted">resetIsAccepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive">resetIsAdaptive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged">resetIsAutoPurged</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed">resetIsFixed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted">resetIsNeverExecuted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced">resetIsReproduced</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName">resetPlanName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle">resetSqlHandle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText">resetSqlText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAccepted` <a name="resetIsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted"></a>

```typescript
public resetIsAccepted(): void
```

##### `resetIsAdaptive` <a name="resetIsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive"></a>

```typescript
public resetIsAdaptive(): void
```

##### `resetIsAutoPurged` <a name="resetIsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged"></a>

```typescript
public resetIsAutoPurged(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetIsFixed` <a name="resetIsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed"></a>

```typescript
public resetIsFixed(): void
```

##### `resetIsNeverExecuted` <a name="resetIsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted"></a>

```typescript
public resetIsNeverExecuted(): void
```

##### `resetIsReproduced` <a name="resetIsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced"></a>

```typescript
public resetIsReproduced(): void
```

##### `resetLimit` <a name="resetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

##### `resetOrigin` <a name="resetOrigin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetPlanName` <a name="resetPlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName"></a>

```typescript
public resetPlanName(): void
```

##### `resetSqlHandle` <a name="resetSqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle"></a>

```typescript
public resetSqlHandle(): void
```

##### `resetSqlText` <a name="resetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText"></a>

```typescript
public resetSqlText(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection">sqlPlanBaselineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput">isAcceptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput">isAdaptiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput">isAutoPurgedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput">isFixedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput">isNeverExecutedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput">isReproducedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput">limitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput">planNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput">sqlHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput">sqlTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted">isAccepted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive">isAdaptive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged">isAutoPurged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed">isFixed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted">isNeverExecuted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced">isReproduced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit">limit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName">planName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle">sqlHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText">sqlText</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a>

---

##### `sqlPlanBaselineCollection`<sup>Required</sup> <a name="sqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection"></a>

```typescript
public readonly sqlPlanBaselineCollection: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAcceptedInput`<sup>Optional</sup> <a name="isAcceptedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput"></a>

```typescript
public readonly isAcceptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAdaptiveInput`<sup>Optional</sup> <a name="isAdaptiveInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput"></a>

```typescript
public readonly isAdaptiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoPurgedInput`<sup>Optional</sup> <a name="isAutoPurgedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput"></a>

```typescript
public readonly isAutoPurgedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFixedInput`<sup>Optional</sup> <a name="isFixedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput"></a>

```typescript
public readonly isFixedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNeverExecutedInput`<sup>Optional</sup> <a name="isNeverExecutedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput"></a>

```typescript
public readonly isNeverExecutedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReproducedInput`<sup>Optional</sup> <a name="isReproducedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput"></a>

```typescript
public readonly isReproducedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput"></a>

```typescript
public readonly limitInput: number;
```

- *Type:* number

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `planNameInput`<sup>Optional</sup> <a name="planNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput"></a>

```typescript
public readonly planNameInput: string;
```

- *Type:* string

---

##### `sqlHandleInput`<sup>Optional</sup> <a name="sqlHandleInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput"></a>

```typescript
public readonly sqlHandleInput: string;
```

- *Type:* string

---

##### `sqlTextInput`<sup>Optional</sup> <a name="sqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput"></a>

```typescript
public readonly sqlTextInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAccepted`<sup>Required</sup> <a name="isAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted"></a>

```typescript
public readonly isAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAdaptive`<sup>Required</sup> <a name="isAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive"></a>

```typescript
public readonly isAdaptive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoPurged`<sup>Required</sup> <a name="isAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged"></a>

```typescript
public readonly isAutoPurged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFixed`<sup>Required</sup> <a name="isFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed"></a>

```typescript
public readonly isFixed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNeverExecuted`<sup>Required</sup> <a name="isNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted"></a>

```typescript
public readonly isNeverExecuted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReproduced`<sup>Required</sup> <a name="isReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced"></a>

```typescript
public readonly isReproduced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `planName`<sup>Required</sup> <a name="planName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

---

##### `sqlHandle`<sup>Required</sup> <a name="sqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle"></a>

```typescript
public readonly sqlHandle: string;
```

- *Type:* string

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText"></a>

```typescript
public readonly sqlText: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted">isAccepted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive">isAdaptive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged">isAutoPurged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed">isFixed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted">isNeverExecuted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced">isReproduced</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit">limit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName">planName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle">sqlHandle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText">sqlText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAccepted`<sup>Optional</sup> <a name="isAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted"></a>

```typescript
public readonly isAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}.

---

##### `isAdaptive`<sup>Optional</sup> <a name="isAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive"></a>

```typescript
public readonly isAdaptive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}.

---

##### `isAutoPurged`<sup>Optional</sup> <a name="isAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged"></a>

```typescript
public readonly isAutoPurged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}.

---

##### `isFixed`<sup>Optional</sup> <a name="isFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed"></a>

```typescript
public readonly isFixed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}.

---

##### `isNeverExecuted`<sup>Optional</sup> <a name="isNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted"></a>

```typescript
public readonly isNeverExecuted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}.

---

##### `isReproduced`<sup>Optional</sup> <a name="isReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced"></a>

```typescript
public readonly isReproduced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit"></a>

```typescript
public readonly limit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}.

---

##### `planName`<sup>Optional</sup> <a name="planName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}.

---

##### `sqlHandle`<sup>Optional</sup> <a name="sqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle"></a>

```typescript
public readonly sqlHandle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}.

---

##### `sqlText`<sup>Optional</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText"></a>

```typescript
public readonly sqlText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted">accepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive">adaptive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge">autoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled">enabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan">executionPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed">fixed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module">module</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName">planName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced">reproduced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle">sqlHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText">sqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted">timeLastExecuted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified">timeLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accepted`<sup>Required</sup> <a name="accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted"></a>

```typescript
public readonly accepted: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `adaptive`<sup>Required</sup> <a name="adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive"></a>

```typescript
public readonly adaptive: string;
```

- *Type:* string

---

##### `autoPurge`<sup>Required</sup> <a name="autoPurge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge"></a>

```typescript
public readonly autoPurge: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: string;
```

- *Type:* string

---

##### `executionPlan`<sup>Required</sup> <a name="executionPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan"></a>

```typescript
public readonly executionPlan: string;
```

- *Type:* string

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed"></a>

```typescript
public readonly fixed: string;
```

- *Type:* string

---

##### `module`<sup>Required</sup> <a name="module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `planName`<sup>Required</sup> <a name="planName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

---

##### `reproduced`<sup>Required</sup> <a name="reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced"></a>

```typescript
public readonly reproduced: string;
```

- *Type:* string

---

##### `sqlHandle`<sup>Required</sup> <a name="sqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle"></a>

```typescript
public readonly sqlHandle: string;
```

- *Type:* string

---

##### `sqlText`<sup>Required</sup> <a name="sqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText"></a>

```typescript
public readonly sqlText: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastExecuted`<sup>Required</sup> <a name="timeLastExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted"></a>

```typescript
public readonly timeLastExecuted: string;
```

- *Type:* string

---

##### `timeLastModified`<sup>Required</sup> <a name="timeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified"></a>

```typescript
public readonly timeLastModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a>

---



