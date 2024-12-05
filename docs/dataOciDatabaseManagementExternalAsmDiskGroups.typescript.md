# `dataOciDatabaseManagementExternalAsmDiskGroups` Submodule <a name="`dataOciDatabaseManagementExternalAsmDiskGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroups <a name="DataOciDatabaseManagementExternalAsmDiskGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups oci_database_management_external_asm_disk_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups(scope: Construct, id: string, config: DataOciDatabaseManagementExternalAsmDiskGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId">resetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementExternalAsmDiskGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpcNamedCredentialId` <a name="resetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId"></a>

```typescript
public resetOpcNamedCredentialId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmDiskGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalAsmDiskGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmDiskGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection">externalAsmDiskGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput">externalAsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput">opcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId">externalAsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalAsmDiskGroupCollection`<sup>Required</sup> <a name="externalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection"></a>

```typescript
public readonly externalAsmDiskGroupCollection: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementExternalAsmDiskGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a>

---

##### `externalAsmIdInput`<sup>Optional</sup> <a name="externalAsmIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput"></a>

```typescript
public readonly externalAsmIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementExternalAsmDiskGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `opcNamedCredentialIdInput`<sup>Optional</sup> <a name="opcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput"></a>

```typescript
public readonly opcNamedCredentialIdInput: string;
```

- *Type:* string

---

##### `externalAsmId`<sup>Required</sup> <a name="externalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId"></a>

```typescript
public readonly externalAsmId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `opcNamedCredentialId`<sup>Required</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsConfig <a name="DataOciDatabaseManagementExternalAsmDiskGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalAsmDiskGroupsConfig: dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId">externalAsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId">opcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalAsmId`<sup>Required</sup> <a name="externalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId"></a>

```typescript
public readonly externalAsmId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementExternalAsmDiskGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#filter DataOciDatabaseManagementExternalAsmDiskGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opcNamedCredentialId`<sup>Optional</sup> <a name="opcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId"></a>

```typescript
public readonly opcNamedCredentialId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection: dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection = { ... }
```


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems: dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems = { ... }
```


### DataOciDatabaseManagementExternalAsmDiskGroupsFilter <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalAsmDiskGroupsFilter: dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases">databases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount">dismountingInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse">isSparse</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount">mountingInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType">redundancyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs">totalSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent">usedPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs">usedSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databases`<sup>Required</sup> <a name="databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases"></a>

```typescript
public readonly databases: string[];
```

- *Type:* string[]

---

##### `dismountingInstanceCount`<sup>Required</sup> <a name="dismountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount"></a>

```typescript
public readonly dismountingInstanceCount: number;
```

- *Type:* number

---

##### `isSparse`<sup>Required</sup> <a name="isSparse" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse"></a>

```typescript
public readonly isSparse: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mountingInstanceCount`<sup>Required</sup> <a name="mountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount"></a>

```typescript
public readonly mountingInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redundancyType`<sup>Required</sup> <a name="redundancyType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType"></a>

```typescript
public readonly redundancyType: string;
```

- *Type:* string

---

##### `totalSizeInMbs`<sup>Required</sup> <a name="totalSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs"></a>

```typescript
public readonly totalSizeInMbs: string;
```

- *Type:* string

---

##### `usedPercent`<sup>Required</sup> <a name="usedPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent"></a>

```typescript
public readonly usedPercent: number;
```

- *Type:* number

---

##### `usedSizeInMbs`<sup>Required</sup> <a name="usedSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs"></a>

```typescript
public readonly usedSizeInMbs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalAsmDiskGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>[]

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalAsmDiskGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalAsmDiskGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter">DataOciDatabaseManagementExternalAsmDiskGroupsFilter</a>

---



