# `dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlData <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn">resetFilterColumn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFilterColumn` <a name="resetFilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn"></a>

```typescript
public resetFilterColumn(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection">mySqlDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput">filterColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput">managedMySqlDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn">filterColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId">managedMySqlDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a>

---

##### `mySqlDataCollection`<sup>Required</sup> <a name="mySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection"></a>

```typescript
public readonly mySqlDataCollection: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `filterColumnInput`<sup>Optional</sup> <a name="filterColumnInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput"></a>

```typescript
public readonly filterColumnInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="managedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput"></a>

```typescript
public readonly managedMySqlDatabaseIdInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `filterColumn`<sup>Required</sup> <a name="filterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn"></a>

```typescript
public readonly filterColumn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedMySqlDatabaseId`<sup>Required</sup> <a name="managedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId"></a>

```typescript
public readonly managedMySqlDatabaseId: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig: dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId">managedMySqlDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn">filterColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `managedMySqlDatabaseId`<sup>Required</sup> <a name="managedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId"></a>

```typescript
public readonly managedMySqlDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `filterColumn`<sup>Optional</sup> <a name="filterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn"></a>

```typescript
public readonly filterColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter: dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection: dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection = { ... }
```


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems: dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>[]

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait">avgTimerWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar">countStar</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText">digestText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen">firstSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded">heatWaveOffloaded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory">heatWaveOutOfMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen">lastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait">maxTimerWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait">minTimerWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95">quantile95</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99">quantile99</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999">quantile999</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables">sumCreatedTempDiskTables</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables">sumCreatedTempTables</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors">sumErrors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime">sumLockTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed">sumNoGoodIndexUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed">sumNoIndexUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected">sumRowsAffected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined">sumRowsExamined</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent">sumRowsSent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin">sumSelectFullJoin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin">sumSelectFullRangeJoin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange">sumSelectRange</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck">sumSelectRangeCheck</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan">sumSelectScan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses">sumSortMergePasses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange">sumSortRange</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows">sumSortRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan">sumSortScan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait">sumTimerWait</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings">sumWarnings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avgTimerWait`<sup>Required</sup> <a name="avgTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait"></a>

```typescript
public readonly avgTimerWait: number;
```

- *Type:* number

---

##### `countStar`<sup>Required</sup> <a name="countStar" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar"></a>

```typescript
public readonly countStar: number;
```

- *Type:* number

---

##### `digest`<sup>Required</sup> <a name="digest" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `digestText`<sup>Required</sup> <a name="digestText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText"></a>

```typescript
public readonly digestText: string;
```

- *Type:* string

---

##### `firstSeen`<sup>Required</sup> <a name="firstSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen"></a>

```typescript
public readonly firstSeen: string;
```

- *Type:* string

---

##### `heatWaveOffloaded`<sup>Required</sup> <a name="heatWaveOffloaded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded"></a>

```typescript
public readonly heatWaveOffloaded: number;
```

- *Type:* number

---

##### `heatWaveOutOfMemory`<sup>Required</sup> <a name="heatWaveOutOfMemory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory"></a>

```typescript
public readonly heatWaveOutOfMemory: number;
```

- *Type:* number

---

##### `lastSeen`<sup>Required</sup> <a name="lastSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen"></a>

```typescript
public readonly lastSeen: string;
```

- *Type:* string

---

##### `maxTimerWait`<sup>Required</sup> <a name="maxTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait"></a>

```typescript
public readonly maxTimerWait: number;
```

- *Type:* number

---

##### `minTimerWait`<sup>Required</sup> <a name="minTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait"></a>

```typescript
public readonly minTimerWait: number;
```

- *Type:* number

---

##### `quantile95`<sup>Required</sup> <a name="quantile95" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95"></a>

```typescript
public readonly quantile95: number;
```

- *Type:* number

---

##### `quantile99`<sup>Required</sup> <a name="quantile99" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99"></a>

```typescript
public readonly quantile99: number;
```

- *Type:* number

---

##### `quantile999`<sup>Required</sup> <a name="quantile999" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999"></a>

```typescript
public readonly quantile999: number;
```

- *Type:* number

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sumCreatedTempDiskTables`<sup>Required</sup> <a name="sumCreatedTempDiskTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables"></a>

```typescript
public readonly sumCreatedTempDiskTables: number;
```

- *Type:* number

---

##### `sumCreatedTempTables`<sup>Required</sup> <a name="sumCreatedTempTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables"></a>

```typescript
public readonly sumCreatedTempTables: number;
```

- *Type:* number

---

##### `sumErrors`<sup>Required</sup> <a name="sumErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors"></a>

```typescript
public readonly sumErrors: number;
```

- *Type:* number

---

##### `sumLockTime`<sup>Required</sup> <a name="sumLockTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime"></a>

```typescript
public readonly sumLockTime: number;
```

- *Type:* number

---

##### `sumNoGoodIndexUsed`<sup>Required</sup> <a name="sumNoGoodIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed"></a>

```typescript
public readonly sumNoGoodIndexUsed: number;
```

- *Type:* number

---

##### `sumNoIndexUsed`<sup>Required</sup> <a name="sumNoIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed"></a>

```typescript
public readonly sumNoIndexUsed: number;
```

- *Type:* number

---

##### `sumRowsAffected`<sup>Required</sup> <a name="sumRowsAffected" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected"></a>

```typescript
public readonly sumRowsAffected: number;
```

- *Type:* number

---

##### `sumRowsExamined`<sup>Required</sup> <a name="sumRowsExamined" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined"></a>

```typescript
public readonly sumRowsExamined: number;
```

- *Type:* number

---

##### `sumRowsSent`<sup>Required</sup> <a name="sumRowsSent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent"></a>

```typescript
public readonly sumRowsSent: number;
```

- *Type:* number

---

##### `sumSelectFullJoin`<sup>Required</sup> <a name="sumSelectFullJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin"></a>

```typescript
public readonly sumSelectFullJoin: number;
```

- *Type:* number

---

##### `sumSelectFullRangeJoin`<sup>Required</sup> <a name="sumSelectFullRangeJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin"></a>

```typescript
public readonly sumSelectFullRangeJoin: number;
```

- *Type:* number

---

##### `sumSelectRange`<sup>Required</sup> <a name="sumSelectRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange"></a>

```typescript
public readonly sumSelectRange: number;
```

- *Type:* number

---

##### `sumSelectRangeCheck`<sup>Required</sup> <a name="sumSelectRangeCheck" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck"></a>

```typescript
public readonly sumSelectRangeCheck: number;
```

- *Type:* number

---

##### `sumSelectScan`<sup>Required</sup> <a name="sumSelectScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan"></a>

```typescript
public readonly sumSelectScan: number;
```

- *Type:* number

---

##### `sumSortMergePasses`<sup>Required</sup> <a name="sumSortMergePasses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses"></a>

```typescript
public readonly sumSortMergePasses: number;
```

- *Type:* number

---

##### `sumSortRange`<sup>Required</sup> <a name="sumSortRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange"></a>

```typescript
public readonly sumSortRange: number;
```

- *Type:* number

---

##### `sumSortRows`<sup>Required</sup> <a name="sumSortRows" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows"></a>

```typescript
public readonly sumSortRows: number;
```

- *Type:* number

---

##### `sumSortScan`<sup>Required</sup> <a name="sumSortScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan"></a>

```typescript
public readonly sumSortScan: number;
```

- *Type:* number

---

##### `sumTimerWait`<sup>Required</sup> <a name="sumTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait"></a>

```typescript
public readonly sumTimerWait: number;
```

- *Type:* number

---

##### `sumWarnings`<sup>Required</sup> <a name="sumWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings"></a>

```typescript
public readonly sumWarnings: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedMySqlDatabaseSqlData } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a>

---



