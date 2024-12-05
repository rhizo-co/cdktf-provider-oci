# `dataOciDataSafeTargetDatabaseRoles` Submodule <a name="`dataOciDataSafeTargetDatabaseRoles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabaseRoles <a name="DataOciDataSafeTargetDatabaseRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles oci_data_safe_target_database_roles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles(scope: Construct, id: string, config: DataOciDataSafeTargetDatabaseRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig">DataOciDataSafeTargetDatabaseRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig">DataOciDataSafeTargetDatabaseRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetIsOracleMaintained">resetIsOracleMaintained</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleNameContains">resetRoleNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeTargetDatabaseRolesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsOracleMaintained` <a name="resetIsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetIsOracleMaintained"></a>

```typescript
public resetIsOracleMaintained(): void
```

##### `resetRoleName` <a name="resetRoleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetRoleNameContains` <a name="resetRoleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleNameContains"></a>

```typescript
public resetRoleNameContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseRoles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeTargetDatabaseRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeTargetDatabaseRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabaseRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList">DataOciDataSafeTargetDatabaseRolesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roles">roles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList">DataOciDataSafeTargetDatabaseRolesRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintainedInput">isOracleMaintainedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContainsInput">roleNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameInput">roleNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseIdInput">targetDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintained">isOracleMaintained</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleName">roleName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContains">roleNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseId">targetDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeTargetDatabaseRolesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList">DataOciDataSafeTargetDatabaseRolesFilterList</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roles"></a>

```typescript
public readonly roles: DataOciDataSafeTargetDatabaseRolesRolesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList">DataOciDataSafeTargetDatabaseRolesRolesList</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeTargetDatabaseRolesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isOracleMaintainedInput`<sup>Optional</sup> <a name="isOracleMaintainedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintainedInput"></a>

```typescript
public readonly isOracleMaintainedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleNameContainsInput`<sup>Optional</sup> <a name="roleNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContainsInput"></a>

```typescript
public readonly roleNameContainsInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string[];
```

- *Type:* string[]

---

##### `targetDatabaseIdInput`<sup>Optional</sup> <a name="targetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseIdInput"></a>

```typescript
public readonly targetDatabaseIdInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isOracleMaintained`<sup>Required</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleName"></a>

```typescript
public readonly roleName: string[];
```

- *Type:* string[]

---

##### `roleNameContains`<sup>Required</sup> <a name="roleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContains"></a>

```typescript
public readonly roleNameContains: string;
```

- *Type:* string

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseId"></a>

```typescript
public readonly targetDatabaseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabaseRolesConfig <a name="DataOciDataSafeTargetDatabaseRolesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabaseRolesConfig: dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.targetDatabaseId">targetDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#target_database_id DataOciDataSafeTargetDatabaseRoles#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#authentication_type DataOciDataSafeTargetDatabaseRoles#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#id DataOciDataSafeTargetDatabaseRoles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.isOracleMaintained">isOracleMaintained</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#is_oracle_maintained DataOciDataSafeTargetDatabaseRoles#is_oracle_maintained}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleName">roleName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name DataOciDataSafeTargetDatabaseRoles#role_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleNameContains">roleNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name_contains DataOciDataSafeTargetDatabaseRoles#role_name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.targetDatabaseId"></a>

```typescript
public readonly targetDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#target_database_id DataOciDataSafeTargetDatabaseRoles#target_database_id}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#authentication_type DataOciDataSafeTargetDatabaseRoles#authentication_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeTargetDatabaseRolesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#filter DataOciDataSafeTargetDatabaseRoles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#id DataOciDataSafeTargetDatabaseRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOracleMaintained`<sup>Optional</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#is_oracle_maintained DataOciDataSafeTargetDatabaseRoles#is_oracle_maintained}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleName"></a>

```typescript
public readonly roleName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name DataOciDataSafeTargetDatabaseRoles#role_name}.

---

##### `roleNameContains`<sup>Optional</sup> <a name="roleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleNameContains"></a>

```typescript
public readonly roleNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name_contains DataOciDataSafeTargetDatabaseRoles#role_name_contains}.

---

### DataOciDataSafeTargetDatabaseRolesFilter <a name="DataOciDataSafeTargetDatabaseRolesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabaseRolesFilter: dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#name DataOciDataSafeTargetDatabaseRoles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#values DataOciDataSafeTargetDatabaseRoles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#regex DataOciDataSafeTargetDatabaseRoles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#name DataOciDataSafeTargetDatabaseRoles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#values DataOciDataSafeTargetDatabaseRoles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#regex DataOciDataSafeTargetDatabaseRoles#regex}.

---

### DataOciDataSafeTargetDatabaseRolesRoles <a name="DataOciDataSafeTargetDatabaseRolesRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetDatabaseRolesRoles: dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabaseRolesFilterList <a name="DataOciDataSafeTargetDatabaseRolesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetDatabaseRolesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetDatabaseRolesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>[]

---


### DataOciDataSafeTargetDatabaseRolesFilterOutputReference <a name="DataOciDataSafeTargetDatabaseRolesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetDatabaseRolesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter">DataOciDataSafeTargetDatabaseRolesFilter</a>

---


### DataOciDataSafeTargetDatabaseRolesRolesList <a name="DataOciDataSafeTargetDatabaseRolesRolesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetDatabaseRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeTargetDatabaseRolesRolesOutputReference <a name="DataOciDataSafeTargetDatabaseRolesRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetDatabaseRoles } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isCommon">isCommon</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isInherited">isInherited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isOracleMaintained">isOracleMaintained</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isPasswordRequired">isPasswordRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles">DataOciDataSafeTargetDatabaseRolesRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `isCommon`<sup>Required</sup> <a name="isCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isCommon"></a>

```typescript
public readonly isCommon: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isInherited`<sup>Required</sup> <a name="isInherited" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isInherited"></a>

```typescript
public readonly isInherited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOracleMaintained`<sup>Required</sup> <a name="isOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isOracleMaintained"></a>

```typescript
public readonly isOracleMaintained: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPasswordRequired`<sup>Required</sup> <a name="isPasswordRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isPasswordRequired"></a>

```typescript
public readonly isPasswordRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeTargetDatabaseRolesRoles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles">DataOciDataSafeTargetDatabaseRolesRoles</a>

---



