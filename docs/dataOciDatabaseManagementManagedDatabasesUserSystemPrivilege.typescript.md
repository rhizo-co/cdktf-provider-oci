# `dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege oci_database_management_managed_databases_user_system_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig: dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems: dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.adminOption">adminOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.common">common</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.inherited">inherited</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminOption`<sup>Required</sup> <a name="adminOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.adminOption"></a>

```typescript
public readonly adminOption: string;
```

- *Type:* string

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.common"></a>

```typescript
public readonly common: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.inherited"></a>

```typescript
public readonly inherited: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems</a>

---



