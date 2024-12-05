# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs oci_database_management_managed_database_sql_plan_baseline_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.sqlPlanBaselineJobCollection">sqlPlanBaselineJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList</a>

---

##### `sqlPlanBaselineJobCollection`<sup>Required</sup> <a name="sqlPlanBaselineJobCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.sqlPlanBaselineJobCollection"></a>

```typescript
public readonly sqlPlanBaselineJobCollection: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_jobs#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems: dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobs.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineJobsSqlPlanBaselineJobCollection</a>

---



