# `dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container oci_database_management_managed_database_user_data_access_container}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#managed_database_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems: dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems</a>

---



