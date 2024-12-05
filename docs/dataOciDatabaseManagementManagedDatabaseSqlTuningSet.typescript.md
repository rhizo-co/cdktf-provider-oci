# `dataOciDatabaseManagementManagedDatabaseSqlTuningSet` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningSet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningSet <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set oci_database_management_managed_database_sql_tuning_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetNameContains">resetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetNameContains"></a>

```typescript
public resetNameContains(): void
```

##### `resetOwner` <a name="resetOwner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.nameContainsInput">nameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.nameContains">nameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.nameContainsInput"></a>

```typescript
public readonly nameContainsInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig: dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningSet#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#id DataOciDatabaseManagementManagedDatabaseSqlTuningSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.nameContains">nameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#name_contains DataOciDatabaseManagementManagedDatabaseSqlTuningSet#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#owner DataOciDatabaseManagementManagedDatabaseSqlTuningSet#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningSet#managed_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#id DataOciDatabaseManagementManagedDatabaseSqlTuningSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#name_contains DataOciDatabaseManagementManagedDatabaseSqlTuningSet#name_contains}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_set#owner DataOciDatabaseManagementManagedDatabaseSqlTuningSet#owner}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseSqlTuningSetItems: dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseSqlTuningSet } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.statementCounts">statementCounts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems">DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `statementCounts`<sup>Required</sup> <a name="statementCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.statementCounts"></a>

```typescript
public readonly statementCounts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningSet.DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems">DataOciDatabaseManagementManagedDatabaseSqlTuningSetItems</a>

---



