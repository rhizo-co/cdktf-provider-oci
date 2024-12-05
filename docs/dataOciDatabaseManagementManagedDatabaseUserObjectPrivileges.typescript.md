# `dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges oci_database_management_managed_database_user_object_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.objectPrivilegeCollection">objectPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList</a>

---

##### `objectPrivilegeCollection`<sup>Required</sup> <a name="objectPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.objectPrivilegeCollection"></a>

```typescript
public readonly objectPrivilegeCollection: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig: dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#filter DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter: dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#values DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#regex DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#values DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privileges#regex DataOciDatabaseManagementManagedDatabaseUserObjectPrivileges#regex}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection: dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems: dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesFilter</a>

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.common">common</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantOption">grantOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantor">grantor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.hierarchy">hierarchy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.inherited">inherited</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.schemaType">schemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `common`<sup>Required</sup> <a name="common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.common"></a>

```typescript
public readonly common: string;
```

- *Type:* string

---

##### `grantOption`<sup>Required</sup> <a name="grantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```typescript
public readonly grantOption: string;
```

- *Type:* string

---

##### `grantor`<sup>Required</sup> <a name="grantor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.grantor"></a>

```typescript
public readonly grantor: string;
```

- *Type:* string

---

##### `hierarchy`<sup>Required</sup> <a name="hierarchy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.hierarchy"></a>

```typescript
public readonly hierarchy: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.inherited"></a>

```typescript
public readonly inherited: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaType`<sup>Required</sup> <a name="schemaType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.schemaType"></a>

```typescript
public readonly schemaType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivileges.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegesObjectPrivilegeCollection</a>

---



