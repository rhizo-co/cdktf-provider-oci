# `dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges oci_database_management_managed_database_user_consumer_group_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection">consumerGroupPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `consumerGroupPrivilegeCollection`<sup>Required</sup> <a name="consumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection"></a>

```typescript
public readonly consumerGroupPrivilegeCollection: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig: dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#filter DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection: dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems: dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter: dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption">grantOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup">initialGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantOption`<sup>Required</sup> <a name="grantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```typescript
public readonly grantOption: string;
```

- *Type:* string

---

##### `initialGroup`<sup>Required</sup> <a name="initialGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup"></a>

```typescript
public readonly initialGroup: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter</a>

---



