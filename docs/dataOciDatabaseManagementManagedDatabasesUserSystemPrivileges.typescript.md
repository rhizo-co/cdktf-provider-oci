# `dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges oci_database_management_managed_databases_user_system_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.systemPrivilegeCollection">systemPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList</a>

---

##### `systemPrivilegeCollection`<sup>Required</sup> <a name="systemPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.systemPrivilegeCollection"></a>

```typescript
public readonly systemPrivilegeCollection: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig: dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#filter DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter: dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#values DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#regex DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#values DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#regex DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#regex}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection: dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems: dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter</a>

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.adminOption">adminOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.common">common</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.inherited">inherited</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminOption`<sup>Required</sup> <a name="adminOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.adminOption"></a>

```typescript
public readonly adminOption: string;
```

- *Type:* string

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.common"></a>

```typescript
public readonly common: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.inherited"></a>

```typescript
public readonly inherited: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection</a>

---



