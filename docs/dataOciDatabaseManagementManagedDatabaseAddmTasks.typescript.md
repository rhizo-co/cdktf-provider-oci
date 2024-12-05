# `dataOciDatabaseManagementManagedDatabaseAddmTasks` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAddmTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTasks <a name="DataOciDatabaseManagementManagedDatabaseAddmTasks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks oci_database_management_managed_database_addm_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAddmTasksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig">DataOciDatabaseManagementManagedDatabaseAddmTasksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig">DataOciDatabaseManagementManagedDatabaseAddmTasksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseAddmTasksFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAddmTasks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAddmTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAddmTasks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAddmTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAddmTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.addmTasksCollection">addmTasksCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList">DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addmTasksCollection`<sup>Required</sup> <a name="addmTasksCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.addmTasksCollection"></a>

```typescript
public readonly addmTasksCollection: DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList">DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseAddmTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection: dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems: dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabaseAddmTasksConfig <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAddmTasksConfig: dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseAddmTasks#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#time_end DataOciDatabaseManagementManagedDatabaseAddmTasks#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#time_start DataOciDatabaseManagementManagedDatabaseAddmTasks#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#id DataOciDatabaseManagementManagedDatabaseAddmTasks#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#managed_database_id DataOciDatabaseManagementManagedDatabaseAddmTasks#managed_database_id}.

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#time_end DataOciDatabaseManagementManagedDatabaseAddmTasks#time_end}.

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#time_start DataOciDatabaseManagementManagedDatabaseAddmTasks#time_start}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseAddmTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#filter DataOciDatabaseManagementManagedDatabaseAddmTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#id DataOciDatabaseManagementManagedDatabaseAddmTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseAddmTasksFilter <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAddmTasksFilter: dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#name DataOciDatabaseManagementManagedDatabaseAddmTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#values DataOciDatabaseManagementManagedDatabaseAddmTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#regex DataOciDatabaseManagementManagedDatabaseAddmTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#name DataOciDatabaseManagementManagedDatabaseAddmTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#values DataOciDatabaseManagementManagedDatabaseAddmTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_tasks#regex DataOciDatabaseManagementManagedDatabaseAddmTasks#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.beginSnapshotId">beginSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.endSnapshotId">endSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.endSnapshotTime">endSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.findings">findings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.howCreated">howCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.startSnapshotTime">startSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.taskName">taskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beginSnapshotId`<sup>Required</sup> <a name="beginSnapshotId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.beginSnapshotId"></a>

```typescript
public readonly beginSnapshotId: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endSnapshotId`<sup>Required</sup> <a name="endSnapshotId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.endSnapshotId"></a>

```typescript
public readonly endSnapshotId: string;
```

- *Type:* string

---

##### `endSnapshotTime`<sup>Required</sup> <a name="endSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.endSnapshotTime"></a>

```typescript
public readonly endSnapshotTime: string;
```

- *Type:* string

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.findings"></a>

```typescript
public readonly findings: string;
```

- *Type:* string

---

##### `howCreated`<sup>Required</sup> <a name="howCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.howCreated"></a>

```typescript
public readonly howCreated: string;
```

- *Type:* string

---

##### `startSnapshotTime`<sup>Required</sup> <a name="startSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.startSnapshotTime"></a>

```typescript
public readonly startSnapshotTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection">DataOciDatabaseManagementManagedDatabaseAddmTasksAddmTasksCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAddmTasksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAddmTasks } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseAddmTasksFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTasks.DataOciDatabaseManagementManagedDatabaseAddmTasksFilter">DataOciDatabaseManagementManagedDatabaseAddmTasksFilter</a>

---



