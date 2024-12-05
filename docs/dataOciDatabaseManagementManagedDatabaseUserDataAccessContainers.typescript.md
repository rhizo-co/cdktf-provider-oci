# `dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers oci_database_management_managed_database_user_data_access_containers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dataAccessContainerCollection">dataAccessContainerCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataAccessContainerCollection`<sup>Required</sup> <a name="dataAccessContainerCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.dataAccessContainerCollection"></a>

```typescript
public readonly dataAccessContainerCollection: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#user_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#filter DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection = { ... }
```


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems = { ... }
```


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#values DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#regex DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#values DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_containers#regex DataOciDatabaseManagementManagedDatabaseUserDataAccessContainers#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersDataAccessContainerCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>[]

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainers.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainersFilter</a>

---



