# `dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity oci_database_management_external_exadata_storage_server_top_sql_cpu_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.activity">activity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerIdInput">externalExadataStorageServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerId">externalExadataStorageServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activity`<sup>Required</sup> <a name="activity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.activity"></a>

```typescript
public readonly activity: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList</a>

---

##### `externalExadataStorageServerIdInput`<sup>Optional</sup> <a name="externalExadataStorageServerIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerIdInput"></a>

```typescript
public readonly externalExadataStorageServerIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `externalExadataStorageServerId`<sup>Required</sup> <a name="externalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.externalExadataStorageServerId"></a>

```typescript
public readonly externalExadataStorageServerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity: dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity = { ... }
```


### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig: dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.externalExadataStorageServerId">externalExadataStorageServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalExadataStorageServerId`<sup>Required</sup> <a name="externalExadataStorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.externalExadataStorageServerId"></a>

```typescript
public readonly externalExadataStorageServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.cpuActivity">cpuActivity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.sqlId">sqlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuActivity`<sup>Required</sup> <a name="cpuActivity" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.cpuActivity"></a>

```typescript
public readonly cpuActivity: number;
```

- *Type:* number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `sqlId`<sup>Required</sup> <a name="sqlId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.sqlId"></a>

```typescript
public readonly sqlId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity.DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity">DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity</a>

---



