# `dataOciDatabaseManagementManagedDatabasesUserProxyUsers` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserProxyUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsers <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users oci_database_management_managed_databases_user_proxy_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig">DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig">DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserProxyUsers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserProxyUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserProxyUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserProxyUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserProxyUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.proxyUserCollection">proxyUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList</a>

---

##### `proxyUserCollection`<sup>Required</sup> <a name="proxyUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.proxyUserCollection"></a>

```typescript
public readonly proxyUserCollection: DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig: dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#managed_database_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#user_name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#managed_database_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#user_name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#filter DataOciDatabaseManagementManagedDatabasesUserProxyUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter: dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#values DataOciDatabaseManagementManagedDatabasesUserProxyUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#regex DataOciDatabaseManagementManagedDatabasesUserProxyUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#values DataOciDatabaseManagementManagedDatabasesUserProxyUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#regex DataOciDatabaseManagementManagedDatabasesUserProxyUsers#regex}.

---

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection: dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems: dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter</a>

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.authentication">authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.flags">flags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.flags"></a>

```typescript
public readonly flags: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserProxyUsers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection</a>

---



